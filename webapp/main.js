import {
	SpanStatusCode,
	context,
	propagation,
	trace,
} from "@opentelemetry/api";

/**
 * Получения трейсера
 */
const tracer = trace.getTracer("example-tracer-web");

const { createApp } = Vue;

const app = createApp({
	data() {
		return {
			apiSearchText: "",
			menu: [
				{
					id: "home",
					caption: "Home",
				},
				{
					id: "apis",
					caption: "REST API",
				},
				{
					id: "nodes",
					caption: "Nodes",
				},
				{
					id: "services",
					caption: "Services",
				},
				{
					id: "webapp",
					caption: "Webapp",
				},
			],
			page: "home",
			requests: {},
			openAuthorizeDialog: false,
			auth: {
				tenant: "",
				username: "",
				password: "",
				token: "",
			},
			globalAuth: {
				tenant: "",
				username: "",
				password: "",
				token: "",
			},
			fields: {},
			broker: null,
			nodes: [],
			services: [],
			actions: {},
			showBrokerOptions: false,
			products: [],
		};
	},
	computed: {
		filteredServices() {
			return this.services.filter((svc) => !svc.name.startsWith("$"));
		},
		filteredApis() {
			const s = this.apiSearchText.toLocaleLowerCase();

			if (!this.apiSearchText) {
				return this.requests;
			} else {
				const reqs = {};

				for (const key in this.requests)
					reqs[key] = this.requests[key].filter(
						(r) =>
							r?.action?.toLocaleLowerCase().includes(s) ||
							r?.rest?.method?.toLocaleLowerCase().includes(s) ||
							r?.rest?.path?.toLocaleLowerCase().includes(s) ||
							r?.rest?.url?.toLocaleLowerCase().includes(s)
					);
				return reqs;
			}
		},
	},
	methods: {
		resetAuthorization() {
			this.auth = {
				tenant: "",
				username: "",
				password: "",
				token: "",
			};

			this.saveAuthorize();
		},
		authorize() {
			fetch("/api/v1/identity/auth/signin", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(this.auth),
			}).then((res) => {
				if (res.status == 401) {
					this.openAuthorizeDialog = true;

					alert("Invalid username or password");
				} else if (res.status == 200)
					res.json().then((data) => {
						this.auth.token =
							res.headers.get("Authorization") || data.token;
						this.auth.tenant =
							res.headers.get("x-tenant-id") || data.tenant;
					});
				else alert("Not authorized");
			});
		},
		saveAuthorize() {
			this.globalAuth = {
				...this.auth,
			};

			localStorage.setItem("globalAuth", JSON.stringify(this.globalAuth));

			this.openAuthorizeDialog = false;
		},
		refreshApiPage() {
			return this.updateServiceList();
		},
		showAuthorizeDialog() {
			this.openAuthorizeDialog = true;
		},
		closeAuthorizeDialog() {
			this.openAuthorizeDialog = false;
		},
		changePage(page) {
			this.page = page;

			localStorage.setItem("lastPage", this.page);

			if (this.page == "apis") {
				return this.updateServiceList();
			} else {
				this.updatePageResources();
			}
		},
		humanize(ms) {
			return ms > 1500 ? (ms / 1500).toFixed(2) + " s" : ms + " ms";
		},
		getServiceActions(svc) {
			return Object.keys(svc.actions)
				.map((name) => this.actions[name])
				.filter((action) => !!action);
		},
		getActionParams(action, maxLen) {
			if (action.action && action.action.params) {
				const s = Object.keys(action.action.params).join(", ");

				return s.length > maxLen ? s.substr(0, maxLen) + "\u2026" : s;
			}

			return "-";
		},
		getActionREST(svc, action) {
			if (action.action.rest) {
				let prefix = svc.fullName || svc.name;

				if (typeof svc.settings.rest == "string") {
					prefix = svc.settings.rest;
				}

				if (typeof action.action.rest == "string") {
					if (action.action.rest.indexOf(" ") !== -1) {
						const p = action.action.rest.split(" ");

						return (
							"<span class='badge'>" +
							p[0] +
							"</span> " +
							prefix +
							p[1]
						);
					} else {
						return (
							"<span class='badge'>*</span> " +
							prefix +
							action.action.rest
						);
					}
				} else {
					return (
						"<span class='badge'>" +
						(action.action.rest.method || "*") +
						"</span> " +
						prefix +
						action.action.rest.path
					);
				}
			}
			return "";
		},
		getRest(item) {
			if (!item.rest) {
				return item.rest;
			}

			if (typeof item.rest === "object") {
				return item.rest;
			}

			if (item.rest.indexOf(" ") !== -1) {
				const p = item.rest.split(" ");

				return {
					method: p[0],
					path: p[1],
				};
			} else {
				return {
					method: "*",
					path: item.rest,
				};
			}
		},
		getFields(item, method, url) {
			if (!item.params) {
				return [];
			}

			const r = [];

			for (const key in item.params) {
				if (key.startsWith("$")) continue;
				if (item.params[key].readonly === true) continue;
				if (item.params[key].hidden === true) continue;
				const dataType = item.params[key].type || item.params[key];
				const hidden = item.params[key].hidden || false;
				const required = item.params[key].required || false;
				const optional = Array.isArray(item.params[key])
					? item.params[key].every((xx) => xx.optional === true)
					: item.params[key].optional || false;
				const maxLength = item.params[key].max || undefined;
				const minLength = item.params[key].min || undefined;
				const pattern = item.params[key].pattern || undefined;
				const values = item.params[key].values || undefined;
				let type = "text";
				let value = item.params[key].default || undefined;
				if (dataType.includes("number")) type = "number";
				if (dataType === "boolean") {
					type = "checkbox";
					value = value || false;
				}
				if (dataType === "string") type = "text";
				if (dataType === "object") type = "textarea";
				if (dataType === "array") type = "textarea";
				if (dataType === "file") type = "file";
				if (dataType === "date") type = "date";
				if (dataType === "datetime") type = "datetime";
				if (dataType === "time") type = "time";
				if (dataType === "password") type = "password";
				if (dataType === "enum") type = "select";
				if (dataType === "enum-multi") type = "select-multi";
				r.push({
					name: key,
					label: key,
					optional,
					hidden,
					required,
					[type === "number" ? "min" : "minLength"]: minLength,
					[type === "number" ? "max" : "maxLength"]: maxLength,
					pattern,
					paramType: method === "GET" ? "param" : "body",
					value,
					type,
					dataType,
					values,
				});
			}
			return r;
		},
		getService(fullName) {
			return this.services.find((svc) => svc.fullName == fullName) || {};
		},
		clearResponse(item) {
			item.response = undefined;
			item.duration = undefined;
			item.loading = false;
			item.status = undefined;
		},
		callAction: function (item, fullName) {
			if (!item.rest) return;
			item.loading = true;
			const service = this.services.find((svc) => svc.name == fullName);
			var startTime = Date.now();
			const method = item.rest.method || "GET";
			let url = item.rest.url;
			let fields = item.fields;
			let body = null;
			let params = null;
			if (fields) {
				body = {};
				params = {};
				fields.forEach((field) => {
					const value = field.value;
					if (field.paramType == "body") {
						body[field.name] = value;
						if (value === undefined && field.optional === true)
							delete body[field.name];
					} else if (field.paramType == "param") {
						params[field.name] = value;
						if (value === undefined && field.optional === true)
							delete params[field.name];
					} else if (field.paramType == "url") {
						if (value === undefined && field.optional === true)
							url = url.replace(`:${field.name}`, "");
						else url = url.replace(`:${field.name}`, value);
					}
					url = url.replace(`:${field.name}`, value);
				});
				if (body && method == "GET") body = null;
				if (params && Object.keys(params).length > 0) {
					const qparams = {};
					for (const key in params)
						if (params[key] !== undefined)
							qparams[key] = params[key];
					url += "?" + new URLSearchParams(qparams).toString();
				}
			}
			const authtoken = this.globalAuth.token;
			const tenant = this.globalAuth.tenant;
			const authHeader = {};
			if (authtoken) authHeader["Authorization"] = `Bearer ${authtoken}`;
			if (tenant) authHeader["x-tenant"] = tenant;
			return fetch(url, {
				method,
				body: body ? JSON.stringify(body) : null,
				headers: {
					"Content-Type": "application/json",
					...authHeader,
				},
			})
				.then(function (res) {
					item.status = res.status;
					item.duration = Date.now() - startTime;
					return res.json().then((json) => {
						item.response = json;
						item.loading = false;
						if (item.afterResponse) return item.afterResponse(json);
					});
				})
				.catch(function (err) {
					item.status = "ERR";
					item.duration = Date.now() - startTime;
					item.response = err.message;
					item.loading = false;
					console.log(err);
				});
		},
		updateBrokerOptions: function (name) {
			this.req("/api/~node/options", null).then(
				(res) => (this.broker = res)
			);
		},
		updateNodeList: function (name) {
			this.req("/api/~node/list", null).then((res) => {
				res.sort((a, b) => a.id.localeCompare(b.id));
				this.nodes = res;
			});
		},
		updateServiceList: function (name) {
			this.req("/api/~node/services?withActions=true", null)
				.then((res) => {
					this.services = res;
					res.sort((a, b) => a.name.localeCompare(b.name));
					res.forEach((svc) => svc.nodes.sort());
				})
				.then(() => this.req("/api/~node/actions", null))
				.then((res) => {
					res.sort((a, b) => a.name.localeCompare(b.name));
					const actions = res.reduce((a, b) => {
						a[b.name] = b;
						return a;
					}, {});
					this.actions = actions;
					if (this.page === "apis") {
						this.requests = {};
						for (const service of this.services) {
							this.requests[service.fullName] = [];
							const version = service.version
								? "v" + service.version + "/"
								: "";
							for (const key in service.actions) {
								const action = service.actions[key];
								if (!action.rest) continue;
								const req = {
									expand: false,
									loading: false,
									id: action.name,
									action: action.name,
									rest: this.getRest(action),
									fields: action.fields,
									response: null,
									status: null,
									duration: null,
									afterResponse: action.afterResponse,
								};
								const baseUrl = service.settings.rest;
								if (req.rest.method === "*")
									[
										"GET",
										"POST",
										"PUT",
										"PATCH",
										"DELETE",
									].forEach((method) => {
										const req2 = Object.assign({}, req);
										req2.id =
											req2.id +
											"." +
											method.toLocaleLowerCase();
										req2.rest = Object.assign({}, req.rest);
										req2.rest.method = method;
										const url = baseUrl
											? `/api${baseUrl}${req2.rest.path}`
											: `/api/${version}${service.name}${req2.rest.path}`;
										req2.rest.url = url;
										req2.fields = this.getFields(
											action,
											req2.rest.method,
											req2.rest.url
										);
										this.requests[service.fullName].push(
											req2
										);
									});
								else {
									let version = service.version
										? "v" + service.version + "/"
										: "";
									let url = baseUrl
										? `/api${baseUrl}${req.rest.path}`
										: `/api/${version}${service.name}${req.rest.path}`;
									req.rest.url = url;
									req.fields = this.getFields(
										action,
										req.rest.method,
										req.rest.url
									);
									this.requests[service.fullName].push(req);
								}
							}
							if (this.requests[service.fullName].length === 0)
								delete this.requests[service.fullName];
						}
					}
				});
		},
		req: function (url, params) {
			return fetch(url, {
				method: "GET",
				body: params ? JSON.stringify(params) : null,
			}).then(function (res) {
				return res.json();
			});
		},
		updatePageResources() {
			if (this.page == "nodes") return this.updateNodeList();
			if (this.page == "services") return this.updateServiceList();
		},

		call(path, method, body) {
			/**
			 * В HTTP клиенте необходимо достать контекст трассировки.
			 */
			const headers = {
				"Content-Type": "application/json",
			};

			propagation.inject(context.active(), headers);

			console.log(headers, context.active());

			return fetch(window.location.origin + path, {
				method,
				body: body ? JSON.stringify(body) : null,
				headers,
			})
				.then((response) => response.json())
				.catch((error) => {
					console.error(error);

					return {};
				});
		},

		async getProducts() {
			const parent = tracer.startSpan("get-products");

			parent.setAttribute("atr-1", "value-1");
			parent.setAttribute("atr-2", "value-2");
			parent.setAttribute("atr-3", "value-3");

			try {
				parent.spanContext();

				/**
				 * Пример создания иерархии спанов.
				 */
				const traceContext = trace.setSpan(context.active(), parent);
				const child = tracer.startSpan(
					"wait-before-get-products",
					undefined,
					traceContext
				);

				await new Promise((resolve) => {
					setTimeout(resolve, 1000);
				});

				child.addEvent("The waiting before get product finished");
				child.setStatus(SpanStatusCode.OK);
				child.end();

				const { rows } = await this.call("/api/product", "GET");

				console.log(rows);

				this.data.products = rows;

				parent.addEvent("The product getting is done");
				parent.setStatus(SpanStatusCode.OK);
			} catch (error) {
				parent.setStatus(SpanStatusCode.ERROR);
			} finally {
				parent.end();
			}
		},
	},
	mounted() {
		const page = localStorage.getItem("lastPage");

		this.page = page ? page : "home";

		if (this.page === "apis") {
			this.refreshApiPage();
		}

		const globalAuth = localStorage.getItem("globalAuth");

		this.globalAuth = globalAuth ? JSON.parse(globalAuth) : {};

		setInterval(() => {
			this.updatePageResources();
		}, 2000);

		this.updateBrokerOptions();
	},
});

app.mount("#app");
