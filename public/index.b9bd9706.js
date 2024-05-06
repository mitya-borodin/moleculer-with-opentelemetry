// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"h8Awu":[function(require,module,exports) {
var _api = require("@opentelemetry/api");
const tracer = (0, _api.trace).getTracer("webapp");
const { createApp } = Vue;
const app = createApp({
    data () {
        return {
            apiSearchText: "",
            menu: [
                {
                    id: "home",
                    caption: "Home"
                },
                {
                    id: "apis",
                    caption: "REST API"
                },
                {
                    id: "nodes",
                    caption: "Nodes"
                },
                {
                    id: "services",
                    caption: "Services"
                },
                {
                    id: "webapp",
                    caption: "Webapp"
                }
            ],
            page: "home",
            requests: {},
            openAuthorizeDialog: false,
            auth: {
                tenant: "",
                username: "",
                password: "",
                token: ""
            },
            globalAuth: {
                tenant: "",
                username: "",
                password: "",
                token: ""
            },
            fields: {},
            broker: null,
            nodes: [],
            services: [],
            actions: {},
            showBrokerOptions: false,
            cars: [],
            carts: [],
            partners: [],
            products: [],
            users: [],
            orders: []
        };
    },
    computed: {
        filteredServices () {
            return this.services.filter((svc)=>!svc.name.startsWith("$"));
        },
        filteredApis () {
            const s = this.apiSearchText.toLocaleLowerCase();
            if (!this.apiSearchText) return this.requests;
            else {
                const reqs = {};
                for(const key in this.requests)reqs[key] = this.requests[key].filter((r)=>r?.action?.toLocaleLowerCase().includes(s) || r?.rest?.method?.toLocaleLowerCase().includes(s) || r?.rest?.path?.toLocaleLowerCase().includes(s) || r?.rest?.url?.toLocaleLowerCase().includes(s));
                return reqs;
            }
        }
    },
    methods: {
        resetAuthorization () {
            this.auth = {
                tenant: "",
                username: "",
                password: "",
                token: ""
            };
            this.saveAuthorize();
        },
        authorize () {
            fetch("/api/v1/identity/auth/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.auth)
            }).then((res)=>{
                if (res.status == 401) {
                    this.openAuthorizeDialog = true;
                    alert("Invalid username or password");
                } else if (res.status == 200) res.json().then((data)=>{
                    this.auth.token = res.headers.get("Authorization") || data.token;
                    this.auth.tenant = res.headers.get("x-tenant-id") || data.tenant;
                });
                else alert("Not authorized");
            });
        },
        saveAuthorize () {
            this.globalAuth = {
                ...this.auth
            };
            localStorage.setItem("globalAuth", JSON.stringify(this.globalAuth));
            this.openAuthorizeDialog = false;
        },
        refreshApiPage () {
            return this.updateServiceList();
        },
        showAuthorizeDialog () {
            this.openAuthorizeDialog = true;
        },
        closeAuthorizeDialog () {
            this.openAuthorizeDialog = false;
        },
        changePage (page) {
            this.page = page;
            localStorage.setItem("lastPage", this.page);
            if (this.page == "apis") return this.updateServiceList();
            else this.updatePageResources();
        },
        humanize (ms) {
            return ms > 1500 ? (ms / 1500).toFixed(2) + " s" : ms + " ms";
        },
        getServiceActions (svc) {
            return Object.keys(svc.actions).map((name)=>this.actions[name]).filter((action)=>!!action);
        },
        getActionParams (action, maxLen) {
            if (action.action && action.action.params) {
                const s = Object.keys(action.action.params).join(", ");
                return s.length > maxLen ? s.substr(0, maxLen) + "\u2026" : s;
            }
            return "-";
        },
        getActionREST (svc, action) {
            if (action.action.rest) {
                let prefix = svc.fullName || svc.name;
                if (typeof svc.settings.rest == "string") prefix = svc.settings.rest;
                if (typeof action.action.rest == "string") {
                    if (action.action.rest.indexOf(" ") !== -1) {
                        const p = action.action.rest.split(" ");
                        return "<span class='badge'>" + p[0] + "</span> " + prefix + p[1];
                    } else return "<span class='badge'>*</span> " + prefix + action.action.rest;
                } else return "<span class='badge'>" + (action.action.rest.method || "*") + "</span> " + prefix + action.action.rest.path;
            }
            return "";
        },
        getRest (item) {
            if (!item.rest) return item.rest;
            if (typeof item.rest === "object") return item.rest;
            if (item.rest.indexOf(" ") !== -1) {
                const p = item.rest.split(" ");
                return {
                    method: p[0],
                    path: p[1]
                };
            } else return {
                method: "*",
                path: item.rest
            };
        },
        getFields (item, method, url) {
            if (!item.params) return [];
            const r = [];
            for(const key in item.params){
                if (key.startsWith("$")) continue;
                if (item.params[key].readonly === true) continue;
                if (item.params[key].hidden === true) continue;
                const dataType = item.params[key].type || item.params[key];
                const hidden = item.params[key].hidden || false;
                const required = item.params[key].required || false;
                const optional = Array.isArray(item.params[key]) ? item.params[key].every((xx)=>xx.optional === true) : item.params[key].optional || false;
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
                    values
                });
            }
            return r;
        },
        getService (fullName) {
            return this.services.find((svc)=>svc.fullName == fullName) || {};
        },
        clearResponse (item) {
            item.response = undefined;
            item.duration = undefined;
            item.loading = false;
            item.status = undefined;
        },
        callAction: function(item, fullName) {
            if (!item.rest) return;
            item.loading = true;
            const service = this.services.find((svc)=>svc.name == fullName);
            var startTime = Date.now();
            const method = item.rest.method || "GET";
            let url = item.rest.url;
            let fields = item.fields;
            let body = null;
            let params = null;
            if (fields) {
                body = {};
                params = {};
                fields.forEach((field)=>{
                    const value = field.value;
                    if (field.paramType == "body") {
                        body[field.name] = value;
                        if (value === undefined && field.optional === true) delete body[field.name];
                    } else if (field.paramType == "param") {
                        params[field.name] = value;
                        if (value === undefined && field.optional === true) delete params[field.name];
                    } else if (field.paramType == "url") {
                        if (value === undefined && field.optional === true) url = url.replace(`:${field.name}`, "");
                        else url = url.replace(`:${field.name}`, value);
                    }
                    url = url.replace(`:${field.name}`, value);
                });
                if (body && method == "GET") body = null;
                if (params && Object.keys(params).length > 0) {
                    const qparams = {};
                    for(const key in params)if (params[key] !== undefined) qparams[key] = params[key];
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
                    ...authHeader
                }
            }).then(function(res) {
                item.status = res.status;
                item.duration = Date.now() - startTime;
                return res.json().then((json)=>{
                    item.response = json;
                    item.loading = false;
                    if (item.afterResponse) return item.afterResponse(json);
                });
            }).catch(function(err) {
                item.status = "ERR";
                item.duration = Date.now() - startTime;
                item.response = err.message;
                item.loading = false;
                console.log(err);
            });
        },
        updateBrokerOptions: function(name) {
            this.req("/api/~node/options", null).then((res)=>this.broker = res);
        },
        updateNodeList: function(name) {
            this.req("/api/~node/list", null).then((res)=>{
                res.sort((a, b)=>a.id.localeCompare(b.id));
                this.nodes = res;
            });
        },
        updateServiceList: function(name) {
            this.req("/api/~node/services?withActions=true", null).then((res)=>{
                this.services = res;
                res.sort((a, b)=>a.name.localeCompare(b.name));
                res.forEach((svc)=>svc.nodes.sort());
            }).then(()=>this.req("/api/~node/actions", null)).then((res)=>{
                res.sort((a, b)=>a.name.localeCompare(b.name));
                const actions = res.reduce((a, b)=>{
                    a[b.name] = b;
                    return a;
                }, {});
                this.actions = actions;
                if (this.page === "apis") {
                    this.requests = {};
                    for (const service of this.services){
                        this.requests[service.fullName] = [];
                        const version = service.version ? "v" + service.version + "/" : "";
                        for(const key in service.actions){
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
                                afterResponse: action.afterResponse
                            };
                            const baseUrl = service.settings.rest;
                            if (req.rest.method === "*") [
                                "GET",
                                "POST",
                                "PUT",
                                "PATCH",
                                "DELETE"
                            ].forEach((method)=>{
                                const req2 = Object.assign({}, req);
                                req2.id = req2.id + "." + method.toLocaleLowerCase();
                                req2.rest = Object.assign({}, req.rest);
                                req2.rest.method = method;
                                const url = baseUrl ? `/api${baseUrl}${req2.rest.path}` : `/api/${version}${service.name}${req2.rest.path}`;
                                req2.rest.url = url;
                                req2.fields = this.getFields(action, req2.rest.method, req2.rest.url);
                                this.requests[service.fullName].push(req2);
                            });
                            else {
                                let version = service.version ? "v" + service.version + "/" : "";
                                let url = baseUrl ? `/api${baseUrl}${req.rest.path}` : `/api/${version}${service.name}${req.rest.path}`;
                                req.rest.url = url;
                                req.fields = this.getFields(action, req.rest.method, req.rest.url);
                                this.requests[service.fullName].push(req);
                            }
                        }
                        if (this.requests[service.fullName].length === 0) delete this.requests[service.fullName];
                    }
                }
            });
        },
        req: function(url, params) {
            return fetch(url, {
                method: "GET",
                body: params ? JSON.stringify(params) : null
            }).then(function(res) {
                return res.json();
            });
        },
        updatePageResources () {
            if (this.page == "nodes") return this.updateNodeList();
            if (this.page == "services") return this.updateServiceList();
        },
        async call (path, method, body, attributes = {}) {
            return await tracer.startActiveSpan("Call", async (span)=>{
                span.setAttributes(attributes);
                const headers = {
                    "Content-Type": "application/json"
                };
                /**
				 * https://github.com/open-telemetry/opentelemetry-js/issues/2951#issuecomment-1214587378
				 *
				 * Существует баг, при котором текущий контекст context.active() теряется после асинхронного действия.
				 *
				 * Для того, чтобы сохранить контекст, нужно использовать не документированную возможность context.bind.
				 *
				 * 	const call = context.bind(context.active(), this.call);
				 *
				 * 	await tracer.startActiveSpan("Add to cart", async (span) => {
				 *    const call = context.bind(context.active(), this.call);
				 *    const getCart = context.bind(context.active(), this.getCart);
				 *
				 *    await call("/api/cart", "POST", product, {
				 *    	page: "webapp page",
				 *    });
				 *    await getCart();
				 *
				 *    span.end();
				 *  });
				 *
				 * При помощи propagation.inject(context.active(), headers); добавляем идентификатор трассировки в заголовки
				 * 	и отправляем на BE для дальнейшей трассировки BE части.
				 */ (0, _api.propagation).inject((0, _api.context).active(), headers);
                console.log(headers, (0, _api.context).active());
                return fetch(window.location.origin + path, {
                    method,
                    body: body ? JSON.stringify(body) : null,
                    headers
                }).then((response)=>{
                    span.addEvent("The call was finished \u2705");
                    span.setStatus((0, _api.SpanStatusCode).OK);
                    return response.json();
                }).catch((error)=>{
                    console.error(error);
                    span.addEvent("The call was fail \uD83D\uDEA8");
                    span.setStatus((0, _api.SpanStatusCode).ERROR);
                    span.recordException(error);
                    return {};
                }).finally(()=>{
                    span.end();
                });
            });
        },
        async getCar () {
            await tracer.startActiveSpan("Get car", async (span)=>{
                const { rows } = await this.call("/api/car?pageSize=10000", "GET");
                this.$data.cars = rows;
                span.end();
            });
        },
        async getCart () {
            await tracer.startActiveSpan("Get cart", async (span)=>{
                const { rows } = await this.call("/api/cart?pageSize=10000", "GET");
                this.$data.carts = rows;
                span.end();
            });
        },
        async getPartners () {
            await tracer.startActiveSpan("Get partners", async (span)=>{
                const { rows } = await this.call("/api/partner?pageSize=10000", "GET");
                this.$data.partners = rows;
                span.end();
            });
        },
        async getProducts () {
            await tracer.startActiveSpan("Get products", async (span)=>{
                const { rows } = await this.call("/api/product?pageSize=10000", "GET");
                this.$data.products = rows;
                span.end();
            });
        },
        async getUsers () {
            await tracer.startActiveSpan("Get users", async (span)=>{
                const { rows } = await this.call("/api/user?pageSize=10000", "GET");
                this.$data.users = rows;
                span.end();
            });
        },
        async getOrders () {
            await tracer.startActiveSpan("Get orders", async (span)=>{
                const { rows } = await this.call("/api/order?pageSize=10000", "GET");
                this.$data.orders = rows;
                span.setStatus((0, _api.SpanStatusCode).OK);
                span.end();
            });
        },
        async fetchData () {
            await tracer.startActiveSpan("Fetch data", async (span)=>{
                /**
				 * Тут не делается const call = context.bind(context.active(), this.call);
				 *
				 * Так как все вызывается синхронное, и контекст передается нормально.
				 */ await Promise.all([
                    this.getCar(),
                    this.getCart(),
                    this.getPartners(),
                    this.getProducts(),
                    this.getUsers(),
                    this.getOrders()
                ]);
                /**
				 * Чтобы посмотреть как выглядит ERROR
				 */ span.setStatus((0, _api.SpanStatusCode).ERROR);
                span.end();
            });
        },
        async addToCart ({ _id, ...product }) {
            /**
			 * Если нужно сделать вложенные спаны:
			 * 1. Создаем корень tracer.startActiveSpan("ROOT SPAN NAME", async (span) => {});
			 * 2. Внутри все асинхронные методы нужно забиндить на текущий контекст
			 * 	const call = context.bind(context.active(), this.call);
			 *	const getCart = context.bind(context.active(), this.getCart);
			 * 3. Внутри асинхронного метода можно вызывать
			 * 	tracer.startActiveSpan("CHILD SPAN NAME", async (span) => {});, он создаст дочерний спан,
			 * 	относительно самого верхнего tracer.startActiveSpan("ROOT SPAN NAME", async (span) => {});
			 * 4. Если внутри getCart есть несколько последовательных действий, необходимо будет выполнить для них
			 * 	пункт 2, 3
			 * 5. Для реализации любой вложенности стоит повторять такие операции.
			 */ await tracer.startActiveSpan("Add to cart", async (span)=>{
                const call = (0, _api.context).bind((0, _api.context).active(), this.call);
                const getCart = (0, _api.context).bind((0, _api.context).active(), this.getCart);
                await call("/api/cart", "POST", product, {
                    page: "webapp page"
                });
                await getCart();
                span.addEvent("The adding to cart was finished \u2705");
                span.addEvent("The adding to cart was finished 2 \u2705");
                span.setStatus((0, _api.SpanStatusCode).OK);
                span.end();
            });
        },
        async removeFromCart (cartId) {
            await tracer.startActiveSpan("Remove from cart", async (span)=>{
                const call = (0, _api.context).bind((0, _api.context).active(), this.call);
                const getCart = (0, _api.context).bind((0, _api.context).active(), this.getCart);
                await call("/api/cart/" + cartId, "DELETE", {
                    id: cartId
                });
                await getCart();
                span.addEvent("The removing from cart was finished \u2705");
                span.setStatus((0, _api.SpanStatusCode).OK);
                span.end();
            });
        },
        async makeOrder (carts) {
            await tracer.startActiveSpan("Make order", async (span)=>{
                const call = (0, _api.context).bind((0, _api.context).active(), this.call);
                const getCart = (0, _api.context).bind((0, _api.context).active(), this.getCart);
                const getOrders = (0, _api.context).bind((0, _api.context).active(), this.getOrders);
                await Promise.all(carts.map(async ({ _id, ...cart })=>{
                    await call("/api/cart/" + _id, "DELETE", {
                        id: _id
                    });
                    await call("/api/order", "POST", cart);
                }));
                await getCart();
                await getOrders();
                span.addEvent("The making order was finished \u2705");
                span.setStatus((0, _api.SpanStatusCode).OK);
                span.end();
            });
        },
        async sendOrder (orders) {
            await tracer.startActiveSpan("Send order", async (span)=>{
                const call = (0, _api.context).bind((0, _api.context).active(), this.call);
                const getOrders = (0, _api.context).bind((0, _api.context).active(), this.getOrders);
                await Promise.all(orders.map(async ({ _id, ...order })=>{
                    await call("/api/order/" + _id, "DELETE");
                }));
                await getOrders();
                span.setStatus((0, _api.SpanStatusCode).UNSET);
                span.end();
            });
        }
    },
    mounted () {
        const page = localStorage.getItem("lastPage");
        this.page = page ? page : "home";
        if (this.page === "apis") this.refreshApiPage();
        const globalAuth = localStorage.getItem("globalAuth");
        this.globalAuth = globalAuth ? JSON.parse(globalAuth) : {};
        setInterval(()=>{
            this.updatePageResources();
        }, 2000);
        this.updateBrokerOptions();
    }
});
app.mount("#app");

},{"@opentelemetry/api":"6AC4z"}]},["h8Awu"], "h8Awu", "parcelRequiredc15")

//# sourceMappingURL=index.b9bd9706.js.map
