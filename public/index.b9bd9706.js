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
})({"c45B5":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "b31a7fa8b9bd9706";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h8Awu":[function(require,module,exports) {
var _api = require("@opentelemetry/api");
/**
 * Получения трейсера
 */ const tracer = (0, _api.trace).getTracer("example-tracer-web");
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
            products: []
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
        call (path, method, body) {
            /**
			 * В HTTP клиенте необходимо достать контекст трассировки.
			 */ const headers = {
                "Content-Type": "application/json"
            };
            (0, _api.propagation).inject((0, _api.context).active(), headers);
            console.log(headers, (0, _api.context).active());
            return fetch(window.location.origin + path, {
                method,
                body: body ? JSON.stringify(body) : null,
                headers
            }).then((response)=>response.json()).catch((error)=>{
                console.error(error);
                return {};
            });
        },
        async getProducts () {
            const parent = tracer.startSpan("get-products");
            parent.setAttribute("atr-1", "value-1");
            parent.setAttribute("atr-2", "value-2");
            parent.setAttribute("atr-3", "value-3");
            try {
                parent.spanContext();
                /**
				 * Пример создания иерархии спанов.
				 */ const traceContext = (0, _api.trace).setSpan((0, _api.context).active(), parent);
                const child = tracer.startSpan("wait-before-get-products", undefined, traceContext);
                await new Promise((resolve)=>{
                    setTimeout(resolve, 1000);
                });
                child.addEvent("The waiting before get product finished");
                child.setStatus((0, _api.SpanStatusCode).OK);
                child.end();
                const { rows } = await this.call("/api/product", "GET");
                console.log(rows);
                this.data.products = rows;
                parent.addEvent("The product getting is done");
                parent.setStatus((0, _api.SpanStatusCode).OK);
            } catch (error) {
                parent.setStatus((0, _api.SpanStatusCode).ERROR);
            } finally{
                parent.end();
            }
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

},{"@opentelemetry/api":"6AC4z"}]},["c45B5","h8Awu"], "h8Awu", "parcelRequiredc15")

//# sourceMappingURL=index.b9bd9706.js.map
