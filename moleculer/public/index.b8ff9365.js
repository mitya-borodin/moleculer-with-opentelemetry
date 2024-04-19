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
})({"kRfeB":[function(require,module,exports) {
var _autoInstrumentationsWeb = require("@opentelemetry/auto-instrumentations-web");
var _contextZone = require("@opentelemetry/context-zone");
var _exporterZipkin = require("@opentelemetry/exporter-zipkin");
var _instrumentation = require("@opentelemetry/instrumentation");
var _sdkTraceBase = require("@opentelemetry/sdk-trace-base");
var _sdkTraceWeb = require("@opentelemetry/sdk-trace-web");
var _resources = require("@opentelemetry/resources");
var _semanticConventions = require("@opentelemetry/semantic-conventions");
// Add your zipkin url (`http://localhost:9411/api/v2/spans` is used as
// default) and application name to the Zipkin options.
// You can also define your custom headers which will be added automatically.
const exporter = new (0, _exporterZipkin.ZipkinExporter)({
    url: "http://localhost:9411/api/v2/spans"
});
const provider = new (0, _sdkTraceWeb.WebTracerProvider)({
    resource: new (0, _resources.Resource)({
        [(0, _semanticConventions.SEMRESATTRS_SERVICE_NAME)]: "web-app",
        [(0, _semanticConventions.SEMRESATTRS_SERVICE_VERSION)]: "1.5.3"
    })
});
provider.addSpanProcessor(new (0, _sdkTraceBase.BatchSpanProcessor)(exporter, {
    maxExportBatchSize: 1
}));
provider.register({
    contextManager: new (0, _contextZone.ZoneContextManager)()
});
(0, _instrumentation.registerInstrumentations)({
    instrumentations: [
        (0, _autoInstrumentationsWeb.getWebAutoInstrumentations)()
    ]
});

},{"@opentelemetry/sdk-trace-web":"eXZZL","@opentelemetry/context-zone":"cmUfS","@opentelemetry/instrumentation":"3OTpd","@opentelemetry/sdk-trace-base":"jj5uM","@opentelemetry/auto-instrumentations-web":"dZ0bF","@opentelemetry/exporter-zipkin":"8Sk0y","@opentelemetry/resources":"loqSh","@opentelemetry/semantic-conventions":"lCgfj"}],"eXZZL":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _webTracerProvider = require("./WebTracerProvider");
parcelHelpers.exportAll(_webTracerProvider, exports);
var _stackContextManager = require("./StackContextManager");
parcelHelpers.exportAll(_stackContextManager, exports);
var _performanceTimingNames = require("./enums/PerformanceTimingNames");
parcelHelpers.exportAll(_performanceTimingNames, exports);
var _types = require("./types");
parcelHelpers.exportAll(_types, exports);
var _utils = require("./utils");
parcelHelpers.exportAll(_utils, exports);
var _sdkTraceBase = require("@opentelemetry/sdk-trace-base");
parcelHelpers.exportAll(_sdkTraceBase, exports);

},{"./WebTracerProvider":"gYn17","./StackContextManager":"dXLQl","./enums/PerformanceTimingNames":"eNyqo","./types":"5dYQ0","./utils":"ccAWO","@opentelemetry/sdk-trace-base":"jj5uM","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"gYn17":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WebTracerProvider", ()=>WebTracerProvider);
var _sdkTraceBase = require("@opentelemetry/sdk-trace-base");
var _stackContextManager = require("./StackContextManager");
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
/**
 * This class represents a web tracer with {@link StackContextManager}
 */ var WebTracerProvider = /** @class */ function(_super) {
    __extends(WebTracerProvider, _super);
    /**
     * Constructs a new Tracer instance.
     * @param config Web Tracer config
     */ function WebTracerProvider(config) {
        if (config === void 0) config = {};
        var _this = _super.call(this, config) || this;
        if (config.contextManager) throw "contextManager should be defined in register method not in constructor";
        if (config.propagator) throw "propagator should be defined in register method not in constructor";
        return _this;
    }
    /**
     * Register this TracerProvider for use with the OpenTelemetry API.
     * Undefined values may be replaced with defaults, and
     * null values will be skipped.
     *
     * @param config Configuration object for SDK registration
     */ WebTracerProvider.prototype.register = function(config) {
        if (config === void 0) config = {};
        if (config.contextManager === undefined) config.contextManager = new (0, _stackContextManager.StackContextManager)();
        if (config.contextManager) config.contextManager.enable();
        _super.prototype.register.call(this, config);
    };
    return WebTracerProvider;
}((0, _sdkTraceBase.BasicTracerProvider));

},{"@opentelemetry/sdk-trace-base":"jj5uM","./StackContextManager":"dXLQl","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"jj5uM":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tracer = require("./Tracer");
parcelHelpers.exportAll(_tracer, exports);
var _basicTracerProvider = require("./BasicTracerProvider");
parcelHelpers.exportAll(_basicTracerProvider, exports);
var _platform = require("./platform");
parcelHelpers.exportAll(_platform, exports);
var _consoleSpanExporter = require("./export/ConsoleSpanExporter");
parcelHelpers.exportAll(_consoleSpanExporter, exports);
var _inMemorySpanExporter = require("./export/InMemorySpanExporter");
parcelHelpers.exportAll(_inMemorySpanExporter, exports);
var _readableSpan = require("./export/ReadableSpan");
parcelHelpers.exportAll(_readableSpan, exports);
var _simpleSpanProcessor = require("./export/SimpleSpanProcessor");
parcelHelpers.exportAll(_simpleSpanProcessor, exports);
var _spanExporter = require("./export/SpanExporter");
parcelHelpers.exportAll(_spanExporter, exports);
var _noopSpanProcessor = require("./export/NoopSpanProcessor");
parcelHelpers.exportAll(_noopSpanProcessor, exports);
var _alwaysOffSampler = require("./sampler/AlwaysOffSampler");
parcelHelpers.exportAll(_alwaysOffSampler, exports);
var _alwaysOnSampler = require("./sampler/AlwaysOnSampler");
parcelHelpers.exportAll(_alwaysOnSampler, exports);
var _parentBasedSampler = require("./sampler/ParentBasedSampler");
parcelHelpers.exportAll(_parentBasedSampler, exports);
var _traceIdRatioBasedSampler = require("./sampler/TraceIdRatioBasedSampler");
parcelHelpers.exportAll(_traceIdRatioBasedSampler, exports);
var _sampler = require("./Sampler");
parcelHelpers.exportAll(_sampler, exports);
var _span = require("./Span");
parcelHelpers.exportAll(_span, exports);
var _spanProcessor = require("./SpanProcessor");
parcelHelpers.exportAll(_spanProcessor, exports);
var _timedEvent = require("./TimedEvent");
parcelHelpers.exportAll(_timedEvent, exports);
var _types = require("./types");
parcelHelpers.exportAll(_types, exports);
var _idGenerator = require("./IdGenerator");
parcelHelpers.exportAll(_idGenerator, exports);

},{"./Tracer":"zYo79","./BasicTracerProvider":"bv1bF","./platform":"alGsY","./export/ConsoleSpanExporter":"hWVp2","./export/InMemorySpanExporter":"Yr1u5","./export/ReadableSpan":"fSt4P","./export/SimpleSpanProcessor":"Nq2MM","./export/SpanExporter":"lzLTj","./export/NoopSpanProcessor":"j2TGv","./sampler/AlwaysOffSampler":"9FEmX","./sampler/AlwaysOnSampler":"cnZtk","./sampler/ParentBasedSampler":"7pDAK","./sampler/TraceIdRatioBasedSampler":"bqqYo","./Sampler":"2IRN3","./Span":"3tWGt","./SpanProcessor":"iqrBb","./TimedEvent":"hdnwm","./types":"cwYEn","./IdGenerator":"iYvXX","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"zYo79":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Tracer", ()=>Tracer);
var _api = require("@opentelemetry/api");
var _core = require("@opentelemetry/core");
var _span = require("./Span");
var _utility = require("./utility");
var _platform = require("./platform");
/**
 * This class represents a basic tracer.
 */ var Tracer = /** @class */ function() {
    /**
     * Constructs a new Tracer instance.
     */ function Tracer(instrumentationLibrary, config, _tracerProvider) {
        this._tracerProvider = _tracerProvider;
        var localConfig = (0, _utility.mergeConfig)(config);
        this._sampler = localConfig.sampler;
        this._generalLimits = localConfig.generalLimits;
        this._spanLimits = localConfig.spanLimits;
        this._idGenerator = config.idGenerator || new (0, _platform.RandomIdGenerator)();
        this.resource = _tracerProvider.resource;
        this.instrumentationLibrary = instrumentationLibrary;
    }
    /**
     * Starts a new Span or returns the default NoopSpan based on the sampling
     * decision.
     */ Tracer.prototype.startSpan = function(name, options, context) {
        var _a, _b, _c;
        if (options === void 0) options = {};
        if (context === void 0) context = _api.context.active();
        // remove span from context in case a root span is requested via options
        if (options.root) context = _api.trace.deleteSpan(context);
        var parentSpan = _api.trace.getSpan(context);
        if ((0, _core.isTracingSuppressed)(context)) {
            _api.diag.debug("Instrumentation suppressed, returning Noop Span");
            var nonRecordingSpan = _api.trace.wrapSpanContext(_api.INVALID_SPAN_CONTEXT);
            return nonRecordingSpan;
        }
        var parentSpanContext = parentSpan === null || parentSpan === void 0 ? void 0 : parentSpan.spanContext();
        var spanId = this._idGenerator.generateSpanId();
        var traceId;
        var traceState;
        var parentSpanId;
        if (!parentSpanContext || !_api.trace.isSpanContextValid(parentSpanContext)) // New root span.
        traceId = this._idGenerator.generateTraceId();
        else {
            // New child span.
            traceId = parentSpanContext.traceId;
            traceState = parentSpanContext.traceState;
            parentSpanId = parentSpanContext.spanId;
        }
        var spanKind = (_a = options.kind) !== null && _a !== void 0 ? _a : _api.SpanKind.INTERNAL;
        var links = ((_b = options.links) !== null && _b !== void 0 ? _b : []).map(function(link) {
            return {
                context: link.context,
                attributes: (0, _core.sanitizeAttributes)(link.attributes)
            };
        });
        var attributes = (0, _core.sanitizeAttributes)(options.attributes);
        // make sampling decision
        var samplingResult = this._sampler.shouldSample(context, traceId, name, spanKind, attributes, links);
        traceState = (_c = samplingResult.traceState) !== null && _c !== void 0 ? _c : traceState;
        var traceFlags = samplingResult.decision === _api.SamplingDecision.RECORD_AND_SAMPLED ? _api.TraceFlags.SAMPLED : _api.TraceFlags.NONE;
        var spanContext = {
            traceId: traceId,
            spanId: spanId,
            traceFlags: traceFlags,
            traceState: traceState
        };
        if (samplingResult.decision === _api.SamplingDecision.NOT_RECORD) {
            _api.diag.debug("Recording is off, propagating context in a non-recording span");
            var nonRecordingSpan = _api.trace.wrapSpanContext(spanContext);
            return nonRecordingSpan;
        }
        // Set initial span attributes. The attributes object may have been mutated
        // by the sampler, so we sanitize the merged attributes before setting them.
        var initAttributes = (0, _core.sanitizeAttributes)(Object.assign(attributes, samplingResult.attributes));
        var span = new (0, _span.Span)(this, context, name, spanContext, spanKind, parentSpanId, links, options.startTime, undefined, initAttributes);
        return span;
    };
    Tracer.prototype.startActiveSpan = function(name, arg2, arg3, arg4) {
        var opts;
        var ctx;
        var fn;
        if (arguments.length < 2) return;
        else if (arguments.length === 2) fn = arg2;
        else if (arguments.length === 3) {
            opts = arg2;
            fn = arg3;
        } else {
            opts = arg2;
            ctx = arg3;
            fn = arg4;
        }
        var parentContext = ctx !== null && ctx !== void 0 ? ctx : _api.context.active();
        var span = this.startSpan(name, opts, parentContext);
        var contextWithSpanSet = _api.trace.setSpan(parentContext, span);
        return _api.context.with(contextWithSpanSet, fn, undefined, span);
    };
    /** Returns the active {@link GeneralLimits}. */ Tracer.prototype.getGeneralLimits = function() {
        return this._generalLimits;
    };
    /** Returns the active {@link SpanLimits}. */ Tracer.prototype.getSpanLimits = function() {
        return this._spanLimits;
    };
    Tracer.prototype.getActiveSpanProcessor = function() {
        return this._tracerProvider.getActiveSpanProcessor();
    };
    return Tracer;
}();

},{"@opentelemetry/api":"6AC4z","@opentelemetry/core":"dBsXh","./Span":"3tWGt","./utility":"99Faf","./platform":"alGsY","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"6AC4z":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "baggageEntryMetadataFromString", ()=>(0, _utils.baggageEntryMetadataFromString));
// Context APIs
parcelHelpers.export(exports, "createContextKey", ()=>(0, _context.createContextKey));
parcelHelpers.export(exports, "ROOT_CONTEXT", ()=>(0, _context.ROOT_CONTEXT));
// Diag APIs
parcelHelpers.export(exports, "DiagConsoleLogger", ()=>(0, _consoleLogger.DiagConsoleLogger));
parcelHelpers.export(exports, "DiagLogLevel", ()=>(0, _types.DiagLogLevel));
// Metrics APIs
parcelHelpers.export(exports, "createNoopMeter", ()=>(0, _noopMeter.createNoopMeter));
parcelHelpers.export(exports, "ValueType", ()=>(0, _metric.ValueType));
// Propagation APIs
parcelHelpers.export(exports, "defaultTextMapGetter", ()=>(0, _textMapPropagator.defaultTextMapGetter));
parcelHelpers.export(exports, "defaultTextMapSetter", ()=>(0, _textMapPropagator.defaultTextMapSetter));
parcelHelpers.export(exports, "ProxyTracer", ()=>(0, _proxyTracer.ProxyTracer));
parcelHelpers.export(exports, "ProxyTracerProvider", ()=>(0, _proxyTracerProvider.ProxyTracerProvider));
parcelHelpers.export(exports, "SamplingDecision", ()=>(0, _samplingResult.SamplingDecision));
parcelHelpers.export(exports, "SpanKind", ()=>(0, _spanKind.SpanKind));
parcelHelpers.export(exports, "SpanStatusCode", ()=>(0, _status.SpanStatusCode));
parcelHelpers.export(exports, "TraceFlags", ()=>(0, _traceFlags.TraceFlags));
parcelHelpers.export(exports, "createTraceState", ()=>(0, _utils1.createTraceState));
parcelHelpers.export(exports, "isSpanContextValid", ()=>(0, _spancontextUtils.isSpanContextValid));
parcelHelpers.export(exports, "isValidTraceId", ()=>(0, _spancontextUtils.isValidTraceId));
parcelHelpers.export(exports, "isValidSpanId", ()=>(0, _spancontextUtils.isValidSpanId));
parcelHelpers.export(exports, "INVALID_SPANID", ()=>(0, _invalidSpanConstants.INVALID_SPANID));
parcelHelpers.export(exports, "INVALID_TRACEID", ()=>(0, _invalidSpanConstants.INVALID_TRACEID));
parcelHelpers.export(exports, "INVALID_SPAN_CONTEXT", ()=>(0, _invalidSpanConstants.INVALID_SPAN_CONTEXT));
// Named export.
parcelHelpers.export(exports, "context", ()=>(0, _contextApi.context));
parcelHelpers.export(exports, "diag", ()=>(0, _diagApi.diag));
parcelHelpers.export(exports, "metrics", ()=>(0, _metricsApi.metrics));
parcelHelpers.export(exports, "propagation", ()=>(0, _propagationApi.propagation));
parcelHelpers.export(exports, "trace", ()=>(0, _traceApi.trace));
var _utils = require("./baggage/utils");
var _context = require("./context/context");
var _consoleLogger = require("./diag/consoleLogger");
var _types = require("./diag/types");
var _noopMeter = require("./metrics/NoopMeter");
var _metric = require("./metrics/Metric");
var _textMapPropagator = require("./propagation/TextMapPropagator");
var _proxyTracer = require("./trace/ProxyTracer");
var _proxyTracerProvider = require("./trace/ProxyTracerProvider");
var _samplingResult = require("./trace/SamplingResult");
var _spanKind = require("./trace/span_kind");
var _status = require("./trace/status");
var _traceFlags = require("./trace/trace_flags");
var _utils1 = require("./trace/internal/utils");
var _spancontextUtils = require("./trace/spancontext-utils");
var _invalidSpanConstants = require("./trace/invalid-span-constants");
// Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.
var _contextApi = require("./context-api");
var _diagApi = require("./diag-api");
var _metricsApi = require("./metrics-api");
var _propagationApi = require("./propagation-api");
var _traceApi = require("./trace-api");
// Default export.
exports.default = {
    context: (0, _contextApi.context),
    diag: (0, _diagApi.diag),
    metrics: (0, _metricsApi.metrics),
    propagation: (0, _propagationApi.propagation),
    trace: (0, _traceApi.trace)
};

},{"./baggage/utils":"1FtTJ","./context/context":"8Hj8X","./diag/consoleLogger":"cqEiU","./diag/types":"f917i","./metrics/NoopMeter":"fl46x","./metrics/Metric":"hbEfG","./propagation/TextMapPropagator":"fbpGl","./trace/ProxyTracer":"4RJSP","./trace/ProxyTracerProvider":"5OsDv","./trace/SamplingResult":"9hHpb","./trace/span_kind":"8JdQL","./trace/status":"caBJ1","./trace/trace_flags":"58Fpe","./trace/internal/utils":"43yZb","./trace/spancontext-utils":"g40FB","./trace/invalid-span-constants":"9v7Cm","./context-api":"5ZkHn","./diag-api":"3Hdm6","./metrics-api":"dKL2F","./propagation-api":"Nd6jQ","./trace-api":"hMrLV","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"1FtTJ":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Create a new Baggage with optional entries
 *
 * @param entries An array of baggage entries the new baggage should contain
 */ parcelHelpers.export(exports, "createBaggage", ()=>createBaggage);
/**
 * Create a serializable BaggageEntryMetadata object from a string.
 *
 * @param str string metadata. Format is currently not defined by the spec and has no special meaning.
 *
 */ parcelHelpers.export(exports, "baggageEntryMetadataFromString", ()=>baggageEntryMetadataFromString);
var _diag = require("../api/diag");
var _baggageImpl = require("./internal/baggage-impl");
var _symbol = require("./internal/symbol");
var diag = (0, _diag.DiagAPI).instance();
function createBaggage(entries) {
    if (entries === void 0) entries = {};
    return new (0, _baggageImpl.BaggageImpl)(new Map(Object.entries(entries)));
}
function baggageEntryMetadataFromString(str) {
    if (typeof str !== "string") {
        diag.error("Cannot create baggage metadata from unknown type: " + typeof str);
        str = "";
    }
    return {
        __TYPE__: (0, _symbol.baggageEntryMetadataSymbol),
        toString: function() {
            return str;
        }
    };
}

},{"../api/diag":"gZAmK","./internal/baggage-impl":"1JRmx","./internal/symbol":"bwKBN","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"gZAmK":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DiagAPI", ()=>DiagAPI);
var _componentLogger = require("../diag/ComponentLogger");
var _logLevelLogger = require("../diag/internal/logLevelLogger");
var _types = require("../diag/types");
var _globalUtils = require("../internal/global-utils");
var __read = undefined && undefined.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = undefined && undefined.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var API_NAME = "diag";
/**
 * Singleton object which represents the entry point to the OpenTelemetry internal
 * diagnostic API
 */ var DiagAPI = /** @class */ function() {
    /**
     * Private internal constructor
     * @private
     */ function DiagAPI() {
        function _logProxy(funcName) {
            return function() {
                var args = [];
                for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
                var logger = (0, _globalUtils.getGlobal)("diag");
                // shortcut if logger not set
                if (!logger) return;
                return logger[funcName].apply(logger, __spreadArray([], __read(args), false));
            };
        }
        // Using self local variable for minification purposes as 'this' cannot be minified
        var self = this;
        // DiagAPI specific functions
        var setLogger = function(logger, optionsOrLogLevel) {
            var _a, _b, _c;
            if (optionsOrLogLevel === void 0) optionsOrLogLevel = {
                logLevel: (0, _types.DiagLogLevel).INFO
            };
            if (logger === self) {
                // There isn't much we can do here.
                // Logging to the console might break the user application.
                // Try to log to self. If a logger was previously registered it will receive the log.
                var err = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                self.error((_a = err.stack) !== null && _a !== void 0 ? _a : err.message);
                return false;
            }
            if (typeof optionsOrLogLevel === "number") optionsOrLogLevel = {
                logLevel: optionsOrLogLevel
            };
            var oldLogger = (0, _globalUtils.getGlobal)("diag");
            var newLogger = (0, _logLevelLogger.createLogLevelDiagLogger)((_b = optionsOrLogLevel.logLevel) !== null && _b !== void 0 ? _b : (0, _types.DiagLogLevel).INFO, logger);
            // There already is an logger registered. We'll let it know before overwriting it.
            if (oldLogger && !optionsOrLogLevel.suppressOverrideMessage) {
                var stack = (_c = new Error().stack) !== null && _c !== void 0 ? _c : "<failed to generate stacktrace>";
                oldLogger.warn("Current logger will be overwritten from " + stack);
                newLogger.warn("Current logger will overwrite one already registered from " + stack);
            }
            return (0, _globalUtils.registerGlobal)("diag", newLogger, self, true);
        };
        self.setLogger = setLogger;
        self.disable = function() {
            (0, _globalUtils.unregisterGlobal)(API_NAME, self);
        };
        self.createComponentLogger = function(options) {
            return new (0, _componentLogger.DiagComponentLogger)(options);
        };
        self.verbose = _logProxy("verbose");
        self.debug = _logProxy("debug");
        self.info = _logProxy("info");
        self.warn = _logProxy("warn");
        self.error = _logProxy("error");
    }
    /** Get the singleton instance of the DiagAPI API */ DiagAPI.instance = function() {
        if (!this._instance) this._instance = new DiagAPI();
        return this._instance;
    };
    return DiagAPI;
}();

},{"../diag/ComponentLogger":"3nsjJ","../diag/internal/logLevelLogger":"d3Qu4","../diag/types":"f917i","../internal/global-utils":"h4XAN","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"3nsjJ":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DiagComponentLogger", ()=>DiagComponentLogger);
var _globalUtils = require("../internal/global-utils");
var __read = undefined && undefined.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = undefined && undefined.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/**
 * Component Logger which is meant to be used as part of any component which
 * will add automatically additional namespace in front of the log message.
 * It will then forward all message to global diag logger
 * @example
 * const cLogger = diag.createComponentLogger({ namespace: '@opentelemetry/instrumentation-http' });
 * cLogger.debug('test');
 * // @opentelemetry/instrumentation-http test
 */ var DiagComponentLogger = /** @class */ function() {
    function DiagComponentLogger(props) {
        this._namespace = props.namespace || "DiagComponentLogger";
    }
    DiagComponentLogger.prototype.debug = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        return logProxy("debug", this._namespace, args);
    };
    DiagComponentLogger.prototype.error = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        return logProxy("error", this._namespace, args);
    };
    DiagComponentLogger.prototype.info = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        return logProxy("info", this._namespace, args);
    };
    DiagComponentLogger.prototype.warn = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        return logProxy("warn", this._namespace, args);
    };
    DiagComponentLogger.prototype.verbose = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        return logProxy("verbose", this._namespace, args);
    };
    return DiagComponentLogger;
}();
function logProxy(funcName, namespace, args) {
    var logger = (0, _globalUtils.getGlobal)("diag");
    // shortcut if logger not set
    if (!logger) return;
    args.unshift(namespace);
    return logger[funcName].apply(logger, __spreadArray([], __read(args), false));
}

},{"../internal/global-utils":"h4XAN","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"h4XAN":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "registerGlobal", ()=>registerGlobal);
parcelHelpers.export(exports, "getGlobal", ()=>getGlobal);
parcelHelpers.export(exports, "unregisterGlobal", ()=>unregisterGlobal);
var _platform = require("../platform");
var _version = require("../version");
var _semver = require("./semver");
var major = (0, _version.VERSION).split(".")[0];
var GLOBAL_OPENTELEMETRY_API_KEY = Symbol.for("opentelemetry.js.api." + major);
var _global = (0, _platform._globalThis);
function registerGlobal(type, instance, diag, allowOverride) {
    var _a;
    if (allowOverride === void 0) allowOverride = false;
    var api = _global[GLOBAL_OPENTELEMETRY_API_KEY] = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) !== null && _a !== void 0 ? _a : {
        version: (0, _version.VERSION)
    };
    if (!allowOverride && api[type]) {
        // already registered an API of this type
        var err = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + type);
        diag.error(err.stack || err.message);
        return false;
    }
    if (api.version !== (0, _version.VERSION)) {
        // All registered APIs must be of the same version exactly
        var err = new Error("@opentelemetry/api: Registration of version v" + api.version + " for " + type + " does not match previously registered API v" + (0, _version.VERSION));
        diag.error(err.stack || err.message);
        return false;
    }
    api[type] = instance;
    diag.debug("@opentelemetry/api: Registered a global for " + type + " v" + (0, _version.VERSION) + ".");
    return true;
}
function getGlobal(type) {
    var _a, _b;
    var globalVersion = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _a === void 0 ? void 0 : _a.version;
    if (!globalVersion || !(0, _semver.isCompatible)(globalVersion)) return;
    return (_b = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _b === void 0 ? void 0 : _b[type];
}
function unregisterGlobal(type, diag) {
    diag.debug("@opentelemetry/api: Unregistering a global for " + type + " v" + (0, _version.VERSION) + ".");
    var api = _global[GLOBAL_OPENTELEMETRY_API_KEY];
    if (api) delete api[type];
}

},{"../platform":"dO2ZQ","../version":"k412A","./semver":"9IXna","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"dO2ZQ":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _globalThis = require("./globalThis");
parcelHelpers.exportAll(_globalThis, exports);

},{"./globalThis":"dRquK","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"dRquK":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Updates to this file should also be replicated to @opentelemetry/core too.
/**
 * - globalThis (New standard)
 * - self (Will return the current window instance for supported browsers)
 * - window (fallback for older browser implementations)
 * - global (NodeJS implementation)
 * - <object> (When all else fails)
 */ /** only globals that common to node and browsers are allowed */ // eslint-disable-next-line node/no-unsupported-features/es-builtins, no-undef
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_globalThis", ()=>_globalThis);
var global = arguments[3];
var _globalThis = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof window === "object" ? window : typeof global === "object" ? global : {};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"hzbf6":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"k412A":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // this is autogenerated file, see scripts/version-update.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
var VERSION = "1.8.0";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"9IXna":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Create a function to test an API version to see if it is compatible with the provided ownVersion.
 *
 * The returned function has the following semantics:
 * - Exact match is always compatible
 * - Major versions must match exactly
 *    - 1.x package cannot use global 2.x package
 *    - 2.x package cannot use global 1.x package
 * - The minor version of the API module requesting access to the global API must be less than or equal to the minor version of this API
 *    - 1.3 package may use 1.4 global because the later global contains all functions 1.3 expects
 *    - 1.4 package may NOT use 1.3 global because it may try to call functions which don't exist on 1.3
 * - If the major version is 0, the minor version is treated as the major and the patch is treated as the minor
 * - Patch and build tag differences are not considered at this time
 *
 * @param ownVersion version which should be checked against
 */ parcelHelpers.export(exports, "_makeCompatibilityCheck", ()=>_makeCompatibilityCheck);
parcelHelpers.export(exports, "isCompatible", ()=>isCompatible);
var _version = require("../version");
var re = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function _makeCompatibilityCheck(ownVersion) {
    var acceptedVersions = new Set([
        ownVersion
    ]);
    var rejectedVersions = new Set();
    var myVersionMatch = ownVersion.match(re);
    if (!myVersionMatch) // we cannot guarantee compatibility so we always return noop
    return function() {
        return false;
    };
    var ownVersionParsed = {
        major: +myVersionMatch[1],
        minor: +myVersionMatch[2],
        patch: +myVersionMatch[3],
        prerelease: myVersionMatch[4]
    };
    // if ownVersion has a prerelease tag, versions must match exactly
    if (ownVersionParsed.prerelease != null) return function isExactmatch(globalVersion) {
        return globalVersion === ownVersion;
    };
    function _reject(v) {
        rejectedVersions.add(v);
        return false;
    }
    function _accept(v) {
        acceptedVersions.add(v);
        return true;
    }
    return function isCompatible(globalVersion) {
        if (acceptedVersions.has(globalVersion)) return true;
        if (rejectedVersions.has(globalVersion)) return false;
        var globalVersionMatch = globalVersion.match(re);
        if (!globalVersionMatch) // cannot parse other version
        // we cannot guarantee compatibility so we always noop
        return _reject(globalVersion);
        var globalVersionParsed = {
            major: +globalVersionMatch[1],
            minor: +globalVersionMatch[2],
            patch: +globalVersionMatch[3],
            prerelease: globalVersionMatch[4]
        };
        // if globalVersion has a prerelease tag, versions must match exactly
        if (globalVersionParsed.prerelease != null) return _reject(globalVersion);
        // major versions must match
        if (ownVersionParsed.major !== globalVersionParsed.major) return _reject(globalVersion);
        if (ownVersionParsed.major === 0) {
            if (ownVersionParsed.minor === globalVersionParsed.minor && ownVersionParsed.patch <= globalVersionParsed.patch) return _accept(globalVersion);
            return _reject(globalVersion);
        }
        if (ownVersionParsed.minor <= globalVersionParsed.minor) return _accept(globalVersion);
        return _reject(globalVersion);
    };
}
var isCompatible = _makeCompatibilityCheck((0, _version.VERSION));

},{"../version":"k412A","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"d3Qu4":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createLogLevelDiagLogger", ()=>createLogLevelDiagLogger);
var _types = require("../types");
function createLogLevelDiagLogger(maxLevel, logger) {
    if (maxLevel < (0, _types.DiagLogLevel).NONE) maxLevel = (0, _types.DiagLogLevel).NONE;
    else if (maxLevel > (0, _types.DiagLogLevel).ALL) maxLevel = (0, _types.DiagLogLevel).ALL;
    // In case the logger is null or undefined
    logger = logger || {};
    function _filterFunc(funcName, theLevel) {
        var theFunc = logger[funcName];
        if (typeof theFunc === "function" && maxLevel >= theLevel) return theFunc.bind(logger);
        return function() {};
    }
    return {
        error: _filterFunc("error", (0, _types.DiagLogLevel).ERROR),
        warn: _filterFunc("warn", (0, _types.DiagLogLevel).WARN),
        info: _filterFunc("info", (0, _types.DiagLogLevel).INFO),
        debug: _filterFunc("debug", (0, _types.DiagLogLevel).DEBUG),
        verbose: _filterFunc("verbose", (0, _types.DiagLogLevel).VERBOSE)
    };
}

},{"../types":"f917i","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"f917i":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Defines the available internal logging levels for the diagnostic logger, the numeric values
 * of the levels are defined to match the original values from the initial LogLevel to avoid
 * compatibility/migration issues for any implementation that assume the numeric ordering.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DiagLogLevel", ()=>DiagLogLevel);
var DiagLogLevel;
(function(DiagLogLevel) {
    /** Diagnostic Logging level setting to disable all logging (except and forced logs) */ DiagLogLevel[DiagLogLevel["NONE"] = 0] = "NONE";
    /** Identifies an error scenario */ DiagLogLevel[DiagLogLevel["ERROR"] = 30] = "ERROR";
    /** Identifies a warning scenario */ DiagLogLevel[DiagLogLevel["WARN"] = 50] = "WARN";
    /** General informational log message */ DiagLogLevel[DiagLogLevel["INFO"] = 60] = "INFO";
    /** General debug log message */ DiagLogLevel[DiagLogLevel["DEBUG"] = 70] = "DEBUG";
    /**
     * Detailed trace level logging should only be used for development, should only be set
     * in a development environment.
     */ DiagLogLevel[DiagLogLevel["VERBOSE"] = 80] = "VERBOSE";
    /** Used to set the logging level to include all logging */ DiagLogLevel[DiagLogLevel["ALL"] = 9999] = "ALL";
})(DiagLogLevel || (DiagLogLevel = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"1JRmx":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaggageImpl", ()=>BaggageImpl);
var __read = undefined && undefined.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __values = undefined && undefined.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var BaggageImpl = /** @class */ function() {
    function BaggageImpl(entries) {
        this._entries = entries ? new Map(entries) : new Map();
    }
    BaggageImpl.prototype.getEntry = function(key) {
        var entry = this._entries.get(key);
        if (!entry) return undefined;
        return Object.assign({}, entry);
    };
    BaggageImpl.prototype.getAllEntries = function() {
        return Array.from(this._entries.entries()).map(function(_a) {
            var _b = __read(_a, 2), k = _b[0], v = _b[1];
            return [
                k,
                v
            ];
        });
    };
    BaggageImpl.prototype.setEntry = function(key, entry) {
        var newBaggage = new BaggageImpl(this._entries);
        newBaggage._entries.set(key, entry);
        return newBaggage;
    };
    BaggageImpl.prototype.removeEntry = function(key) {
        var newBaggage = new BaggageImpl(this._entries);
        newBaggage._entries.delete(key);
        return newBaggage;
    };
    BaggageImpl.prototype.removeEntries = function() {
        var e_1, _a;
        var keys = [];
        for(var _i = 0; _i < arguments.length; _i++)keys[_i] = arguments[_i];
        var newBaggage = new BaggageImpl(this._entries);
        try {
            for(var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()){
                var key = keys_1_1.value;
                newBaggage._entries.delete(key);
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        return newBaggage;
    };
    BaggageImpl.prototype.clear = function() {
        return new BaggageImpl();
    };
    return BaggageImpl;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"bwKBN":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Symbol used to make BaggageEntryMetadata an opaque type
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "baggageEntryMetadataSymbol", ()=>baggageEntryMetadataSymbol);
var baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"8Hj8X":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Get a key to uniquely identify a context value */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createContextKey", ()=>createContextKey);
parcelHelpers.export(exports, "ROOT_CONTEXT", ()=>ROOT_CONTEXT);
function createContextKey(description) {
    // The specification states that for the same input, multiple calls should
    // return different keys. Due to the nature of the JS dependency management
    // system, this creates problems where multiple versions of some package
    // could hold different keys for the same property.
    //
    // Therefore, we use Symbol.for which returns the same key for the same input.
    return Symbol.for(description);
}
var BaseContext = /** @class */ function() {
    /**
     * Construct a new context which inherits values from an optional parent context.
     *
     * @param parentContext a context from which to inherit values
     */ function BaseContext(parentContext) {
        // for minification
        var self = this;
        self._currentContext = parentContext ? new Map(parentContext) : new Map();
        self.getValue = function(key) {
            return self._currentContext.get(key);
        };
        self.setValue = function(key, value) {
            var context = new BaseContext(self._currentContext);
            context._currentContext.set(key, value);
            return context;
        };
        self.deleteValue = function(key) {
            var context = new BaseContext(self._currentContext);
            context._currentContext.delete(key);
            return context;
        };
    }
    return BaseContext;
}();
var ROOT_CONTEXT = new BaseContext();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"cqEiU":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DiagConsoleLogger", ()=>DiagConsoleLogger);
var consoleMap = [
    {
        n: "error",
        c: "error"
    },
    {
        n: "warn",
        c: "warn"
    },
    {
        n: "info",
        c: "info"
    },
    {
        n: "debug",
        c: "debug"
    },
    {
        n: "verbose",
        c: "trace"
    }
];
/**
 * A simple Immutable Console based diagnostic logger which will output any messages to the Console.
 * If you want to limit the amount of logging to a specific level or lower use the
 * {@link createLogLevelDiagLogger}
 */ var DiagConsoleLogger = /** @class */ function() {
    function DiagConsoleLogger() {
        function _consoleFunc(funcName) {
            return function() {
                var args = [];
                for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
                if (console) {
                    // Some environments only expose the console when the F12 developer console is open
                    // eslint-disable-next-line no-console
                    var theFunc = console[funcName];
                    if (typeof theFunc !== "function") // Not all environments support all functions
                    // eslint-disable-next-line no-console
                    theFunc = console.log;
                    // One last final check
                    if (typeof theFunc === "function") return theFunc.apply(console, args);
                }
            };
        }
        for(var i = 0; i < consoleMap.length; i++)this[consoleMap[i].n] = _consoleFunc(consoleMap[i].c);
    }
    return DiagConsoleLogger;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"fl46x":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NoopMeter", ()=>NoopMeter);
parcelHelpers.export(exports, "NoopMetric", ()=>NoopMetric);
parcelHelpers.export(exports, "NoopCounterMetric", ()=>NoopCounterMetric);
parcelHelpers.export(exports, "NoopUpDownCounterMetric", ()=>NoopUpDownCounterMetric);
parcelHelpers.export(exports, "NoopHistogramMetric", ()=>NoopHistogramMetric);
parcelHelpers.export(exports, "NoopObservableMetric", ()=>NoopObservableMetric);
parcelHelpers.export(exports, "NoopObservableCounterMetric", ()=>NoopObservableCounterMetric);
parcelHelpers.export(exports, "NoopObservableGaugeMetric", ()=>NoopObservableGaugeMetric);
parcelHelpers.export(exports, "NoopObservableUpDownCounterMetric", ()=>NoopObservableUpDownCounterMetric);
parcelHelpers.export(exports, "NOOP_METER", ()=>NOOP_METER);
parcelHelpers.export(exports, "NOOP_COUNTER_METRIC", ()=>NOOP_COUNTER_METRIC);
parcelHelpers.export(exports, "NOOP_HISTOGRAM_METRIC", ()=>NOOP_HISTOGRAM_METRIC);
parcelHelpers.export(exports, "NOOP_UP_DOWN_COUNTER_METRIC", ()=>NOOP_UP_DOWN_COUNTER_METRIC);
parcelHelpers.export(exports, "NOOP_OBSERVABLE_COUNTER_METRIC", ()=>NOOP_OBSERVABLE_COUNTER_METRIC);
parcelHelpers.export(exports, "NOOP_OBSERVABLE_GAUGE_METRIC", ()=>NOOP_OBSERVABLE_GAUGE_METRIC);
parcelHelpers.export(exports, "NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC", ()=>NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC);
/**
 * Create a no-op Meter
 */ parcelHelpers.export(exports, "createNoopMeter", ()=>createNoopMeter);
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
/**
 * NoopMeter is a noop implementation of the {@link Meter} interface. It reuses
 * constant NoopMetrics for all of its methods.
 */ var NoopMeter = /** @class */ function() {
    function NoopMeter() {}
    /**
     * @see {@link Meter.createHistogram}
     */ NoopMeter.prototype.createHistogram = function(_name, _options) {
        return NOOP_HISTOGRAM_METRIC;
    };
    /**
     * @see {@link Meter.createCounter}
     */ NoopMeter.prototype.createCounter = function(_name, _options) {
        return NOOP_COUNTER_METRIC;
    };
    /**
     * @see {@link Meter.createUpDownCounter}
     */ NoopMeter.prototype.createUpDownCounter = function(_name, _options) {
        return NOOP_UP_DOWN_COUNTER_METRIC;
    };
    /**
     * @see {@link Meter.createObservableGauge}
     */ NoopMeter.prototype.createObservableGauge = function(_name, _options) {
        return NOOP_OBSERVABLE_GAUGE_METRIC;
    };
    /**
     * @see {@link Meter.createObservableCounter}
     */ NoopMeter.prototype.createObservableCounter = function(_name, _options) {
        return NOOP_OBSERVABLE_COUNTER_METRIC;
    };
    /**
     * @see {@link Meter.createObservableUpDownCounter}
     */ NoopMeter.prototype.createObservableUpDownCounter = function(_name, _options) {
        return NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
    };
    /**
     * @see {@link Meter.addBatchObservableCallback}
     */ NoopMeter.prototype.addBatchObservableCallback = function(_callback, _observables) {};
    /**
     * @see {@link Meter.removeBatchObservableCallback}
     */ NoopMeter.prototype.removeBatchObservableCallback = function(_callback) {};
    return NoopMeter;
}();
var NoopMetric = /** @class */ function() {
    function NoopMetric() {}
    return NoopMetric;
}();
var NoopCounterMetric = /** @class */ function(_super) {
    __extends(NoopCounterMetric, _super);
    function NoopCounterMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopCounterMetric.prototype.add = function(_value, _attributes) {};
    return NoopCounterMetric;
}(NoopMetric);
var NoopUpDownCounterMetric = /** @class */ function(_super) {
    __extends(NoopUpDownCounterMetric, _super);
    function NoopUpDownCounterMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopUpDownCounterMetric.prototype.add = function(_value, _attributes) {};
    return NoopUpDownCounterMetric;
}(NoopMetric);
var NoopHistogramMetric = /** @class */ function(_super) {
    __extends(NoopHistogramMetric, _super);
    function NoopHistogramMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopHistogramMetric.prototype.record = function(_value, _attributes) {};
    return NoopHistogramMetric;
}(NoopMetric);
var NoopObservableMetric = /** @class */ function() {
    function NoopObservableMetric() {}
    NoopObservableMetric.prototype.addCallback = function(_callback) {};
    NoopObservableMetric.prototype.removeCallback = function(_callback) {};
    return NoopObservableMetric;
}();
var NoopObservableCounterMetric = /** @class */ function(_super) {
    __extends(NoopObservableCounterMetric, _super);
    function NoopObservableCounterMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoopObservableCounterMetric;
}(NoopObservableMetric);
var NoopObservableGaugeMetric = /** @class */ function(_super) {
    __extends(NoopObservableGaugeMetric, _super);
    function NoopObservableGaugeMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoopObservableGaugeMetric;
}(NoopObservableMetric);
var NoopObservableUpDownCounterMetric = /** @class */ function(_super) {
    __extends(NoopObservableUpDownCounterMetric, _super);
    function NoopObservableUpDownCounterMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoopObservableUpDownCounterMetric;
}(NoopObservableMetric);
var NOOP_METER = new NoopMeter();
var NOOP_COUNTER_METRIC = new NoopCounterMetric();
var NOOP_HISTOGRAM_METRIC = new NoopHistogramMetric();
var NOOP_UP_DOWN_COUNTER_METRIC = new NoopUpDownCounterMetric();
var NOOP_OBSERVABLE_COUNTER_METRIC = new NoopObservableCounterMetric();
var NOOP_OBSERVABLE_GAUGE_METRIC = new NoopObservableGaugeMetric();
var NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new NoopObservableUpDownCounterMetric();
function createNoopMeter() {
    return NOOP_METER;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"hbEfG":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** The Type of value. It describes how the data is reported. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ValueType", ()=>ValueType);
var ValueType;
(function(ValueType) {
    ValueType[ValueType["INT"] = 0] = "INT";
    ValueType[ValueType["DOUBLE"] = 1] = "DOUBLE";
})(ValueType || (ValueType = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"fbpGl":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultTextMapGetter", ()=>defaultTextMapGetter);
parcelHelpers.export(exports, "defaultTextMapSetter", ()=>defaultTextMapSetter);
var defaultTextMapGetter = {
    get: function(carrier, key) {
        if (carrier == null) return undefined;
        return carrier[key];
    },
    keys: function(carrier) {
        if (carrier == null) return [];
        return Object.keys(carrier);
    }
};
var defaultTextMapSetter = {
    set: function(carrier, key, value) {
        if (carrier == null) return;
        carrier[key] = value;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"4RJSP":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProxyTracer", ()=>ProxyTracer);
var _noopTracer = require("./NoopTracer");
var NOOP_TRACER = new (0, _noopTracer.NoopTracer)();
/**
 * Proxy tracer provided by the proxy tracer provider
 */ var ProxyTracer = /** @class */ function() {
    function ProxyTracer(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    ProxyTracer.prototype.startSpan = function(name, options, context) {
        return this._getTracer().startSpan(name, options, context);
    };
    ProxyTracer.prototype.startActiveSpan = function(_name, _options, _context, _fn) {
        var tracer = this._getTracer();
        return Reflect.apply(tracer.startActiveSpan, tracer, arguments);
    };
    /**
     * Try to get a tracer from the proxy tracer provider.
     * If the proxy tracer provider has no delegate, return a noop tracer.
     */ ProxyTracer.prototype._getTracer = function() {
        if (this._delegate) return this._delegate;
        var tracer = this._provider.getDelegateTracer(this.name, this.version, this.options);
        if (!tracer) return NOOP_TRACER;
        this._delegate = tracer;
        return this._delegate;
    };
    return ProxyTracer;
}();

},{"./NoopTracer":"ciEOJ","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"ciEOJ":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NoopTracer", ()=>NoopTracer);
var _context = require("../api/context");
var _contextUtils = require("../trace/context-utils");
var _nonRecordingSpan = require("./NonRecordingSpan");
var _spancontextUtils = require("./spancontext-utils");
var contextApi = (0, _context.ContextAPI).getInstance();
/**
 * No-op implementations of {@link Tracer}.
 */ var NoopTracer = /** @class */ function() {
    function NoopTracer() {}
    // startSpan starts a noop span.
    NoopTracer.prototype.startSpan = function(name, options, context) {
        if (context === void 0) context = contextApi.active();
        var root = Boolean(options === null || options === void 0 ? void 0 : options.root);
        if (root) return new (0, _nonRecordingSpan.NonRecordingSpan)();
        var parentFromContext = context && (0, _contextUtils.getSpanContext)(context);
        if (isSpanContext(parentFromContext) && (0, _spancontextUtils.isSpanContextValid)(parentFromContext)) return new (0, _nonRecordingSpan.NonRecordingSpan)(parentFromContext);
        else return new (0, _nonRecordingSpan.NonRecordingSpan)();
    };
    NoopTracer.prototype.startActiveSpan = function(name, arg2, arg3, arg4) {
        var opts;
        var ctx;
        var fn;
        if (arguments.length < 2) return;
        else if (arguments.length === 2) fn = arg2;
        else if (arguments.length === 3) {
            opts = arg2;
            fn = arg3;
        } else {
            opts = arg2;
            ctx = arg3;
            fn = arg4;
        }
        var parentContext = ctx !== null && ctx !== void 0 ? ctx : contextApi.active();
        var span = this.startSpan(name, opts, parentContext);
        var contextWithSpanSet = (0, _contextUtils.setSpan)(parentContext, span);
        return contextApi.with(contextWithSpanSet, fn, undefined, span);
    };
    return NoopTracer;
}();
function isSpanContext(spanContext) {
    return typeof spanContext === "object" && typeof spanContext["spanId"] === "string" && typeof spanContext["traceId"] === "string" && typeof spanContext["traceFlags"] === "number";
}

},{"../api/context":"1ZQ7h","../trace/context-utils":"c8keb","./NonRecordingSpan":"80R4i","./spancontext-utils":"g40FB","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"1ZQ7h":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ContextAPI", ()=>ContextAPI);
var _noopContextManager = require("../context/NoopContextManager");
var _globalUtils = require("../internal/global-utils");
var _diag = require("./diag");
var __read = undefined && undefined.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = undefined && undefined.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var API_NAME = "context";
var NOOP_CONTEXT_MANAGER = new (0, _noopContextManager.NoopContextManager)();
/**
 * Singleton object which represents the entry point to the OpenTelemetry Context API
 */ var ContextAPI = /** @class */ function() {
    /** Empty private constructor prevents end users from constructing a new instance of the API */ function ContextAPI() {}
    /** Get the singleton instance of the Context API */ ContextAPI.getInstance = function() {
        if (!this._instance) this._instance = new ContextAPI();
        return this._instance;
    };
    /**
     * Set the current context manager.
     *
     * @returns true if the context manager was successfully registered, else false
     */ ContextAPI.prototype.setGlobalContextManager = function(contextManager) {
        return (0, _globalUtils.registerGlobal)(API_NAME, contextManager, (0, _diag.DiagAPI).instance());
    };
    /**
     * Get the currently active context
     */ ContextAPI.prototype.active = function() {
        return this._getContextManager().active();
    };
    /**
     * Execute a function with an active context
     *
     * @param context context to be active during function execution
     * @param fn function to execute in a context
     * @param thisArg optional receiver to be used for calling fn
     * @param args optional arguments forwarded to fn
     */ ContextAPI.prototype.with = function(context, fn, thisArg) {
        var _a;
        var args = [];
        for(var _i = 3; _i < arguments.length; _i++)args[_i - 3] = arguments[_i];
        return (_a = this._getContextManager()).with.apply(_a, __spreadArray([
            context,
            fn,
            thisArg
        ], __read(args), false));
    };
    /**
     * Bind a context to a target function or event emitter
     *
     * @param context context to bind to the event emitter or function. Defaults to the currently active context
     * @param target function or event emitter to bind
     */ ContextAPI.prototype.bind = function(context, target) {
        return this._getContextManager().bind(context, target);
    };
    ContextAPI.prototype._getContextManager = function() {
        return (0, _globalUtils.getGlobal)(API_NAME) || NOOP_CONTEXT_MANAGER;
    };
    /** Disable and remove the global context manager */ ContextAPI.prototype.disable = function() {
        this._getContextManager().disable();
        (0, _globalUtils.unregisterGlobal)(API_NAME, (0, _diag.DiagAPI).instance());
    };
    return ContextAPI;
}();

},{"../context/NoopContextManager":"gHU7f","../internal/global-utils":"h4XAN","./diag":"gZAmK","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"gHU7f":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NoopContextManager", ()=>NoopContextManager);
var _context = require("./context");
var __read = undefined && undefined.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = undefined && undefined.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var NoopContextManager = /** @class */ function() {
    function NoopContextManager() {}
    NoopContextManager.prototype.active = function() {
        return 0, _context.ROOT_CONTEXT;
    };
    NoopContextManager.prototype.with = function(_context, fn, thisArg) {
        var args = [];
        for(var _i = 3; _i < arguments.length; _i++)args[_i - 3] = arguments[_i];
        return fn.call.apply(fn, __spreadArray([
            thisArg
        ], __read(args), false));
    };
    NoopContextManager.prototype.bind = function(_context, target) {
        return target;
    };
    NoopContextManager.prototype.enable = function() {
        return this;
    };
    NoopContextManager.prototype.disable = function() {
        return this;
    };
    return NoopContextManager;
}();

},{"./context":"8Hj8X","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"c8keb":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Return the span if one exists
 *
 * @param context context to get span from
 */ parcelHelpers.export(exports, "getSpan", ()=>getSpan);
/**
 * Gets the span from the current context, if one exists.
 */ parcelHelpers.export(exports, "getActiveSpan", ()=>getActiveSpan);
/**
 * Set the span on a context
 *
 * @param context context to use as parent
 * @param span span to set active
 */ parcelHelpers.export(exports, "setSpan", ()=>setSpan);
/**
 * Remove current span stored in the context
 *
 * @param context context to delete span from
 */ parcelHelpers.export(exports, "deleteSpan", ()=>deleteSpan);
/**
 * Wrap span context in a NoopSpan and set as span in a new
 * context
 *
 * @param context context to set active span on
 * @param spanContext span context to be wrapped
 */ parcelHelpers.export(exports, "setSpanContext", ()=>setSpanContext);
/**
 * Get the span context of the span if it exists.
 *
 * @param context context to get values from
 */ parcelHelpers.export(exports, "getSpanContext", ()=>getSpanContext);
var _context = require("../context/context");
var _nonRecordingSpan = require("./NonRecordingSpan");
var _context1 = require("../api/context");
/**
 * span key
 */ var SPAN_KEY = (0, _context.createContextKey)("OpenTelemetry Context Key SPAN");
function getSpan(context) {
    return context.getValue(SPAN_KEY) || undefined;
}
function getActiveSpan() {
    return getSpan((0, _context1.ContextAPI).getInstance().active());
}
function setSpan(context, span) {
    return context.setValue(SPAN_KEY, span);
}
function deleteSpan(context) {
    return context.deleteValue(SPAN_KEY);
}
function setSpanContext(context, spanContext) {
    return setSpan(context, new (0, _nonRecordingSpan.NonRecordingSpan)(spanContext));
}
function getSpanContext(context) {
    var _a;
    return (_a = getSpan(context)) === null || _a === void 0 ? void 0 : _a.spanContext();
}

},{"../context/context":"8Hj8X","./NonRecordingSpan":"80R4i","../api/context":"1ZQ7h","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"80R4i":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NonRecordingSpan", ()=>NonRecordingSpan);
var _invalidSpanConstants = require("./invalid-span-constants");
/**
 * The NonRecordingSpan is the default {@link Span} that is used when no Span
 * implementation is available. All operations are no-op including context
 * propagation.
 */ var NonRecordingSpan = /** @class */ function() {
    function NonRecordingSpan(_spanContext) {
        if (_spanContext === void 0) _spanContext = (0, _invalidSpanConstants.INVALID_SPAN_CONTEXT);
        this._spanContext = _spanContext;
    }
    // Returns a SpanContext.
    NonRecordingSpan.prototype.spanContext = function() {
        return this._spanContext;
    };
    // By default does nothing
    NonRecordingSpan.prototype.setAttribute = function(_key, _value) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.setAttributes = function(_attributes) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.addEvent = function(_name, _attributes) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.setStatus = function(_status) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.updateName = function(_name) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.end = function(_endTime) {};
    // isRecording always returns false for NonRecordingSpan.
    NonRecordingSpan.prototype.isRecording = function() {
        return false;
    };
    // By default does nothing
    NonRecordingSpan.prototype.recordException = function(_exception, _time) {};
    return NonRecordingSpan;
}();

},{"./invalid-span-constants":"9v7Cm","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"9v7Cm":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "INVALID_SPANID", ()=>INVALID_SPANID);
parcelHelpers.export(exports, "INVALID_TRACEID", ()=>INVALID_TRACEID);
parcelHelpers.export(exports, "INVALID_SPAN_CONTEXT", ()=>INVALID_SPAN_CONTEXT);
var _traceFlags = require("./trace_flags");
var INVALID_SPANID = "0000000000000000";
var INVALID_TRACEID = "00000000000000000000000000000000";
var INVALID_SPAN_CONTEXT = {
    traceId: INVALID_TRACEID,
    spanId: INVALID_SPANID,
    traceFlags: (0, _traceFlags.TraceFlags).NONE
};

},{"./trace_flags":"58Fpe","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"58Fpe":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TraceFlags", ()=>TraceFlags);
var TraceFlags;
(function(TraceFlags) {
    /** Represents no flag set. */ TraceFlags[TraceFlags["NONE"] = 0] = "NONE";
    /** Bit to represent whether trace is sampled in trace flags. */ TraceFlags[TraceFlags["SAMPLED"] = 1] = "SAMPLED";
})(TraceFlags || (TraceFlags = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"g40FB":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isValidTraceId", ()=>isValidTraceId);
parcelHelpers.export(exports, "isValidSpanId", ()=>isValidSpanId);
/**
 * Returns true if this {@link SpanContext} is valid.
 * @return true if this {@link SpanContext} is valid.
 */ parcelHelpers.export(exports, "isSpanContextValid", ()=>isSpanContextValid);
/**
 * Wrap the given {@link SpanContext} in a new non-recording {@link Span}
 *
 * @param spanContext span context to be wrapped
 * @returns a new non-recording {@link Span} with the provided context
 */ parcelHelpers.export(exports, "wrapSpanContext", ()=>wrapSpanContext);
var _invalidSpanConstants = require("./invalid-span-constants");
var _nonRecordingSpan = require("./NonRecordingSpan");
var VALID_TRACEID_REGEX = /^([0-9a-f]{32})$/i;
var VALID_SPANID_REGEX = /^[0-9a-f]{16}$/i;
function isValidTraceId(traceId) {
    return VALID_TRACEID_REGEX.test(traceId) && traceId !== (0, _invalidSpanConstants.INVALID_TRACEID);
}
function isValidSpanId(spanId) {
    return VALID_SPANID_REGEX.test(spanId) && spanId !== (0, _invalidSpanConstants.INVALID_SPANID);
}
function isSpanContextValid(spanContext) {
    return isValidTraceId(spanContext.traceId) && isValidSpanId(spanContext.spanId);
}
function wrapSpanContext(spanContext) {
    return new (0, _nonRecordingSpan.NonRecordingSpan)(spanContext);
}

},{"./invalid-span-constants":"9v7Cm","./NonRecordingSpan":"80R4i","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"5OsDv":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProxyTracerProvider", ()=>ProxyTracerProvider);
var _proxyTracer = require("./ProxyTracer");
var _noopTracerProvider = require("./NoopTracerProvider");
var NOOP_TRACER_PROVIDER = new (0, _noopTracerProvider.NoopTracerProvider)();
/**
 * Tracer provider which provides {@link ProxyTracer}s.
 *
 * Before a delegate is set, tracers provided are NoOp.
 *   When a delegate is set, traces are provided from the delegate.
 *   When a delegate is set after tracers have already been provided,
 *   all tracers already provided will use the provided delegate implementation.
 */ var ProxyTracerProvider = /** @class */ function() {
    function ProxyTracerProvider() {}
    /**
     * Get a {@link ProxyTracer}
     */ ProxyTracerProvider.prototype.getTracer = function(name, version, options) {
        var _a;
        return (_a = this.getDelegateTracer(name, version, options)) !== null && _a !== void 0 ? _a : new (0, _proxyTracer.ProxyTracer)(this, name, version, options);
    };
    ProxyTracerProvider.prototype.getDelegate = function() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : NOOP_TRACER_PROVIDER;
    };
    /**
     * Set the delegate tracer provider
     */ ProxyTracerProvider.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
    };
    ProxyTracerProvider.prototype.getDelegateTracer = function(name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getTracer(name, version, options);
    };
    return ProxyTracerProvider;
}();

},{"./ProxyTracer":"4RJSP","./NoopTracerProvider":"j8CJP","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"j8CJP":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NoopTracerProvider", ()=>NoopTracerProvider);
var _noopTracer = require("./NoopTracer");
/**
 * An implementation of the {@link TracerProvider} which returns an impotent
 * Tracer for all calls to `getTracer`.
 *
 * All operations are no-op.
 */ var NoopTracerProvider = /** @class */ function() {
    function NoopTracerProvider() {}
    NoopTracerProvider.prototype.getTracer = function(_name, _version, _options) {
        return new (0, _noopTracer.NoopTracer)();
    };
    return NoopTracerProvider;
}();

},{"./NoopTracer":"ciEOJ","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"9hHpb":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @deprecated use the one declared in @opentelemetry/sdk-trace-base instead.
 * A sampling decision that determines how a {@link Span} will be recorded
 * and collected.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SamplingDecision", ()=>SamplingDecision);
var SamplingDecision;
(function(SamplingDecision) {
    /**
     * `Span.isRecording() === false`, span will not be recorded and all events
     * and attributes will be dropped.
     */ SamplingDecision[SamplingDecision["NOT_RECORD"] = 0] = "NOT_RECORD";
    /**
     * `Span.isRecording() === true`, but `Sampled` flag in {@link TraceFlags}
     * MUST NOT be set.
     */ SamplingDecision[SamplingDecision["RECORD"] = 1] = "RECORD";
    /**
     * `Span.isRecording() === true` AND `Sampled` flag in {@link TraceFlags}
     * MUST be set.
     */ SamplingDecision[SamplingDecision["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
})(SamplingDecision || (SamplingDecision = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"8JdQL":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SpanKind", ()=>SpanKind);
var SpanKind;
(function(SpanKind) {
    /** Default value. Indicates that the span is used internally. */ SpanKind[SpanKind["INTERNAL"] = 0] = "INTERNAL";
    /**
     * Indicates that the span covers server-side handling of an RPC or other
     * remote request.
     */ SpanKind[SpanKind["SERVER"] = 1] = "SERVER";
    /**
     * Indicates that the span covers the client-side wrapper around an RPC or
     * other remote request.
     */ SpanKind[SpanKind["CLIENT"] = 2] = "CLIENT";
    /**
     * Indicates that the span describes producer sending a message to a
     * broker. Unlike client and server, there is no direct critical path latency
     * relationship between producer and consumer spans.
     */ SpanKind[SpanKind["PRODUCER"] = 3] = "PRODUCER";
    /**
     * Indicates that the span describes consumer receiving a message from a
     * broker. Unlike client and server, there is no direct critical path latency
     * relationship between producer and consumer spans.
     */ SpanKind[SpanKind["CONSUMER"] = 4] = "CONSUMER";
})(SpanKind || (SpanKind = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"caBJ1":[function(require,module,exports) {
/**
 * An enumeration of status codes.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SpanStatusCode", ()=>SpanStatusCode);
var SpanStatusCode;
(function(SpanStatusCode) {
    /**
     * The default status.
     */ SpanStatusCode[SpanStatusCode["UNSET"] = 0] = "UNSET";
    /**
     * The operation has been validated by an Application developer or
     * Operator to have completed successfully.
     */ SpanStatusCode[SpanStatusCode["OK"] = 1] = "OK";
    /**
     * The operation contains an error.
     */ SpanStatusCode[SpanStatusCode["ERROR"] = 2] = "ERROR";
})(SpanStatusCode || (SpanStatusCode = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"43yZb":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createTraceState", ()=>createTraceState);
var _tracestateImpl = require("./tracestate-impl");
function createTraceState(rawTraceState) {
    return new (0, _tracestateImpl.TraceStateImpl)(rawTraceState);
}

},{"./tracestate-impl":"c2Tax","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"c2Tax":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TraceStateImpl", ()=>TraceStateImpl);
var _tracestateValidators = require("./tracestate-validators");
var MAX_TRACE_STATE_ITEMS = 32;
var MAX_TRACE_STATE_LEN = 512;
var LIST_MEMBERS_SEPARATOR = ",";
var LIST_MEMBER_KEY_VALUE_SPLITTER = "=";
/**
 * TraceState must be a class and not a simple object type because of the spec
 * requirement (https://www.w3.org/TR/trace-context/#tracestate-field).
 *
 * Here is the list of allowed mutations:
 * - New key-value pair should be added into the beginning of the list
 * - The value of any key can be updated. Modified keys MUST be moved to the
 * beginning of the list.
 */ var TraceStateImpl = /** @class */ function() {
    function TraceStateImpl(rawTraceState) {
        this._internalState = new Map();
        if (rawTraceState) this._parse(rawTraceState);
    }
    TraceStateImpl.prototype.set = function(key, value) {
        // TODO: Benchmark the different approaches(map vs list) and
        // use the faster one.
        var traceState = this._clone();
        if (traceState._internalState.has(key)) traceState._internalState.delete(key);
        traceState._internalState.set(key, value);
        return traceState;
    };
    TraceStateImpl.prototype.unset = function(key) {
        var traceState = this._clone();
        traceState._internalState.delete(key);
        return traceState;
    };
    TraceStateImpl.prototype.get = function(key) {
        return this._internalState.get(key);
    };
    TraceStateImpl.prototype.serialize = function() {
        var _this = this;
        return this._keys().reduce(function(agg, key) {
            agg.push(key + LIST_MEMBER_KEY_VALUE_SPLITTER + _this.get(key));
            return agg;
        }, []).join(LIST_MEMBERS_SEPARATOR);
    };
    TraceStateImpl.prototype._parse = function(rawTraceState) {
        if (rawTraceState.length > MAX_TRACE_STATE_LEN) return;
        this._internalState = rawTraceState.split(LIST_MEMBERS_SEPARATOR).reverse() // Store in reverse so new keys (.set(...)) will be placed at the beginning
        .reduce(function(agg, part) {
            var listMember = part.trim(); // Optional Whitespace (OWS) handling
            var i = listMember.indexOf(LIST_MEMBER_KEY_VALUE_SPLITTER);
            if (i !== -1) {
                var key = listMember.slice(0, i);
                var value = listMember.slice(i + 1, part.length);
                if ((0, _tracestateValidators.validateKey)(key) && (0, _tracestateValidators.validateValue)(value)) agg.set(key, value);
            }
            return agg;
        }, new Map());
        // Because of the reverse() requirement, trunc must be done after map is created
        if (this._internalState.size > MAX_TRACE_STATE_ITEMS) this._internalState = new Map(Array.from(this._internalState.entries()).reverse() // Use reverse same as original tracestate parse chain
        .slice(0, MAX_TRACE_STATE_ITEMS));
    };
    TraceStateImpl.prototype._keys = function() {
        return Array.from(this._internalState.keys()).reverse();
    };
    TraceStateImpl.prototype._clone = function() {
        var traceState = new TraceStateImpl();
        traceState._internalState = new Map(this._internalState);
        return traceState;
    };
    return TraceStateImpl;
}();

},{"./tracestate-validators":"2Nd45","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"2Nd45":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Key is opaque string up to 256 characters printable. It MUST begin with a
 * lowercase letter, and can only contain lowercase letters a-z, digits 0-9,
 * underscores _, dashes -, asterisks *, and forward slashes /.
 * For multi-tenant vendor scenarios, an at sign (@) can be used to prefix the
 * vendor name. Vendors SHOULD set the tenant ID at the beginning of the key.
 * see https://www.w3.org/TR/trace-context/#key
 */ parcelHelpers.export(exports, "validateKey", ()=>validateKey);
/**
 * Value is opaque string up to 256 characters printable ASCII RFC0020
 * characters (i.e., the range 0x20 to 0x7E) except comma , and =.
 */ parcelHelpers.export(exports, "validateValue", ()=>validateValue);
var VALID_KEY_CHAR_RANGE = "[_0-9a-z-*/]";
var VALID_KEY = "[a-z]" + VALID_KEY_CHAR_RANGE + "{0,255}";
var VALID_VENDOR_KEY = "[a-z0-9]" + VALID_KEY_CHAR_RANGE + "{0,240}@[a-z]" + VALID_KEY_CHAR_RANGE + "{0,13}";
var VALID_KEY_REGEX = new RegExp("^(?:" + VALID_KEY + "|" + VALID_VENDOR_KEY + ")$");
var VALID_VALUE_BASE_REGEX = /^[ -~]{0,255}[!-~]$/;
var INVALID_VALUE_COMMA_EQUAL_REGEX = /,|=/;
function validateKey(key) {
    return VALID_KEY_REGEX.test(key);
}
function validateValue(value) {
    return VALID_VALUE_BASE_REGEX.test(value) && !INVALID_VALUE_COMMA_EQUAL_REGEX.test(value);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"5ZkHn":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "context", ()=>context);
var _context = require("./api/context");
var context = (0, _context.ContextAPI).getInstance();

},{"./api/context":"1ZQ7h","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"3Hdm6":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "diag", ()=>diag);
var _diag = require("./api/diag");
var diag = (0, _diag.DiagAPI).instance();

},{"./api/diag":"gZAmK","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"dKL2F":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "metrics", ()=>metrics);
var _metrics = require("./api/metrics");
var metrics = (0, _metrics.MetricsAPI).getInstance();

},{"./api/metrics":"hjL4Z","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"hjL4Z":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MetricsAPI", ()=>MetricsAPI);
var _noopMeterProvider = require("../metrics/NoopMeterProvider");
var _globalUtils = require("../internal/global-utils");
var _diag = require("./diag");
var API_NAME = "metrics";
/**
 * Singleton object which represents the entry point to the OpenTelemetry Metrics API
 */ var MetricsAPI = /** @class */ function() {
    /** Empty private constructor prevents end users from constructing a new instance of the API */ function MetricsAPI() {}
    /** Get the singleton instance of the Metrics API */ MetricsAPI.getInstance = function() {
        if (!this._instance) this._instance = new MetricsAPI();
        return this._instance;
    };
    /**
     * Set the current global meter provider.
     * Returns true if the meter provider was successfully registered, else false.
     */ MetricsAPI.prototype.setGlobalMeterProvider = function(provider) {
        return (0, _globalUtils.registerGlobal)(API_NAME, provider, (0, _diag.DiagAPI).instance());
    };
    /**
     * Returns the global meter provider.
     */ MetricsAPI.prototype.getMeterProvider = function() {
        return (0, _globalUtils.getGlobal)(API_NAME) || (0, _noopMeterProvider.NOOP_METER_PROVIDER);
    };
    /**
     * Returns a meter from the global meter provider.
     */ MetricsAPI.prototype.getMeter = function(name, version, options) {
        return this.getMeterProvider().getMeter(name, version, options);
    };
    /** Remove the global meter provider */ MetricsAPI.prototype.disable = function() {
        (0, _globalUtils.unregisterGlobal)(API_NAME, (0, _diag.DiagAPI).instance());
    };
    return MetricsAPI;
}();

},{"../metrics/NoopMeterProvider":"jPYvF","../internal/global-utils":"h4XAN","./diag":"gZAmK","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"jPYvF":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NoopMeterProvider", ()=>NoopMeterProvider);
parcelHelpers.export(exports, "NOOP_METER_PROVIDER", ()=>NOOP_METER_PROVIDER);
var _noopMeter = require("./NoopMeter");
/**
 * An implementation of the {@link MeterProvider} which returns an impotent Meter
 * for all calls to `getMeter`
 */ var NoopMeterProvider = /** @class */ function() {
    function NoopMeterProvider() {}
    NoopMeterProvider.prototype.getMeter = function(_name, _version, _options) {
        return 0, _noopMeter.NOOP_METER;
    };
    return NoopMeterProvider;
}();
var NOOP_METER_PROVIDER = new NoopMeterProvider();

},{"./NoopMeter":"fl46x","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"Nd6jQ":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "propagation", ()=>propagation);
var _propagation = require("./api/propagation");
var propagation = (0, _propagation.PropagationAPI).getInstance();

},{"./api/propagation":"9PDZ8","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"9PDZ8":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PropagationAPI", ()=>PropagationAPI);
var _globalUtils = require("../internal/global-utils");
var _noopTextMapPropagator = require("../propagation/NoopTextMapPropagator");
var _textMapPropagator = require("../propagation/TextMapPropagator");
var _contextHelpers = require("../baggage/context-helpers");
var _utils = require("../baggage/utils");
var _diag = require("./diag");
var API_NAME = "propagation";
var NOOP_TEXT_MAP_PROPAGATOR = new (0, _noopTextMapPropagator.NoopTextMapPropagator)();
/**
 * Singleton object which represents the entry point to the OpenTelemetry Propagation API
 */ var PropagationAPI = /** @class */ function() {
    /** Empty private constructor prevents end users from constructing a new instance of the API */ function PropagationAPI() {
        this.createBaggage = (0, _utils.createBaggage);
        this.getBaggage = (0, _contextHelpers.getBaggage);
        this.getActiveBaggage = (0, _contextHelpers.getActiveBaggage);
        this.setBaggage = (0, _contextHelpers.setBaggage);
        this.deleteBaggage = (0, _contextHelpers.deleteBaggage);
    }
    /** Get the singleton instance of the Propagator API */ PropagationAPI.getInstance = function() {
        if (!this._instance) this._instance = new PropagationAPI();
        return this._instance;
    };
    /**
     * Set the current propagator.
     *
     * @returns true if the propagator was successfully registered, else false
     */ PropagationAPI.prototype.setGlobalPropagator = function(propagator) {
        return (0, _globalUtils.registerGlobal)(API_NAME, propagator, (0, _diag.DiagAPI).instance());
    };
    /**
     * Inject context into a carrier to be propagated inter-process
     *
     * @param context Context carrying tracing data to inject
     * @param carrier carrier to inject context into
     * @param setter Function used to set values on the carrier
     */ PropagationAPI.prototype.inject = function(context, carrier, setter) {
        if (setter === void 0) setter = (0, _textMapPropagator.defaultTextMapSetter);
        return this._getGlobalPropagator().inject(context, carrier, setter);
    };
    /**
     * Extract context from a carrier
     *
     * @param context Context which the newly created context will inherit from
     * @param carrier Carrier to extract context from
     * @param getter Function used to extract keys from a carrier
     */ PropagationAPI.prototype.extract = function(context, carrier, getter) {
        if (getter === void 0) getter = (0, _textMapPropagator.defaultTextMapGetter);
        return this._getGlobalPropagator().extract(context, carrier, getter);
    };
    /**
     * Return a list of all fields which may be used by the propagator.
     */ PropagationAPI.prototype.fields = function() {
        return this._getGlobalPropagator().fields();
    };
    /** Remove the global propagator */ PropagationAPI.prototype.disable = function() {
        (0, _globalUtils.unregisterGlobal)(API_NAME, (0, _diag.DiagAPI).instance());
    };
    PropagationAPI.prototype._getGlobalPropagator = function() {
        return (0, _globalUtils.getGlobal)(API_NAME) || NOOP_TEXT_MAP_PROPAGATOR;
    };
    return PropagationAPI;
}();

},{"../internal/global-utils":"h4XAN","../propagation/NoopTextMapPropagator":"5aVXl","../propagation/TextMapPropagator":"fbpGl","../baggage/context-helpers":"lnCoA","../baggage/utils":"1FtTJ","./diag":"gZAmK","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"5aVXl":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * No-op implementations of {@link TextMapPropagator}.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NoopTextMapPropagator", ()=>NoopTextMapPropagator);
var NoopTextMapPropagator = /** @class */ function() {
    function NoopTextMapPropagator() {}
    /** Noop inject function does nothing */ NoopTextMapPropagator.prototype.inject = function(_context, _carrier) {};
    /** Noop extract function does nothing and returns the input context */ NoopTextMapPropagator.prototype.extract = function(context, _carrier) {
        return context;
    };
    NoopTextMapPropagator.prototype.fields = function() {
        return [];
    };
    return NoopTextMapPropagator;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"lnCoA":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Retrieve the current baggage from the given context
 *
 * @param {Context} Context that manage all context values
 * @returns {Baggage} Extracted baggage from the context
 */ parcelHelpers.export(exports, "getBaggage", ()=>getBaggage);
/**
 * Retrieve the current baggage from the active/current context
 *
 * @returns {Baggage} Extracted baggage from the context
 */ parcelHelpers.export(exports, "getActiveBaggage", ()=>getActiveBaggage);
/**
 * Store a baggage in the given context
 *
 * @param {Context} Context that manage all context values
 * @param {Baggage} baggage that will be set in the actual context
 */ parcelHelpers.export(exports, "setBaggage", ()=>setBaggage);
/**
 * Delete the baggage stored in the given context
 *
 * @param {Context} Context that manage all context values
 */ parcelHelpers.export(exports, "deleteBaggage", ()=>deleteBaggage);
var _context = require("../api/context");
var _context1 = require("../context/context");
/**
 * Baggage key
 */ var BAGGAGE_KEY = (0, _context1.createContextKey)("OpenTelemetry Baggage Key");
function getBaggage(context) {
    return context.getValue(BAGGAGE_KEY) || undefined;
}
function getActiveBaggage() {
    return getBaggage((0, _context.ContextAPI).getInstance().active());
}
function setBaggage(context, baggage) {
    return context.setValue(BAGGAGE_KEY, baggage);
}
function deleteBaggage(context) {
    return context.deleteValue(BAGGAGE_KEY);
}

},{"../api/context":"1ZQ7h","../context/context":"8Hj8X","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"hMrLV":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "trace", ()=>trace);
var _trace = require("./api/trace");
var trace = (0, _trace.TraceAPI).getInstance();

},{"./api/trace":"9U6uF","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"9U6uF":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TraceAPI", ()=>TraceAPI);
var _globalUtils = require("../internal/global-utils");
var _proxyTracerProvider = require("../trace/ProxyTracerProvider");
var _spancontextUtils = require("../trace/spancontext-utils");
var _contextUtils = require("../trace/context-utils");
var _diag = require("./diag");
var API_NAME = "trace";
/**
 * Singleton object which represents the entry point to the OpenTelemetry Tracing API
 */ var TraceAPI = /** @class */ function() {
    /** Empty private constructor prevents end users from constructing a new instance of the API */ function TraceAPI() {
        this._proxyTracerProvider = new (0, _proxyTracerProvider.ProxyTracerProvider)();
        this.wrapSpanContext = (0, _spancontextUtils.wrapSpanContext);
        this.isSpanContextValid = (0, _spancontextUtils.isSpanContextValid);
        this.deleteSpan = (0, _contextUtils.deleteSpan);
        this.getSpan = (0, _contextUtils.getSpan);
        this.getActiveSpan = (0, _contextUtils.getActiveSpan);
        this.getSpanContext = (0, _contextUtils.getSpanContext);
        this.setSpan = (0, _contextUtils.setSpan);
        this.setSpanContext = (0, _contextUtils.setSpanContext);
    }
    /** Get the singleton instance of the Trace API */ TraceAPI.getInstance = function() {
        if (!this._instance) this._instance = new TraceAPI();
        return this._instance;
    };
    /**
     * Set the current global tracer.
     *
     * @returns true if the tracer provider was successfully registered, else false
     */ TraceAPI.prototype.setGlobalTracerProvider = function(provider) {
        var success = (0, _globalUtils.registerGlobal)(API_NAME, this._proxyTracerProvider, (0, _diag.DiagAPI).instance());
        if (success) this._proxyTracerProvider.setDelegate(provider);
        return success;
    };
    /**
     * Returns the global tracer provider.
     */ TraceAPI.prototype.getTracerProvider = function() {
        return (0, _globalUtils.getGlobal)(API_NAME) || this._proxyTracerProvider;
    };
    /**
     * Returns a tracer from the global tracer provider.
     */ TraceAPI.prototype.getTracer = function(name, version) {
        return this.getTracerProvider().getTracer(name, version);
    };
    /** Remove the global tracer provider */ TraceAPI.prototype.disable = function() {
        (0, _globalUtils.unregisterGlobal)(API_NAME, (0, _diag.DiagAPI).instance());
        this._proxyTracerProvider = new (0, _proxyTracerProvider.ProxyTracerProvider)();
    };
    return TraceAPI;
}();

},{"../internal/global-utils":"h4XAN","../trace/ProxyTracerProvider":"5OsDv","../trace/spancontext-utils":"g40FB","../trace/context-utils":"c8keb","./diag":"gZAmK","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"dBsXh":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "baggageUtils", ()=>_utils);
parcelHelpers.export(exports, "internal", ()=>internal);
var _w3CbaggagePropagator = require("./baggage/propagation/W3CBaggagePropagator");
parcelHelpers.exportAll(_w3CbaggagePropagator, exports);
var _anchoredClock = require("./common/anchored-clock");
parcelHelpers.exportAll(_anchoredClock, exports);
var _attributes = require("./common/attributes");
parcelHelpers.exportAll(_attributes, exports);
var _globalErrorHandler = require("./common/global-error-handler");
parcelHelpers.exportAll(_globalErrorHandler, exports);
var _loggingErrorHandler = require("./common/logging-error-handler");
parcelHelpers.exportAll(_loggingErrorHandler, exports);
var _time = require("./common/time");
parcelHelpers.exportAll(_time, exports);
var _types = require("./common/types");
parcelHelpers.exportAll(_types, exports);
var _hexToBinary = require("./common/hex-to-binary");
parcelHelpers.exportAll(_hexToBinary, exports);
var _exportResult = require("./ExportResult");
parcelHelpers.exportAll(_exportResult, exports);
var _utils = require("./baggage/utils");
var _platform = require("./platform");
parcelHelpers.exportAll(_platform, exports);
var _composite = require("./propagation/composite");
parcelHelpers.exportAll(_composite, exports);
var _w3CtraceContextPropagator = require("./trace/W3CTraceContextPropagator");
parcelHelpers.exportAll(_w3CtraceContextPropagator, exports);
var _idGenerator = require("./trace/IdGenerator");
parcelHelpers.exportAll(_idGenerator, exports);
var _rpcMetadata = require("./trace/rpc-metadata");
parcelHelpers.exportAll(_rpcMetadata, exports);
var _alwaysOffSampler = require("./trace/sampler/AlwaysOffSampler");
parcelHelpers.exportAll(_alwaysOffSampler, exports);
var _alwaysOnSampler = require("./trace/sampler/AlwaysOnSampler");
parcelHelpers.exportAll(_alwaysOnSampler, exports);
var _parentBasedSampler = require("./trace/sampler/ParentBasedSampler");
parcelHelpers.exportAll(_parentBasedSampler, exports);
var _traceIdRatioBasedSampler = require("./trace/sampler/TraceIdRatioBasedSampler");
parcelHelpers.exportAll(_traceIdRatioBasedSampler, exports);
var _suppressTracing = require("./trace/suppress-tracing");
parcelHelpers.exportAll(_suppressTracing, exports);
var _traceState = require("./trace/TraceState");
parcelHelpers.exportAll(_traceState, exports);
var _environment = require("./utils/environment");
parcelHelpers.exportAll(_environment, exports);
var _merge = require("./utils/merge");
parcelHelpers.exportAll(_merge, exports);
var _sampling = require("./utils/sampling");
parcelHelpers.exportAll(_sampling, exports);
var _timeout = require("./utils/timeout");
parcelHelpers.exportAll(_timeout, exports);
var _url = require("./utils/url");
parcelHelpers.exportAll(_url, exports);
var _wrap = require("./utils/wrap");
parcelHelpers.exportAll(_wrap, exports);
var _callback = require("./utils/callback");
parcelHelpers.exportAll(_callback, exports);
var _version = require("./version");
parcelHelpers.exportAll(_version, exports);
var _exporter = require("./internal/exporter");
var internal = {
    _export: (0, _exporter._export)
};

},{"./baggage/propagation/W3CBaggagePropagator":"3dmoE","./common/anchored-clock":"6bEaW","./common/attributes":"bYq4q","./common/global-error-handler":"hKz5C","./common/logging-error-handler":"8D49l","./common/time":"oOZeC","./common/types":"dYgp0","./common/hex-to-binary":"5iTrj","./ExportResult":"2fJSh","./baggage/utils":"kLEpF","./platform":"a3NCV","./propagation/composite":"8mhmB","./trace/W3CTraceContextPropagator":"j30mQ","./trace/IdGenerator":"fzitc","./trace/rpc-metadata":"eyPsO","./trace/sampler/AlwaysOffSampler":"9KkRt","./trace/sampler/AlwaysOnSampler":"jalnp","./trace/sampler/ParentBasedSampler":"gERye","./trace/sampler/TraceIdRatioBasedSampler":"69Ird","./trace/suppress-tracing":"51l3B","./trace/TraceState":"9sU1J","./utils/environment":"k6o1y","./utils/merge":"6klbq","./utils/sampling":"fxM1u","./utils/timeout":"B1o2t","./utils/url":"lafWE","./utils/wrap":"kPm4I","./utils/callback":"Wira8","./version":"2JrQh","./internal/exporter":"4s27R","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"3dmoE":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "W3CBaggagePropagator", ()=>W3CBaggagePropagator);
var _api = require("@opentelemetry/api");
var _suppressTracing = require("../../trace/suppress-tracing");
var _constants = require("../constants");
var _utils = require("../utils");
/**
 * Propagates {@link Baggage} through Context format propagation.
 *
 * Based on the Baggage specification:
 * https://w3c.github.io/baggage/
 */ var W3CBaggagePropagator = /** @class */ function() {
    function W3CBaggagePropagator() {}
    W3CBaggagePropagator.prototype.inject = function(context, carrier, setter) {
        var baggage = (0, _api.propagation).getBaggage(context);
        if (!baggage || (0, _suppressTracing.isTracingSuppressed)(context)) return;
        var keyPairs = (0, _utils.getKeyPairs)(baggage).filter(function(pair) {
            return pair.length <= (0, _constants.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS);
        }).slice(0, (0, _constants.BAGGAGE_MAX_NAME_VALUE_PAIRS));
        var headerValue = (0, _utils.serializeKeyPairs)(keyPairs);
        if (headerValue.length > 0) setter.set(carrier, (0, _constants.BAGGAGE_HEADER), headerValue);
    };
    W3CBaggagePropagator.prototype.extract = function(context, carrier, getter) {
        var headerValue = getter.get(carrier, (0, _constants.BAGGAGE_HEADER));
        var baggageString = Array.isArray(headerValue) ? headerValue.join((0, _constants.BAGGAGE_ITEMS_SEPARATOR)) : headerValue;
        if (!baggageString) return context;
        var baggage = {};
        if (baggageString.length === 0) return context;
        var pairs = baggageString.split((0, _constants.BAGGAGE_ITEMS_SEPARATOR));
        pairs.forEach(function(entry) {
            var keyPair = (0, _utils.parsePairKeyValue)(entry);
            if (keyPair) {
                var baggageEntry = {
                    value: keyPair.value
                };
                if (keyPair.metadata) baggageEntry.metadata = keyPair.metadata;
                baggage[keyPair.key] = baggageEntry;
            }
        });
        if (Object.entries(baggage).length === 0) return context;
        return (0, _api.propagation).setBaggage(context, (0, _api.propagation).createBaggage(baggage));
    };
    W3CBaggagePropagator.prototype.fields = function() {
        return [
            (0, _constants.BAGGAGE_HEADER)
        ];
    };
    return W3CBaggagePropagator;
}();

},{"@opentelemetry/api":"6AC4z","../../trace/suppress-tracing":"51l3B","../constants":"bxSBV","../utils":"kLEpF","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"51l3B":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "suppressTracing", ()=>suppressTracing);
parcelHelpers.export(exports, "unsuppressTracing", ()=>unsuppressTracing);
parcelHelpers.export(exports, "isTracingSuppressed", ()=>isTracingSuppressed);
var _api = require("@opentelemetry/api");
var SUPPRESS_TRACING_KEY = (0, _api.createContextKey)("OpenTelemetry SDK Context Key SUPPRESS_TRACING");
function suppressTracing(context) {
    return context.setValue(SUPPRESS_TRACING_KEY, true);
}
function unsuppressTracing(context) {
    return context.deleteValue(SUPPRESS_TRACING_KEY);
}
function isTracingSuppressed(context) {
    return context.getValue(SUPPRESS_TRACING_KEY) === true;
}

},{"@opentelemetry/api":"6AC4z","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"bxSBV":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BAGGAGE_KEY_PAIR_SEPARATOR", ()=>BAGGAGE_KEY_PAIR_SEPARATOR);
parcelHelpers.export(exports, "BAGGAGE_PROPERTIES_SEPARATOR", ()=>BAGGAGE_PROPERTIES_SEPARATOR);
parcelHelpers.export(exports, "BAGGAGE_ITEMS_SEPARATOR", ()=>BAGGAGE_ITEMS_SEPARATOR);
parcelHelpers.export(exports, "BAGGAGE_HEADER", ()=>BAGGAGE_HEADER);
parcelHelpers.export(exports, "BAGGAGE_MAX_NAME_VALUE_PAIRS", ()=>BAGGAGE_MAX_NAME_VALUE_PAIRS);
parcelHelpers.export(exports, "BAGGAGE_MAX_PER_NAME_VALUE_PAIRS", ()=>BAGGAGE_MAX_PER_NAME_VALUE_PAIRS);
parcelHelpers.export(exports, "BAGGAGE_MAX_TOTAL_LENGTH", ()=>BAGGAGE_MAX_TOTAL_LENGTH);
var BAGGAGE_KEY_PAIR_SEPARATOR = "=";
var BAGGAGE_PROPERTIES_SEPARATOR = ";";
var BAGGAGE_ITEMS_SEPARATOR = ",";
var BAGGAGE_HEADER = "baggage";
var BAGGAGE_MAX_NAME_VALUE_PAIRS = 180;
var BAGGAGE_MAX_PER_NAME_VALUE_PAIRS = 4096;
var BAGGAGE_MAX_TOTAL_LENGTH = 8192;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"kLEpF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "serializeKeyPairs", ()=>serializeKeyPairs);
parcelHelpers.export(exports, "getKeyPairs", ()=>getKeyPairs);
parcelHelpers.export(exports, "parsePairKeyValue", ()=>parsePairKeyValue);
/**
 * Parse a string serialized in the baggage HTTP Format (without metadata):
 * https://github.com/w3c/baggage/blob/master/baggage/HTTP_HEADER_FORMAT.md
 */ parcelHelpers.export(exports, "parseKeyPairsIntoRecord", ()=>parseKeyPairsIntoRecord);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _api = require("@opentelemetry/api");
var _constants = require("./constants");
var __read = undefined && undefined.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
function serializeKeyPairs(keyPairs) {
    return keyPairs.reduce(function(hValue, current) {
        var value = "" + hValue + (hValue !== "" ? (0, _constants.BAGGAGE_ITEMS_SEPARATOR) : "") + current;
        return value.length > (0, _constants.BAGGAGE_MAX_TOTAL_LENGTH) ? hValue : value;
    }, "");
}
function getKeyPairs(baggage) {
    return baggage.getAllEntries().map(function(_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        var entry = encodeURIComponent(key) + "=" + encodeURIComponent(value.value);
        // include opaque metadata if provided
        // NOTE: we intentionally don't URI-encode the metadata - that responsibility falls on the metadata implementation
        if (value.metadata !== undefined) entry += (0, _constants.BAGGAGE_PROPERTIES_SEPARATOR) + value.metadata.toString();
        return entry;
    });
}
function parsePairKeyValue(entry) {
    var valueProps = entry.split((0, _constants.BAGGAGE_PROPERTIES_SEPARATOR));
    if (valueProps.length <= 0) return;
    var keyPairPart = valueProps.shift();
    if (!keyPairPart) return;
    var separatorIndex = keyPairPart.indexOf((0, _constants.BAGGAGE_KEY_PAIR_SEPARATOR));
    if (separatorIndex <= 0) return;
    var key = decodeURIComponent(keyPairPart.substring(0, separatorIndex).trim());
    var value = decodeURIComponent(keyPairPart.substring(separatorIndex + 1).trim());
    var metadata;
    if (valueProps.length > 0) metadata = (0, _api.baggageEntryMetadataFromString)(valueProps.join((0, _constants.BAGGAGE_PROPERTIES_SEPARATOR)));
    return {
        key: key,
        value: value,
        metadata: metadata
    };
}
function parseKeyPairsIntoRecord(value) {
    if (typeof value !== "string" || value.length === 0) return {};
    return value.split((0, _constants.BAGGAGE_ITEMS_SEPARATOR)).map(function(entry) {
        return parsePairKeyValue(entry);
    }).filter(function(keyPair) {
        return keyPair !== undefined && keyPair.value.length > 0;
    }).reduce(function(headers, keyPair) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        headers[keyPair.key] = keyPair.value;
        return headers;
    }, {});
}

},{"@opentelemetry/api":"6AC4z","./constants":"bxSBV","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"6bEaW":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A utility for returning wall times anchored to a given point in time. Wall time measurements will
 * not be taken from the system, but instead are computed by adding a monotonic clock time
 * to the anchor point.
 *
 * This is needed because the system time can change and result in unexpected situations like
 * spans ending before they are started. Creating an anchored clock for each local root span
 * ensures that span timings and durations are accurate while preventing span times from drifting
 * too far from the system clock.
 *
 * Only creating an anchored clock once per local trace ensures span times are correct relative
 * to each other. For example, a child span will never have a start time before its parent even
 * if the system clock is corrected during the local trace.
 *
 * Heavily inspired by the OTel Java anchored clock
 * https://github.com/open-telemetry/opentelemetry-java/blob/main/sdk/trace/src/main/java/io/opentelemetry/sdk/trace/AnchoredClock.java
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AnchoredClock", ()=>AnchoredClock);
var AnchoredClock = /** @class */ function() {
    /**
     * Create a new AnchoredClock anchored to the current time returned by systemClock.
     *
     * @param systemClock should be a clock that returns the number of milliseconds since January 1 1970 such as Date
     * @param monotonicClock should be a clock that counts milliseconds monotonically such as window.performance or perf_hooks.performance
     */ function AnchoredClock(systemClock, monotonicClock) {
        this._monotonicClock = monotonicClock;
        this._epochMillis = systemClock.now();
        this._performanceMillis = monotonicClock.now();
    }
    /**
     * Returns the current time by adding the number of milliseconds since the
     * AnchoredClock was created to the creation epoch time
     */ AnchoredClock.prototype.now = function() {
        var delta = this._monotonicClock.now() - this._performanceMillis;
        return this._epochMillis + delta;
    };
    return AnchoredClock;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"bYq4q":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sanitizeAttributes", ()=>sanitizeAttributes);
parcelHelpers.export(exports, "isAttributeKey", ()=>isAttributeKey);
parcelHelpers.export(exports, "isAttributeValue", ()=>isAttributeValue);
var _api = require("@opentelemetry/api");
var __values = undefined && undefined.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = undefined && undefined.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
function sanitizeAttributes(attributes) {
    var e_1, _a;
    var out = {};
    if (typeof attributes !== "object" || attributes == null) return out;
    try {
        for(var _b = __values(Object.entries(attributes)), _c = _b.next(); !_c.done; _c = _b.next()){
            var _d = __read(_c.value, 2), key = _d[0], val = _d[1];
            if (!isAttributeKey(key)) {
                (0, _api.diag).warn("Invalid attribute key: " + key);
                continue;
            }
            if (!isAttributeValue(val)) {
                (0, _api.diag).warn("Invalid attribute value set for key: " + key);
                continue;
            }
            if (Array.isArray(val)) out[key] = val.slice();
            else out[key] = val;
        }
    } catch (e_1_1) {
        e_1 = {
            error: e_1_1
        };
    } finally{
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally{
            if (e_1) throw e_1.error;
        }
    }
    return out;
}
function isAttributeKey(key) {
    return typeof key === "string" && key.length > 0;
}
function isAttributeValue(val) {
    if (val == null) return true;
    if (Array.isArray(val)) return isHomogeneousAttributeValueArray(val);
    return isValidPrimitiveAttributeValue(val);
}
function isHomogeneousAttributeValueArray(arr) {
    var e_2, _a;
    var type;
    try {
        for(var arr_1 = __values(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()){
            var element = arr_1_1.value;
            // null/undefined elements are allowed
            if (element == null) continue;
            if (!type) {
                if (isValidPrimitiveAttributeValue(element)) {
                    type = typeof element;
                    continue;
                }
                // encountered an invalid primitive
                return false;
            }
            if (typeof element === type) continue;
            return false;
        }
    } catch (e_2_1) {
        e_2 = {
            error: e_2_1
        };
    } finally{
        try {
            if (arr_1_1 && !arr_1_1.done && (_a = arr_1.return)) _a.call(arr_1);
        } finally{
            if (e_2) throw e_2.error;
        }
    }
    return true;
}
function isValidPrimitiveAttributeValue(val) {
    switch(typeof val){
        case "number":
        case "boolean":
        case "string":
            return true;
    }
    return false;
}

},{"@opentelemetry/api":"6AC4z","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"hKz5C":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Set the global error handler
 * @param {ErrorHandler} handler
 */ parcelHelpers.export(exports, "setGlobalErrorHandler", ()=>setGlobalErrorHandler);
/**
 * Return the global error handler
 * @param {Exception} ex
 */ parcelHelpers.export(exports, "globalErrorHandler", ()=>globalErrorHandler);
var _loggingErrorHandler = require("./logging-error-handler");
/** The global error handler delegate */ var delegateHandler = (0, _loggingErrorHandler.loggingErrorHandler)();
function setGlobalErrorHandler(handler) {
    delegateHandler = handler;
}
function globalErrorHandler(ex) {
    try {
        delegateHandler(ex);
    } catch (_a) {} // eslint-disable-line no-empty
}

},{"./logging-error-handler":"8D49l","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"8D49l":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Returns a function that logs an error using the provided logger, or a
 * console logger if one was not provided.
 */ parcelHelpers.export(exports, "loggingErrorHandler", ()=>loggingErrorHandler);
var _api = require("@opentelemetry/api");
function loggingErrorHandler() {
    return function(ex) {
        (0, _api.diag).error(stringifyException(ex));
    };
}
/**
 * Converts an exception into a string representation
 * @param {Exception} ex
 */ function stringifyException(ex) {
    if (typeof ex === "string") return ex;
    else return JSON.stringify(flattenException(ex));
}
/**
 * Flattens an exception into key-value pairs by traversing the prototype chain
 * and coercing values to strings. Duplicate properties will not be overwritten;
 * the first insert wins.
 */ function flattenException(ex) {
    var result = {};
    var current = ex;
    while(current !== null){
        Object.getOwnPropertyNames(current).forEach(function(propertyName) {
            if (result[propertyName]) return;
            var value = current[propertyName];
            if (value) result[propertyName] = String(value);
        });
        current = Object.getPrototypeOf(current);
    }
    return result;
}

},{"@opentelemetry/api":"6AC4z","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"oOZeC":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Converts a number of milliseconds from epoch to HrTime([seconds, remainder in nanoseconds]).
 * @param epochMillis
 */ parcelHelpers.export(exports, "millisToHrTime", ()=>millisToHrTime);
parcelHelpers.export(exports, "getTimeOrigin", ()=>getTimeOrigin);
/**
 * Returns an hrtime calculated via performance component.
 * @param performanceNow
 */ parcelHelpers.export(exports, "hrTime", ()=>hrTime);
/**
 *
 * Converts a TimeInput to an HrTime, defaults to _hrtime().
 * @param time
 */ parcelHelpers.export(exports, "timeInputToHrTime", ()=>timeInputToHrTime);
/**
 * Returns a duration of two hrTime.
 * @param startTime
 * @param endTime
 */ parcelHelpers.export(exports, "hrTimeDuration", ()=>hrTimeDuration);
/**
 * Convert hrTime to timestamp, for example "2019-05-14T17:00:00.000123456Z"
 * @param time
 */ parcelHelpers.export(exports, "hrTimeToTimeStamp", ()=>hrTimeToTimeStamp);
/**
 * Convert hrTime to nanoseconds.
 * @param time
 */ parcelHelpers.export(exports, "hrTimeToNanoseconds", ()=>hrTimeToNanoseconds);
/**
 * Convert hrTime to milliseconds.
 * @param time
 */ parcelHelpers.export(exports, "hrTimeToMilliseconds", ()=>hrTimeToMilliseconds);
/**
 * Convert hrTime to microseconds.
 * @param time
 */ parcelHelpers.export(exports, "hrTimeToMicroseconds", ()=>hrTimeToMicroseconds);
/**
 * check if time is HrTime
 * @param value
 */ parcelHelpers.export(exports, "isTimeInputHrTime", ()=>isTimeInputHrTime);
/**
 * check if input value is a correct types.TimeInput
 * @param value
 */ parcelHelpers.export(exports, "isTimeInput", ()=>isTimeInput);
/**
 * Given 2 HrTime formatted times, return their sum as an HrTime.
 */ parcelHelpers.export(exports, "addHrTimes", ()=>addHrTimes);
var _platform = require("../platform");
var NANOSECOND_DIGITS = 9;
var NANOSECOND_DIGITS_IN_MILLIS = 6;
var MILLISECONDS_TO_NANOSECONDS = Math.pow(10, NANOSECOND_DIGITS_IN_MILLIS);
var SECOND_TO_NANOSECONDS = Math.pow(10, NANOSECOND_DIGITS);
function millisToHrTime(epochMillis) {
    var epochSeconds = epochMillis / 1000;
    // Decimals only.
    var seconds = Math.trunc(epochSeconds);
    // Round sub-nanosecond accuracy to nanosecond.
    var nanos = Math.round(epochMillis % 1000 * MILLISECONDS_TO_NANOSECONDS);
    return [
        seconds,
        nanos
    ];
}
function getTimeOrigin() {
    var timeOrigin = (0, _platform.otperformance).timeOrigin;
    if (typeof timeOrigin !== "number") {
        var perf = (0, _platform.otperformance);
        timeOrigin = perf.timing && perf.timing.fetchStart;
    }
    return timeOrigin;
}
function hrTime(performanceNow) {
    var timeOrigin = millisToHrTime(getTimeOrigin());
    var now = millisToHrTime(typeof performanceNow === "number" ? performanceNow : (0, _platform.otperformance).now());
    return addHrTimes(timeOrigin, now);
}
function timeInputToHrTime(time) {
    // process.hrtime
    if (isTimeInputHrTime(time)) return time;
    else if (typeof time === "number") {
        // Must be a performance.now() if it's smaller than process start time.
        if (time < getTimeOrigin()) return hrTime(time);
        else // epoch milliseconds or performance.timeOrigin
        return millisToHrTime(time);
    } else if (time instanceof Date) return millisToHrTime(time.getTime());
    else throw TypeError("Invalid input type");
}
function hrTimeDuration(startTime, endTime) {
    var seconds = endTime[0] - startTime[0];
    var nanos = endTime[1] - startTime[1];
    // overflow
    if (nanos < 0) {
        seconds -= 1;
        // negate
        nanos += SECOND_TO_NANOSECONDS;
    }
    return [
        seconds,
        nanos
    ];
}
function hrTimeToTimeStamp(time) {
    var precision = NANOSECOND_DIGITS;
    var tmp = "" + "0".repeat(precision) + time[1] + "Z";
    var nanoString = tmp.substr(tmp.length - precision - 1);
    var date = new Date(time[0] * 1000).toISOString();
    return date.replace("000Z", nanoString);
}
function hrTimeToNanoseconds(time) {
    return time[0] * SECOND_TO_NANOSECONDS + time[1];
}
function hrTimeToMilliseconds(time) {
    return time[0] * 1e3 + time[1] / 1e6;
}
function hrTimeToMicroseconds(time) {
    return time[0] * 1e6 + time[1] / 1e3;
}
function isTimeInputHrTime(value) {
    return Array.isArray(value) && value.length === 2 && typeof value[0] === "number" && typeof value[1] === "number";
}
function isTimeInput(value) {
    return isTimeInputHrTime(value) || typeof value === "number" || value instanceof Date;
}
function addHrTimes(time1, time2) {
    var out = [
        time1[0] + time2[0],
        time1[1] + time2[1]
    ];
    // Nanoseconds
    if (out[1] >= SECOND_TO_NANOSECONDS) {
        out[1] -= SECOND_TO_NANOSECONDS;
        out[0] += 1;
    }
    return out;
}

},{"../platform":"a3NCV","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"a3NCV":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _environment = require("./environment");
parcelHelpers.exportAll(_environment, exports);
var _globalThis = require("./globalThis");
parcelHelpers.exportAll(_globalThis, exports);
var _hexToBase64 = require("./hex-to-base64");
parcelHelpers.exportAll(_hexToBase64, exports);
var _randomIdGenerator = require("./RandomIdGenerator");
parcelHelpers.exportAll(_randomIdGenerator, exports);
var _performance = require("./performance");
parcelHelpers.exportAll(_performance, exports);
var _sdkInfo = require("./sdk-info");
parcelHelpers.exportAll(_sdkInfo, exports);
var _timerUtil = require("./timer-util");
parcelHelpers.exportAll(_timerUtil, exports);

},{"./environment":"a8j04","./globalThis":"cav7A","./hex-to-base64":"aSaRw","./RandomIdGenerator":"2zz95","./performance":"3XRRP","./sdk-info":"3i6TP","./timer-util":"gOhxt","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"a8j04":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Gets the environment variables
 */ parcelHelpers.export(exports, "getEnv", ()=>getEnv);
var _environment = require("../../utils/environment");
var _globalThis = require("./globalThis");
function getEnv() {
    var globalEnv = (0, _environment.parseEnvironment)((0, _globalThis._globalThis));
    return Object.assign({}, (0, _environment.DEFAULT_ENVIRONMENT), globalEnv);
}

},{"../../utils/environment":"k6o1y","./globalThis":"cav7A","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"k6o1y":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT", ()=>DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT);
parcelHelpers.export(exports, "DEFAULT_ATTRIBUTE_COUNT_LIMIT", ()=>DEFAULT_ATTRIBUTE_COUNT_LIMIT);
parcelHelpers.export(exports, "DEFAULT_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT", ()=>DEFAULT_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT);
parcelHelpers.export(exports, "DEFAULT_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT", ()=>DEFAULT_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT);
parcelHelpers.export(exports, "DEFAULT_ENVIRONMENT", ()=>DEFAULT_ENVIRONMENT);
/**
 * Parses environment values
 * @param values
 */ parcelHelpers.export(exports, "parseEnvironment", ()=>parseEnvironment);
/**
 * Get environment in node or browser without
 * populating default values.
 */ parcelHelpers.export(exports, "getEnvWithoutDefaults", ()=>getEnvWithoutDefaults);
var _api = require("@opentelemetry/api");
var _sampling = require("./sampling");
var _globalThis = require("../platform/browser/globalThis");
var process = require("384eab4acedf531b");
var DEFAULT_LIST_SEPARATOR = ",";
/**
 * Environment interface to define all names
 */ var ENVIRONMENT_BOOLEAN_KEYS = [
    "OTEL_SDK_DISABLED"
];
function isEnvVarABoolean(key) {
    return ENVIRONMENT_BOOLEAN_KEYS.indexOf(key) > -1;
}
var ENVIRONMENT_NUMBERS_KEYS = [
    "OTEL_BSP_EXPORT_TIMEOUT",
    "OTEL_BSP_MAX_EXPORT_BATCH_SIZE",
    "OTEL_BSP_MAX_QUEUE_SIZE",
    "OTEL_BSP_SCHEDULE_DELAY",
    "OTEL_BLRP_EXPORT_TIMEOUT",
    "OTEL_BLRP_MAX_EXPORT_BATCH_SIZE",
    "OTEL_BLRP_MAX_QUEUE_SIZE",
    "OTEL_BLRP_SCHEDULE_DELAY",
    "OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT",
    "OTEL_ATTRIBUTE_COUNT_LIMIT",
    "OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT",
    "OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT",
    "OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT",
    "OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT",
    "OTEL_SPAN_EVENT_COUNT_LIMIT",
    "OTEL_SPAN_LINK_COUNT_LIMIT",
    "OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT",
    "OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT",
    "OTEL_EXPORTER_OTLP_TIMEOUT",
    "OTEL_EXPORTER_OTLP_TRACES_TIMEOUT",
    "OTEL_EXPORTER_OTLP_METRICS_TIMEOUT",
    "OTEL_EXPORTER_OTLP_LOGS_TIMEOUT",
    "OTEL_EXPORTER_JAEGER_AGENT_PORT"
];
function isEnvVarANumber(key) {
    return ENVIRONMENT_NUMBERS_KEYS.indexOf(key) > -1;
}
var ENVIRONMENT_LISTS_KEYS = [
    "OTEL_NO_PATCH_MODULES",
    "OTEL_PROPAGATORS"
];
function isEnvVarAList(key) {
    return ENVIRONMENT_LISTS_KEYS.indexOf(key) > -1;
}
var DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT = Infinity;
var DEFAULT_ATTRIBUTE_COUNT_LIMIT = 128;
var DEFAULT_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT = 128;
var DEFAULT_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT = 128;
var DEFAULT_ENVIRONMENT = {
    OTEL_SDK_DISABLED: false,
    CONTAINER_NAME: "",
    ECS_CONTAINER_METADATA_URI_V4: "",
    ECS_CONTAINER_METADATA_URI: "",
    HOSTNAME: "",
    KUBERNETES_SERVICE_HOST: "",
    NAMESPACE: "",
    OTEL_BSP_EXPORT_TIMEOUT: 30000,
    OTEL_BSP_MAX_EXPORT_BATCH_SIZE: 512,
    OTEL_BSP_MAX_QUEUE_SIZE: 2048,
    OTEL_BSP_SCHEDULE_DELAY: 5000,
    OTEL_BLRP_EXPORT_TIMEOUT: 30000,
    OTEL_BLRP_MAX_EXPORT_BATCH_SIZE: 512,
    OTEL_BLRP_MAX_QUEUE_SIZE: 2048,
    OTEL_BLRP_SCHEDULE_DELAY: 5000,
    OTEL_EXPORTER_JAEGER_AGENT_HOST: "",
    OTEL_EXPORTER_JAEGER_AGENT_PORT: 6832,
    OTEL_EXPORTER_JAEGER_ENDPOINT: "",
    OTEL_EXPORTER_JAEGER_PASSWORD: "",
    OTEL_EXPORTER_JAEGER_USER: "",
    OTEL_EXPORTER_OTLP_ENDPOINT: "",
    OTEL_EXPORTER_OTLP_TRACES_ENDPOINT: "",
    OTEL_EXPORTER_OTLP_METRICS_ENDPOINT: "",
    OTEL_EXPORTER_OTLP_LOGS_ENDPOINT: "",
    OTEL_EXPORTER_OTLP_HEADERS: "",
    OTEL_EXPORTER_OTLP_TRACES_HEADERS: "",
    OTEL_EXPORTER_OTLP_METRICS_HEADERS: "",
    OTEL_EXPORTER_OTLP_LOGS_HEADERS: "",
    OTEL_EXPORTER_OTLP_TIMEOUT: 10000,
    OTEL_EXPORTER_OTLP_TRACES_TIMEOUT: 10000,
    OTEL_EXPORTER_OTLP_METRICS_TIMEOUT: 10000,
    OTEL_EXPORTER_OTLP_LOGS_TIMEOUT: 10000,
    OTEL_EXPORTER_ZIPKIN_ENDPOINT: "http://localhost:9411/api/v2/spans",
    OTEL_LOG_LEVEL: (0, _api.DiagLogLevel).INFO,
    OTEL_NO_PATCH_MODULES: [],
    OTEL_PROPAGATORS: [
        "tracecontext",
        "baggage"
    ],
    OTEL_RESOURCE_ATTRIBUTES: "",
    OTEL_SERVICE_NAME: "",
    OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT: DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT,
    OTEL_ATTRIBUTE_COUNT_LIMIT: DEFAULT_ATTRIBUTE_COUNT_LIMIT,
    OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT: DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT,
    OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT: DEFAULT_ATTRIBUTE_COUNT_LIMIT,
    OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT: DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT,
    OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT: DEFAULT_ATTRIBUTE_COUNT_LIMIT,
    OTEL_SPAN_EVENT_COUNT_LIMIT: 128,
    OTEL_SPAN_LINK_COUNT_LIMIT: 128,
    OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT: DEFAULT_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT,
    OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT: DEFAULT_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT,
    OTEL_TRACES_EXPORTER: "",
    OTEL_TRACES_SAMPLER: (0, _sampling.TracesSamplerValues).ParentBasedAlwaysOn,
    OTEL_TRACES_SAMPLER_ARG: "",
    OTEL_LOGS_EXPORTER: "",
    OTEL_EXPORTER_OTLP_INSECURE: "",
    OTEL_EXPORTER_OTLP_TRACES_INSECURE: "",
    OTEL_EXPORTER_OTLP_METRICS_INSECURE: "",
    OTEL_EXPORTER_OTLP_LOGS_INSECURE: "",
    OTEL_EXPORTER_OTLP_CERTIFICATE: "",
    OTEL_EXPORTER_OTLP_TRACES_CERTIFICATE: "",
    OTEL_EXPORTER_OTLP_METRICS_CERTIFICATE: "",
    OTEL_EXPORTER_OTLP_LOGS_CERTIFICATE: "",
    OTEL_EXPORTER_OTLP_COMPRESSION: "",
    OTEL_EXPORTER_OTLP_TRACES_COMPRESSION: "",
    OTEL_EXPORTER_OTLP_METRICS_COMPRESSION: "",
    OTEL_EXPORTER_OTLP_LOGS_COMPRESSION: "",
    OTEL_EXPORTER_OTLP_CLIENT_KEY: "",
    OTEL_EXPORTER_OTLP_TRACES_CLIENT_KEY: "",
    OTEL_EXPORTER_OTLP_METRICS_CLIENT_KEY: "",
    OTEL_EXPORTER_OTLP_LOGS_CLIENT_KEY: "",
    OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE: "",
    OTEL_EXPORTER_OTLP_TRACES_CLIENT_CERTIFICATE: "",
    OTEL_EXPORTER_OTLP_METRICS_CLIENT_CERTIFICATE: "",
    OTEL_EXPORTER_OTLP_LOGS_CLIENT_CERTIFICATE: "",
    OTEL_EXPORTER_OTLP_PROTOCOL: "http/protobuf",
    OTEL_EXPORTER_OTLP_TRACES_PROTOCOL: "http/protobuf",
    OTEL_EXPORTER_OTLP_METRICS_PROTOCOL: "http/protobuf",
    OTEL_EXPORTER_OTLP_LOGS_PROTOCOL: "http/protobuf",
    OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: "cumulative"
};
/**
 * @param key
 * @param environment
 * @param values
 */ function parseBoolean(key, environment, values) {
    if (typeof values[key] === "undefined") return;
    var value = String(values[key]);
    // support case-insensitive "true"
    environment[key] = value.toLowerCase() === "true";
}
/**
 * Parses a variable as number with number validation
 * @param name
 * @param environment
 * @param values
 * @param min
 * @param max
 */ function parseNumber(name, environment, values, min, max) {
    if (min === void 0) min = -Infinity;
    if (max === void 0) max = Infinity;
    if (typeof values[name] !== "undefined") {
        var value = Number(values[name]);
        if (!isNaN(value)) {
            if (value < min) environment[name] = min;
            else if (value > max) environment[name] = max;
            else environment[name] = value;
        }
    }
}
/**
 * Parses list-like strings from input into output.
 * @param name
 * @param environment
 * @param values
 * @param separator
 */ function parseStringList(name, output, input, separator) {
    if (separator === void 0) separator = DEFAULT_LIST_SEPARATOR;
    var givenValue = input[name];
    if (typeof givenValue === "string") output[name] = givenValue.split(separator).map(function(v) {
        return v.trim();
    });
}
// The support string -> DiagLogLevel mappings
var logLevelMap = {
    ALL: (0, _api.DiagLogLevel).ALL,
    VERBOSE: (0, _api.DiagLogLevel).VERBOSE,
    DEBUG: (0, _api.DiagLogLevel).DEBUG,
    INFO: (0, _api.DiagLogLevel).INFO,
    WARN: (0, _api.DiagLogLevel).WARN,
    ERROR: (0, _api.DiagLogLevel).ERROR,
    NONE: (0, _api.DiagLogLevel).NONE
};
/**
 * Environmentally sets log level if valid log level string is provided
 * @param key
 * @param environment
 * @param values
 */ function setLogLevelFromEnv(key, environment, values) {
    var value = values[key];
    if (typeof value === "string") {
        var theLevel = logLevelMap[value.toUpperCase()];
        if (theLevel != null) environment[key] = theLevel;
    }
}
function parseEnvironment(values) {
    var environment = {};
    for(var env in DEFAULT_ENVIRONMENT){
        var key = env;
        switch(key){
            case "OTEL_LOG_LEVEL":
                setLogLevelFromEnv(key, environment, values);
                break;
            default:
                if (isEnvVarABoolean(key)) parseBoolean(key, environment, values);
                else if (isEnvVarANumber(key)) parseNumber(key, environment, values);
                else if (isEnvVarAList(key)) parseStringList(key, environment, values);
                else {
                    var value = values[key];
                    if (typeof value !== "undefined" && value !== null) environment[key] = String(value);
                }
        }
    }
    return environment;
}
function getEnvWithoutDefaults() {
    return typeof process !== "undefined" && process && process.env ? parseEnvironment(process.env) : parseEnvironment((0, _globalThis._globalThis));
}

},{"384eab4acedf531b":"d5jf4","@opentelemetry/api":"6AC4z","./sampling":"fxM1u","../platform/browser/globalThis":"cav7A","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"fxM1u":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TracesSamplerValues", ()=>TracesSamplerValues);
var TracesSamplerValues;
(function(TracesSamplerValues) {
    TracesSamplerValues["AlwaysOff"] = "always_off";
    TracesSamplerValues["AlwaysOn"] = "always_on";
    TracesSamplerValues["ParentBasedAlwaysOff"] = "parentbased_always_off";
    TracesSamplerValues["ParentBasedAlwaysOn"] = "parentbased_always_on";
    TracesSamplerValues["ParentBasedTraceIdRatio"] = "parentbased_traceidratio";
    TracesSamplerValues["TraceIdRatio"] = "traceidratio";
})(TracesSamplerValues || (TracesSamplerValues = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"cav7A":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Updates to this file should also be replicated to @opentelemetry/api too.
/**
 * - globalThis (New standard)
 * - self (Will return the current window instance for supported browsers)
 * - window (fallback for older browser implementations)
 * - global (NodeJS implementation)
 * - <object> (When all else fails)
 */ /** only globals that common to node and browsers are allowed */ // eslint-disable-next-line node/no-unsupported-features/es-builtins, no-undef
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_globalThis", ()=>_globalThis);
var global = arguments[3];
var _globalThis = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof window === "object" ? window : typeof global === "object" ? global : {};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"aSaRw":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hexToBase64", ()=>hexToBase64);
var _hexToBinary = require("../../common/hex-to-binary");
var __read = undefined && undefined.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = undefined && undefined.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function hexToBase64(hexStr) {
    return btoa(String.fromCharCode.apply(String, __spreadArray([], __read((0, _hexToBinary.hexToBinary)(hexStr)), false)));
}

},{"../../common/hex-to-binary":"5iTrj","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"5iTrj":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hexToBinary", ()=>hexToBinary);
function intValue(charCode) {
    // 0-9
    if (charCode >= 48 && charCode <= 57) return charCode - 48;
    // a-f
    if (charCode >= 97 && charCode <= 102) return charCode - 87;
    // A-F
    return charCode - 55;
}
function hexToBinary(hexStr) {
    var buf = new Uint8Array(hexStr.length / 2);
    var offset = 0;
    for(var i = 0; i < hexStr.length; i += 2){
        var hi = intValue(hexStr.charCodeAt(i));
        var lo = intValue(hexStr.charCodeAt(i + 1));
        buf[offset++] = hi << 4 | lo;
    }
    return buf;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"2zz95":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RandomIdGenerator", ()=>RandomIdGenerator);
var SPAN_ID_BYTES = 8;
var TRACE_ID_BYTES = 16;
/**
 * @deprecated Use the one defined in @opentelemetry/sdk-trace-base instead.
 */ var RandomIdGenerator = /** @class */ function() {
    function RandomIdGenerator() {
        /**
         * Returns a random 16-byte trace ID formatted/encoded as a 32 lowercase hex
         * characters corresponding to 128 bits.
         */ this.generateTraceId = getIdGenerator(TRACE_ID_BYTES);
        /**
         * Returns a random 8-byte span ID formatted/encoded as a 16 lowercase hex
         * characters corresponding to 64 bits.
         */ this.generateSpanId = getIdGenerator(SPAN_ID_BYTES);
    }
    return RandomIdGenerator;
}();
var SHARED_CHAR_CODES_ARRAY = Array(32);
function getIdGenerator(bytes) {
    return function generateId() {
        for(var i = 0; i < bytes * 2; i++){
            SHARED_CHAR_CODES_ARRAY[i] = Math.floor(Math.random() * 16) + 48;
            // valid hex characters in the range 48-57 and 97-102
            if (SHARED_CHAR_CODES_ARRAY[i] >= 58) SHARED_CHAR_CODES_ARRAY[i] += 39;
        }
        return String.fromCharCode.apply(null, SHARED_CHAR_CODES_ARRAY.slice(0, bytes * 2));
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"3XRRP":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "otperformance", ()=>otperformance);
var otperformance = performance;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"3i6TP":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SDK_INFO", ()=>SDK_INFO);
var _version = require("../../version");
var _semanticConventions = require("@opentelemetry/semantic-conventions");
var _a;
var SDK_INFO = (_a = {}, _a[(0, _semanticConventions.SemanticResourceAttributes).TELEMETRY_SDK_NAME] = "opentelemetry", _a[(0, _semanticConventions.SemanticResourceAttributes).PROCESS_RUNTIME_NAME] = "browser", _a[(0, _semanticConventions.SemanticResourceAttributes).TELEMETRY_SDK_LANGUAGE] = (0, _semanticConventions.TelemetrySdkLanguageValues).WEBJS, _a[(0, _semanticConventions.SemanticResourceAttributes).TELEMETRY_SDK_VERSION] = (0, _version.VERSION), _a);

},{"../../version":"2JrQh","@opentelemetry/semantic-conventions":"lCgfj","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"2JrQh":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // this is autogenerated file, see scripts/version-update.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
var VERSION = "1.23.0";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"lCgfj":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _trace = require("./trace");
parcelHelpers.exportAll(_trace, exports);
var _resource = require("./resource");
parcelHelpers.exportAll(_resource, exports);

},{"./trace":"9Fj5N","./resource":"6gLs0","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"9Fj5N":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _semanticAttributes = require("./SemanticAttributes");
parcelHelpers.exportAll(_semanticAttributes, exports);

},{"./SemanticAttributes":"jqkBD","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"jqkBD":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SEMATTRS_AWS_LAMBDA_INVOKED_ARN", ()=>SEMATTRS_AWS_LAMBDA_INVOKED_ARN);
parcelHelpers.export(exports, "SEMATTRS_DB_SYSTEM", ()=>SEMATTRS_DB_SYSTEM);
parcelHelpers.export(exports, "SEMATTRS_DB_CONNECTION_STRING", ()=>SEMATTRS_DB_CONNECTION_STRING);
parcelHelpers.export(exports, "SEMATTRS_DB_USER", ()=>SEMATTRS_DB_USER);
parcelHelpers.export(exports, "SEMATTRS_DB_JDBC_DRIVER_CLASSNAME", ()=>SEMATTRS_DB_JDBC_DRIVER_CLASSNAME);
parcelHelpers.export(exports, "SEMATTRS_DB_NAME", ()=>SEMATTRS_DB_NAME);
parcelHelpers.export(exports, "SEMATTRS_DB_STATEMENT", ()=>SEMATTRS_DB_STATEMENT);
parcelHelpers.export(exports, "SEMATTRS_DB_OPERATION", ()=>SEMATTRS_DB_OPERATION);
parcelHelpers.export(exports, "SEMATTRS_DB_MSSQL_INSTANCE_NAME", ()=>SEMATTRS_DB_MSSQL_INSTANCE_NAME);
parcelHelpers.export(exports, "SEMATTRS_DB_CASSANDRA_KEYSPACE", ()=>SEMATTRS_DB_CASSANDRA_KEYSPACE);
parcelHelpers.export(exports, "SEMATTRS_DB_CASSANDRA_PAGE_SIZE", ()=>SEMATTRS_DB_CASSANDRA_PAGE_SIZE);
parcelHelpers.export(exports, "SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL", ()=>SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL);
parcelHelpers.export(exports, "SEMATTRS_DB_CASSANDRA_TABLE", ()=>SEMATTRS_DB_CASSANDRA_TABLE);
parcelHelpers.export(exports, "SEMATTRS_DB_CASSANDRA_IDEMPOTENCE", ()=>SEMATTRS_DB_CASSANDRA_IDEMPOTENCE);
parcelHelpers.export(exports, "SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT", ()=>SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT);
parcelHelpers.export(exports, "SEMATTRS_DB_CASSANDRA_COORDINATOR_ID", ()=>SEMATTRS_DB_CASSANDRA_COORDINATOR_ID);
parcelHelpers.export(exports, "SEMATTRS_DB_CASSANDRA_COORDINATOR_DC", ()=>SEMATTRS_DB_CASSANDRA_COORDINATOR_DC);
parcelHelpers.export(exports, "SEMATTRS_DB_HBASE_NAMESPACE", ()=>SEMATTRS_DB_HBASE_NAMESPACE);
parcelHelpers.export(exports, "SEMATTRS_DB_REDIS_DATABASE_INDEX", ()=>SEMATTRS_DB_REDIS_DATABASE_INDEX);
parcelHelpers.export(exports, "SEMATTRS_DB_MONGODB_COLLECTION", ()=>SEMATTRS_DB_MONGODB_COLLECTION);
parcelHelpers.export(exports, "SEMATTRS_DB_SQL_TABLE", ()=>SEMATTRS_DB_SQL_TABLE);
parcelHelpers.export(exports, "SEMATTRS_EXCEPTION_TYPE", ()=>SEMATTRS_EXCEPTION_TYPE);
parcelHelpers.export(exports, "SEMATTRS_EXCEPTION_MESSAGE", ()=>SEMATTRS_EXCEPTION_MESSAGE);
parcelHelpers.export(exports, "SEMATTRS_EXCEPTION_STACKTRACE", ()=>SEMATTRS_EXCEPTION_STACKTRACE);
parcelHelpers.export(exports, "SEMATTRS_EXCEPTION_ESCAPED", ()=>SEMATTRS_EXCEPTION_ESCAPED);
parcelHelpers.export(exports, "SEMATTRS_FAAS_TRIGGER", ()=>SEMATTRS_FAAS_TRIGGER);
parcelHelpers.export(exports, "SEMATTRS_FAAS_EXECUTION", ()=>SEMATTRS_FAAS_EXECUTION);
parcelHelpers.export(exports, "SEMATTRS_FAAS_DOCUMENT_COLLECTION", ()=>SEMATTRS_FAAS_DOCUMENT_COLLECTION);
parcelHelpers.export(exports, "SEMATTRS_FAAS_DOCUMENT_OPERATION", ()=>SEMATTRS_FAAS_DOCUMENT_OPERATION);
parcelHelpers.export(exports, "SEMATTRS_FAAS_DOCUMENT_TIME", ()=>SEMATTRS_FAAS_DOCUMENT_TIME);
parcelHelpers.export(exports, "SEMATTRS_FAAS_DOCUMENT_NAME", ()=>SEMATTRS_FAAS_DOCUMENT_NAME);
parcelHelpers.export(exports, "SEMATTRS_FAAS_TIME", ()=>SEMATTRS_FAAS_TIME);
parcelHelpers.export(exports, "SEMATTRS_FAAS_CRON", ()=>SEMATTRS_FAAS_CRON);
parcelHelpers.export(exports, "SEMATTRS_FAAS_COLDSTART", ()=>SEMATTRS_FAAS_COLDSTART);
parcelHelpers.export(exports, "SEMATTRS_FAAS_INVOKED_NAME", ()=>SEMATTRS_FAAS_INVOKED_NAME);
parcelHelpers.export(exports, "SEMATTRS_FAAS_INVOKED_PROVIDER", ()=>SEMATTRS_FAAS_INVOKED_PROVIDER);
parcelHelpers.export(exports, "SEMATTRS_FAAS_INVOKED_REGION", ()=>SEMATTRS_FAAS_INVOKED_REGION);
parcelHelpers.export(exports, "SEMATTRS_NET_TRANSPORT", ()=>SEMATTRS_NET_TRANSPORT);
parcelHelpers.export(exports, "SEMATTRS_NET_PEER_IP", ()=>SEMATTRS_NET_PEER_IP);
parcelHelpers.export(exports, "SEMATTRS_NET_PEER_PORT", ()=>SEMATTRS_NET_PEER_PORT);
parcelHelpers.export(exports, "SEMATTRS_NET_PEER_NAME", ()=>SEMATTRS_NET_PEER_NAME);
parcelHelpers.export(exports, "SEMATTRS_NET_HOST_IP", ()=>SEMATTRS_NET_HOST_IP);
parcelHelpers.export(exports, "SEMATTRS_NET_HOST_PORT", ()=>SEMATTRS_NET_HOST_PORT);
parcelHelpers.export(exports, "SEMATTRS_NET_HOST_NAME", ()=>SEMATTRS_NET_HOST_NAME);
parcelHelpers.export(exports, "SEMATTRS_NET_HOST_CONNECTION_TYPE", ()=>SEMATTRS_NET_HOST_CONNECTION_TYPE);
parcelHelpers.export(exports, "SEMATTRS_NET_HOST_CONNECTION_SUBTYPE", ()=>SEMATTRS_NET_HOST_CONNECTION_SUBTYPE);
parcelHelpers.export(exports, "SEMATTRS_NET_HOST_CARRIER_NAME", ()=>SEMATTRS_NET_HOST_CARRIER_NAME);
parcelHelpers.export(exports, "SEMATTRS_NET_HOST_CARRIER_MCC", ()=>SEMATTRS_NET_HOST_CARRIER_MCC);
parcelHelpers.export(exports, "SEMATTRS_NET_HOST_CARRIER_MNC", ()=>SEMATTRS_NET_HOST_CARRIER_MNC);
parcelHelpers.export(exports, "SEMATTRS_NET_HOST_CARRIER_ICC", ()=>SEMATTRS_NET_HOST_CARRIER_ICC);
parcelHelpers.export(exports, "SEMATTRS_PEER_SERVICE", ()=>SEMATTRS_PEER_SERVICE);
parcelHelpers.export(exports, "SEMATTRS_ENDUSER_ID", ()=>SEMATTRS_ENDUSER_ID);
parcelHelpers.export(exports, "SEMATTRS_ENDUSER_ROLE", ()=>SEMATTRS_ENDUSER_ROLE);
parcelHelpers.export(exports, "SEMATTRS_ENDUSER_SCOPE", ()=>SEMATTRS_ENDUSER_SCOPE);
parcelHelpers.export(exports, "SEMATTRS_THREAD_ID", ()=>SEMATTRS_THREAD_ID);
parcelHelpers.export(exports, "SEMATTRS_THREAD_NAME", ()=>SEMATTRS_THREAD_NAME);
parcelHelpers.export(exports, "SEMATTRS_CODE_FUNCTION", ()=>SEMATTRS_CODE_FUNCTION);
parcelHelpers.export(exports, "SEMATTRS_CODE_NAMESPACE", ()=>SEMATTRS_CODE_NAMESPACE);
parcelHelpers.export(exports, "SEMATTRS_CODE_FILEPATH", ()=>SEMATTRS_CODE_FILEPATH);
parcelHelpers.export(exports, "SEMATTRS_CODE_LINENO", ()=>SEMATTRS_CODE_LINENO);
parcelHelpers.export(exports, "SEMATTRS_HTTP_METHOD", ()=>SEMATTRS_HTTP_METHOD);
parcelHelpers.export(exports, "SEMATTRS_HTTP_URL", ()=>SEMATTRS_HTTP_URL);
parcelHelpers.export(exports, "SEMATTRS_HTTP_TARGET", ()=>SEMATTRS_HTTP_TARGET);
parcelHelpers.export(exports, "SEMATTRS_HTTP_HOST", ()=>SEMATTRS_HTTP_HOST);
parcelHelpers.export(exports, "SEMATTRS_HTTP_SCHEME", ()=>SEMATTRS_HTTP_SCHEME);
parcelHelpers.export(exports, "SEMATTRS_HTTP_STATUS_CODE", ()=>SEMATTRS_HTTP_STATUS_CODE);
parcelHelpers.export(exports, "SEMATTRS_HTTP_FLAVOR", ()=>SEMATTRS_HTTP_FLAVOR);
parcelHelpers.export(exports, "SEMATTRS_HTTP_USER_AGENT", ()=>SEMATTRS_HTTP_USER_AGENT);
parcelHelpers.export(exports, "SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH", ()=>SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH);
parcelHelpers.export(exports, "SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED", ()=>SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED);
parcelHelpers.export(exports, "SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH", ()=>SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH);
parcelHelpers.export(exports, "SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED", ()=>SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED);
parcelHelpers.export(exports, "SEMATTRS_HTTP_SERVER_NAME", ()=>SEMATTRS_HTTP_SERVER_NAME);
parcelHelpers.export(exports, "SEMATTRS_HTTP_ROUTE", ()=>SEMATTRS_HTTP_ROUTE);
parcelHelpers.export(exports, "SEMATTRS_HTTP_CLIENT_IP", ()=>SEMATTRS_HTTP_CLIENT_IP);
parcelHelpers.export(exports, "SEMATTRS_AWS_DYNAMODB_TABLE_NAMES", ()=>SEMATTRS_AWS_DYNAMODB_TABLE_NAMES);
parcelHelpers.export(exports, "SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY", ()=>SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY);
parcelHelpers.export(exports, "SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS", ()=>SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS);
parcelHelpers.export(exports, "SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY", ()=>SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY);
parcelHelpers.export(exports, "SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY", ()=>SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY);
parcelHelpers.export(exports, "SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ", ()=>SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ);
parcelHelpers.export(exports, "SEMATTRS_AWS_DYNAMODB_PROJECTION", ()=>SEMATTRS_AWS_DYNAMODB_PROJECTION);
parcelHelpers.export(exports, "SEMATTRS_AWS_DYNAMODB_LIMIT", ()=>SEMATTRS_AWS_DYNAMODB_LIMIT);
parcelHelpers.export(exports, "SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET", ()=>SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET);
parcelHelpers.export(exports, "SEMATTRS_AWS_DYNAMODB_INDEX_NAME", ()=>SEMATTRS_AWS_DYNAMODB_INDEX_NAME);
parcelHelpers.export(exports, "SEMATTRS_AWS_DYNAMODB_SELECT", ()=>SEMATTRS_AWS_DYNAMODB_SELECT);
parcelHelpers.export(exports, "SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES", ()=>SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES);
parcelHelpers.export(exports, "SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES", ()=>SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES);
parcelHelpers.export(exports, "SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE", ()=>SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE);
parcelHelpers.export(exports, "SEMATTRS_AWS_DYNAMODB_TABLE_COUNT", ()=>SEMATTRS_AWS_DYNAMODB_TABLE_COUNT);
parcelHelpers.export(exports, "SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD", ()=>SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD);
parcelHelpers.export(exports, "SEMATTRS_AWS_DYNAMODB_SEGMENT", ()=>SEMATTRS_AWS_DYNAMODB_SEGMENT);
parcelHelpers.export(exports, "SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS", ()=>SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS);
parcelHelpers.export(exports, "SEMATTRS_AWS_DYNAMODB_COUNT", ()=>SEMATTRS_AWS_DYNAMODB_COUNT);
parcelHelpers.export(exports, "SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT", ()=>SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT);
parcelHelpers.export(exports, "SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS", ()=>SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS);
parcelHelpers.export(exports, "SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES", ()=>SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES);
parcelHelpers.export(exports, "SEMATTRS_MESSAGING_SYSTEM", ()=>SEMATTRS_MESSAGING_SYSTEM);
parcelHelpers.export(exports, "SEMATTRS_MESSAGING_DESTINATION", ()=>SEMATTRS_MESSAGING_DESTINATION);
parcelHelpers.export(exports, "SEMATTRS_MESSAGING_DESTINATION_KIND", ()=>SEMATTRS_MESSAGING_DESTINATION_KIND);
parcelHelpers.export(exports, "SEMATTRS_MESSAGING_TEMP_DESTINATION", ()=>SEMATTRS_MESSAGING_TEMP_DESTINATION);
parcelHelpers.export(exports, "SEMATTRS_MESSAGING_PROTOCOL", ()=>SEMATTRS_MESSAGING_PROTOCOL);
parcelHelpers.export(exports, "SEMATTRS_MESSAGING_PROTOCOL_VERSION", ()=>SEMATTRS_MESSAGING_PROTOCOL_VERSION);
parcelHelpers.export(exports, "SEMATTRS_MESSAGING_URL", ()=>SEMATTRS_MESSAGING_URL);
parcelHelpers.export(exports, "SEMATTRS_MESSAGING_MESSAGE_ID", ()=>SEMATTRS_MESSAGING_MESSAGE_ID);
parcelHelpers.export(exports, "SEMATTRS_MESSAGING_CONVERSATION_ID", ()=>SEMATTRS_MESSAGING_CONVERSATION_ID);
parcelHelpers.export(exports, "SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES", ()=>SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES);
parcelHelpers.export(exports, "SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES", ()=>SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES);
parcelHelpers.export(exports, "SEMATTRS_MESSAGING_OPERATION", ()=>SEMATTRS_MESSAGING_OPERATION);
parcelHelpers.export(exports, "SEMATTRS_MESSAGING_CONSUMER_ID", ()=>SEMATTRS_MESSAGING_CONSUMER_ID);
parcelHelpers.export(exports, "SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY", ()=>SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY);
parcelHelpers.export(exports, "SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY", ()=>SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY);
parcelHelpers.export(exports, "SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP", ()=>SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP);
parcelHelpers.export(exports, "SEMATTRS_MESSAGING_KAFKA_CLIENT_ID", ()=>SEMATTRS_MESSAGING_KAFKA_CLIENT_ID);
parcelHelpers.export(exports, "SEMATTRS_MESSAGING_KAFKA_PARTITION", ()=>SEMATTRS_MESSAGING_KAFKA_PARTITION);
parcelHelpers.export(exports, "SEMATTRS_MESSAGING_KAFKA_TOMBSTONE", ()=>SEMATTRS_MESSAGING_KAFKA_TOMBSTONE);
parcelHelpers.export(exports, "SEMATTRS_RPC_SYSTEM", ()=>SEMATTRS_RPC_SYSTEM);
parcelHelpers.export(exports, "SEMATTRS_RPC_SERVICE", ()=>SEMATTRS_RPC_SERVICE);
parcelHelpers.export(exports, "SEMATTRS_RPC_METHOD", ()=>SEMATTRS_RPC_METHOD);
parcelHelpers.export(exports, "SEMATTRS_RPC_GRPC_STATUS_CODE", ()=>SEMATTRS_RPC_GRPC_STATUS_CODE);
parcelHelpers.export(exports, "SEMATTRS_RPC_JSONRPC_VERSION", ()=>SEMATTRS_RPC_JSONRPC_VERSION);
parcelHelpers.export(exports, "SEMATTRS_RPC_JSONRPC_REQUEST_ID", ()=>SEMATTRS_RPC_JSONRPC_REQUEST_ID);
parcelHelpers.export(exports, "SEMATTRS_RPC_JSONRPC_ERROR_CODE", ()=>SEMATTRS_RPC_JSONRPC_ERROR_CODE);
parcelHelpers.export(exports, "SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE", ()=>SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE);
parcelHelpers.export(exports, "SEMATTRS_MESSAGE_TYPE", ()=>SEMATTRS_MESSAGE_TYPE);
parcelHelpers.export(exports, "SEMATTRS_MESSAGE_ID", ()=>SEMATTRS_MESSAGE_ID);
parcelHelpers.export(exports, "SEMATTRS_MESSAGE_COMPRESSED_SIZE", ()=>SEMATTRS_MESSAGE_COMPRESSED_SIZE);
parcelHelpers.export(exports, "SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE", ()=>SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE);
parcelHelpers.export(exports, "SemanticAttributes", ()=>SemanticAttributes);
parcelHelpers.export(exports, "DBSYSTEMVALUES_OTHER_SQL", ()=>DBSYSTEMVALUES_OTHER_SQL);
parcelHelpers.export(exports, "DBSYSTEMVALUES_MSSQL", ()=>DBSYSTEMVALUES_MSSQL);
parcelHelpers.export(exports, "DBSYSTEMVALUES_MYSQL", ()=>DBSYSTEMVALUES_MYSQL);
parcelHelpers.export(exports, "DBSYSTEMVALUES_ORACLE", ()=>DBSYSTEMVALUES_ORACLE);
parcelHelpers.export(exports, "DBSYSTEMVALUES_DB2", ()=>DBSYSTEMVALUES_DB2);
parcelHelpers.export(exports, "DBSYSTEMVALUES_POSTGRESQL", ()=>DBSYSTEMVALUES_POSTGRESQL);
parcelHelpers.export(exports, "DBSYSTEMVALUES_REDSHIFT", ()=>DBSYSTEMVALUES_REDSHIFT);
parcelHelpers.export(exports, "DBSYSTEMVALUES_HIVE", ()=>DBSYSTEMVALUES_HIVE);
parcelHelpers.export(exports, "DBSYSTEMVALUES_CLOUDSCAPE", ()=>DBSYSTEMVALUES_CLOUDSCAPE);
parcelHelpers.export(exports, "DBSYSTEMVALUES_HSQLDB", ()=>DBSYSTEMVALUES_HSQLDB);
parcelHelpers.export(exports, "DBSYSTEMVALUES_PROGRESS", ()=>DBSYSTEMVALUES_PROGRESS);
parcelHelpers.export(exports, "DBSYSTEMVALUES_MAXDB", ()=>DBSYSTEMVALUES_MAXDB);
parcelHelpers.export(exports, "DBSYSTEMVALUES_HANADB", ()=>DBSYSTEMVALUES_HANADB);
parcelHelpers.export(exports, "DBSYSTEMVALUES_INGRES", ()=>DBSYSTEMVALUES_INGRES);
parcelHelpers.export(exports, "DBSYSTEMVALUES_FIRSTSQL", ()=>DBSYSTEMVALUES_FIRSTSQL);
parcelHelpers.export(exports, "DBSYSTEMVALUES_EDB", ()=>DBSYSTEMVALUES_EDB);
parcelHelpers.export(exports, "DBSYSTEMVALUES_CACHE", ()=>DBSYSTEMVALUES_CACHE);
parcelHelpers.export(exports, "DBSYSTEMVALUES_ADABAS", ()=>DBSYSTEMVALUES_ADABAS);
parcelHelpers.export(exports, "DBSYSTEMVALUES_FIREBIRD", ()=>DBSYSTEMVALUES_FIREBIRD);
parcelHelpers.export(exports, "DBSYSTEMVALUES_DERBY", ()=>DBSYSTEMVALUES_DERBY);
parcelHelpers.export(exports, "DBSYSTEMVALUES_FILEMAKER", ()=>DBSYSTEMVALUES_FILEMAKER);
parcelHelpers.export(exports, "DBSYSTEMVALUES_INFORMIX", ()=>DBSYSTEMVALUES_INFORMIX);
parcelHelpers.export(exports, "DBSYSTEMVALUES_INSTANTDB", ()=>DBSYSTEMVALUES_INSTANTDB);
parcelHelpers.export(exports, "DBSYSTEMVALUES_INTERBASE", ()=>DBSYSTEMVALUES_INTERBASE);
parcelHelpers.export(exports, "DBSYSTEMVALUES_MARIADB", ()=>DBSYSTEMVALUES_MARIADB);
parcelHelpers.export(exports, "DBSYSTEMVALUES_NETEZZA", ()=>DBSYSTEMVALUES_NETEZZA);
parcelHelpers.export(exports, "DBSYSTEMVALUES_PERVASIVE", ()=>DBSYSTEMVALUES_PERVASIVE);
parcelHelpers.export(exports, "DBSYSTEMVALUES_POINTBASE", ()=>DBSYSTEMVALUES_POINTBASE);
parcelHelpers.export(exports, "DBSYSTEMVALUES_SQLITE", ()=>DBSYSTEMVALUES_SQLITE);
parcelHelpers.export(exports, "DBSYSTEMVALUES_SYBASE", ()=>DBSYSTEMVALUES_SYBASE);
parcelHelpers.export(exports, "DBSYSTEMVALUES_TERADATA", ()=>DBSYSTEMVALUES_TERADATA);
parcelHelpers.export(exports, "DBSYSTEMVALUES_VERTICA", ()=>DBSYSTEMVALUES_VERTICA);
parcelHelpers.export(exports, "DBSYSTEMVALUES_H2", ()=>DBSYSTEMVALUES_H2);
parcelHelpers.export(exports, "DBSYSTEMVALUES_COLDFUSION", ()=>DBSYSTEMVALUES_COLDFUSION);
parcelHelpers.export(exports, "DBSYSTEMVALUES_CASSANDRA", ()=>DBSYSTEMVALUES_CASSANDRA);
parcelHelpers.export(exports, "DBSYSTEMVALUES_HBASE", ()=>DBSYSTEMVALUES_HBASE);
parcelHelpers.export(exports, "DBSYSTEMVALUES_MONGODB", ()=>DBSYSTEMVALUES_MONGODB);
parcelHelpers.export(exports, "DBSYSTEMVALUES_REDIS", ()=>DBSYSTEMVALUES_REDIS);
parcelHelpers.export(exports, "DBSYSTEMVALUES_COUCHBASE", ()=>DBSYSTEMVALUES_COUCHBASE);
parcelHelpers.export(exports, "DBSYSTEMVALUES_COUCHDB", ()=>DBSYSTEMVALUES_COUCHDB);
parcelHelpers.export(exports, "DBSYSTEMVALUES_COSMOSDB", ()=>DBSYSTEMVALUES_COSMOSDB);
parcelHelpers.export(exports, "DBSYSTEMVALUES_DYNAMODB", ()=>DBSYSTEMVALUES_DYNAMODB);
parcelHelpers.export(exports, "DBSYSTEMVALUES_NEO4J", ()=>DBSYSTEMVALUES_NEO4J);
parcelHelpers.export(exports, "DBSYSTEMVALUES_GEODE", ()=>DBSYSTEMVALUES_GEODE);
parcelHelpers.export(exports, "DBSYSTEMVALUES_ELASTICSEARCH", ()=>DBSYSTEMVALUES_ELASTICSEARCH);
parcelHelpers.export(exports, "DBSYSTEMVALUES_MEMCACHED", ()=>DBSYSTEMVALUES_MEMCACHED);
parcelHelpers.export(exports, "DBSYSTEMVALUES_COCKROACHDB", ()=>DBSYSTEMVALUES_COCKROACHDB);
parcelHelpers.export(exports, "DbSystemValues", ()=>DbSystemValues);
parcelHelpers.export(exports, "DBCASSANDRACONSISTENCYLEVELVALUES_ALL", ()=>DBCASSANDRACONSISTENCYLEVELVALUES_ALL);
parcelHelpers.export(exports, "DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM", ()=>DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM);
parcelHelpers.export(exports, "DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM", ()=>DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM);
parcelHelpers.export(exports, "DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM", ()=>DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM);
parcelHelpers.export(exports, "DBCASSANDRACONSISTENCYLEVELVALUES_ONE", ()=>DBCASSANDRACONSISTENCYLEVELVALUES_ONE);
parcelHelpers.export(exports, "DBCASSANDRACONSISTENCYLEVELVALUES_TWO", ()=>DBCASSANDRACONSISTENCYLEVELVALUES_TWO);
parcelHelpers.export(exports, "DBCASSANDRACONSISTENCYLEVELVALUES_THREE", ()=>DBCASSANDRACONSISTENCYLEVELVALUES_THREE);
parcelHelpers.export(exports, "DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE", ()=>DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE);
parcelHelpers.export(exports, "DBCASSANDRACONSISTENCYLEVELVALUES_ANY", ()=>DBCASSANDRACONSISTENCYLEVELVALUES_ANY);
parcelHelpers.export(exports, "DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL", ()=>DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL);
parcelHelpers.export(exports, "DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL", ()=>DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL);
parcelHelpers.export(exports, "DbCassandraConsistencyLevelValues", ()=>DbCassandraConsistencyLevelValues);
parcelHelpers.export(exports, "FAASTRIGGERVALUES_DATASOURCE", ()=>FAASTRIGGERVALUES_DATASOURCE);
parcelHelpers.export(exports, "FAASTRIGGERVALUES_HTTP", ()=>FAASTRIGGERVALUES_HTTP);
parcelHelpers.export(exports, "FAASTRIGGERVALUES_PUBSUB", ()=>FAASTRIGGERVALUES_PUBSUB);
parcelHelpers.export(exports, "FAASTRIGGERVALUES_TIMER", ()=>FAASTRIGGERVALUES_TIMER);
parcelHelpers.export(exports, "FAASTRIGGERVALUES_OTHER", ()=>FAASTRIGGERVALUES_OTHER);
parcelHelpers.export(exports, "FaasTriggerValues", ()=>FaasTriggerValues);
parcelHelpers.export(exports, "FAASDOCUMENTOPERATIONVALUES_INSERT", ()=>FAASDOCUMENTOPERATIONVALUES_INSERT);
parcelHelpers.export(exports, "FAASDOCUMENTOPERATIONVALUES_EDIT", ()=>FAASDOCUMENTOPERATIONVALUES_EDIT);
parcelHelpers.export(exports, "FAASDOCUMENTOPERATIONVALUES_DELETE", ()=>FAASDOCUMENTOPERATIONVALUES_DELETE);
parcelHelpers.export(exports, "FaasDocumentOperationValues", ()=>FaasDocumentOperationValues);
parcelHelpers.export(exports, "FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD", ()=>FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD);
parcelHelpers.export(exports, "FAASINVOKEDPROVIDERVALUES_AWS", ()=>FAASINVOKEDPROVIDERVALUES_AWS);
parcelHelpers.export(exports, "FAASINVOKEDPROVIDERVALUES_AZURE", ()=>FAASINVOKEDPROVIDERVALUES_AZURE);
parcelHelpers.export(exports, "FAASINVOKEDPROVIDERVALUES_GCP", ()=>FAASINVOKEDPROVIDERVALUES_GCP);
parcelHelpers.export(exports, "FaasInvokedProviderValues", ()=>FaasInvokedProviderValues);
parcelHelpers.export(exports, "NETTRANSPORTVALUES_IP_TCP", ()=>NETTRANSPORTVALUES_IP_TCP);
parcelHelpers.export(exports, "NETTRANSPORTVALUES_IP_UDP", ()=>NETTRANSPORTVALUES_IP_UDP);
parcelHelpers.export(exports, "NETTRANSPORTVALUES_IP", ()=>NETTRANSPORTVALUES_IP);
parcelHelpers.export(exports, "NETTRANSPORTVALUES_UNIX", ()=>NETTRANSPORTVALUES_UNIX);
parcelHelpers.export(exports, "NETTRANSPORTVALUES_PIPE", ()=>NETTRANSPORTVALUES_PIPE);
parcelHelpers.export(exports, "NETTRANSPORTVALUES_INPROC", ()=>NETTRANSPORTVALUES_INPROC);
parcelHelpers.export(exports, "NETTRANSPORTVALUES_OTHER", ()=>NETTRANSPORTVALUES_OTHER);
parcelHelpers.export(exports, "NetTransportValues", ()=>NetTransportValues);
parcelHelpers.export(exports, "NETHOSTCONNECTIONTYPEVALUES_WIFI", ()=>NETHOSTCONNECTIONTYPEVALUES_WIFI);
parcelHelpers.export(exports, "NETHOSTCONNECTIONTYPEVALUES_WIRED", ()=>NETHOSTCONNECTIONTYPEVALUES_WIRED);
parcelHelpers.export(exports, "NETHOSTCONNECTIONTYPEVALUES_CELL", ()=>NETHOSTCONNECTIONTYPEVALUES_CELL);
parcelHelpers.export(exports, "NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE", ()=>NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE);
parcelHelpers.export(exports, "NETHOSTCONNECTIONTYPEVALUES_UNKNOWN", ()=>NETHOSTCONNECTIONTYPEVALUES_UNKNOWN);
parcelHelpers.export(exports, "NetHostConnectionTypeValues", ()=>NetHostConnectionTypeValues);
parcelHelpers.export(exports, "NETHOSTCONNECTIONSUBTYPEVALUES_GPRS", ()=>NETHOSTCONNECTIONSUBTYPEVALUES_GPRS);
parcelHelpers.export(exports, "NETHOSTCONNECTIONSUBTYPEVALUES_EDGE", ()=>NETHOSTCONNECTIONSUBTYPEVALUES_EDGE);
parcelHelpers.export(exports, "NETHOSTCONNECTIONSUBTYPEVALUES_UMTS", ()=>NETHOSTCONNECTIONSUBTYPEVALUES_UMTS);
parcelHelpers.export(exports, "NETHOSTCONNECTIONSUBTYPEVALUES_CDMA", ()=>NETHOSTCONNECTIONSUBTYPEVALUES_CDMA);
parcelHelpers.export(exports, "NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0", ()=>NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0);
parcelHelpers.export(exports, "NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A", ()=>NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A);
parcelHelpers.export(exports, "NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT", ()=>NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT);
parcelHelpers.export(exports, "NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA", ()=>NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA);
parcelHelpers.export(exports, "NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA", ()=>NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA);
parcelHelpers.export(exports, "NETHOSTCONNECTIONSUBTYPEVALUES_HSPA", ()=>NETHOSTCONNECTIONSUBTYPEVALUES_HSPA);
parcelHelpers.export(exports, "NETHOSTCONNECTIONSUBTYPEVALUES_IDEN", ()=>NETHOSTCONNECTIONSUBTYPEVALUES_IDEN);
parcelHelpers.export(exports, "NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B", ()=>NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B);
parcelHelpers.export(exports, "NETHOSTCONNECTIONSUBTYPEVALUES_LTE", ()=>NETHOSTCONNECTIONSUBTYPEVALUES_LTE);
parcelHelpers.export(exports, "NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD", ()=>NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD);
parcelHelpers.export(exports, "NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP", ()=>NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP);
parcelHelpers.export(exports, "NETHOSTCONNECTIONSUBTYPEVALUES_GSM", ()=>NETHOSTCONNECTIONSUBTYPEVALUES_GSM);
parcelHelpers.export(exports, "NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA", ()=>NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA);
parcelHelpers.export(exports, "NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN", ()=>NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN);
parcelHelpers.export(exports, "NETHOSTCONNECTIONSUBTYPEVALUES_NR", ()=>NETHOSTCONNECTIONSUBTYPEVALUES_NR);
parcelHelpers.export(exports, "NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA", ()=>NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA);
parcelHelpers.export(exports, "NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA", ()=>NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA);
parcelHelpers.export(exports, "NetHostConnectionSubtypeValues", ()=>NetHostConnectionSubtypeValues);
parcelHelpers.export(exports, "HTTPFLAVORVALUES_HTTP_1_0", ()=>HTTPFLAVORVALUES_HTTP_1_0);
parcelHelpers.export(exports, "HTTPFLAVORVALUES_HTTP_1_1", ()=>HTTPFLAVORVALUES_HTTP_1_1);
parcelHelpers.export(exports, "HTTPFLAVORVALUES_HTTP_2_0", ()=>HTTPFLAVORVALUES_HTTP_2_0);
parcelHelpers.export(exports, "HTTPFLAVORVALUES_SPDY", ()=>HTTPFLAVORVALUES_SPDY);
parcelHelpers.export(exports, "HTTPFLAVORVALUES_QUIC", ()=>HTTPFLAVORVALUES_QUIC);
parcelHelpers.export(exports, "HttpFlavorValues", ()=>HttpFlavorValues);
parcelHelpers.export(exports, "MESSAGINGDESTINATIONKINDVALUES_QUEUE", ()=>MESSAGINGDESTINATIONKINDVALUES_QUEUE);
parcelHelpers.export(exports, "MESSAGINGDESTINATIONKINDVALUES_TOPIC", ()=>MESSAGINGDESTINATIONKINDVALUES_TOPIC);
parcelHelpers.export(exports, "MessagingDestinationKindValues", ()=>MessagingDestinationKindValues);
parcelHelpers.export(exports, "MESSAGINGOPERATIONVALUES_RECEIVE", ()=>MESSAGINGOPERATIONVALUES_RECEIVE);
parcelHelpers.export(exports, "MESSAGINGOPERATIONVALUES_PROCESS", ()=>MESSAGINGOPERATIONVALUES_PROCESS);
parcelHelpers.export(exports, "MessagingOperationValues", ()=>MessagingOperationValues);
parcelHelpers.export(exports, "RPCGRPCSTATUSCODEVALUES_OK", ()=>RPCGRPCSTATUSCODEVALUES_OK);
parcelHelpers.export(exports, "RPCGRPCSTATUSCODEVALUES_CANCELLED", ()=>RPCGRPCSTATUSCODEVALUES_CANCELLED);
parcelHelpers.export(exports, "RPCGRPCSTATUSCODEVALUES_UNKNOWN", ()=>RPCGRPCSTATUSCODEVALUES_UNKNOWN);
parcelHelpers.export(exports, "RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT", ()=>RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT);
parcelHelpers.export(exports, "RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED", ()=>RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED);
parcelHelpers.export(exports, "RPCGRPCSTATUSCODEVALUES_NOT_FOUND", ()=>RPCGRPCSTATUSCODEVALUES_NOT_FOUND);
parcelHelpers.export(exports, "RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS", ()=>RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS);
parcelHelpers.export(exports, "RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED", ()=>RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED);
parcelHelpers.export(exports, "RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED", ()=>RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED);
parcelHelpers.export(exports, "RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION", ()=>RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION);
parcelHelpers.export(exports, "RPCGRPCSTATUSCODEVALUES_ABORTED", ()=>RPCGRPCSTATUSCODEVALUES_ABORTED);
parcelHelpers.export(exports, "RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE", ()=>RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE);
parcelHelpers.export(exports, "RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED", ()=>RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED);
parcelHelpers.export(exports, "RPCGRPCSTATUSCODEVALUES_INTERNAL", ()=>RPCGRPCSTATUSCODEVALUES_INTERNAL);
parcelHelpers.export(exports, "RPCGRPCSTATUSCODEVALUES_UNAVAILABLE", ()=>RPCGRPCSTATUSCODEVALUES_UNAVAILABLE);
parcelHelpers.export(exports, "RPCGRPCSTATUSCODEVALUES_DATA_LOSS", ()=>RPCGRPCSTATUSCODEVALUES_DATA_LOSS);
parcelHelpers.export(exports, "RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED", ()=>RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED);
parcelHelpers.export(exports, "RpcGrpcStatusCodeValues", ()=>RpcGrpcStatusCodeValues);
parcelHelpers.export(exports, "MESSAGETYPEVALUES_SENT", ()=>MESSAGETYPEVALUES_SENT);
parcelHelpers.export(exports, "MESSAGETYPEVALUES_RECEIVED", ()=>MESSAGETYPEVALUES_RECEIVED);
parcelHelpers.export(exports, "MessageTypeValues", ()=>MessageTypeValues);
var _utils = require("../internal/utils");
//----------------------------------------------------------------------------------------------------------
// DO NOT EDIT, this is an Auto-generated file from scripts/semconv/templates//templates/SemanticAttributes.ts.j2
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
// Constant values for SemanticAttributes
//----------------------------------------------------------------------------------------------------------
// Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifable export names for some package types
var TMP_AWS_LAMBDA_INVOKED_ARN = "aws.lambda.invoked_arn";
var TMP_DB_SYSTEM = "db.system";
var TMP_DB_CONNECTION_STRING = "db.connection_string";
var TMP_DB_USER = "db.user";
var TMP_DB_JDBC_DRIVER_CLASSNAME = "db.jdbc.driver_classname";
var TMP_DB_NAME = "db.name";
var TMP_DB_STATEMENT = "db.statement";
var TMP_DB_OPERATION = "db.operation";
var TMP_DB_MSSQL_INSTANCE_NAME = "db.mssql.instance_name";
var TMP_DB_CASSANDRA_KEYSPACE = "db.cassandra.keyspace";
var TMP_DB_CASSANDRA_PAGE_SIZE = "db.cassandra.page_size";
var TMP_DB_CASSANDRA_CONSISTENCY_LEVEL = "db.cassandra.consistency_level";
var TMP_DB_CASSANDRA_TABLE = "db.cassandra.table";
var TMP_DB_CASSANDRA_IDEMPOTENCE = "db.cassandra.idempotence";
var TMP_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT = "db.cassandra.speculative_execution_count";
var TMP_DB_CASSANDRA_COORDINATOR_ID = "db.cassandra.coordinator.id";
var TMP_DB_CASSANDRA_COORDINATOR_DC = "db.cassandra.coordinator.dc";
var TMP_DB_HBASE_NAMESPACE = "db.hbase.namespace";
var TMP_DB_REDIS_DATABASE_INDEX = "db.redis.database_index";
var TMP_DB_MONGODB_COLLECTION = "db.mongodb.collection";
var TMP_DB_SQL_TABLE = "db.sql.table";
var TMP_EXCEPTION_TYPE = "exception.type";
var TMP_EXCEPTION_MESSAGE = "exception.message";
var TMP_EXCEPTION_STACKTRACE = "exception.stacktrace";
var TMP_EXCEPTION_ESCAPED = "exception.escaped";
var TMP_FAAS_TRIGGER = "faas.trigger";
var TMP_FAAS_EXECUTION = "faas.execution";
var TMP_FAAS_DOCUMENT_COLLECTION = "faas.document.collection";
var TMP_FAAS_DOCUMENT_OPERATION = "faas.document.operation";
var TMP_FAAS_DOCUMENT_TIME = "faas.document.time";
var TMP_FAAS_DOCUMENT_NAME = "faas.document.name";
var TMP_FAAS_TIME = "faas.time";
var TMP_FAAS_CRON = "faas.cron";
var TMP_FAAS_COLDSTART = "faas.coldstart";
var TMP_FAAS_INVOKED_NAME = "faas.invoked_name";
var TMP_FAAS_INVOKED_PROVIDER = "faas.invoked_provider";
var TMP_FAAS_INVOKED_REGION = "faas.invoked_region";
var TMP_NET_TRANSPORT = "net.transport";
var TMP_NET_PEER_IP = "net.peer.ip";
var TMP_NET_PEER_PORT = "net.peer.port";
var TMP_NET_PEER_NAME = "net.peer.name";
var TMP_NET_HOST_IP = "net.host.ip";
var TMP_NET_HOST_PORT = "net.host.port";
var TMP_NET_HOST_NAME = "net.host.name";
var TMP_NET_HOST_CONNECTION_TYPE = "net.host.connection.type";
var TMP_NET_HOST_CONNECTION_SUBTYPE = "net.host.connection.subtype";
var TMP_NET_HOST_CARRIER_NAME = "net.host.carrier.name";
var TMP_NET_HOST_CARRIER_MCC = "net.host.carrier.mcc";
var TMP_NET_HOST_CARRIER_MNC = "net.host.carrier.mnc";
var TMP_NET_HOST_CARRIER_ICC = "net.host.carrier.icc";
var TMP_PEER_SERVICE = "peer.service";
var TMP_ENDUSER_ID = "enduser.id";
var TMP_ENDUSER_ROLE = "enduser.role";
var TMP_ENDUSER_SCOPE = "enduser.scope";
var TMP_THREAD_ID = "thread.id";
var TMP_THREAD_NAME = "thread.name";
var TMP_CODE_FUNCTION = "code.function";
var TMP_CODE_NAMESPACE = "code.namespace";
var TMP_CODE_FILEPATH = "code.filepath";
var TMP_CODE_LINENO = "code.lineno";
var TMP_HTTP_METHOD = "http.method";
var TMP_HTTP_URL = "http.url";
var TMP_HTTP_TARGET = "http.target";
var TMP_HTTP_HOST = "http.host";
var TMP_HTTP_SCHEME = "http.scheme";
var TMP_HTTP_STATUS_CODE = "http.status_code";
var TMP_HTTP_FLAVOR = "http.flavor";
var TMP_HTTP_USER_AGENT = "http.user_agent";
var TMP_HTTP_REQUEST_CONTENT_LENGTH = "http.request_content_length";
var TMP_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = "http.request_content_length_uncompressed";
var TMP_HTTP_RESPONSE_CONTENT_LENGTH = "http.response_content_length";
var TMP_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = "http.response_content_length_uncompressed";
var TMP_HTTP_SERVER_NAME = "http.server_name";
var TMP_HTTP_ROUTE = "http.route";
var TMP_HTTP_CLIENT_IP = "http.client_ip";
var TMP_AWS_DYNAMODB_TABLE_NAMES = "aws.dynamodb.table_names";
var TMP_AWS_DYNAMODB_CONSUMED_CAPACITY = "aws.dynamodb.consumed_capacity";
var TMP_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = "aws.dynamodb.item_collection_metrics";
var TMP_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = "aws.dynamodb.provisioned_read_capacity";
var TMP_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = "aws.dynamodb.provisioned_write_capacity";
var TMP_AWS_DYNAMODB_CONSISTENT_READ = "aws.dynamodb.consistent_read";
var TMP_AWS_DYNAMODB_PROJECTION = "aws.dynamodb.projection";
var TMP_AWS_DYNAMODB_LIMIT = "aws.dynamodb.limit";
var TMP_AWS_DYNAMODB_ATTRIBUTES_TO_GET = "aws.dynamodb.attributes_to_get";
var TMP_AWS_DYNAMODB_INDEX_NAME = "aws.dynamodb.index_name";
var TMP_AWS_DYNAMODB_SELECT = "aws.dynamodb.select";
var TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = "aws.dynamodb.global_secondary_indexes";
var TMP_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = "aws.dynamodb.local_secondary_indexes";
var TMP_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = "aws.dynamodb.exclusive_start_table";
var TMP_AWS_DYNAMODB_TABLE_COUNT = "aws.dynamodb.table_count";
var TMP_AWS_DYNAMODB_SCAN_FORWARD = "aws.dynamodb.scan_forward";
var TMP_AWS_DYNAMODB_SEGMENT = "aws.dynamodb.segment";
var TMP_AWS_DYNAMODB_TOTAL_SEGMENTS = "aws.dynamodb.total_segments";
var TMP_AWS_DYNAMODB_COUNT = "aws.dynamodb.count";
var TMP_AWS_DYNAMODB_SCANNED_COUNT = "aws.dynamodb.scanned_count";
var TMP_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = "aws.dynamodb.attribute_definitions";
var TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = "aws.dynamodb.global_secondary_index_updates";
var TMP_MESSAGING_SYSTEM = "messaging.system";
var TMP_MESSAGING_DESTINATION = "messaging.destination";
var TMP_MESSAGING_DESTINATION_KIND = "messaging.destination_kind";
var TMP_MESSAGING_TEMP_DESTINATION = "messaging.temp_destination";
var TMP_MESSAGING_PROTOCOL = "messaging.protocol";
var TMP_MESSAGING_PROTOCOL_VERSION = "messaging.protocol_version";
var TMP_MESSAGING_URL = "messaging.url";
var TMP_MESSAGING_MESSAGE_ID = "messaging.message_id";
var TMP_MESSAGING_CONVERSATION_ID = "messaging.conversation_id";
var TMP_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = "messaging.message_payload_size_bytes";
var TMP_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = "messaging.message_payload_compressed_size_bytes";
var TMP_MESSAGING_OPERATION = "messaging.operation";
var TMP_MESSAGING_CONSUMER_ID = "messaging.consumer_id";
var TMP_MESSAGING_RABBITMQ_ROUTING_KEY = "messaging.rabbitmq.routing_key";
var TMP_MESSAGING_KAFKA_MESSAGE_KEY = "messaging.kafka.message_key";
var TMP_MESSAGING_KAFKA_CONSUMER_GROUP = "messaging.kafka.consumer_group";
var TMP_MESSAGING_KAFKA_CLIENT_ID = "messaging.kafka.client_id";
var TMP_MESSAGING_KAFKA_PARTITION = "messaging.kafka.partition";
var TMP_MESSAGING_KAFKA_TOMBSTONE = "messaging.kafka.tombstone";
var TMP_RPC_SYSTEM = "rpc.system";
var TMP_RPC_SERVICE = "rpc.service";
var TMP_RPC_METHOD = "rpc.method";
var TMP_RPC_GRPC_STATUS_CODE = "rpc.grpc.status_code";
var TMP_RPC_JSONRPC_VERSION = "rpc.jsonrpc.version";
var TMP_RPC_JSONRPC_REQUEST_ID = "rpc.jsonrpc.request_id";
var TMP_RPC_JSONRPC_ERROR_CODE = "rpc.jsonrpc.error_code";
var TMP_RPC_JSONRPC_ERROR_MESSAGE = "rpc.jsonrpc.error_message";
var TMP_MESSAGE_TYPE = "message.type";
var TMP_MESSAGE_ID = "message.id";
var TMP_MESSAGE_COMPRESSED_SIZE = "message.compressed_size";
var TMP_MESSAGE_UNCOMPRESSED_SIZE = "message.uncompressed_size";
var SEMATTRS_AWS_LAMBDA_INVOKED_ARN = TMP_AWS_LAMBDA_INVOKED_ARN;
var SEMATTRS_DB_SYSTEM = TMP_DB_SYSTEM;
var SEMATTRS_DB_CONNECTION_STRING = TMP_DB_CONNECTION_STRING;
var SEMATTRS_DB_USER = TMP_DB_USER;
var SEMATTRS_DB_JDBC_DRIVER_CLASSNAME = TMP_DB_JDBC_DRIVER_CLASSNAME;
var SEMATTRS_DB_NAME = TMP_DB_NAME;
var SEMATTRS_DB_STATEMENT = TMP_DB_STATEMENT;
var SEMATTRS_DB_OPERATION = TMP_DB_OPERATION;
var SEMATTRS_DB_MSSQL_INSTANCE_NAME = TMP_DB_MSSQL_INSTANCE_NAME;
var SEMATTRS_DB_CASSANDRA_KEYSPACE = TMP_DB_CASSANDRA_KEYSPACE;
var SEMATTRS_DB_CASSANDRA_PAGE_SIZE = TMP_DB_CASSANDRA_PAGE_SIZE;
var SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL = TMP_DB_CASSANDRA_CONSISTENCY_LEVEL;
var SEMATTRS_DB_CASSANDRA_TABLE = TMP_DB_CASSANDRA_TABLE;
var SEMATTRS_DB_CASSANDRA_IDEMPOTENCE = TMP_DB_CASSANDRA_IDEMPOTENCE;
var SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT = TMP_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT;
var SEMATTRS_DB_CASSANDRA_COORDINATOR_ID = TMP_DB_CASSANDRA_COORDINATOR_ID;
var SEMATTRS_DB_CASSANDRA_COORDINATOR_DC = TMP_DB_CASSANDRA_COORDINATOR_DC;
var SEMATTRS_DB_HBASE_NAMESPACE = TMP_DB_HBASE_NAMESPACE;
var SEMATTRS_DB_REDIS_DATABASE_INDEX = TMP_DB_REDIS_DATABASE_INDEX;
var SEMATTRS_DB_MONGODB_COLLECTION = TMP_DB_MONGODB_COLLECTION;
var SEMATTRS_DB_SQL_TABLE = TMP_DB_SQL_TABLE;
var SEMATTRS_EXCEPTION_TYPE = TMP_EXCEPTION_TYPE;
var SEMATTRS_EXCEPTION_MESSAGE = TMP_EXCEPTION_MESSAGE;
var SEMATTRS_EXCEPTION_STACKTRACE = TMP_EXCEPTION_STACKTRACE;
var SEMATTRS_EXCEPTION_ESCAPED = TMP_EXCEPTION_ESCAPED;
var SEMATTRS_FAAS_TRIGGER = TMP_FAAS_TRIGGER;
var SEMATTRS_FAAS_EXECUTION = TMP_FAAS_EXECUTION;
var SEMATTRS_FAAS_DOCUMENT_COLLECTION = TMP_FAAS_DOCUMENT_COLLECTION;
var SEMATTRS_FAAS_DOCUMENT_OPERATION = TMP_FAAS_DOCUMENT_OPERATION;
var SEMATTRS_FAAS_DOCUMENT_TIME = TMP_FAAS_DOCUMENT_TIME;
var SEMATTRS_FAAS_DOCUMENT_NAME = TMP_FAAS_DOCUMENT_NAME;
var SEMATTRS_FAAS_TIME = TMP_FAAS_TIME;
var SEMATTRS_FAAS_CRON = TMP_FAAS_CRON;
var SEMATTRS_FAAS_COLDSTART = TMP_FAAS_COLDSTART;
var SEMATTRS_FAAS_INVOKED_NAME = TMP_FAAS_INVOKED_NAME;
var SEMATTRS_FAAS_INVOKED_PROVIDER = TMP_FAAS_INVOKED_PROVIDER;
var SEMATTRS_FAAS_INVOKED_REGION = TMP_FAAS_INVOKED_REGION;
var SEMATTRS_NET_TRANSPORT = TMP_NET_TRANSPORT;
var SEMATTRS_NET_PEER_IP = TMP_NET_PEER_IP;
var SEMATTRS_NET_PEER_PORT = TMP_NET_PEER_PORT;
var SEMATTRS_NET_PEER_NAME = TMP_NET_PEER_NAME;
var SEMATTRS_NET_HOST_IP = TMP_NET_HOST_IP;
var SEMATTRS_NET_HOST_PORT = TMP_NET_HOST_PORT;
var SEMATTRS_NET_HOST_NAME = TMP_NET_HOST_NAME;
var SEMATTRS_NET_HOST_CONNECTION_TYPE = TMP_NET_HOST_CONNECTION_TYPE;
var SEMATTRS_NET_HOST_CONNECTION_SUBTYPE = TMP_NET_HOST_CONNECTION_SUBTYPE;
var SEMATTRS_NET_HOST_CARRIER_NAME = TMP_NET_HOST_CARRIER_NAME;
var SEMATTRS_NET_HOST_CARRIER_MCC = TMP_NET_HOST_CARRIER_MCC;
var SEMATTRS_NET_HOST_CARRIER_MNC = TMP_NET_HOST_CARRIER_MNC;
var SEMATTRS_NET_HOST_CARRIER_ICC = TMP_NET_HOST_CARRIER_ICC;
var SEMATTRS_PEER_SERVICE = TMP_PEER_SERVICE;
var SEMATTRS_ENDUSER_ID = TMP_ENDUSER_ID;
var SEMATTRS_ENDUSER_ROLE = TMP_ENDUSER_ROLE;
var SEMATTRS_ENDUSER_SCOPE = TMP_ENDUSER_SCOPE;
var SEMATTRS_THREAD_ID = TMP_THREAD_ID;
var SEMATTRS_THREAD_NAME = TMP_THREAD_NAME;
var SEMATTRS_CODE_FUNCTION = TMP_CODE_FUNCTION;
var SEMATTRS_CODE_NAMESPACE = TMP_CODE_NAMESPACE;
var SEMATTRS_CODE_FILEPATH = TMP_CODE_FILEPATH;
var SEMATTRS_CODE_LINENO = TMP_CODE_LINENO;
var SEMATTRS_HTTP_METHOD = TMP_HTTP_METHOD;
var SEMATTRS_HTTP_URL = TMP_HTTP_URL;
var SEMATTRS_HTTP_TARGET = TMP_HTTP_TARGET;
var SEMATTRS_HTTP_HOST = TMP_HTTP_HOST;
var SEMATTRS_HTTP_SCHEME = TMP_HTTP_SCHEME;
var SEMATTRS_HTTP_STATUS_CODE = TMP_HTTP_STATUS_CODE;
var SEMATTRS_HTTP_FLAVOR = TMP_HTTP_FLAVOR;
var SEMATTRS_HTTP_USER_AGENT = TMP_HTTP_USER_AGENT;
var SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH = TMP_HTTP_REQUEST_CONTENT_LENGTH;
var SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = TMP_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED;
var SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH = TMP_HTTP_RESPONSE_CONTENT_LENGTH;
var SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = TMP_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED;
var SEMATTRS_HTTP_SERVER_NAME = TMP_HTTP_SERVER_NAME;
var SEMATTRS_HTTP_ROUTE = TMP_HTTP_ROUTE;
var SEMATTRS_HTTP_CLIENT_IP = TMP_HTTP_CLIENT_IP;
var SEMATTRS_AWS_DYNAMODB_TABLE_NAMES = TMP_AWS_DYNAMODB_TABLE_NAMES;
var SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY = TMP_AWS_DYNAMODB_CONSUMED_CAPACITY;
var SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = TMP_AWS_DYNAMODB_ITEM_COLLECTION_METRICS;
var SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = TMP_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY;
var SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = TMP_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY;
var SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ = TMP_AWS_DYNAMODB_CONSISTENT_READ;
var SEMATTRS_AWS_DYNAMODB_PROJECTION = TMP_AWS_DYNAMODB_PROJECTION;
var SEMATTRS_AWS_DYNAMODB_LIMIT = TMP_AWS_DYNAMODB_LIMIT;
var SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET = TMP_AWS_DYNAMODB_ATTRIBUTES_TO_GET;
var SEMATTRS_AWS_DYNAMODB_INDEX_NAME = TMP_AWS_DYNAMODB_INDEX_NAME;
var SEMATTRS_AWS_DYNAMODB_SELECT = TMP_AWS_DYNAMODB_SELECT;
var SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES;
var SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = TMP_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES;
var SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = TMP_AWS_DYNAMODB_EXCLUSIVE_START_TABLE;
var SEMATTRS_AWS_DYNAMODB_TABLE_COUNT = TMP_AWS_DYNAMODB_TABLE_COUNT;
var SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD = TMP_AWS_DYNAMODB_SCAN_FORWARD;
var SEMATTRS_AWS_DYNAMODB_SEGMENT = TMP_AWS_DYNAMODB_SEGMENT;
var SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS = TMP_AWS_DYNAMODB_TOTAL_SEGMENTS;
var SEMATTRS_AWS_DYNAMODB_COUNT = TMP_AWS_DYNAMODB_COUNT;
var SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT = TMP_AWS_DYNAMODB_SCANNED_COUNT;
var SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = TMP_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS;
var SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES;
var SEMATTRS_MESSAGING_SYSTEM = TMP_MESSAGING_SYSTEM;
var SEMATTRS_MESSAGING_DESTINATION = TMP_MESSAGING_DESTINATION;
var SEMATTRS_MESSAGING_DESTINATION_KIND = TMP_MESSAGING_DESTINATION_KIND;
var SEMATTRS_MESSAGING_TEMP_DESTINATION = TMP_MESSAGING_TEMP_DESTINATION;
var SEMATTRS_MESSAGING_PROTOCOL = TMP_MESSAGING_PROTOCOL;
var SEMATTRS_MESSAGING_PROTOCOL_VERSION = TMP_MESSAGING_PROTOCOL_VERSION;
var SEMATTRS_MESSAGING_URL = TMP_MESSAGING_URL;
var SEMATTRS_MESSAGING_MESSAGE_ID = TMP_MESSAGING_MESSAGE_ID;
var SEMATTRS_MESSAGING_CONVERSATION_ID = TMP_MESSAGING_CONVERSATION_ID;
var SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = TMP_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES;
var SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = TMP_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES;
var SEMATTRS_MESSAGING_OPERATION = TMP_MESSAGING_OPERATION;
var SEMATTRS_MESSAGING_CONSUMER_ID = TMP_MESSAGING_CONSUMER_ID;
var SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY = TMP_MESSAGING_RABBITMQ_ROUTING_KEY;
var SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY = TMP_MESSAGING_KAFKA_MESSAGE_KEY;
var SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP = TMP_MESSAGING_KAFKA_CONSUMER_GROUP;
var SEMATTRS_MESSAGING_KAFKA_CLIENT_ID = TMP_MESSAGING_KAFKA_CLIENT_ID;
var SEMATTRS_MESSAGING_KAFKA_PARTITION = TMP_MESSAGING_KAFKA_PARTITION;
var SEMATTRS_MESSAGING_KAFKA_TOMBSTONE = TMP_MESSAGING_KAFKA_TOMBSTONE;
var SEMATTRS_RPC_SYSTEM = TMP_RPC_SYSTEM;
var SEMATTRS_RPC_SERVICE = TMP_RPC_SERVICE;
var SEMATTRS_RPC_METHOD = TMP_RPC_METHOD;
var SEMATTRS_RPC_GRPC_STATUS_CODE = TMP_RPC_GRPC_STATUS_CODE;
var SEMATTRS_RPC_JSONRPC_VERSION = TMP_RPC_JSONRPC_VERSION;
var SEMATTRS_RPC_JSONRPC_REQUEST_ID = TMP_RPC_JSONRPC_REQUEST_ID;
var SEMATTRS_RPC_JSONRPC_ERROR_CODE = TMP_RPC_JSONRPC_ERROR_CODE;
var SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE = TMP_RPC_JSONRPC_ERROR_MESSAGE;
var SEMATTRS_MESSAGE_TYPE = TMP_MESSAGE_TYPE;
var SEMATTRS_MESSAGE_ID = TMP_MESSAGE_ID;
var SEMATTRS_MESSAGE_COMPRESSED_SIZE = TMP_MESSAGE_COMPRESSED_SIZE;
var SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE = TMP_MESSAGE_UNCOMPRESSED_SIZE;
var SemanticAttributes = /*#__PURE__*/ (0, _utils.createConstMap)([
    TMP_AWS_LAMBDA_INVOKED_ARN,
    TMP_DB_SYSTEM,
    TMP_DB_CONNECTION_STRING,
    TMP_DB_USER,
    TMP_DB_JDBC_DRIVER_CLASSNAME,
    TMP_DB_NAME,
    TMP_DB_STATEMENT,
    TMP_DB_OPERATION,
    TMP_DB_MSSQL_INSTANCE_NAME,
    TMP_DB_CASSANDRA_KEYSPACE,
    TMP_DB_CASSANDRA_PAGE_SIZE,
    TMP_DB_CASSANDRA_CONSISTENCY_LEVEL,
    TMP_DB_CASSANDRA_TABLE,
    TMP_DB_CASSANDRA_IDEMPOTENCE,
    TMP_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT,
    TMP_DB_CASSANDRA_COORDINATOR_ID,
    TMP_DB_CASSANDRA_COORDINATOR_DC,
    TMP_DB_HBASE_NAMESPACE,
    TMP_DB_REDIS_DATABASE_INDEX,
    TMP_DB_MONGODB_COLLECTION,
    TMP_DB_SQL_TABLE,
    TMP_EXCEPTION_TYPE,
    TMP_EXCEPTION_MESSAGE,
    TMP_EXCEPTION_STACKTRACE,
    TMP_EXCEPTION_ESCAPED,
    TMP_FAAS_TRIGGER,
    TMP_FAAS_EXECUTION,
    TMP_FAAS_DOCUMENT_COLLECTION,
    TMP_FAAS_DOCUMENT_OPERATION,
    TMP_FAAS_DOCUMENT_TIME,
    TMP_FAAS_DOCUMENT_NAME,
    TMP_FAAS_TIME,
    TMP_FAAS_CRON,
    TMP_FAAS_COLDSTART,
    TMP_FAAS_INVOKED_NAME,
    TMP_FAAS_INVOKED_PROVIDER,
    TMP_FAAS_INVOKED_REGION,
    TMP_NET_TRANSPORT,
    TMP_NET_PEER_IP,
    TMP_NET_PEER_PORT,
    TMP_NET_PEER_NAME,
    TMP_NET_HOST_IP,
    TMP_NET_HOST_PORT,
    TMP_NET_HOST_NAME,
    TMP_NET_HOST_CONNECTION_TYPE,
    TMP_NET_HOST_CONNECTION_SUBTYPE,
    TMP_NET_HOST_CARRIER_NAME,
    TMP_NET_HOST_CARRIER_MCC,
    TMP_NET_HOST_CARRIER_MNC,
    TMP_NET_HOST_CARRIER_ICC,
    TMP_PEER_SERVICE,
    TMP_ENDUSER_ID,
    TMP_ENDUSER_ROLE,
    TMP_ENDUSER_SCOPE,
    TMP_THREAD_ID,
    TMP_THREAD_NAME,
    TMP_CODE_FUNCTION,
    TMP_CODE_NAMESPACE,
    TMP_CODE_FILEPATH,
    TMP_CODE_LINENO,
    TMP_HTTP_METHOD,
    TMP_HTTP_URL,
    TMP_HTTP_TARGET,
    TMP_HTTP_HOST,
    TMP_HTTP_SCHEME,
    TMP_HTTP_STATUS_CODE,
    TMP_HTTP_FLAVOR,
    TMP_HTTP_USER_AGENT,
    TMP_HTTP_REQUEST_CONTENT_LENGTH,
    TMP_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED,
    TMP_HTTP_RESPONSE_CONTENT_LENGTH,
    TMP_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED,
    TMP_HTTP_SERVER_NAME,
    TMP_HTTP_ROUTE,
    TMP_HTTP_CLIENT_IP,
    TMP_AWS_DYNAMODB_TABLE_NAMES,
    TMP_AWS_DYNAMODB_CONSUMED_CAPACITY,
    TMP_AWS_DYNAMODB_ITEM_COLLECTION_METRICS,
    TMP_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY,
    TMP_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY,
    TMP_AWS_DYNAMODB_CONSISTENT_READ,
    TMP_AWS_DYNAMODB_PROJECTION,
    TMP_AWS_DYNAMODB_LIMIT,
    TMP_AWS_DYNAMODB_ATTRIBUTES_TO_GET,
    TMP_AWS_DYNAMODB_INDEX_NAME,
    TMP_AWS_DYNAMODB_SELECT,
    TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES,
    TMP_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES,
    TMP_AWS_DYNAMODB_EXCLUSIVE_START_TABLE,
    TMP_AWS_DYNAMODB_TABLE_COUNT,
    TMP_AWS_DYNAMODB_SCAN_FORWARD,
    TMP_AWS_DYNAMODB_SEGMENT,
    TMP_AWS_DYNAMODB_TOTAL_SEGMENTS,
    TMP_AWS_DYNAMODB_COUNT,
    TMP_AWS_DYNAMODB_SCANNED_COUNT,
    TMP_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS,
    TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES,
    TMP_MESSAGING_SYSTEM,
    TMP_MESSAGING_DESTINATION,
    TMP_MESSAGING_DESTINATION_KIND,
    TMP_MESSAGING_TEMP_DESTINATION,
    TMP_MESSAGING_PROTOCOL,
    TMP_MESSAGING_PROTOCOL_VERSION,
    TMP_MESSAGING_URL,
    TMP_MESSAGING_MESSAGE_ID,
    TMP_MESSAGING_CONVERSATION_ID,
    TMP_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES,
    TMP_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES,
    TMP_MESSAGING_OPERATION,
    TMP_MESSAGING_CONSUMER_ID,
    TMP_MESSAGING_RABBITMQ_ROUTING_KEY,
    TMP_MESSAGING_KAFKA_MESSAGE_KEY,
    TMP_MESSAGING_KAFKA_CONSUMER_GROUP,
    TMP_MESSAGING_KAFKA_CLIENT_ID,
    TMP_MESSAGING_KAFKA_PARTITION,
    TMP_MESSAGING_KAFKA_TOMBSTONE,
    TMP_RPC_SYSTEM,
    TMP_RPC_SERVICE,
    TMP_RPC_METHOD,
    TMP_RPC_GRPC_STATUS_CODE,
    TMP_RPC_JSONRPC_VERSION,
    TMP_RPC_JSONRPC_REQUEST_ID,
    TMP_RPC_JSONRPC_ERROR_CODE,
    TMP_RPC_JSONRPC_ERROR_MESSAGE,
    TMP_MESSAGE_TYPE,
    TMP_MESSAGE_ID,
    TMP_MESSAGE_COMPRESSED_SIZE,
    TMP_MESSAGE_UNCOMPRESSED_SIZE
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for DbSystemValues enum definition
 *
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifable export names for some package types
var TMP_DBSYSTEMVALUES_OTHER_SQL = "other_sql";
var TMP_DBSYSTEMVALUES_MSSQL = "mssql";
var TMP_DBSYSTEMVALUES_MYSQL = "mysql";
var TMP_DBSYSTEMVALUES_ORACLE = "oracle";
var TMP_DBSYSTEMVALUES_DB2 = "db2";
var TMP_DBSYSTEMVALUES_POSTGRESQL = "postgresql";
var TMP_DBSYSTEMVALUES_REDSHIFT = "redshift";
var TMP_DBSYSTEMVALUES_HIVE = "hive";
var TMP_DBSYSTEMVALUES_CLOUDSCAPE = "cloudscape";
var TMP_DBSYSTEMVALUES_HSQLDB = "hsqldb";
var TMP_DBSYSTEMVALUES_PROGRESS = "progress";
var TMP_DBSYSTEMVALUES_MAXDB = "maxdb";
var TMP_DBSYSTEMVALUES_HANADB = "hanadb";
var TMP_DBSYSTEMVALUES_INGRES = "ingres";
var TMP_DBSYSTEMVALUES_FIRSTSQL = "firstsql";
var TMP_DBSYSTEMVALUES_EDB = "edb";
var TMP_DBSYSTEMVALUES_CACHE = "cache";
var TMP_DBSYSTEMVALUES_ADABAS = "adabas";
var TMP_DBSYSTEMVALUES_FIREBIRD = "firebird";
var TMP_DBSYSTEMVALUES_DERBY = "derby";
var TMP_DBSYSTEMVALUES_FILEMAKER = "filemaker";
var TMP_DBSYSTEMVALUES_INFORMIX = "informix";
var TMP_DBSYSTEMVALUES_INSTANTDB = "instantdb";
var TMP_DBSYSTEMVALUES_INTERBASE = "interbase";
var TMP_DBSYSTEMVALUES_MARIADB = "mariadb";
var TMP_DBSYSTEMVALUES_NETEZZA = "netezza";
var TMP_DBSYSTEMVALUES_PERVASIVE = "pervasive";
var TMP_DBSYSTEMVALUES_POINTBASE = "pointbase";
var TMP_DBSYSTEMVALUES_SQLITE = "sqlite";
var TMP_DBSYSTEMVALUES_SYBASE = "sybase";
var TMP_DBSYSTEMVALUES_TERADATA = "teradata";
var TMP_DBSYSTEMVALUES_VERTICA = "vertica";
var TMP_DBSYSTEMVALUES_H2 = "h2";
var TMP_DBSYSTEMVALUES_COLDFUSION = "coldfusion";
var TMP_DBSYSTEMVALUES_CASSANDRA = "cassandra";
var TMP_DBSYSTEMVALUES_HBASE = "hbase";
var TMP_DBSYSTEMVALUES_MONGODB = "mongodb";
var TMP_DBSYSTEMVALUES_REDIS = "redis";
var TMP_DBSYSTEMVALUES_COUCHBASE = "couchbase";
var TMP_DBSYSTEMVALUES_COUCHDB = "couchdb";
var TMP_DBSYSTEMVALUES_COSMOSDB = "cosmosdb";
var TMP_DBSYSTEMVALUES_DYNAMODB = "dynamodb";
var TMP_DBSYSTEMVALUES_NEO4J = "neo4j";
var TMP_DBSYSTEMVALUES_GEODE = "geode";
var TMP_DBSYSTEMVALUES_ELASTICSEARCH = "elasticsearch";
var TMP_DBSYSTEMVALUES_MEMCACHED = "memcached";
var TMP_DBSYSTEMVALUES_COCKROACHDB = "cockroachdb";
var DBSYSTEMVALUES_OTHER_SQL = TMP_DBSYSTEMVALUES_OTHER_SQL;
var DBSYSTEMVALUES_MSSQL = TMP_DBSYSTEMVALUES_MSSQL;
var DBSYSTEMVALUES_MYSQL = TMP_DBSYSTEMVALUES_MYSQL;
var DBSYSTEMVALUES_ORACLE = TMP_DBSYSTEMVALUES_ORACLE;
var DBSYSTEMVALUES_DB2 = TMP_DBSYSTEMVALUES_DB2;
var DBSYSTEMVALUES_POSTGRESQL = TMP_DBSYSTEMVALUES_POSTGRESQL;
var DBSYSTEMVALUES_REDSHIFT = TMP_DBSYSTEMVALUES_REDSHIFT;
var DBSYSTEMVALUES_HIVE = TMP_DBSYSTEMVALUES_HIVE;
var DBSYSTEMVALUES_CLOUDSCAPE = TMP_DBSYSTEMVALUES_CLOUDSCAPE;
var DBSYSTEMVALUES_HSQLDB = TMP_DBSYSTEMVALUES_HSQLDB;
var DBSYSTEMVALUES_PROGRESS = TMP_DBSYSTEMVALUES_PROGRESS;
var DBSYSTEMVALUES_MAXDB = TMP_DBSYSTEMVALUES_MAXDB;
var DBSYSTEMVALUES_HANADB = TMP_DBSYSTEMVALUES_HANADB;
var DBSYSTEMVALUES_INGRES = TMP_DBSYSTEMVALUES_INGRES;
var DBSYSTEMVALUES_FIRSTSQL = TMP_DBSYSTEMVALUES_FIRSTSQL;
var DBSYSTEMVALUES_EDB = TMP_DBSYSTEMVALUES_EDB;
var DBSYSTEMVALUES_CACHE = TMP_DBSYSTEMVALUES_CACHE;
var DBSYSTEMVALUES_ADABAS = TMP_DBSYSTEMVALUES_ADABAS;
var DBSYSTEMVALUES_FIREBIRD = TMP_DBSYSTEMVALUES_FIREBIRD;
var DBSYSTEMVALUES_DERBY = TMP_DBSYSTEMVALUES_DERBY;
var DBSYSTEMVALUES_FILEMAKER = TMP_DBSYSTEMVALUES_FILEMAKER;
var DBSYSTEMVALUES_INFORMIX = TMP_DBSYSTEMVALUES_INFORMIX;
var DBSYSTEMVALUES_INSTANTDB = TMP_DBSYSTEMVALUES_INSTANTDB;
var DBSYSTEMVALUES_INTERBASE = TMP_DBSYSTEMVALUES_INTERBASE;
var DBSYSTEMVALUES_MARIADB = TMP_DBSYSTEMVALUES_MARIADB;
var DBSYSTEMVALUES_NETEZZA = TMP_DBSYSTEMVALUES_NETEZZA;
var DBSYSTEMVALUES_PERVASIVE = TMP_DBSYSTEMVALUES_PERVASIVE;
var DBSYSTEMVALUES_POINTBASE = TMP_DBSYSTEMVALUES_POINTBASE;
var DBSYSTEMVALUES_SQLITE = TMP_DBSYSTEMVALUES_SQLITE;
var DBSYSTEMVALUES_SYBASE = TMP_DBSYSTEMVALUES_SYBASE;
var DBSYSTEMVALUES_TERADATA = TMP_DBSYSTEMVALUES_TERADATA;
var DBSYSTEMVALUES_VERTICA = TMP_DBSYSTEMVALUES_VERTICA;
var DBSYSTEMVALUES_H2 = TMP_DBSYSTEMVALUES_H2;
var DBSYSTEMVALUES_COLDFUSION = TMP_DBSYSTEMVALUES_COLDFUSION;
var DBSYSTEMVALUES_CASSANDRA = TMP_DBSYSTEMVALUES_CASSANDRA;
var DBSYSTEMVALUES_HBASE = TMP_DBSYSTEMVALUES_HBASE;
var DBSYSTEMVALUES_MONGODB = TMP_DBSYSTEMVALUES_MONGODB;
var DBSYSTEMVALUES_REDIS = TMP_DBSYSTEMVALUES_REDIS;
var DBSYSTEMVALUES_COUCHBASE = TMP_DBSYSTEMVALUES_COUCHBASE;
var DBSYSTEMVALUES_COUCHDB = TMP_DBSYSTEMVALUES_COUCHDB;
var DBSYSTEMVALUES_COSMOSDB = TMP_DBSYSTEMVALUES_COSMOSDB;
var DBSYSTEMVALUES_DYNAMODB = TMP_DBSYSTEMVALUES_DYNAMODB;
var DBSYSTEMVALUES_NEO4J = TMP_DBSYSTEMVALUES_NEO4J;
var DBSYSTEMVALUES_GEODE = TMP_DBSYSTEMVALUES_GEODE;
var DBSYSTEMVALUES_ELASTICSEARCH = TMP_DBSYSTEMVALUES_ELASTICSEARCH;
var DBSYSTEMVALUES_MEMCACHED = TMP_DBSYSTEMVALUES_MEMCACHED;
var DBSYSTEMVALUES_COCKROACHDB = TMP_DBSYSTEMVALUES_COCKROACHDB;
var DbSystemValues = /*#__PURE__*/ (0, _utils.createConstMap)([
    TMP_DBSYSTEMVALUES_OTHER_SQL,
    TMP_DBSYSTEMVALUES_MSSQL,
    TMP_DBSYSTEMVALUES_MYSQL,
    TMP_DBSYSTEMVALUES_ORACLE,
    TMP_DBSYSTEMVALUES_DB2,
    TMP_DBSYSTEMVALUES_POSTGRESQL,
    TMP_DBSYSTEMVALUES_REDSHIFT,
    TMP_DBSYSTEMVALUES_HIVE,
    TMP_DBSYSTEMVALUES_CLOUDSCAPE,
    TMP_DBSYSTEMVALUES_HSQLDB,
    TMP_DBSYSTEMVALUES_PROGRESS,
    TMP_DBSYSTEMVALUES_MAXDB,
    TMP_DBSYSTEMVALUES_HANADB,
    TMP_DBSYSTEMVALUES_INGRES,
    TMP_DBSYSTEMVALUES_FIRSTSQL,
    TMP_DBSYSTEMVALUES_EDB,
    TMP_DBSYSTEMVALUES_CACHE,
    TMP_DBSYSTEMVALUES_ADABAS,
    TMP_DBSYSTEMVALUES_FIREBIRD,
    TMP_DBSYSTEMVALUES_DERBY,
    TMP_DBSYSTEMVALUES_FILEMAKER,
    TMP_DBSYSTEMVALUES_INFORMIX,
    TMP_DBSYSTEMVALUES_INSTANTDB,
    TMP_DBSYSTEMVALUES_INTERBASE,
    TMP_DBSYSTEMVALUES_MARIADB,
    TMP_DBSYSTEMVALUES_NETEZZA,
    TMP_DBSYSTEMVALUES_PERVASIVE,
    TMP_DBSYSTEMVALUES_POINTBASE,
    TMP_DBSYSTEMVALUES_SQLITE,
    TMP_DBSYSTEMVALUES_SYBASE,
    TMP_DBSYSTEMVALUES_TERADATA,
    TMP_DBSYSTEMVALUES_VERTICA,
    TMP_DBSYSTEMVALUES_H2,
    TMP_DBSYSTEMVALUES_COLDFUSION,
    TMP_DBSYSTEMVALUES_CASSANDRA,
    TMP_DBSYSTEMVALUES_HBASE,
    TMP_DBSYSTEMVALUES_MONGODB,
    TMP_DBSYSTEMVALUES_REDIS,
    TMP_DBSYSTEMVALUES_COUCHBASE,
    TMP_DBSYSTEMVALUES_COUCHDB,
    TMP_DBSYSTEMVALUES_COSMOSDB,
    TMP_DBSYSTEMVALUES_DYNAMODB,
    TMP_DBSYSTEMVALUES_NEO4J,
    TMP_DBSYSTEMVALUES_GEODE,
    TMP_DBSYSTEMVALUES_ELASTICSEARCH,
    TMP_DBSYSTEMVALUES_MEMCACHED,
    TMP_DBSYSTEMVALUES_COCKROACHDB
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for DbCassandraConsistencyLevelValues enum definition
 *
 * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifable export names for some package types
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ALL = "all";
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = "each_quorum";
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = "quorum";
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = "local_quorum";
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ONE = "one";
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_TWO = "two";
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_THREE = "three";
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = "local_one";
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ANY = "any";
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = "serial";
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = "local_serial";
var DBCASSANDRACONSISTENCYLEVELVALUES_ALL = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ALL;
var DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM;
var DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM;
var DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM;
var DBCASSANDRACONSISTENCYLEVELVALUES_ONE = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ONE;
var DBCASSANDRACONSISTENCYLEVELVALUES_TWO = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_TWO;
var DBCASSANDRACONSISTENCYLEVELVALUES_THREE = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_THREE;
var DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE;
var DBCASSANDRACONSISTENCYLEVELVALUES_ANY = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ANY;
var DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL;
var DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL;
var DbCassandraConsistencyLevelValues = /*#__PURE__*/ (0, _utils.createConstMap)([
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ALL,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ONE,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_TWO,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_THREE,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ANY,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for FaasTriggerValues enum definition
 *
 * Type of the trigger on which the function is executed.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifable export names for some package types
var TMP_FAASTRIGGERVALUES_DATASOURCE = "datasource";
var TMP_FAASTRIGGERVALUES_HTTP = "http";
var TMP_FAASTRIGGERVALUES_PUBSUB = "pubsub";
var TMP_FAASTRIGGERVALUES_TIMER = "timer";
var TMP_FAASTRIGGERVALUES_OTHER = "other";
var FAASTRIGGERVALUES_DATASOURCE = TMP_FAASTRIGGERVALUES_DATASOURCE;
var FAASTRIGGERVALUES_HTTP = TMP_FAASTRIGGERVALUES_HTTP;
var FAASTRIGGERVALUES_PUBSUB = TMP_FAASTRIGGERVALUES_PUBSUB;
var FAASTRIGGERVALUES_TIMER = TMP_FAASTRIGGERVALUES_TIMER;
var FAASTRIGGERVALUES_OTHER = TMP_FAASTRIGGERVALUES_OTHER;
var FaasTriggerValues = /*#__PURE__*/ (0, _utils.createConstMap)([
    TMP_FAASTRIGGERVALUES_DATASOURCE,
    TMP_FAASTRIGGERVALUES_HTTP,
    TMP_FAASTRIGGERVALUES_PUBSUB,
    TMP_FAASTRIGGERVALUES_TIMER,
    TMP_FAASTRIGGERVALUES_OTHER
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for FaasDocumentOperationValues enum definition
 *
 * Describes the type of the operation that was performed on the data.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifable export names for some package types
var TMP_FAASDOCUMENTOPERATIONVALUES_INSERT = "insert";
var TMP_FAASDOCUMENTOPERATIONVALUES_EDIT = "edit";
var TMP_FAASDOCUMENTOPERATIONVALUES_DELETE = "delete";
var FAASDOCUMENTOPERATIONVALUES_INSERT = TMP_FAASDOCUMENTOPERATIONVALUES_INSERT;
var FAASDOCUMENTOPERATIONVALUES_EDIT = TMP_FAASDOCUMENTOPERATIONVALUES_EDIT;
var FAASDOCUMENTOPERATIONVALUES_DELETE = TMP_FAASDOCUMENTOPERATIONVALUES_DELETE;
var FaasDocumentOperationValues = /*#__PURE__*/ (0, _utils.createConstMap)([
    TMP_FAASDOCUMENTOPERATIONVALUES_INSERT,
    TMP_FAASDOCUMENTOPERATIONVALUES_EDIT,
    TMP_FAASDOCUMENTOPERATIONVALUES_DELETE
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for FaasInvokedProviderValues enum definition
 *
 * The cloud provider of the invoked function.
 *
 * Note: SHOULD be equal to the `cloud.provider` resource attribute of the invoked function.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifable export names for some package types
var TMP_FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = "alibaba_cloud";
var TMP_FAASINVOKEDPROVIDERVALUES_AWS = "aws";
var TMP_FAASINVOKEDPROVIDERVALUES_AZURE = "azure";
var TMP_FAASINVOKEDPROVIDERVALUES_GCP = "gcp";
var FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = TMP_FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD;
var FAASINVOKEDPROVIDERVALUES_AWS = TMP_FAASINVOKEDPROVIDERVALUES_AWS;
var FAASINVOKEDPROVIDERVALUES_AZURE = TMP_FAASINVOKEDPROVIDERVALUES_AZURE;
var FAASINVOKEDPROVIDERVALUES_GCP = TMP_FAASINVOKEDPROVIDERVALUES_GCP;
var FaasInvokedProviderValues = /*#__PURE__*/ (0, _utils.createConstMap)([
    TMP_FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD,
    TMP_FAASINVOKEDPROVIDERVALUES_AWS,
    TMP_FAASINVOKEDPROVIDERVALUES_AZURE,
    TMP_FAASINVOKEDPROVIDERVALUES_GCP
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for NetTransportValues enum definition
 *
 * Transport protocol used. See note below.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifable export names for some package types
var TMP_NETTRANSPORTVALUES_IP_TCP = "ip_tcp";
var TMP_NETTRANSPORTVALUES_IP_UDP = "ip_udp";
var TMP_NETTRANSPORTVALUES_IP = "ip";
var TMP_NETTRANSPORTVALUES_UNIX = "unix";
var TMP_NETTRANSPORTVALUES_PIPE = "pipe";
var TMP_NETTRANSPORTVALUES_INPROC = "inproc";
var TMP_NETTRANSPORTVALUES_OTHER = "other";
var NETTRANSPORTVALUES_IP_TCP = TMP_NETTRANSPORTVALUES_IP_TCP;
var NETTRANSPORTVALUES_IP_UDP = TMP_NETTRANSPORTVALUES_IP_UDP;
var NETTRANSPORTVALUES_IP = TMP_NETTRANSPORTVALUES_IP;
var NETTRANSPORTVALUES_UNIX = TMP_NETTRANSPORTVALUES_UNIX;
var NETTRANSPORTVALUES_PIPE = TMP_NETTRANSPORTVALUES_PIPE;
var NETTRANSPORTVALUES_INPROC = TMP_NETTRANSPORTVALUES_INPROC;
var NETTRANSPORTVALUES_OTHER = TMP_NETTRANSPORTVALUES_OTHER;
var NetTransportValues = /*#__PURE__*/ (0, _utils.createConstMap)([
    TMP_NETTRANSPORTVALUES_IP_TCP,
    TMP_NETTRANSPORTVALUES_IP_UDP,
    TMP_NETTRANSPORTVALUES_IP,
    TMP_NETTRANSPORTVALUES_UNIX,
    TMP_NETTRANSPORTVALUES_PIPE,
    TMP_NETTRANSPORTVALUES_INPROC,
    TMP_NETTRANSPORTVALUES_OTHER
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for NetHostConnectionTypeValues enum definition
 *
 * The internet connection type currently being used by the host.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifable export names for some package types
var TMP_NETHOSTCONNECTIONTYPEVALUES_WIFI = "wifi";
var TMP_NETHOSTCONNECTIONTYPEVALUES_WIRED = "wired";
var TMP_NETHOSTCONNECTIONTYPEVALUES_CELL = "cell";
var TMP_NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = "unavailable";
var TMP_NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = "unknown";
var NETHOSTCONNECTIONTYPEVALUES_WIFI = TMP_NETHOSTCONNECTIONTYPEVALUES_WIFI;
var NETHOSTCONNECTIONTYPEVALUES_WIRED = TMP_NETHOSTCONNECTIONTYPEVALUES_WIRED;
var NETHOSTCONNECTIONTYPEVALUES_CELL = TMP_NETHOSTCONNECTIONTYPEVALUES_CELL;
var NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = TMP_NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE;
var NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = TMP_NETHOSTCONNECTIONTYPEVALUES_UNKNOWN;
var NetHostConnectionTypeValues = /*#__PURE__*/ (0, _utils.createConstMap)([
    TMP_NETHOSTCONNECTIONTYPEVALUES_WIFI,
    TMP_NETHOSTCONNECTIONTYPEVALUES_WIRED,
    TMP_NETHOSTCONNECTIONTYPEVALUES_CELL,
    TMP_NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE,
    TMP_NETHOSTCONNECTIONTYPEVALUES_UNKNOWN
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for NetHostConnectionSubtypeValues enum definition
 *
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifable export names for some package types
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = "gprs";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = "edge";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = "umts";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = "cdma";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = "evdo_0";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = "evdo_a";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = "cdma2000_1xrtt";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = "hsdpa";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = "hsupa";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = "hspa";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = "iden";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = "evdo_b";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE = "lte";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = "ehrpd";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = "hspap";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GSM = "gsm";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = "td_scdma";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = "iwlan";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NR = "nr";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = "nrnsa";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = "lte_ca";
var NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GPRS;
var NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EDGE;
var NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_UMTS;
var NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA;
var NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0;
var NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A;
var NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT;
var NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA;
var NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA;
var NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPA;
var NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IDEN;
var NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B;
var NETHOSTCONNECTIONSUBTYPEVALUES_LTE = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE;
var NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD;
var NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP;
var NETHOSTCONNECTIONSUBTYPEVALUES_GSM = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GSM;
var NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA;
var NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN;
var NETHOSTCONNECTIONSUBTYPEVALUES_NR = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NR;
var NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA;
var NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA;
var NetHostConnectionSubtypeValues = /*#__PURE__*/ (0, _utils.createConstMap)([
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GPRS,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EDGE,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_UMTS,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IDEN,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GSM,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NR,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for HttpFlavorValues enum definition
 *
 * Kind of HTTP protocol used.
 *
 * Note: If `net.transport` is not specified, it can be assumed to be `IP.TCP` except if `http.flavor` is `QUIC`, in which case `IP.UDP` is assumed.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifable export names for some package types
var TMP_HTTPFLAVORVALUES_HTTP_1_0 = "1.0";
var TMP_HTTPFLAVORVALUES_HTTP_1_1 = "1.1";
var TMP_HTTPFLAVORVALUES_HTTP_2_0 = "2.0";
var TMP_HTTPFLAVORVALUES_SPDY = "SPDY";
var TMP_HTTPFLAVORVALUES_QUIC = "QUIC";
var HTTPFLAVORVALUES_HTTP_1_0 = TMP_HTTPFLAVORVALUES_HTTP_1_0;
var HTTPFLAVORVALUES_HTTP_1_1 = TMP_HTTPFLAVORVALUES_HTTP_1_1;
var HTTPFLAVORVALUES_HTTP_2_0 = TMP_HTTPFLAVORVALUES_HTTP_2_0;
var HTTPFLAVORVALUES_SPDY = TMP_HTTPFLAVORVALUES_SPDY;
var HTTPFLAVORVALUES_QUIC = TMP_HTTPFLAVORVALUES_QUIC;
var HttpFlavorValues = {
    HTTP_1_0: TMP_HTTPFLAVORVALUES_HTTP_1_0,
    HTTP_1_1: TMP_HTTPFLAVORVALUES_HTTP_1_1,
    HTTP_2_0: TMP_HTTPFLAVORVALUES_HTTP_2_0,
    SPDY: TMP_HTTPFLAVORVALUES_SPDY,
    QUIC: TMP_HTTPFLAVORVALUES_QUIC
};
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for MessagingDestinationKindValues enum definition
 *
 * The kind of message destination.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifable export names for some package types
var TMP_MESSAGINGDESTINATIONKINDVALUES_QUEUE = "queue";
var TMP_MESSAGINGDESTINATIONKINDVALUES_TOPIC = "topic";
var MESSAGINGDESTINATIONKINDVALUES_QUEUE = TMP_MESSAGINGDESTINATIONKINDVALUES_QUEUE;
var MESSAGINGDESTINATIONKINDVALUES_TOPIC = TMP_MESSAGINGDESTINATIONKINDVALUES_TOPIC;
var MessagingDestinationKindValues = /*#__PURE__*/ (0, _utils.createConstMap)([
    TMP_MESSAGINGDESTINATIONKINDVALUES_QUEUE,
    TMP_MESSAGINGDESTINATIONKINDVALUES_TOPIC
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for MessagingOperationValues enum definition
 *
 * A string identifying the kind of message consumption as defined in the [Operation names](#operation-names) section above. If the operation is &#34;send&#34;, this attribute MUST NOT be set, since the operation can be inferred from the span kind in that case.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifable export names for some package types
var TMP_MESSAGINGOPERATIONVALUES_RECEIVE = "receive";
var TMP_MESSAGINGOPERATIONVALUES_PROCESS = "process";
var MESSAGINGOPERATIONVALUES_RECEIVE = TMP_MESSAGINGOPERATIONVALUES_RECEIVE;
var MESSAGINGOPERATIONVALUES_PROCESS = TMP_MESSAGINGOPERATIONVALUES_PROCESS;
var MessagingOperationValues = /*#__PURE__*/ (0, _utils.createConstMap)([
    TMP_MESSAGINGOPERATIONVALUES_RECEIVE,
    TMP_MESSAGINGOPERATIONVALUES_PROCESS
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for RpcGrpcStatusCodeValues enum definition
 *
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifable export names for some package types
var TMP_RPCGRPCSTATUSCODEVALUES_OK = 0;
var TMP_RPCGRPCSTATUSCODEVALUES_CANCELLED = 1;
var TMP_RPCGRPCSTATUSCODEVALUES_UNKNOWN = 2;
var TMP_RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT = 3;
var TMP_RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED = 4;
var TMP_RPCGRPCSTATUSCODEVALUES_NOT_FOUND = 5;
var TMP_RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS = 6;
var TMP_RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED = 7;
var TMP_RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED = 8;
var TMP_RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION = 9;
var TMP_RPCGRPCSTATUSCODEVALUES_ABORTED = 10;
var TMP_RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE = 11;
var TMP_RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED = 12;
var TMP_RPCGRPCSTATUSCODEVALUES_INTERNAL = 13;
var TMP_RPCGRPCSTATUSCODEVALUES_UNAVAILABLE = 14;
var TMP_RPCGRPCSTATUSCODEVALUES_DATA_LOSS = 15;
var TMP_RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED = 16;
var RPCGRPCSTATUSCODEVALUES_OK = TMP_RPCGRPCSTATUSCODEVALUES_OK;
var RPCGRPCSTATUSCODEVALUES_CANCELLED = TMP_RPCGRPCSTATUSCODEVALUES_CANCELLED;
var RPCGRPCSTATUSCODEVALUES_UNKNOWN = TMP_RPCGRPCSTATUSCODEVALUES_UNKNOWN;
var RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT = TMP_RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT;
var RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED = TMP_RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED;
var RPCGRPCSTATUSCODEVALUES_NOT_FOUND = TMP_RPCGRPCSTATUSCODEVALUES_NOT_FOUND;
var RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS = TMP_RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS;
var RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED = TMP_RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED;
var RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED = TMP_RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED;
var RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION = TMP_RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION;
var RPCGRPCSTATUSCODEVALUES_ABORTED = TMP_RPCGRPCSTATUSCODEVALUES_ABORTED;
var RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE = TMP_RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE;
var RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED = TMP_RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED;
var RPCGRPCSTATUSCODEVALUES_INTERNAL = TMP_RPCGRPCSTATUSCODEVALUES_INTERNAL;
var RPCGRPCSTATUSCODEVALUES_UNAVAILABLE = TMP_RPCGRPCSTATUSCODEVALUES_UNAVAILABLE;
var RPCGRPCSTATUSCODEVALUES_DATA_LOSS = TMP_RPCGRPCSTATUSCODEVALUES_DATA_LOSS;
var RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED = TMP_RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED;
var RpcGrpcStatusCodeValues = {
    OK: TMP_RPCGRPCSTATUSCODEVALUES_OK,
    CANCELLED: TMP_RPCGRPCSTATUSCODEVALUES_CANCELLED,
    UNKNOWN: TMP_RPCGRPCSTATUSCODEVALUES_UNKNOWN,
    INVALID_ARGUMENT: TMP_RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT,
    DEADLINE_EXCEEDED: TMP_RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED,
    NOT_FOUND: TMP_RPCGRPCSTATUSCODEVALUES_NOT_FOUND,
    ALREADY_EXISTS: TMP_RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS,
    PERMISSION_DENIED: TMP_RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED,
    RESOURCE_EXHAUSTED: TMP_RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED,
    FAILED_PRECONDITION: TMP_RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION,
    ABORTED: TMP_RPCGRPCSTATUSCODEVALUES_ABORTED,
    OUT_OF_RANGE: TMP_RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE,
    UNIMPLEMENTED: TMP_RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED,
    INTERNAL: TMP_RPCGRPCSTATUSCODEVALUES_INTERNAL,
    UNAVAILABLE: TMP_RPCGRPCSTATUSCODEVALUES_UNAVAILABLE,
    DATA_LOSS: TMP_RPCGRPCSTATUSCODEVALUES_DATA_LOSS,
    UNAUTHENTICATED: TMP_RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED
};
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for MessageTypeValues enum definition
 *
 * Whether this is a received or sent message.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifable export names for some package types
var TMP_MESSAGETYPEVALUES_SENT = "SENT";
var TMP_MESSAGETYPEVALUES_RECEIVED = "RECEIVED";
var MESSAGETYPEVALUES_SENT = TMP_MESSAGETYPEVALUES_SENT;
var MESSAGETYPEVALUES_RECEIVED = TMP_MESSAGETYPEVALUES_RECEIVED;
var MessageTypeValues = /*#__PURE__*/ (0, _utils.createConstMap)([
    TMP_MESSAGETYPEVALUES_SENT,
    TMP_MESSAGETYPEVALUES_RECEIVED
]);

},{"../internal/utils":"hV8FE","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"hV8FE":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Creates a const map from the given values
 * @param values - An array of values to be used as keys and values in the map.
 * @returns A populated version of the map with the values and keys derived from the values.
 */ /*#__NO_SIDE_EFFECTS__*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createConstMap", ()=>createConstMap);
function createConstMap(values) {
    // eslint-disable-next-line prefer-const, @typescript-eslint/no-explicit-any
    var res = {};
    var len = values.length;
    for(var lp = 0; lp < len; lp++){
        var val = values[lp];
        if (val) res[String(val).toUpperCase().replace(/[-.]/g, "_")] = val;
    }
    return res;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"6gLs0":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _semanticResourceAttributes = require("./SemanticResourceAttributes");
parcelHelpers.exportAll(_semanticResourceAttributes, exports);

},{"./SemanticResourceAttributes":"7C7hx","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"7C7hx":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SEMRESATTRS_CLOUD_PROVIDER", ()=>SEMRESATTRS_CLOUD_PROVIDER);
parcelHelpers.export(exports, "SEMRESATTRS_CLOUD_ACCOUNT_ID", ()=>SEMRESATTRS_CLOUD_ACCOUNT_ID);
parcelHelpers.export(exports, "SEMRESATTRS_CLOUD_REGION", ()=>SEMRESATTRS_CLOUD_REGION);
parcelHelpers.export(exports, "SEMRESATTRS_CLOUD_AVAILABILITY_ZONE", ()=>SEMRESATTRS_CLOUD_AVAILABILITY_ZONE);
parcelHelpers.export(exports, "SEMRESATTRS_CLOUD_PLATFORM", ()=>SEMRESATTRS_CLOUD_PLATFORM);
parcelHelpers.export(exports, "SEMRESATTRS_AWS_ECS_CONTAINER_ARN", ()=>SEMRESATTRS_AWS_ECS_CONTAINER_ARN);
parcelHelpers.export(exports, "SEMRESATTRS_AWS_ECS_CLUSTER_ARN", ()=>SEMRESATTRS_AWS_ECS_CLUSTER_ARN);
parcelHelpers.export(exports, "SEMRESATTRS_AWS_ECS_LAUNCHTYPE", ()=>SEMRESATTRS_AWS_ECS_LAUNCHTYPE);
parcelHelpers.export(exports, "SEMRESATTRS_AWS_ECS_TASK_ARN", ()=>SEMRESATTRS_AWS_ECS_TASK_ARN);
parcelHelpers.export(exports, "SEMRESATTRS_AWS_ECS_TASK_FAMILY", ()=>SEMRESATTRS_AWS_ECS_TASK_FAMILY);
parcelHelpers.export(exports, "SEMRESATTRS_AWS_ECS_TASK_REVISION", ()=>SEMRESATTRS_AWS_ECS_TASK_REVISION);
parcelHelpers.export(exports, "SEMRESATTRS_AWS_EKS_CLUSTER_ARN", ()=>SEMRESATTRS_AWS_EKS_CLUSTER_ARN);
parcelHelpers.export(exports, "SEMRESATTRS_AWS_LOG_GROUP_NAMES", ()=>SEMRESATTRS_AWS_LOG_GROUP_NAMES);
parcelHelpers.export(exports, "SEMRESATTRS_AWS_LOG_GROUP_ARNS", ()=>SEMRESATTRS_AWS_LOG_GROUP_ARNS);
parcelHelpers.export(exports, "SEMRESATTRS_AWS_LOG_STREAM_NAMES", ()=>SEMRESATTRS_AWS_LOG_STREAM_NAMES);
parcelHelpers.export(exports, "SEMRESATTRS_AWS_LOG_STREAM_ARNS", ()=>SEMRESATTRS_AWS_LOG_STREAM_ARNS);
parcelHelpers.export(exports, "SEMRESATTRS_CONTAINER_NAME", ()=>SEMRESATTRS_CONTAINER_NAME);
parcelHelpers.export(exports, "SEMRESATTRS_CONTAINER_ID", ()=>SEMRESATTRS_CONTAINER_ID);
parcelHelpers.export(exports, "SEMRESATTRS_CONTAINER_RUNTIME", ()=>SEMRESATTRS_CONTAINER_RUNTIME);
parcelHelpers.export(exports, "SEMRESATTRS_CONTAINER_IMAGE_NAME", ()=>SEMRESATTRS_CONTAINER_IMAGE_NAME);
parcelHelpers.export(exports, "SEMRESATTRS_CONTAINER_IMAGE_TAG", ()=>SEMRESATTRS_CONTAINER_IMAGE_TAG);
parcelHelpers.export(exports, "SEMRESATTRS_DEPLOYMENT_ENVIRONMENT", ()=>SEMRESATTRS_DEPLOYMENT_ENVIRONMENT);
parcelHelpers.export(exports, "SEMRESATTRS_DEVICE_ID", ()=>SEMRESATTRS_DEVICE_ID);
parcelHelpers.export(exports, "SEMRESATTRS_DEVICE_MODEL_IDENTIFIER", ()=>SEMRESATTRS_DEVICE_MODEL_IDENTIFIER);
parcelHelpers.export(exports, "SEMRESATTRS_DEVICE_MODEL_NAME", ()=>SEMRESATTRS_DEVICE_MODEL_NAME);
parcelHelpers.export(exports, "SEMRESATTRS_FAAS_NAME", ()=>SEMRESATTRS_FAAS_NAME);
parcelHelpers.export(exports, "SEMRESATTRS_FAAS_ID", ()=>SEMRESATTRS_FAAS_ID);
parcelHelpers.export(exports, "SEMRESATTRS_FAAS_VERSION", ()=>SEMRESATTRS_FAAS_VERSION);
parcelHelpers.export(exports, "SEMRESATTRS_FAAS_INSTANCE", ()=>SEMRESATTRS_FAAS_INSTANCE);
parcelHelpers.export(exports, "SEMRESATTRS_FAAS_MAX_MEMORY", ()=>SEMRESATTRS_FAAS_MAX_MEMORY);
parcelHelpers.export(exports, "SEMRESATTRS_HOST_ID", ()=>SEMRESATTRS_HOST_ID);
parcelHelpers.export(exports, "SEMRESATTRS_HOST_NAME", ()=>SEMRESATTRS_HOST_NAME);
parcelHelpers.export(exports, "SEMRESATTRS_HOST_TYPE", ()=>SEMRESATTRS_HOST_TYPE);
parcelHelpers.export(exports, "SEMRESATTRS_HOST_ARCH", ()=>SEMRESATTRS_HOST_ARCH);
parcelHelpers.export(exports, "SEMRESATTRS_HOST_IMAGE_NAME", ()=>SEMRESATTRS_HOST_IMAGE_NAME);
parcelHelpers.export(exports, "SEMRESATTRS_HOST_IMAGE_ID", ()=>SEMRESATTRS_HOST_IMAGE_ID);
parcelHelpers.export(exports, "SEMRESATTRS_HOST_IMAGE_VERSION", ()=>SEMRESATTRS_HOST_IMAGE_VERSION);
parcelHelpers.export(exports, "SEMRESATTRS_K8S_CLUSTER_NAME", ()=>SEMRESATTRS_K8S_CLUSTER_NAME);
parcelHelpers.export(exports, "SEMRESATTRS_K8S_NODE_NAME", ()=>SEMRESATTRS_K8S_NODE_NAME);
parcelHelpers.export(exports, "SEMRESATTRS_K8S_NODE_UID", ()=>SEMRESATTRS_K8S_NODE_UID);
parcelHelpers.export(exports, "SEMRESATTRS_K8S_NAMESPACE_NAME", ()=>SEMRESATTRS_K8S_NAMESPACE_NAME);
parcelHelpers.export(exports, "SEMRESATTRS_K8S_POD_UID", ()=>SEMRESATTRS_K8S_POD_UID);
parcelHelpers.export(exports, "SEMRESATTRS_K8S_POD_NAME", ()=>SEMRESATTRS_K8S_POD_NAME);
parcelHelpers.export(exports, "SEMRESATTRS_K8S_CONTAINER_NAME", ()=>SEMRESATTRS_K8S_CONTAINER_NAME);
parcelHelpers.export(exports, "SEMRESATTRS_K8S_REPLICASET_UID", ()=>SEMRESATTRS_K8S_REPLICASET_UID);
parcelHelpers.export(exports, "SEMRESATTRS_K8S_REPLICASET_NAME", ()=>SEMRESATTRS_K8S_REPLICASET_NAME);
parcelHelpers.export(exports, "SEMRESATTRS_K8S_DEPLOYMENT_UID", ()=>SEMRESATTRS_K8S_DEPLOYMENT_UID);
parcelHelpers.export(exports, "SEMRESATTRS_K8S_DEPLOYMENT_NAME", ()=>SEMRESATTRS_K8S_DEPLOYMENT_NAME);
parcelHelpers.export(exports, "SEMRESATTRS_K8S_STATEFULSET_UID", ()=>SEMRESATTRS_K8S_STATEFULSET_UID);
parcelHelpers.export(exports, "SEMRESATTRS_K8S_STATEFULSET_NAME", ()=>SEMRESATTRS_K8S_STATEFULSET_NAME);
parcelHelpers.export(exports, "SEMRESATTRS_K8S_DAEMONSET_UID", ()=>SEMRESATTRS_K8S_DAEMONSET_UID);
parcelHelpers.export(exports, "SEMRESATTRS_K8S_DAEMONSET_NAME", ()=>SEMRESATTRS_K8S_DAEMONSET_NAME);
parcelHelpers.export(exports, "SEMRESATTRS_K8S_JOB_UID", ()=>SEMRESATTRS_K8S_JOB_UID);
parcelHelpers.export(exports, "SEMRESATTRS_K8S_JOB_NAME", ()=>SEMRESATTRS_K8S_JOB_NAME);
parcelHelpers.export(exports, "SEMRESATTRS_K8S_CRONJOB_UID", ()=>SEMRESATTRS_K8S_CRONJOB_UID);
parcelHelpers.export(exports, "SEMRESATTRS_K8S_CRONJOB_NAME", ()=>SEMRESATTRS_K8S_CRONJOB_NAME);
parcelHelpers.export(exports, "SEMRESATTRS_OS_TYPE", ()=>SEMRESATTRS_OS_TYPE);
parcelHelpers.export(exports, "SEMRESATTRS_OS_DESCRIPTION", ()=>SEMRESATTRS_OS_DESCRIPTION);
parcelHelpers.export(exports, "SEMRESATTRS_OS_NAME", ()=>SEMRESATTRS_OS_NAME);
parcelHelpers.export(exports, "SEMRESATTRS_OS_VERSION", ()=>SEMRESATTRS_OS_VERSION);
parcelHelpers.export(exports, "SEMRESATTRS_PROCESS_PID", ()=>SEMRESATTRS_PROCESS_PID);
parcelHelpers.export(exports, "SEMRESATTRS_PROCESS_EXECUTABLE_NAME", ()=>SEMRESATTRS_PROCESS_EXECUTABLE_NAME);
parcelHelpers.export(exports, "SEMRESATTRS_PROCESS_EXECUTABLE_PATH", ()=>SEMRESATTRS_PROCESS_EXECUTABLE_PATH);
parcelHelpers.export(exports, "SEMRESATTRS_PROCESS_COMMAND", ()=>SEMRESATTRS_PROCESS_COMMAND);
parcelHelpers.export(exports, "SEMRESATTRS_PROCESS_COMMAND_LINE", ()=>SEMRESATTRS_PROCESS_COMMAND_LINE);
parcelHelpers.export(exports, "SEMRESATTRS_PROCESS_COMMAND_ARGS", ()=>SEMRESATTRS_PROCESS_COMMAND_ARGS);
parcelHelpers.export(exports, "SEMRESATTRS_PROCESS_OWNER", ()=>SEMRESATTRS_PROCESS_OWNER);
parcelHelpers.export(exports, "SEMRESATTRS_PROCESS_RUNTIME_NAME", ()=>SEMRESATTRS_PROCESS_RUNTIME_NAME);
parcelHelpers.export(exports, "SEMRESATTRS_PROCESS_RUNTIME_VERSION", ()=>SEMRESATTRS_PROCESS_RUNTIME_VERSION);
parcelHelpers.export(exports, "SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION", ()=>SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION);
parcelHelpers.export(exports, "SEMRESATTRS_SERVICE_NAME", ()=>SEMRESATTRS_SERVICE_NAME);
parcelHelpers.export(exports, "SEMRESATTRS_SERVICE_NAMESPACE", ()=>SEMRESATTRS_SERVICE_NAMESPACE);
parcelHelpers.export(exports, "SEMRESATTRS_SERVICE_INSTANCE_ID", ()=>SEMRESATTRS_SERVICE_INSTANCE_ID);
parcelHelpers.export(exports, "SEMRESATTRS_SERVICE_VERSION", ()=>SEMRESATTRS_SERVICE_VERSION);
parcelHelpers.export(exports, "SEMRESATTRS_TELEMETRY_SDK_NAME", ()=>SEMRESATTRS_TELEMETRY_SDK_NAME);
parcelHelpers.export(exports, "SEMRESATTRS_TELEMETRY_SDK_LANGUAGE", ()=>SEMRESATTRS_TELEMETRY_SDK_LANGUAGE);
parcelHelpers.export(exports, "SEMRESATTRS_TELEMETRY_SDK_VERSION", ()=>SEMRESATTRS_TELEMETRY_SDK_VERSION);
parcelHelpers.export(exports, "SEMRESATTRS_TELEMETRY_AUTO_VERSION", ()=>SEMRESATTRS_TELEMETRY_AUTO_VERSION);
parcelHelpers.export(exports, "SEMRESATTRS_WEBENGINE_NAME", ()=>SEMRESATTRS_WEBENGINE_NAME);
parcelHelpers.export(exports, "SEMRESATTRS_WEBENGINE_VERSION", ()=>SEMRESATTRS_WEBENGINE_VERSION);
parcelHelpers.export(exports, "SEMRESATTRS_WEBENGINE_DESCRIPTION", ()=>SEMRESATTRS_WEBENGINE_DESCRIPTION);
parcelHelpers.export(exports, "SemanticResourceAttributes", ()=>SemanticResourceAttributes);
parcelHelpers.export(exports, "CLOUDPROVIDERVALUES_ALIBABA_CLOUD", ()=>CLOUDPROVIDERVALUES_ALIBABA_CLOUD);
parcelHelpers.export(exports, "CLOUDPROVIDERVALUES_AWS", ()=>CLOUDPROVIDERVALUES_AWS);
parcelHelpers.export(exports, "CLOUDPROVIDERVALUES_AZURE", ()=>CLOUDPROVIDERVALUES_AZURE);
parcelHelpers.export(exports, "CLOUDPROVIDERVALUES_GCP", ()=>CLOUDPROVIDERVALUES_GCP);
parcelHelpers.export(exports, "CloudProviderValues", ()=>CloudProviderValues);
parcelHelpers.export(exports, "CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS", ()=>CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS);
parcelHelpers.export(exports, "CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC", ()=>CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC);
parcelHelpers.export(exports, "CLOUDPLATFORMVALUES_AWS_EC2", ()=>CLOUDPLATFORMVALUES_AWS_EC2);
parcelHelpers.export(exports, "CLOUDPLATFORMVALUES_AWS_ECS", ()=>CLOUDPLATFORMVALUES_AWS_ECS);
parcelHelpers.export(exports, "CLOUDPLATFORMVALUES_AWS_EKS", ()=>CLOUDPLATFORMVALUES_AWS_EKS);
parcelHelpers.export(exports, "CLOUDPLATFORMVALUES_AWS_LAMBDA", ()=>CLOUDPLATFORMVALUES_AWS_LAMBDA);
parcelHelpers.export(exports, "CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK", ()=>CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK);
parcelHelpers.export(exports, "CLOUDPLATFORMVALUES_AZURE_VM", ()=>CLOUDPLATFORMVALUES_AZURE_VM);
parcelHelpers.export(exports, "CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES", ()=>CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES);
parcelHelpers.export(exports, "CLOUDPLATFORMVALUES_AZURE_AKS", ()=>CLOUDPLATFORMVALUES_AZURE_AKS);
parcelHelpers.export(exports, "CLOUDPLATFORMVALUES_AZURE_FUNCTIONS", ()=>CLOUDPLATFORMVALUES_AZURE_FUNCTIONS);
parcelHelpers.export(exports, "CLOUDPLATFORMVALUES_AZURE_APP_SERVICE", ()=>CLOUDPLATFORMVALUES_AZURE_APP_SERVICE);
parcelHelpers.export(exports, "CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE", ()=>CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE);
parcelHelpers.export(exports, "CLOUDPLATFORMVALUES_GCP_CLOUD_RUN", ()=>CLOUDPLATFORMVALUES_GCP_CLOUD_RUN);
parcelHelpers.export(exports, "CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE", ()=>CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE);
parcelHelpers.export(exports, "CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS", ()=>CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS);
parcelHelpers.export(exports, "CLOUDPLATFORMVALUES_GCP_APP_ENGINE", ()=>CLOUDPLATFORMVALUES_GCP_APP_ENGINE);
parcelHelpers.export(exports, "CloudPlatformValues", ()=>CloudPlatformValues);
parcelHelpers.export(exports, "AWSECSLAUNCHTYPEVALUES_EC2", ()=>AWSECSLAUNCHTYPEVALUES_EC2);
parcelHelpers.export(exports, "AWSECSLAUNCHTYPEVALUES_FARGATE", ()=>AWSECSLAUNCHTYPEVALUES_FARGATE);
parcelHelpers.export(exports, "AwsEcsLaunchtypeValues", ()=>AwsEcsLaunchtypeValues);
parcelHelpers.export(exports, "HOSTARCHVALUES_AMD64", ()=>HOSTARCHVALUES_AMD64);
parcelHelpers.export(exports, "HOSTARCHVALUES_ARM32", ()=>HOSTARCHVALUES_ARM32);
parcelHelpers.export(exports, "HOSTARCHVALUES_ARM64", ()=>HOSTARCHVALUES_ARM64);
parcelHelpers.export(exports, "HOSTARCHVALUES_IA64", ()=>HOSTARCHVALUES_IA64);
parcelHelpers.export(exports, "HOSTARCHVALUES_PPC32", ()=>HOSTARCHVALUES_PPC32);
parcelHelpers.export(exports, "HOSTARCHVALUES_PPC64", ()=>HOSTARCHVALUES_PPC64);
parcelHelpers.export(exports, "HOSTARCHVALUES_X86", ()=>HOSTARCHVALUES_X86);
parcelHelpers.export(exports, "HostArchValues", ()=>HostArchValues);
parcelHelpers.export(exports, "OSTYPEVALUES_WINDOWS", ()=>OSTYPEVALUES_WINDOWS);
parcelHelpers.export(exports, "OSTYPEVALUES_LINUX", ()=>OSTYPEVALUES_LINUX);
parcelHelpers.export(exports, "OSTYPEVALUES_DARWIN", ()=>OSTYPEVALUES_DARWIN);
parcelHelpers.export(exports, "OSTYPEVALUES_FREEBSD", ()=>OSTYPEVALUES_FREEBSD);
parcelHelpers.export(exports, "OSTYPEVALUES_NETBSD", ()=>OSTYPEVALUES_NETBSD);
parcelHelpers.export(exports, "OSTYPEVALUES_OPENBSD", ()=>OSTYPEVALUES_OPENBSD);
parcelHelpers.export(exports, "OSTYPEVALUES_DRAGONFLYBSD", ()=>OSTYPEVALUES_DRAGONFLYBSD);
parcelHelpers.export(exports, "OSTYPEVALUES_HPUX", ()=>OSTYPEVALUES_HPUX);
parcelHelpers.export(exports, "OSTYPEVALUES_AIX", ()=>OSTYPEVALUES_AIX);
parcelHelpers.export(exports, "OSTYPEVALUES_SOLARIS", ()=>OSTYPEVALUES_SOLARIS);
parcelHelpers.export(exports, "OSTYPEVALUES_Z_OS", ()=>OSTYPEVALUES_Z_OS);
parcelHelpers.export(exports, "OsTypeValues", ()=>OsTypeValues);
parcelHelpers.export(exports, "TELEMETRYSDKLANGUAGEVALUES_CPP", ()=>TELEMETRYSDKLANGUAGEVALUES_CPP);
parcelHelpers.export(exports, "TELEMETRYSDKLANGUAGEVALUES_DOTNET", ()=>TELEMETRYSDKLANGUAGEVALUES_DOTNET);
parcelHelpers.export(exports, "TELEMETRYSDKLANGUAGEVALUES_ERLANG", ()=>TELEMETRYSDKLANGUAGEVALUES_ERLANG);
parcelHelpers.export(exports, "TELEMETRYSDKLANGUAGEVALUES_GO", ()=>TELEMETRYSDKLANGUAGEVALUES_GO);
parcelHelpers.export(exports, "TELEMETRYSDKLANGUAGEVALUES_JAVA", ()=>TELEMETRYSDKLANGUAGEVALUES_JAVA);
parcelHelpers.export(exports, "TELEMETRYSDKLANGUAGEVALUES_NODEJS", ()=>TELEMETRYSDKLANGUAGEVALUES_NODEJS);
parcelHelpers.export(exports, "TELEMETRYSDKLANGUAGEVALUES_PHP", ()=>TELEMETRYSDKLANGUAGEVALUES_PHP);
parcelHelpers.export(exports, "TELEMETRYSDKLANGUAGEVALUES_PYTHON", ()=>TELEMETRYSDKLANGUAGEVALUES_PYTHON);
parcelHelpers.export(exports, "TELEMETRYSDKLANGUAGEVALUES_RUBY", ()=>TELEMETRYSDKLANGUAGEVALUES_RUBY);
parcelHelpers.export(exports, "TELEMETRYSDKLANGUAGEVALUES_WEBJS", ()=>TELEMETRYSDKLANGUAGEVALUES_WEBJS);
parcelHelpers.export(exports, "TelemetrySdkLanguageValues", ()=>TelemetrySdkLanguageValues);
var _utils = require("../internal/utils");
//----------------------------------------------------------------------------------------------------------
// DO NOT EDIT, this is an Auto-generated file from scripts/semconv/templates//templates/SemanticAttributes.ts.j2
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
// Constant values for SemanticResourceAttributes
//----------------------------------------------------------------------------------------------------------
// Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifable export names for some package types
var TMP_CLOUD_PROVIDER = "cloud.provider";
var TMP_CLOUD_ACCOUNT_ID = "cloud.account.id";
var TMP_CLOUD_REGION = "cloud.region";
var TMP_CLOUD_AVAILABILITY_ZONE = "cloud.availability_zone";
var TMP_CLOUD_PLATFORM = "cloud.platform";
var TMP_AWS_ECS_CONTAINER_ARN = "aws.ecs.container.arn";
var TMP_AWS_ECS_CLUSTER_ARN = "aws.ecs.cluster.arn";
var TMP_AWS_ECS_LAUNCHTYPE = "aws.ecs.launchtype";
var TMP_AWS_ECS_TASK_ARN = "aws.ecs.task.arn";
var TMP_AWS_ECS_TASK_FAMILY = "aws.ecs.task.family";
var TMP_AWS_ECS_TASK_REVISION = "aws.ecs.task.revision";
var TMP_AWS_EKS_CLUSTER_ARN = "aws.eks.cluster.arn";
var TMP_AWS_LOG_GROUP_NAMES = "aws.log.group.names";
var TMP_AWS_LOG_GROUP_ARNS = "aws.log.group.arns";
var TMP_AWS_LOG_STREAM_NAMES = "aws.log.stream.names";
var TMP_AWS_LOG_STREAM_ARNS = "aws.log.stream.arns";
var TMP_CONTAINER_NAME = "container.name";
var TMP_CONTAINER_ID = "container.id";
var TMP_CONTAINER_RUNTIME = "container.runtime";
var TMP_CONTAINER_IMAGE_NAME = "container.image.name";
var TMP_CONTAINER_IMAGE_TAG = "container.image.tag";
var TMP_DEPLOYMENT_ENVIRONMENT = "deployment.environment";
var TMP_DEVICE_ID = "device.id";
var TMP_DEVICE_MODEL_IDENTIFIER = "device.model.identifier";
var TMP_DEVICE_MODEL_NAME = "device.model.name";
var TMP_FAAS_NAME = "faas.name";
var TMP_FAAS_ID = "faas.id";
var TMP_FAAS_VERSION = "faas.version";
var TMP_FAAS_INSTANCE = "faas.instance";
var TMP_FAAS_MAX_MEMORY = "faas.max_memory";
var TMP_HOST_ID = "host.id";
var TMP_HOST_NAME = "host.name";
var TMP_HOST_TYPE = "host.type";
var TMP_HOST_ARCH = "host.arch";
var TMP_HOST_IMAGE_NAME = "host.image.name";
var TMP_HOST_IMAGE_ID = "host.image.id";
var TMP_HOST_IMAGE_VERSION = "host.image.version";
var TMP_K8S_CLUSTER_NAME = "k8s.cluster.name";
var TMP_K8S_NODE_NAME = "k8s.node.name";
var TMP_K8S_NODE_UID = "k8s.node.uid";
var TMP_K8S_NAMESPACE_NAME = "k8s.namespace.name";
var TMP_K8S_POD_UID = "k8s.pod.uid";
var TMP_K8S_POD_NAME = "k8s.pod.name";
var TMP_K8S_CONTAINER_NAME = "k8s.container.name";
var TMP_K8S_REPLICASET_UID = "k8s.replicaset.uid";
var TMP_K8S_REPLICASET_NAME = "k8s.replicaset.name";
var TMP_K8S_DEPLOYMENT_UID = "k8s.deployment.uid";
var TMP_K8S_DEPLOYMENT_NAME = "k8s.deployment.name";
var TMP_K8S_STATEFULSET_UID = "k8s.statefulset.uid";
var TMP_K8S_STATEFULSET_NAME = "k8s.statefulset.name";
var TMP_K8S_DAEMONSET_UID = "k8s.daemonset.uid";
var TMP_K8S_DAEMONSET_NAME = "k8s.daemonset.name";
var TMP_K8S_JOB_UID = "k8s.job.uid";
var TMP_K8S_JOB_NAME = "k8s.job.name";
var TMP_K8S_CRONJOB_UID = "k8s.cronjob.uid";
var TMP_K8S_CRONJOB_NAME = "k8s.cronjob.name";
var TMP_OS_TYPE = "os.type";
var TMP_OS_DESCRIPTION = "os.description";
var TMP_OS_NAME = "os.name";
var TMP_OS_VERSION = "os.version";
var TMP_PROCESS_PID = "process.pid";
var TMP_PROCESS_EXECUTABLE_NAME = "process.executable.name";
var TMP_PROCESS_EXECUTABLE_PATH = "process.executable.path";
var TMP_PROCESS_COMMAND = "process.command";
var TMP_PROCESS_COMMAND_LINE = "process.command_line";
var TMP_PROCESS_COMMAND_ARGS = "process.command_args";
var TMP_PROCESS_OWNER = "process.owner";
var TMP_PROCESS_RUNTIME_NAME = "process.runtime.name";
var TMP_PROCESS_RUNTIME_VERSION = "process.runtime.version";
var TMP_PROCESS_RUNTIME_DESCRIPTION = "process.runtime.description";
var TMP_SERVICE_NAME = "service.name";
var TMP_SERVICE_NAMESPACE = "service.namespace";
var TMP_SERVICE_INSTANCE_ID = "service.instance.id";
var TMP_SERVICE_VERSION = "service.version";
var TMP_TELEMETRY_SDK_NAME = "telemetry.sdk.name";
var TMP_TELEMETRY_SDK_LANGUAGE = "telemetry.sdk.language";
var TMP_TELEMETRY_SDK_VERSION = "telemetry.sdk.version";
var TMP_TELEMETRY_AUTO_VERSION = "telemetry.auto.version";
var TMP_WEBENGINE_NAME = "webengine.name";
var TMP_WEBENGINE_VERSION = "webengine.version";
var TMP_WEBENGINE_DESCRIPTION = "webengine.description";
var SEMRESATTRS_CLOUD_PROVIDER = TMP_CLOUD_PROVIDER;
var SEMRESATTRS_CLOUD_ACCOUNT_ID = TMP_CLOUD_ACCOUNT_ID;
var SEMRESATTRS_CLOUD_REGION = TMP_CLOUD_REGION;
var SEMRESATTRS_CLOUD_AVAILABILITY_ZONE = TMP_CLOUD_AVAILABILITY_ZONE;
var SEMRESATTRS_CLOUD_PLATFORM = TMP_CLOUD_PLATFORM;
var SEMRESATTRS_AWS_ECS_CONTAINER_ARN = TMP_AWS_ECS_CONTAINER_ARN;
var SEMRESATTRS_AWS_ECS_CLUSTER_ARN = TMP_AWS_ECS_CLUSTER_ARN;
var SEMRESATTRS_AWS_ECS_LAUNCHTYPE = TMP_AWS_ECS_LAUNCHTYPE;
var SEMRESATTRS_AWS_ECS_TASK_ARN = TMP_AWS_ECS_TASK_ARN;
var SEMRESATTRS_AWS_ECS_TASK_FAMILY = TMP_AWS_ECS_TASK_FAMILY;
var SEMRESATTRS_AWS_ECS_TASK_REVISION = TMP_AWS_ECS_TASK_REVISION;
var SEMRESATTRS_AWS_EKS_CLUSTER_ARN = TMP_AWS_EKS_CLUSTER_ARN;
var SEMRESATTRS_AWS_LOG_GROUP_NAMES = TMP_AWS_LOG_GROUP_NAMES;
var SEMRESATTRS_AWS_LOG_GROUP_ARNS = TMP_AWS_LOG_GROUP_ARNS;
var SEMRESATTRS_AWS_LOG_STREAM_NAMES = TMP_AWS_LOG_STREAM_NAMES;
var SEMRESATTRS_AWS_LOG_STREAM_ARNS = TMP_AWS_LOG_STREAM_ARNS;
var SEMRESATTRS_CONTAINER_NAME = TMP_CONTAINER_NAME;
var SEMRESATTRS_CONTAINER_ID = TMP_CONTAINER_ID;
var SEMRESATTRS_CONTAINER_RUNTIME = TMP_CONTAINER_RUNTIME;
var SEMRESATTRS_CONTAINER_IMAGE_NAME = TMP_CONTAINER_IMAGE_NAME;
var SEMRESATTRS_CONTAINER_IMAGE_TAG = TMP_CONTAINER_IMAGE_TAG;
var SEMRESATTRS_DEPLOYMENT_ENVIRONMENT = TMP_DEPLOYMENT_ENVIRONMENT;
var SEMRESATTRS_DEVICE_ID = TMP_DEVICE_ID;
var SEMRESATTRS_DEVICE_MODEL_IDENTIFIER = TMP_DEVICE_MODEL_IDENTIFIER;
var SEMRESATTRS_DEVICE_MODEL_NAME = TMP_DEVICE_MODEL_NAME;
var SEMRESATTRS_FAAS_NAME = TMP_FAAS_NAME;
var SEMRESATTRS_FAAS_ID = TMP_FAAS_ID;
var SEMRESATTRS_FAAS_VERSION = TMP_FAAS_VERSION;
var SEMRESATTRS_FAAS_INSTANCE = TMP_FAAS_INSTANCE;
var SEMRESATTRS_FAAS_MAX_MEMORY = TMP_FAAS_MAX_MEMORY;
var SEMRESATTRS_HOST_ID = TMP_HOST_ID;
var SEMRESATTRS_HOST_NAME = TMP_HOST_NAME;
var SEMRESATTRS_HOST_TYPE = TMP_HOST_TYPE;
var SEMRESATTRS_HOST_ARCH = TMP_HOST_ARCH;
var SEMRESATTRS_HOST_IMAGE_NAME = TMP_HOST_IMAGE_NAME;
var SEMRESATTRS_HOST_IMAGE_ID = TMP_HOST_IMAGE_ID;
var SEMRESATTRS_HOST_IMAGE_VERSION = TMP_HOST_IMAGE_VERSION;
var SEMRESATTRS_K8S_CLUSTER_NAME = TMP_K8S_CLUSTER_NAME;
var SEMRESATTRS_K8S_NODE_NAME = TMP_K8S_NODE_NAME;
var SEMRESATTRS_K8S_NODE_UID = TMP_K8S_NODE_UID;
var SEMRESATTRS_K8S_NAMESPACE_NAME = TMP_K8S_NAMESPACE_NAME;
var SEMRESATTRS_K8S_POD_UID = TMP_K8S_POD_UID;
var SEMRESATTRS_K8S_POD_NAME = TMP_K8S_POD_NAME;
var SEMRESATTRS_K8S_CONTAINER_NAME = TMP_K8S_CONTAINER_NAME;
var SEMRESATTRS_K8S_REPLICASET_UID = TMP_K8S_REPLICASET_UID;
var SEMRESATTRS_K8S_REPLICASET_NAME = TMP_K8S_REPLICASET_NAME;
var SEMRESATTRS_K8S_DEPLOYMENT_UID = TMP_K8S_DEPLOYMENT_UID;
var SEMRESATTRS_K8S_DEPLOYMENT_NAME = TMP_K8S_DEPLOYMENT_NAME;
var SEMRESATTRS_K8S_STATEFULSET_UID = TMP_K8S_STATEFULSET_UID;
var SEMRESATTRS_K8S_STATEFULSET_NAME = TMP_K8S_STATEFULSET_NAME;
var SEMRESATTRS_K8S_DAEMONSET_UID = TMP_K8S_DAEMONSET_UID;
var SEMRESATTRS_K8S_DAEMONSET_NAME = TMP_K8S_DAEMONSET_NAME;
var SEMRESATTRS_K8S_JOB_UID = TMP_K8S_JOB_UID;
var SEMRESATTRS_K8S_JOB_NAME = TMP_K8S_JOB_NAME;
var SEMRESATTRS_K8S_CRONJOB_UID = TMP_K8S_CRONJOB_UID;
var SEMRESATTRS_K8S_CRONJOB_NAME = TMP_K8S_CRONJOB_NAME;
var SEMRESATTRS_OS_TYPE = TMP_OS_TYPE;
var SEMRESATTRS_OS_DESCRIPTION = TMP_OS_DESCRIPTION;
var SEMRESATTRS_OS_NAME = TMP_OS_NAME;
var SEMRESATTRS_OS_VERSION = TMP_OS_VERSION;
var SEMRESATTRS_PROCESS_PID = TMP_PROCESS_PID;
var SEMRESATTRS_PROCESS_EXECUTABLE_NAME = TMP_PROCESS_EXECUTABLE_NAME;
var SEMRESATTRS_PROCESS_EXECUTABLE_PATH = TMP_PROCESS_EXECUTABLE_PATH;
var SEMRESATTRS_PROCESS_COMMAND = TMP_PROCESS_COMMAND;
var SEMRESATTRS_PROCESS_COMMAND_LINE = TMP_PROCESS_COMMAND_LINE;
var SEMRESATTRS_PROCESS_COMMAND_ARGS = TMP_PROCESS_COMMAND_ARGS;
var SEMRESATTRS_PROCESS_OWNER = TMP_PROCESS_OWNER;
var SEMRESATTRS_PROCESS_RUNTIME_NAME = TMP_PROCESS_RUNTIME_NAME;
var SEMRESATTRS_PROCESS_RUNTIME_VERSION = TMP_PROCESS_RUNTIME_VERSION;
var SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION = TMP_PROCESS_RUNTIME_DESCRIPTION;
var SEMRESATTRS_SERVICE_NAME = TMP_SERVICE_NAME;
var SEMRESATTRS_SERVICE_NAMESPACE = TMP_SERVICE_NAMESPACE;
var SEMRESATTRS_SERVICE_INSTANCE_ID = TMP_SERVICE_INSTANCE_ID;
var SEMRESATTRS_SERVICE_VERSION = TMP_SERVICE_VERSION;
var SEMRESATTRS_TELEMETRY_SDK_NAME = TMP_TELEMETRY_SDK_NAME;
var SEMRESATTRS_TELEMETRY_SDK_LANGUAGE = TMP_TELEMETRY_SDK_LANGUAGE;
var SEMRESATTRS_TELEMETRY_SDK_VERSION = TMP_TELEMETRY_SDK_VERSION;
var SEMRESATTRS_TELEMETRY_AUTO_VERSION = TMP_TELEMETRY_AUTO_VERSION;
var SEMRESATTRS_WEBENGINE_NAME = TMP_WEBENGINE_NAME;
var SEMRESATTRS_WEBENGINE_VERSION = TMP_WEBENGINE_VERSION;
var SEMRESATTRS_WEBENGINE_DESCRIPTION = TMP_WEBENGINE_DESCRIPTION;
var SemanticResourceAttributes = /*#__PURE__*/ (0, _utils.createConstMap)([
    TMP_CLOUD_PROVIDER,
    TMP_CLOUD_ACCOUNT_ID,
    TMP_CLOUD_REGION,
    TMP_CLOUD_AVAILABILITY_ZONE,
    TMP_CLOUD_PLATFORM,
    TMP_AWS_ECS_CONTAINER_ARN,
    TMP_AWS_ECS_CLUSTER_ARN,
    TMP_AWS_ECS_LAUNCHTYPE,
    TMP_AWS_ECS_TASK_ARN,
    TMP_AWS_ECS_TASK_FAMILY,
    TMP_AWS_ECS_TASK_REVISION,
    TMP_AWS_EKS_CLUSTER_ARN,
    TMP_AWS_LOG_GROUP_NAMES,
    TMP_AWS_LOG_GROUP_ARNS,
    TMP_AWS_LOG_STREAM_NAMES,
    TMP_AWS_LOG_STREAM_ARNS,
    TMP_CONTAINER_NAME,
    TMP_CONTAINER_ID,
    TMP_CONTAINER_RUNTIME,
    TMP_CONTAINER_IMAGE_NAME,
    TMP_CONTAINER_IMAGE_TAG,
    TMP_DEPLOYMENT_ENVIRONMENT,
    TMP_DEVICE_ID,
    TMP_DEVICE_MODEL_IDENTIFIER,
    TMP_DEVICE_MODEL_NAME,
    TMP_FAAS_NAME,
    TMP_FAAS_ID,
    TMP_FAAS_VERSION,
    TMP_FAAS_INSTANCE,
    TMP_FAAS_MAX_MEMORY,
    TMP_HOST_ID,
    TMP_HOST_NAME,
    TMP_HOST_TYPE,
    TMP_HOST_ARCH,
    TMP_HOST_IMAGE_NAME,
    TMP_HOST_IMAGE_ID,
    TMP_HOST_IMAGE_VERSION,
    TMP_K8S_CLUSTER_NAME,
    TMP_K8S_NODE_NAME,
    TMP_K8S_NODE_UID,
    TMP_K8S_NAMESPACE_NAME,
    TMP_K8S_POD_UID,
    TMP_K8S_POD_NAME,
    TMP_K8S_CONTAINER_NAME,
    TMP_K8S_REPLICASET_UID,
    TMP_K8S_REPLICASET_NAME,
    TMP_K8S_DEPLOYMENT_UID,
    TMP_K8S_DEPLOYMENT_NAME,
    TMP_K8S_STATEFULSET_UID,
    TMP_K8S_STATEFULSET_NAME,
    TMP_K8S_DAEMONSET_UID,
    TMP_K8S_DAEMONSET_NAME,
    TMP_K8S_JOB_UID,
    TMP_K8S_JOB_NAME,
    TMP_K8S_CRONJOB_UID,
    TMP_K8S_CRONJOB_NAME,
    TMP_OS_TYPE,
    TMP_OS_DESCRIPTION,
    TMP_OS_NAME,
    TMP_OS_VERSION,
    TMP_PROCESS_PID,
    TMP_PROCESS_EXECUTABLE_NAME,
    TMP_PROCESS_EXECUTABLE_PATH,
    TMP_PROCESS_COMMAND,
    TMP_PROCESS_COMMAND_LINE,
    TMP_PROCESS_COMMAND_ARGS,
    TMP_PROCESS_OWNER,
    TMP_PROCESS_RUNTIME_NAME,
    TMP_PROCESS_RUNTIME_VERSION,
    TMP_PROCESS_RUNTIME_DESCRIPTION,
    TMP_SERVICE_NAME,
    TMP_SERVICE_NAMESPACE,
    TMP_SERVICE_INSTANCE_ID,
    TMP_SERVICE_VERSION,
    TMP_TELEMETRY_SDK_NAME,
    TMP_TELEMETRY_SDK_LANGUAGE,
    TMP_TELEMETRY_SDK_VERSION,
    TMP_TELEMETRY_AUTO_VERSION,
    TMP_WEBENGINE_NAME,
    TMP_WEBENGINE_VERSION,
    TMP_WEBENGINE_DESCRIPTION
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for CloudProviderValues enum definition
 *
 * Name of the cloud provider.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifable export names for some package types
var TMP_CLOUDPROVIDERVALUES_ALIBABA_CLOUD = "alibaba_cloud";
var TMP_CLOUDPROVIDERVALUES_AWS = "aws";
var TMP_CLOUDPROVIDERVALUES_AZURE = "azure";
var TMP_CLOUDPROVIDERVALUES_GCP = "gcp";
var CLOUDPROVIDERVALUES_ALIBABA_CLOUD = TMP_CLOUDPROVIDERVALUES_ALIBABA_CLOUD;
var CLOUDPROVIDERVALUES_AWS = TMP_CLOUDPROVIDERVALUES_AWS;
var CLOUDPROVIDERVALUES_AZURE = TMP_CLOUDPROVIDERVALUES_AZURE;
var CLOUDPROVIDERVALUES_GCP = TMP_CLOUDPROVIDERVALUES_GCP;
var CloudProviderValues = /*#__PURE__*/ (0, _utils.createConstMap)([
    TMP_CLOUDPROVIDERVALUES_ALIBABA_CLOUD,
    TMP_CLOUDPROVIDERVALUES_AWS,
    TMP_CLOUDPROVIDERVALUES_AZURE,
    TMP_CLOUDPROVIDERVALUES_GCP
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for CloudPlatformValues enum definition
 *
 * The cloud platform in use.
 *
 * Note: The prefix of the service SHOULD match the one specified in `cloud.provider`.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifable export names for some package types
var TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = "alibaba_cloud_ecs";
var TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = "alibaba_cloud_fc";
var TMP_CLOUDPLATFORMVALUES_AWS_EC2 = "aws_ec2";
var TMP_CLOUDPLATFORMVALUES_AWS_ECS = "aws_ecs";
var TMP_CLOUDPLATFORMVALUES_AWS_EKS = "aws_eks";
var TMP_CLOUDPLATFORMVALUES_AWS_LAMBDA = "aws_lambda";
var TMP_CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = "aws_elastic_beanstalk";
var TMP_CLOUDPLATFORMVALUES_AZURE_VM = "azure_vm";
var TMP_CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = "azure_container_instances";
var TMP_CLOUDPLATFORMVALUES_AZURE_AKS = "azure_aks";
var TMP_CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = "azure_functions";
var TMP_CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = "azure_app_service";
var TMP_CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = "gcp_compute_engine";
var TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = "gcp_cloud_run";
var TMP_CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = "gcp_kubernetes_engine";
var TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = "gcp_cloud_functions";
var TMP_CLOUDPLATFORMVALUES_GCP_APP_ENGINE = "gcp_app_engine";
var CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS;
var CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC;
var CLOUDPLATFORMVALUES_AWS_EC2 = TMP_CLOUDPLATFORMVALUES_AWS_EC2;
var CLOUDPLATFORMVALUES_AWS_ECS = TMP_CLOUDPLATFORMVALUES_AWS_ECS;
var CLOUDPLATFORMVALUES_AWS_EKS = TMP_CLOUDPLATFORMVALUES_AWS_EKS;
var CLOUDPLATFORMVALUES_AWS_LAMBDA = TMP_CLOUDPLATFORMVALUES_AWS_LAMBDA;
var CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = TMP_CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK;
var CLOUDPLATFORMVALUES_AZURE_VM = TMP_CLOUDPLATFORMVALUES_AZURE_VM;
var CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = TMP_CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES;
var CLOUDPLATFORMVALUES_AZURE_AKS = TMP_CLOUDPLATFORMVALUES_AZURE_AKS;
var CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = TMP_CLOUDPLATFORMVALUES_AZURE_FUNCTIONS;
var CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = TMP_CLOUDPLATFORMVALUES_AZURE_APP_SERVICE;
var CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = TMP_CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE;
var CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_RUN;
var CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = TMP_CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE;
var CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS;
var CLOUDPLATFORMVALUES_GCP_APP_ENGINE = TMP_CLOUDPLATFORMVALUES_GCP_APP_ENGINE;
var CloudPlatformValues = /*#__PURE__*/ (0, _utils.createConstMap)([
    TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS,
    TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC,
    TMP_CLOUDPLATFORMVALUES_AWS_EC2,
    TMP_CLOUDPLATFORMVALUES_AWS_ECS,
    TMP_CLOUDPLATFORMVALUES_AWS_EKS,
    TMP_CLOUDPLATFORMVALUES_AWS_LAMBDA,
    TMP_CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK,
    TMP_CLOUDPLATFORMVALUES_AZURE_VM,
    TMP_CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES,
    TMP_CLOUDPLATFORMVALUES_AZURE_AKS,
    TMP_CLOUDPLATFORMVALUES_AZURE_FUNCTIONS,
    TMP_CLOUDPLATFORMVALUES_AZURE_APP_SERVICE,
    TMP_CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE,
    TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_RUN,
    TMP_CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE,
    TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS,
    TMP_CLOUDPLATFORMVALUES_GCP_APP_ENGINE
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for AwsEcsLaunchtypeValues enum definition
 *
 * The [launch type](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) for an ECS task.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifable export names for some package types
var TMP_AWSECSLAUNCHTYPEVALUES_EC2 = "ec2";
var TMP_AWSECSLAUNCHTYPEVALUES_FARGATE = "fargate";
var AWSECSLAUNCHTYPEVALUES_EC2 = TMP_AWSECSLAUNCHTYPEVALUES_EC2;
var AWSECSLAUNCHTYPEVALUES_FARGATE = TMP_AWSECSLAUNCHTYPEVALUES_FARGATE;
var AwsEcsLaunchtypeValues = /*#__PURE__*/ (0, _utils.createConstMap)([
    TMP_AWSECSLAUNCHTYPEVALUES_EC2,
    TMP_AWSECSLAUNCHTYPEVALUES_FARGATE
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for HostArchValues enum definition
 *
 * The CPU architecture the host system is running on.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifable export names for some package types
var TMP_HOSTARCHVALUES_AMD64 = "amd64";
var TMP_HOSTARCHVALUES_ARM32 = "arm32";
var TMP_HOSTARCHVALUES_ARM64 = "arm64";
var TMP_HOSTARCHVALUES_IA64 = "ia64";
var TMP_HOSTARCHVALUES_PPC32 = "ppc32";
var TMP_HOSTARCHVALUES_PPC64 = "ppc64";
var TMP_HOSTARCHVALUES_X86 = "x86";
var HOSTARCHVALUES_AMD64 = TMP_HOSTARCHVALUES_AMD64;
var HOSTARCHVALUES_ARM32 = TMP_HOSTARCHVALUES_ARM32;
var HOSTARCHVALUES_ARM64 = TMP_HOSTARCHVALUES_ARM64;
var HOSTARCHVALUES_IA64 = TMP_HOSTARCHVALUES_IA64;
var HOSTARCHVALUES_PPC32 = TMP_HOSTARCHVALUES_PPC32;
var HOSTARCHVALUES_PPC64 = TMP_HOSTARCHVALUES_PPC64;
var HOSTARCHVALUES_X86 = TMP_HOSTARCHVALUES_X86;
var HostArchValues = /*#__PURE__*/ (0, _utils.createConstMap)([
    TMP_HOSTARCHVALUES_AMD64,
    TMP_HOSTARCHVALUES_ARM32,
    TMP_HOSTARCHVALUES_ARM64,
    TMP_HOSTARCHVALUES_IA64,
    TMP_HOSTARCHVALUES_PPC32,
    TMP_HOSTARCHVALUES_PPC64,
    TMP_HOSTARCHVALUES_X86
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for OsTypeValues enum definition
 *
 * The operating system type.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifable export names for some package types
var TMP_OSTYPEVALUES_WINDOWS = "windows";
var TMP_OSTYPEVALUES_LINUX = "linux";
var TMP_OSTYPEVALUES_DARWIN = "darwin";
var TMP_OSTYPEVALUES_FREEBSD = "freebsd";
var TMP_OSTYPEVALUES_NETBSD = "netbsd";
var TMP_OSTYPEVALUES_OPENBSD = "openbsd";
var TMP_OSTYPEVALUES_DRAGONFLYBSD = "dragonflybsd";
var TMP_OSTYPEVALUES_HPUX = "hpux";
var TMP_OSTYPEVALUES_AIX = "aix";
var TMP_OSTYPEVALUES_SOLARIS = "solaris";
var TMP_OSTYPEVALUES_Z_OS = "z_os";
var OSTYPEVALUES_WINDOWS = TMP_OSTYPEVALUES_WINDOWS;
var OSTYPEVALUES_LINUX = TMP_OSTYPEVALUES_LINUX;
var OSTYPEVALUES_DARWIN = TMP_OSTYPEVALUES_DARWIN;
var OSTYPEVALUES_FREEBSD = TMP_OSTYPEVALUES_FREEBSD;
var OSTYPEVALUES_NETBSD = TMP_OSTYPEVALUES_NETBSD;
var OSTYPEVALUES_OPENBSD = TMP_OSTYPEVALUES_OPENBSD;
var OSTYPEVALUES_DRAGONFLYBSD = TMP_OSTYPEVALUES_DRAGONFLYBSD;
var OSTYPEVALUES_HPUX = TMP_OSTYPEVALUES_HPUX;
var OSTYPEVALUES_AIX = TMP_OSTYPEVALUES_AIX;
var OSTYPEVALUES_SOLARIS = TMP_OSTYPEVALUES_SOLARIS;
var OSTYPEVALUES_Z_OS = TMP_OSTYPEVALUES_Z_OS;
var OsTypeValues = /*#__PURE__*/ (0, _utils.createConstMap)([
    TMP_OSTYPEVALUES_WINDOWS,
    TMP_OSTYPEVALUES_LINUX,
    TMP_OSTYPEVALUES_DARWIN,
    TMP_OSTYPEVALUES_FREEBSD,
    TMP_OSTYPEVALUES_NETBSD,
    TMP_OSTYPEVALUES_OPENBSD,
    TMP_OSTYPEVALUES_DRAGONFLYBSD,
    TMP_OSTYPEVALUES_HPUX,
    TMP_OSTYPEVALUES_AIX,
    TMP_OSTYPEVALUES_SOLARIS,
    TMP_OSTYPEVALUES_Z_OS
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for TelemetrySdkLanguageValues enum definition
 *
 * The language of the telemetry SDK.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifable export names for some package types
var TMP_TELEMETRYSDKLANGUAGEVALUES_CPP = "cpp";
var TMP_TELEMETRYSDKLANGUAGEVALUES_DOTNET = "dotnet";
var TMP_TELEMETRYSDKLANGUAGEVALUES_ERLANG = "erlang";
var TMP_TELEMETRYSDKLANGUAGEVALUES_GO = "go";
var TMP_TELEMETRYSDKLANGUAGEVALUES_JAVA = "java";
var TMP_TELEMETRYSDKLANGUAGEVALUES_NODEJS = "nodejs";
var TMP_TELEMETRYSDKLANGUAGEVALUES_PHP = "php";
var TMP_TELEMETRYSDKLANGUAGEVALUES_PYTHON = "python";
var TMP_TELEMETRYSDKLANGUAGEVALUES_RUBY = "ruby";
var TMP_TELEMETRYSDKLANGUAGEVALUES_WEBJS = "webjs";
var TELEMETRYSDKLANGUAGEVALUES_CPP = TMP_TELEMETRYSDKLANGUAGEVALUES_CPP;
var TELEMETRYSDKLANGUAGEVALUES_DOTNET = TMP_TELEMETRYSDKLANGUAGEVALUES_DOTNET;
var TELEMETRYSDKLANGUAGEVALUES_ERLANG = TMP_TELEMETRYSDKLANGUAGEVALUES_ERLANG;
var TELEMETRYSDKLANGUAGEVALUES_GO = TMP_TELEMETRYSDKLANGUAGEVALUES_GO;
var TELEMETRYSDKLANGUAGEVALUES_JAVA = TMP_TELEMETRYSDKLANGUAGEVALUES_JAVA;
var TELEMETRYSDKLANGUAGEVALUES_NODEJS = TMP_TELEMETRYSDKLANGUAGEVALUES_NODEJS;
var TELEMETRYSDKLANGUAGEVALUES_PHP = TMP_TELEMETRYSDKLANGUAGEVALUES_PHP;
var TELEMETRYSDKLANGUAGEVALUES_PYTHON = TMP_TELEMETRYSDKLANGUAGEVALUES_PYTHON;
var TELEMETRYSDKLANGUAGEVALUES_RUBY = TMP_TELEMETRYSDKLANGUAGEVALUES_RUBY;
var TELEMETRYSDKLANGUAGEVALUES_WEBJS = TMP_TELEMETRYSDKLANGUAGEVALUES_WEBJS;
var TelemetrySdkLanguageValues = /*#__PURE__*/ (0, _utils.createConstMap)([
    TMP_TELEMETRYSDKLANGUAGEVALUES_CPP,
    TMP_TELEMETRYSDKLANGUAGEVALUES_DOTNET,
    TMP_TELEMETRYSDKLANGUAGEVALUES_ERLANG,
    TMP_TELEMETRYSDKLANGUAGEVALUES_GO,
    TMP_TELEMETRYSDKLANGUAGEVALUES_JAVA,
    TMP_TELEMETRYSDKLANGUAGEVALUES_NODEJS,
    TMP_TELEMETRYSDKLANGUAGEVALUES_PHP,
    TMP_TELEMETRYSDKLANGUAGEVALUES_PYTHON,
    TMP_TELEMETRYSDKLANGUAGEVALUES_RUBY,
    TMP_TELEMETRYSDKLANGUAGEVALUES_WEBJS
]);

},{"../internal/utils":"hV8FE","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"gOhxt":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "unrefTimer", ()=>unrefTimer);
function unrefTimer(_timer) {}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"dYgp0":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"2fJSh":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ExportResultCode", ()=>ExportResultCode);
var ExportResultCode;
(function(ExportResultCode) {
    ExportResultCode[ExportResultCode["SUCCESS"] = 0] = "SUCCESS";
    ExportResultCode[ExportResultCode["FAILED"] = 1] = "FAILED";
})(ExportResultCode || (ExportResultCode = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"8mhmB":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CompositePropagator", ()=>CompositePropagator);
var _api = require("@opentelemetry/api");
var __values = undefined && undefined.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/** Combines multiple propagators into a single propagator. */ var CompositePropagator = /** @class */ function() {
    /**
     * Construct a composite propagator from a list of propagators.
     *
     * @param [config] Configuration object for composite propagator
     */ function CompositePropagator(config) {
        if (config === void 0) config = {};
        var _a;
        this._propagators = (_a = config.propagators) !== null && _a !== void 0 ? _a : [];
        this._fields = Array.from(new Set(this._propagators// older propagators may not have fields function, null check to be sure
        .map(function(p) {
            return typeof p.fields === "function" ? p.fields() : [];
        }).reduce(function(x, y) {
            return x.concat(y);
        }, [])));
    }
    /**
     * Run each of the configured propagators with the given context and carrier.
     * Propagators are run in the order they are configured, so if multiple
     * propagators write the same carrier key, the propagator later in the list
     * will "win".
     *
     * @param context Context to inject
     * @param carrier Carrier into which context will be injected
     */ CompositePropagator.prototype.inject = function(context, carrier, setter) {
        var e_1, _a;
        try {
            for(var _b = __values(this._propagators), _c = _b.next(); !_c.done; _c = _b.next()){
                var propagator = _c.value;
                try {
                    propagator.inject(context, carrier, setter);
                } catch (err) {
                    (0, _api.diag).warn("Failed to inject with " + propagator.constructor.name + ". Err: " + err.message);
                }
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
    };
    /**
     * Run each of the configured propagators with the given context and carrier.
     * Propagators are run in the order they are configured, so if multiple
     * propagators write the same context key, the propagator later in the list
     * will "win".
     *
     * @param context Context to add values to
     * @param carrier Carrier from which to extract context
     */ CompositePropagator.prototype.extract = function(context, carrier, getter) {
        return this._propagators.reduce(function(ctx, propagator) {
            try {
                return propagator.extract(ctx, carrier, getter);
            } catch (err) {
                (0, _api.diag).warn("Failed to inject with " + propagator.constructor.name + ". Err: " + err.message);
            }
            return ctx;
        }, context);
    };
    CompositePropagator.prototype.fields = function() {
        // return a new array so our fields cannot be modified
        return this._fields.slice();
    };
    return CompositePropagator;
}();

},{"@opentelemetry/api":"6AC4z","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"j30mQ":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TRACE_PARENT_HEADER", ()=>TRACE_PARENT_HEADER);
parcelHelpers.export(exports, "TRACE_STATE_HEADER", ()=>TRACE_STATE_HEADER);
/**
 * Parses information from the [traceparent] span tag and converts it into {@link SpanContext}
 * @param traceParent - A meta property that comes from server.
 *     It should be dynamically generated server side to have the server's request trace Id,
 *     a parent span Id that was set on the server's request span,
 *     and the trace flags to indicate the server's sampling decision
 *     (01 = sampled, 00 = not sampled).
 *     for example: '{version}-{traceId}-{spanId}-{sampleDecision}'
 *     For more information see {@link https://www.w3.org/TR/trace-context/}
 */ parcelHelpers.export(exports, "parseTraceParent", ()=>parseTraceParent);
parcelHelpers.export(exports, "W3CTraceContextPropagator", ()=>W3CTraceContextPropagator);
var _api = require("@opentelemetry/api");
var _suppressTracing = require("./suppress-tracing");
var _traceState = require("./TraceState");
var TRACE_PARENT_HEADER = "traceparent";
var TRACE_STATE_HEADER = "tracestate";
var VERSION = "00";
var VERSION_PART = "(?!ff)[\\da-f]{2}";
var TRACE_ID_PART = "(?![0]{32})[\\da-f]{32}";
var PARENT_ID_PART = "(?![0]{16})[\\da-f]{16}";
var FLAGS_PART = "[\\da-f]{2}";
var TRACE_PARENT_REGEX = new RegExp("^\\s?(" + VERSION_PART + ")-(" + TRACE_ID_PART + ")-(" + PARENT_ID_PART + ")-(" + FLAGS_PART + ")(-.*)?\\s?$");
function parseTraceParent(traceParent) {
    var match = TRACE_PARENT_REGEX.exec(traceParent);
    if (!match) return null;
    // According to the specification the implementation should be compatible
    // with future versions. If there are more parts, we only reject it if it's using version 00
    // See https://www.w3.org/TR/trace-context/#versioning-of-traceparent
    if (match[1] === "00" && match[5]) return null;
    return {
        traceId: match[2],
        spanId: match[3],
        traceFlags: parseInt(match[4], 16)
    };
}
/**
 * Propagates {@link SpanContext} through Trace Context format propagation.
 *
 * Based on the Trace Context specification:
 * https://www.w3.org/TR/trace-context/
 */ var W3CTraceContextPropagator = /** @class */ function() {
    function W3CTraceContextPropagator() {}
    W3CTraceContextPropagator.prototype.inject = function(context, carrier, setter) {
        var spanContext = (0, _api.trace).getSpanContext(context);
        if (!spanContext || (0, _suppressTracing.isTracingSuppressed)(context) || !(0, _api.isSpanContextValid)(spanContext)) return;
        var traceParent = VERSION + "-" + spanContext.traceId + "-" + spanContext.spanId + "-0" + Number(spanContext.traceFlags || (0, _api.TraceFlags).NONE).toString(16);
        setter.set(carrier, TRACE_PARENT_HEADER, traceParent);
        if (spanContext.traceState) setter.set(carrier, TRACE_STATE_HEADER, spanContext.traceState.serialize());
    };
    W3CTraceContextPropagator.prototype.extract = function(context, carrier, getter) {
        var traceParentHeader = getter.get(carrier, TRACE_PARENT_HEADER);
        if (!traceParentHeader) return context;
        var traceParent = Array.isArray(traceParentHeader) ? traceParentHeader[0] : traceParentHeader;
        if (typeof traceParent !== "string") return context;
        var spanContext = parseTraceParent(traceParent);
        if (!spanContext) return context;
        spanContext.isRemote = true;
        var traceStateHeader = getter.get(carrier, TRACE_STATE_HEADER);
        if (traceStateHeader) {
            // If more than one `tracestate` header is found, we merge them into a
            // single header.
            var state = Array.isArray(traceStateHeader) ? traceStateHeader.join(",") : traceStateHeader;
            spanContext.traceState = new (0, _traceState.TraceState)(typeof state === "string" ? state : undefined);
        }
        return (0, _api.trace).setSpanContext(context, spanContext);
    };
    W3CTraceContextPropagator.prototype.fields = function() {
        return [
            TRACE_PARENT_HEADER,
            TRACE_STATE_HEADER
        ];
    };
    return W3CTraceContextPropagator;
}();

},{"@opentelemetry/api":"6AC4z","./suppress-tracing":"51l3B","./TraceState":"9sU1J","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"9sU1J":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TraceState", ()=>TraceState);
var _validators = require("../internal/validators");
var MAX_TRACE_STATE_ITEMS = 32;
var MAX_TRACE_STATE_LEN = 512;
var LIST_MEMBERS_SEPARATOR = ",";
var LIST_MEMBER_KEY_VALUE_SPLITTER = "=";
/**
 * TraceState must be a class and not a simple object type because of the spec
 * requirement (https://www.w3.org/TR/trace-context/#tracestate-field).
 *
 * Here is the list of allowed mutations:
 * - New key-value pair should be added into the beginning of the list
 * - The value of any key can be updated. Modified keys MUST be moved to the
 * beginning of the list.
 */ var TraceState = /** @class */ function() {
    function TraceState(rawTraceState) {
        this._internalState = new Map();
        if (rawTraceState) this._parse(rawTraceState);
    }
    TraceState.prototype.set = function(key, value) {
        // TODO: Benchmark the different approaches(map vs list) and
        // use the faster one.
        var traceState = this._clone();
        if (traceState._internalState.has(key)) traceState._internalState.delete(key);
        traceState._internalState.set(key, value);
        return traceState;
    };
    TraceState.prototype.unset = function(key) {
        var traceState = this._clone();
        traceState._internalState.delete(key);
        return traceState;
    };
    TraceState.prototype.get = function(key) {
        return this._internalState.get(key);
    };
    TraceState.prototype.serialize = function() {
        var _this = this;
        return this._keys().reduce(function(agg, key) {
            agg.push(key + LIST_MEMBER_KEY_VALUE_SPLITTER + _this.get(key));
            return agg;
        }, []).join(LIST_MEMBERS_SEPARATOR);
    };
    TraceState.prototype._parse = function(rawTraceState) {
        if (rawTraceState.length > MAX_TRACE_STATE_LEN) return;
        this._internalState = rawTraceState.split(LIST_MEMBERS_SEPARATOR).reverse() // Store in reverse so new keys (.set(...)) will be placed at the beginning
        .reduce(function(agg, part) {
            var listMember = part.trim(); // Optional Whitespace (OWS) handling
            var i = listMember.indexOf(LIST_MEMBER_KEY_VALUE_SPLITTER);
            if (i !== -1) {
                var key = listMember.slice(0, i);
                var value = listMember.slice(i + 1, part.length);
                if ((0, _validators.validateKey)(key) && (0, _validators.validateValue)(value)) agg.set(key, value);
            }
            return agg;
        }, new Map());
        // Because of the reverse() requirement, trunc must be done after map is created
        if (this._internalState.size > MAX_TRACE_STATE_ITEMS) this._internalState = new Map(Array.from(this._internalState.entries()).reverse() // Use reverse same as original tracestate parse chain
        .slice(0, MAX_TRACE_STATE_ITEMS));
    };
    TraceState.prototype._keys = function() {
        return Array.from(this._internalState.keys()).reverse();
    };
    TraceState.prototype._clone = function() {
        var traceState = new TraceState();
        traceState._internalState = new Map(this._internalState);
        return traceState;
    };
    return TraceState;
}();

},{"../internal/validators":"kdvPR","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"kdvPR":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Key is opaque string up to 256 characters printable. It MUST begin with a
 * lowercase letter, and can only contain lowercase letters a-z, digits 0-9,
 * underscores _, dashes -, asterisks *, and forward slashes /.
 * For multi-tenant vendor scenarios, an at sign (@) can be used to prefix the
 * vendor name. Vendors SHOULD set the tenant ID at the beginning of the key.
 * see https://www.w3.org/TR/trace-context/#key
 */ parcelHelpers.export(exports, "validateKey", ()=>validateKey);
/**
 * Value is opaque string up to 256 characters printable ASCII RFC0020
 * characters (i.e., the range 0x20 to 0x7E) except comma , and =.
 */ parcelHelpers.export(exports, "validateValue", ()=>validateValue);
var VALID_KEY_CHAR_RANGE = "[_0-9a-z-*/]";
var VALID_KEY = "[a-z]" + VALID_KEY_CHAR_RANGE + "{0,255}";
var VALID_VENDOR_KEY = "[a-z0-9]" + VALID_KEY_CHAR_RANGE + "{0,240}@[a-z]" + VALID_KEY_CHAR_RANGE + "{0,13}";
var VALID_KEY_REGEX = new RegExp("^(?:" + VALID_KEY + "|" + VALID_VENDOR_KEY + ")$");
var VALID_VALUE_BASE_REGEX = /^[ -~]{0,255}[!-~]$/;
var INVALID_VALUE_COMMA_EQUAL_REGEX = /,|=/;
function validateKey(key) {
    return VALID_KEY_REGEX.test(key);
}
function validateValue(value) {
    return VALID_VALUE_BASE_REGEX.test(value) && !INVALID_VALUE_COMMA_EQUAL_REGEX.test(value);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"fzitc":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"eyPsO":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RPCType", ()=>RPCType);
parcelHelpers.export(exports, "setRPCMetadata", ()=>setRPCMetadata);
parcelHelpers.export(exports, "deleteRPCMetadata", ()=>deleteRPCMetadata);
parcelHelpers.export(exports, "getRPCMetadata", ()=>getRPCMetadata);
var _api = require("@opentelemetry/api");
var RPC_METADATA_KEY = (0, _api.createContextKey)("OpenTelemetry SDK Context Key RPC_METADATA");
var RPCType;
(function(RPCType) {
    RPCType["HTTP"] = "http";
})(RPCType || (RPCType = {}));
function setRPCMetadata(context, meta) {
    return context.setValue(RPC_METADATA_KEY, meta);
}
function deleteRPCMetadata(context) {
    return context.deleteValue(RPC_METADATA_KEY);
}
function getRPCMetadata(context) {
    return context.getValue(RPC_METADATA_KEY);
}

},{"@opentelemetry/api":"6AC4z","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"9KkRt":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AlwaysOffSampler", ()=>AlwaysOffSampler);
var _api = require("@opentelemetry/api");
/**
 * @deprecated Use the one defined in @opentelemetry/sdk-trace-base instead.
 * Sampler that samples no traces.
 */ var AlwaysOffSampler = /** @class */ function() {
    function AlwaysOffSampler() {}
    AlwaysOffSampler.prototype.shouldSample = function() {
        return {
            decision: (0, _api.SamplingDecision).NOT_RECORD
        };
    };
    AlwaysOffSampler.prototype.toString = function() {
        return "AlwaysOffSampler";
    };
    return AlwaysOffSampler;
}();

},{"@opentelemetry/api":"6AC4z","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"jalnp":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AlwaysOnSampler", ()=>AlwaysOnSampler);
var _api = require("@opentelemetry/api");
/**
 * @deprecated Use the one defined in @opentelemetry/sdk-trace-base instead.
 * Sampler that samples all traces.
 */ var AlwaysOnSampler = /** @class */ function() {
    function AlwaysOnSampler() {}
    AlwaysOnSampler.prototype.shouldSample = function() {
        return {
            decision: (0, _api.SamplingDecision).RECORD_AND_SAMPLED
        };
    };
    AlwaysOnSampler.prototype.toString = function() {
        return "AlwaysOnSampler";
    };
    return AlwaysOnSampler;
}();

},{"@opentelemetry/api":"6AC4z","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"gERye":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ParentBasedSampler", ()=>ParentBasedSampler);
var _api = require("@opentelemetry/api");
var _globalErrorHandler = require("../../common/global-error-handler");
var _alwaysOffSampler = require("./AlwaysOffSampler");
var _alwaysOnSampler = require("./AlwaysOnSampler");
/**
 * @deprecated Use the one defined in @opentelemetry/sdk-trace-base instead.
 * A composite sampler that either respects the parent span's sampling decision
 * or delegates to `delegateSampler` for root spans.
 */ var ParentBasedSampler = /** @class */ function() {
    function ParentBasedSampler(config) {
        var _a, _b, _c, _d;
        this._root = config.root;
        if (!this._root) {
            (0, _globalErrorHandler.globalErrorHandler)(new Error("ParentBasedSampler must have a root sampler configured"));
            this._root = new (0, _alwaysOnSampler.AlwaysOnSampler)();
        }
        this._remoteParentSampled = (_a = config.remoteParentSampled) !== null && _a !== void 0 ? _a : new (0, _alwaysOnSampler.AlwaysOnSampler)();
        this._remoteParentNotSampled = (_b = config.remoteParentNotSampled) !== null && _b !== void 0 ? _b : new (0, _alwaysOffSampler.AlwaysOffSampler)();
        this._localParentSampled = (_c = config.localParentSampled) !== null && _c !== void 0 ? _c : new (0, _alwaysOnSampler.AlwaysOnSampler)();
        this._localParentNotSampled = (_d = config.localParentNotSampled) !== null && _d !== void 0 ? _d : new (0, _alwaysOffSampler.AlwaysOffSampler)();
    }
    ParentBasedSampler.prototype.shouldSample = function(context, traceId, spanName, spanKind, attributes, links) {
        var parentContext = (0, _api.trace).getSpanContext(context);
        if (!parentContext || !(0, _api.isSpanContextValid)(parentContext)) return this._root.shouldSample(context, traceId, spanName, spanKind, attributes, links);
        if (parentContext.isRemote) {
            if (parentContext.traceFlags & (0, _api.TraceFlags).SAMPLED) return this._remoteParentSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
            return this._remoteParentNotSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
        }
        if (parentContext.traceFlags & (0, _api.TraceFlags).SAMPLED) return this._localParentSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
        return this._localParentNotSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
    };
    ParentBasedSampler.prototype.toString = function() {
        return "ParentBased{root=" + this._root.toString() + ", remoteParentSampled=" + this._remoteParentSampled.toString() + ", remoteParentNotSampled=" + this._remoteParentNotSampled.toString() + ", localParentSampled=" + this._localParentSampled.toString() + ", localParentNotSampled=" + this._localParentNotSampled.toString() + "}";
    };
    return ParentBasedSampler;
}();

},{"@opentelemetry/api":"6AC4z","../../common/global-error-handler":"hKz5C","./AlwaysOffSampler":"9KkRt","./AlwaysOnSampler":"jalnp","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"69Ird":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TraceIdRatioBasedSampler", ()=>TraceIdRatioBasedSampler);
var _api = require("@opentelemetry/api");
/**
 * @deprecated Use the one defined in @opentelemetry/sdk-trace-base instead.
 * Sampler that samples a given fraction of traces based of trace id deterministically.
 */ var TraceIdRatioBasedSampler = /** @class */ function() {
    function TraceIdRatioBasedSampler(_ratio) {
        if (_ratio === void 0) _ratio = 0;
        this._ratio = _ratio;
        this._ratio = this._normalize(_ratio);
        this._upperBound = Math.floor(this._ratio * 0xffffffff);
    }
    TraceIdRatioBasedSampler.prototype.shouldSample = function(context, traceId) {
        return {
            decision: (0, _api.isValidTraceId)(traceId) && this._accumulate(traceId) < this._upperBound ? (0, _api.SamplingDecision).RECORD_AND_SAMPLED : (0, _api.SamplingDecision).NOT_RECORD
        };
    };
    TraceIdRatioBasedSampler.prototype.toString = function() {
        return "TraceIdRatioBased{" + this._ratio + "}";
    };
    TraceIdRatioBasedSampler.prototype._normalize = function(ratio) {
        if (typeof ratio !== "number" || isNaN(ratio)) return 0;
        return ratio >= 1 ? 1 : ratio <= 0 ? 0 : ratio;
    };
    TraceIdRatioBasedSampler.prototype._accumulate = function(traceId) {
        var accumulation = 0;
        for(var i = 0; i < traceId.length / 8; i++){
            var pos = i * 8;
            var part = parseInt(traceId.slice(pos, pos + 8), 16);
            accumulation = (accumulation ^ part) >>> 0;
        }
        return accumulation;
    };
    return TraceIdRatioBasedSampler;
}();

},{"@opentelemetry/api":"6AC4z","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"6klbq":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /* eslint-disable @typescript-eslint/no-explicit-any */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Merges objects together
 * @param args - objects / values to be merged
 */ parcelHelpers.export(exports, "merge", ()=>merge);
var _lodashMerge = require("./lodash.merge");
var MAX_LEVEL = 20;
function merge() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var result = args.shift();
    var objects = new WeakMap();
    while(args.length > 0)result = mergeTwoObjects(result, args.shift(), 0, objects);
    return result;
}
function takeValue(value) {
    if (isArray(value)) return value.slice();
    return value;
}
/**
 * Merges two objects
 * @param one - first object
 * @param two - second object
 * @param level - current deep level
 * @param objects - objects holder that has been already referenced - to prevent
 * cyclic dependency
 */ function mergeTwoObjects(one, two, level, objects) {
    if (level === void 0) level = 0;
    var result;
    if (level > MAX_LEVEL) return undefined;
    level++;
    if (isPrimitive(one) || isPrimitive(two) || isFunction(two)) result = takeValue(two);
    else if (isArray(one)) {
        result = one.slice();
        if (isArray(two)) for(var i = 0, j = two.length; i < j; i++)result.push(takeValue(two[i]));
        else if (isObject(two)) {
            var keys = Object.keys(two);
            for(var i = 0, j = keys.length; i < j; i++){
                var key = keys[i];
                result[key] = takeValue(two[key]);
            }
        }
    } else if (isObject(one)) {
        if (isObject(two)) {
            if (!shouldMerge(one, two)) return two;
            result = Object.assign({}, one);
            var keys = Object.keys(two);
            for(var i = 0, j = keys.length; i < j; i++){
                var key = keys[i];
                var twoValue = two[key];
                if (isPrimitive(twoValue)) {
                    if (typeof twoValue === "undefined") delete result[key];
                    else // result[key] = takeValue(twoValue);
                    result[key] = twoValue;
                } else {
                    var obj1 = result[key];
                    var obj2 = twoValue;
                    if (wasObjectReferenced(one, key, objects) || wasObjectReferenced(two, key, objects)) delete result[key];
                    else {
                        if (isObject(obj1) && isObject(obj2)) {
                            var arr1 = objects.get(obj1) || [];
                            var arr2 = objects.get(obj2) || [];
                            arr1.push({
                                obj: one,
                                key: key
                            });
                            arr2.push({
                                obj: two,
                                key: key
                            });
                            objects.set(obj1, arr1);
                            objects.set(obj2, arr2);
                        }
                        result[key] = mergeTwoObjects(result[key], twoValue, level, objects);
                    }
                }
            }
        } else result = two;
    }
    return result;
}
/**
 * Function to check if object has been already reference
 * @param obj
 * @param key
 * @param objects
 */ function wasObjectReferenced(obj, key, objects) {
    var arr = objects.get(obj[key]) || [];
    for(var i = 0, j = arr.length; i < j; i++){
        var info = arr[i];
        if (info.key === key && info.obj === obj) return true;
    }
    return false;
}
function isArray(value) {
    return Array.isArray(value);
}
function isFunction(value) {
    return typeof value === "function";
}
function isObject(value) {
    return !isPrimitive(value) && !isArray(value) && !isFunction(value) && typeof value === "object";
}
function isPrimitive(value) {
    return typeof value === "string" || typeof value === "number" || typeof value === "boolean" || typeof value === "undefined" || value instanceof Date || value instanceof RegExp || value === null;
}
function shouldMerge(one, two) {
    if (!(0, _lodashMerge.isPlainObject)(one) || !(0, _lodashMerge.isPlainObject)(two)) return false;
    return true;
}

},{"./lodash.merge":"dGhva","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"dGhva":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /* eslint-disable @typescript-eslint/no-explicit-any */ /**
 * based on lodash in order to support esm builds without esModuleInterop.
 * lodash is using MIT License.
 **/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */ parcelHelpers.export(exports, "isPlainObject", ()=>isPlainObject);
var objectTag = "[object Object]";
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var funcProto = Function.prototype;
var funcToString = funcProto.toString;
var objectCtorString = funcToString.call(Object);
var getPrototype = overArg(Object.getPrototypeOf, Object);
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
var nativeObjectToString = objectProto.toString;
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) !== objectTag) return false;
    var proto = getPrototype(value);
    if (proto === null) return true;
    var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) === objectCtorString;
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return value != null && typeof value == "object";
}
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    if (value == null) return value === undefined ? undefinedTag : nullTag;
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    var unmasked = false;
    try {
        value[symToStringTag] = undefined;
        unmasked = true;
    } catch (e) {
    // silence
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) value[symToStringTag] = tag;
        else delete value[symToStringTag];
    }
    return result;
}
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(value) {
    return nativeObjectToString.call(value);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"B1o2t":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TimeoutError", ()=>TimeoutError);
/**
 * Adds a timeout to a promise and rejects if the specified timeout has elapsed. Also rejects if the specified promise
 * rejects, and resolves if the specified promise resolves.
 *
 * <p> NOTE: this operation will continue even after it throws a {@link TimeoutError}.
 *
 * @param promise promise to use with timeout.
 * @param timeout the timeout in milliseconds until the returned promise is rejected.
 */ parcelHelpers.export(exports, "callWithTimeout", ()=>callWithTimeout);
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
/**
 * Error that is thrown on timeouts.
 */ var TimeoutError = /** @class */ function(_super) {
    __extends(TimeoutError, _super);
    function TimeoutError(message) {
        var _this = _super.call(this, message) || this;
        // manually adjust prototype to retain `instanceof` functionality when targeting ES5, see:
        // https://github.com/Microsoft/TypeScript-wiki/blob/main/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(_this, TimeoutError.prototype);
        return _this;
    }
    return TimeoutError;
}(Error);
function callWithTimeout(promise, timeout) {
    var timeoutHandle;
    var timeoutPromise = new Promise(function timeoutFunction(_resolve, reject) {
        timeoutHandle = setTimeout(function timeoutHandler() {
            reject(new TimeoutError("Operation timed out."));
        }, timeout);
    });
    return Promise.race([
        promise,
        timeoutPromise
    ]).then(function(result) {
        clearTimeout(timeoutHandle);
        return result;
    }, function(reason) {
        clearTimeout(timeoutHandle);
        throw reason;
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"lafWE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ parcelHelpers.export(exports, "urlMatches", ()=>urlMatches);
/**
 * Check if {@param url} should be ignored when comparing against {@param ignoredUrls}
 * @param url
 * @param ignoredUrls
 */ parcelHelpers.export(exports, "isUrlIgnored", ()=>isUrlIgnored);
var __values = undefined && undefined.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
function urlMatches(url, urlToMatch) {
    if (typeof urlToMatch === "string") return url === urlToMatch;
    else return !!url.match(urlToMatch);
}
function isUrlIgnored(url, ignoredUrls) {
    var e_1, _a;
    if (!ignoredUrls) return false;
    try {
        for(var ignoredUrls_1 = __values(ignoredUrls), ignoredUrls_1_1 = ignoredUrls_1.next(); !ignoredUrls_1_1.done; ignoredUrls_1_1 = ignoredUrls_1.next()){
            var ignoreUrl = ignoredUrls_1_1.value;
            if (urlMatches(url, ignoreUrl)) return true;
        }
    } catch (e_1_1) {
        e_1 = {
            error: e_1_1
        };
    } finally{
        try {
            if (ignoredUrls_1_1 && !ignoredUrls_1_1.done && (_a = ignoredUrls_1.return)) _a.call(ignoredUrls_1);
        } finally{
            if (e_1) throw e_1.error;
        }
    }
    return false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"kPm4I":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Checks if certain function has been already wrapped
 * @param func
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isWrapped", ()=>isWrapped);
function isWrapped(func) {
    return typeof func === "function" && typeof func.__original === "function" && typeof func.__unwrap === "function" && func.__wrapped === true;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"Wira8":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BindOnceFuture", ()=>BindOnceFuture);
var _promise = require("./promise");
var __read = undefined && undefined.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = undefined && undefined.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/**
 * Bind the callback and only invoke the callback once regardless how many times `BindOnceFuture.call` is invoked.
 */ var BindOnceFuture = /** @class */ function() {
    function BindOnceFuture(_callback, _that) {
        this._callback = _callback;
        this._that = _that;
        this._isCalled = false;
        this._deferred = new (0, _promise.Deferred)();
    }
    Object.defineProperty(BindOnceFuture.prototype, "isCalled", {
        get: function() {
            return this._isCalled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BindOnceFuture.prototype, "promise", {
        get: function() {
            return this._deferred.promise;
        },
        enumerable: false,
        configurable: true
    });
    BindOnceFuture.prototype.call = function() {
        var _a;
        var _this = this;
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        if (!this._isCalled) {
            this._isCalled = true;
            try {
                Promise.resolve((_a = this._callback).call.apply(_a, __spreadArray([
                    this._that
                ], __read(args), false))).then(function(val) {
                    return _this._deferred.resolve(val);
                }, function(err) {
                    return _this._deferred.reject(err);
                });
            } catch (err) {
                this._deferred.reject(err);
            }
        }
        return this._deferred.promise;
    };
    return BindOnceFuture;
}();

},{"./promise":"ei2cy","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"ei2cy":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Deferred", ()=>Deferred);
var Deferred = /** @class */ function() {
    function Deferred() {
        var _this = this;
        this._promise = new Promise(function(resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });
    }
    Object.defineProperty(Deferred.prototype, "promise", {
        get: function() {
            return this._promise;
        },
        enumerable: false,
        configurable: true
    });
    Deferred.prototype.resolve = function(val) {
        this._resolve(val);
    };
    Deferred.prototype.reject = function(err) {
        this._reject(err);
    };
    return Deferred;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"4s27R":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @internal
 * Shared functionality used by Exporters while exporting data, including suppression of Traces.
 */ parcelHelpers.export(exports, "_export", ()=>_export);
var _api = require("@opentelemetry/api");
var _suppressTracing = require("../trace/suppress-tracing");
function _export(exporter, arg) {
    return new Promise(function(resolve) {
        // prevent downstream exporter calls from generating spans
        (0, _api.context).with((0, _suppressTracing.suppressTracing)((0, _api.context).active()), function() {
            exporter.export(arg, function(result) {
                resolve(result);
            });
        });
    });
}

},{"@opentelemetry/api":"6AC4z","../trace/suppress-tracing":"51l3B","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"3tWGt":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Span", ()=>Span);
var _api = require("@opentelemetry/api");
var _core = require("@opentelemetry/core");
var _semanticConventions = require("@opentelemetry/semantic-conventions");
var _enums = require("./enums");
var __values = undefined && undefined.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = undefined && undefined.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
/**
 * This class represents a span.
 */ var Span = /** @class */ function() {
    /**
     * Constructs a new Span instance.
     *
     * @deprecated calling Span constructor directly is not supported. Please use tracer.startSpan.
     * */ function Span(parentTracer, context, spanName, spanContext, kind, parentSpanId, links, startTime, _deprecatedClock, attributes) {
        if (links === void 0) links = [];
        this.attributes = {};
        this.links = [];
        this.events = [];
        this._droppedAttributesCount = 0;
        this._droppedEventsCount = 0;
        this._droppedLinksCount = 0;
        this.status = {
            code: (0, _api.SpanStatusCode).UNSET
        };
        this.endTime = [
            0,
            0
        ];
        this._ended = false;
        this._duration = [
            -1,
            -1
        ];
        this.name = spanName;
        this._spanContext = spanContext;
        this.parentSpanId = parentSpanId;
        this.kind = kind;
        this.links = links;
        var now = Date.now();
        this._performanceStartTime = (0, _core.otperformance).now();
        this._performanceOffset = now - (this._performanceStartTime + (0, _core.getTimeOrigin)());
        this._startTimeProvided = startTime != null;
        this.startTime = this._getTime(startTime !== null && startTime !== void 0 ? startTime : now);
        this.resource = parentTracer.resource;
        this.instrumentationLibrary = parentTracer.instrumentationLibrary;
        this._spanLimits = parentTracer.getSpanLimits();
        this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit || 0;
        if (attributes != null) this.setAttributes(attributes);
        this._spanProcessor = parentTracer.getActiveSpanProcessor();
        this._spanProcessor.onStart(this, context);
    }
    Span.prototype.spanContext = function() {
        return this._spanContext;
    };
    Span.prototype.setAttribute = function(key, value) {
        if (value == null || this._isSpanEnded()) return this;
        if (key.length === 0) {
            (0, _api.diag).warn("Invalid attribute key: " + key);
            return this;
        }
        if (!(0, _core.isAttributeValue)(value)) {
            (0, _api.diag).warn("Invalid attribute value set for key: " + key);
            return this;
        }
        if (Object.keys(this.attributes).length >= this._spanLimits.attributeCountLimit && !Object.prototype.hasOwnProperty.call(this.attributes, key)) {
            this._droppedAttributesCount++;
            return this;
        }
        this.attributes[key] = this._truncateToSize(value);
        return this;
    };
    Span.prototype.setAttributes = function(attributes) {
        var e_1, _a;
        try {
            for(var _b = __values(Object.entries(attributes)), _c = _b.next(); !_c.done; _c = _b.next()){
                var _d = __read(_c.value, 2), k = _d[0], v = _d[1];
                this.setAttribute(k, v);
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        return this;
    };
    /**
     *
     * @param name Span Name
     * @param [attributesOrStartTime] Span attributes or start time
     *     if type is {@type TimeInput} and 3rd param is undefined
     * @param [timeStamp] Specified time stamp for the event
     */ Span.prototype.addEvent = function(name, attributesOrStartTime, timeStamp) {
        if (this._isSpanEnded()) return this;
        if (this._spanLimits.eventCountLimit === 0) {
            (0, _api.diag).warn("No events allowed.");
            this._droppedEventsCount++;
            return this;
        }
        if (this.events.length >= this._spanLimits.eventCountLimit) {
            if (this._droppedEventsCount === 0) (0, _api.diag).debug("Dropping extra events.");
            this.events.shift();
            this._droppedEventsCount++;
        }
        if ((0, _core.isTimeInput)(attributesOrStartTime)) {
            if (!(0, _core.isTimeInput)(timeStamp)) timeStamp = attributesOrStartTime;
            attributesOrStartTime = undefined;
        }
        var attributes = (0, _core.sanitizeAttributes)(attributesOrStartTime);
        this.events.push({
            name: name,
            attributes: attributes,
            time: this._getTime(timeStamp),
            droppedAttributesCount: 0
        });
        return this;
    };
    Span.prototype.setStatus = function(status) {
        if (this._isSpanEnded()) return this;
        this.status = status;
        return this;
    };
    Span.prototype.updateName = function(name) {
        if (this._isSpanEnded()) return this;
        this.name = name;
        return this;
    };
    Span.prototype.end = function(endTime) {
        if (this._isSpanEnded()) {
            (0, _api.diag).error(this.name + " " + this._spanContext.traceId + "-" + this._spanContext.spanId + " - You can only call end() on a span once.");
            return;
        }
        this._ended = true;
        this.endTime = this._getTime(endTime);
        this._duration = (0, _core.hrTimeDuration)(this.startTime, this.endTime);
        if (this._duration[0] < 0) {
            (0, _api.diag).warn("Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.", this.startTime, this.endTime);
            this.endTime = this.startTime.slice();
            this._duration = [
                0,
                0
            ];
        }
        if (this._droppedEventsCount > 0) (0, _api.diag).warn("Dropped " + this._droppedEventsCount + " events because eventCountLimit reached");
        this._spanProcessor.onEnd(this);
    };
    Span.prototype._getTime = function(inp) {
        if (typeof inp === "number" && inp < (0, _core.otperformance).now()) // must be a performance timestamp
        // apply correction and convert to hrtime
        return (0, _core.hrTime)(inp + this._performanceOffset);
        if (typeof inp === "number") return (0, _core.millisToHrTime)(inp);
        if (inp instanceof Date) return (0, _core.millisToHrTime)(inp.getTime());
        if ((0, _core.isTimeInputHrTime)(inp)) return inp;
        if (this._startTimeProvided) // if user provided a time for the start manually
        // we can't use duration to calculate event/end times
        return (0, _core.millisToHrTime)(Date.now());
        var msDuration = (0, _core.otperformance).now() - this._performanceStartTime;
        return (0, _core.addHrTimes)(this.startTime, (0, _core.millisToHrTime)(msDuration));
    };
    Span.prototype.isRecording = function() {
        return this._ended === false;
    };
    Span.prototype.recordException = function(exception, time) {
        var attributes = {};
        if (typeof exception === "string") attributes[(0, _semanticConventions.SemanticAttributes).EXCEPTION_MESSAGE] = exception;
        else if (exception) {
            if (exception.code) attributes[(0, _semanticConventions.SemanticAttributes).EXCEPTION_TYPE] = exception.code.toString();
            else if (exception.name) attributes[(0, _semanticConventions.SemanticAttributes).EXCEPTION_TYPE] = exception.name;
            if (exception.message) attributes[(0, _semanticConventions.SemanticAttributes).EXCEPTION_MESSAGE] = exception.message;
            if (exception.stack) attributes[(0, _semanticConventions.SemanticAttributes).EXCEPTION_STACKTRACE] = exception.stack;
        }
        // these are minimum requirements from spec
        if (attributes[(0, _semanticConventions.SemanticAttributes).EXCEPTION_TYPE] || attributes[(0, _semanticConventions.SemanticAttributes).EXCEPTION_MESSAGE]) this.addEvent((0, _enums.ExceptionEventName), attributes, time);
        else (0, _api.diag).warn("Failed to record an exception " + exception);
    };
    Object.defineProperty(Span.prototype, "duration", {
        get: function() {
            return this._duration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Span.prototype, "ended", {
        get: function() {
            return this._ended;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Span.prototype, "droppedAttributesCount", {
        get: function() {
            return this._droppedAttributesCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Span.prototype, "droppedEventsCount", {
        get: function() {
            return this._droppedEventsCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Span.prototype, "droppedLinksCount", {
        get: function() {
            return this._droppedLinksCount;
        },
        enumerable: false,
        configurable: true
    });
    Span.prototype._isSpanEnded = function() {
        if (this._ended) (0, _api.diag).warn("Can not execute the operation on ended Span {traceId: " + this._spanContext.traceId + ", spanId: " + this._spanContext.spanId + "}");
        return this._ended;
    };
    // Utility function to truncate given value within size
    // for value type of string, will truncate to given limit
    // for type of non-string, will return same value
    Span.prototype._truncateToLimitUtil = function(value, limit) {
        if (value.length <= limit) return value;
        return value.substr(0, limit);
    };
    /**
     * If the given attribute value is of type string and has more characters than given {@code attributeValueLengthLimit} then
     * return string with truncated to {@code attributeValueLengthLimit} characters
     *
     * If the given attribute value is array of strings then
     * return new array of strings with each element truncated to {@code attributeValueLengthLimit} characters
     *
     * Otherwise return same Attribute {@code value}
     *
     * @param value Attribute value
     * @returns truncated attribute value if required, otherwise same value
     */ Span.prototype._truncateToSize = function(value) {
        var _this = this;
        var limit = this._attributeValueLengthLimit;
        // Check limit
        if (limit <= 0) {
            // Negative values are invalid, so do not truncate
            (0, _api.diag).warn("Attribute value limit must be positive, got " + limit);
            return value;
        }
        // String
        if (typeof value === "string") return this._truncateToLimitUtil(value, limit);
        // Array of strings
        if (Array.isArray(value)) return value.map(function(val) {
            return typeof val === "string" ? _this._truncateToLimitUtil(val, limit) : val;
        });
        // Other types, no need to apply value length limit
        return value;
    };
    return Span;
}();

},{"@opentelemetry/api":"6AC4z","@opentelemetry/core":"dBsXh","@opentelemetry/semantic-conventions":"lCgfj","./enums":"7XjQf","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"7XjQf":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Event name definitions
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ExceptionEventName", ()=>ExceptionEventName);
var ExceptionEventName = "exception";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"99Faf":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Function to merge Default configuration (as specified in './config') with
 * user provided configurations.
 */ parcelHelpers.export(exports, "mergeConfig", ()=>mergeConfig);
/**
 * When general limits are provided and model specific limits are not,
 * configures the model specific limits by using the values from the general ones.
 * @param userConfig User provided tracer configuration
 */ parcelHelpers.export(exports, "reconfigureLimits", ()=>reconfigureLimits);
var _config = require("./config");
var _core = require("@opentelemetry/core");
function mergeConfig(userConfig) {
    var perInstanceDefaults = {
        sampler: (0, _config.buildSamplerFromEnv)()
    };
    var DEFAULT_CONFIG = (0, _config.loadDefaultConfig)();
    var target = Object.assign({}, DEFAULT_CONFIG, perInstanceDefaults, userConfig);
    target.generalLimits = Object.assign({}, DEFAULT_CONFIG.generalLimits, userConfig.generalLimits || {});
    target.spanLimits = Object.assign({}, DEFAULT_CONFIG.spanLimits, userConfig.spanLimits || {});
    return target;
}
function reconfigureLimits(userConfig) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var spanLimits = Object.assign({}, userConfig.spanLimits);
    var parsedEnvConfig = (0, _core.getEnvWithoutDefaults)();
    /**
     * Reassign span attribute count limit to use first non null value defined by user or use default value
     */ spanLimits.attributeCountLimit = (_f = (_e = (_d = (_b = (_a = userConfig.spanLimits) === null || _a === void 0 ? void 0 : _a.attributeCountLimit) !== null && _b !== void 0 ? _b : (_c = userConfig.generalLimits) === null || _c === void 0 ? void 0 : _c.attributeCountLimit) !== null && _d !== void 0 ? _d : parsedEnvConfig.OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT) !== null && _e !== void 0 ? _e : parsedEnvConfig.OTEL_ATTRIBUTE_COUNT_LIMIT) !== null && _f !== void 0 ? _f : (0, _core.DEFAULT_ATTRIBUTE_COUNT_LIMIT);
    /**
     * Reassign span attribute value length limit to use first non null value defined by user or use default value
     */ spanLimits.attributeValueLengthLimit = (_m = (_l = (_k = (_h = (_g = userConfig.spanLimits) === null || _g === void 0 ? void 0 : _g.attributeValueLengthLimit) !== null && _h !== void 0 ? _h : (_j = userConfig.generalLimits) === null || _j === void 0 ? void 0 : _j.attributeValueLengthLimit) !== null && _k !== void 0 ? _k : parsedEnvConfig.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT) !== null && _l !== void 0 ? _l : parsedEnvConfig.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT) !== null && _m !== void 0 ? _m : (0, _core.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT);
    return Object.assign({}, userConfig, {
        spanLimits: spanLimits
    });
}

},{"./config":"jo0pp","@opentelemetry/core":"dBsXh","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"jo0pp":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Load default configuration. For fields with primitive values, any user-provided
 * value will override the corresponding default value. For fields with
 * non-primitive values (like `spanLimits`), the user-provided value will be
 * used to extend the default value.
 */ // object needs to be wrapped in this function and called when needed otherwise
// envs are parsed before tests are ran - causes tests using these envs to fail
parcelHelpers.export(exports, "loadDefaultConfig", ()=>loadDefaultConfig);
/**
 * Based on environment, builds a sampler, complies with specification.
 * @param environment optional, by default uses getEnv(), but allows passing a value to reuse parsed environment
 */ parcelHelpers.export(exports, "buildSamplerFromEnv", ()=>buildSamplerFromEnv);
var _api = require("@opentelemetry/api");
var _core = require("@opentelemetry/core");
var _alwaysOffSampler = require("./sampler/AlwaysOffSampler");
var _alwaysOnSampler = require("./sampler/AlwaysOnSampler");
var _parentBasedSampler = require("./sampler/ParentBasedSampler");
var _traceIdRatioBasedSampler = require("./sampler/TraceIdRatioBasedSampler");
var env = (0, _core.getEnv)();
var FALLBACK_OTEL_TRACES_SAMPLER = (0, _core.TracesSamplerValues).AlwaysOn;
var DEFAULT_RATIO = 1;
function loadDefaultConfig() {
    return {
        sampler: buildSamplerFromEnv(env),
        forceFlushTimeoutMillis: 30000,
        generalLimits: {
            attributeValueLengthLimit: (0, _core.getEnv)().OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT,
            attributeCountLimit: (0, _core.getEnv)().OTEL_ATTRIBUTE_COUNT_LIMIT
        },
        spanLimits: {
            attributeValueLengthLimit: (0, _core.getEnv)().OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT,
            attributeCountLimit: (0, _core.getEnv)().OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT,
            linkCountLimit: (0, _core.getEnv)().OTEL_SPAN_LINK_COUNT_LIMIT,
            eventCountLimit: (0, _core.getEnv)().OTEL_SPAN_EVENT_COUNT_LIMIT,
            attributePerEventCountLimit: (0, _core.getEnv)().OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT,
            attributePerLinkCountLimit: (0, _core.getEnv)().OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT
        }
    };
}
function buildSamplerFromEnv(environment) {
    if (environment === void 0) environment = (0, _core.getEnv)();
    switch(environment.OTEL_TRACES_SAMPLER){
        case (0, _core.TracesSamplerValues).AlwaysOn:
            return new (0, _alwaysOnSampler.AlwaysOnSampler)();
        case (0, _core.TracesSamplerValues).AlwaysOff:
            return new (0, _alwaysOffSampler.AlwaysOffSampler)();
        case (0, _core.TracesSamplerValues).ParentBasedAlwaysOn:
            return new (0, _parentBasedSampler.ParentBasedSampler)({
                root: new (0, _alwaysOnSampler.AlwaysOnSampler)()
            });
        case (0, _core.TracesSamplerValues).ParentBasedAlwaysOff:
            return new (0, _parentBasedSampler.ParentBasedSampler)({
                root: new (0, _alwaysOffSampler.AlwaysOffSampler)()
            });
        case (0, _core.TracesSamplerValues).TraceIdRatio:
            return new (0, _traceIdRatioBasedSampler.TraceIdRatioBasedSampler)(getSamplerProbabilityFromEnv(environment));
        case (0, _core.TracesSamplerValues).ParentBasedTraceIdRatio:
            return new (0, _parentBasedSampler.ParentBasedSampler)({
                root: new (0, _traceIdRatioBasedSampler.TraceIdRatioBasedSampler)(getSamplerProbabilityFromEnv(environment))
            });
        default:
            (0, _api.diag).error('OTEL_TRACES_SAMPLER value "' + environment.OTEL_TRACES_SAMPLER + " invalid, defaulting to " + FALLBACK_OTEL_TRACES_SAMPLER + '".');
            return new (0, _alwaysOnSampler.AlwaysOnSampler)();
    }
}
function getSamplerProbabilityFromEnv(environment) {
    if (environment.OTEL_TRACES_SAMPLER_ARG === undefined || environment.OTEL_TRACES_SAMPLER_ARG === "") {
        (0, _api.diag).error("OTEL_TRACES_SAMPLER_ARG is blank, defaulting to " + DEFAULT_RATIO + ".");
        return DEFAULT_RATIO;
    }
    var probability = Number(environment.OTEL_TRACES_SAMPLER_ARG);
    if (isNaN(probability)) {
        (0, _api.diag).error("OTEL_TRACES_SAMPLER_ARG=" + environment.OTEL_TRACES_SAMPLER_ARG + " was given, but it is invalid, defaulting to " + DEFAULT_RATIO + ".");
        return DEFAULT_RATIO;
    }
    if (probability < 0 || probability > 1) {
        (0, _api.diag).error("OTEL_TRACES_SAMPLER_ARG=" + environment.OTEL_TRACES_SAMPLER_ARG + " was given, but it is out of range ([0..1]), defaulting to " + DEFAULT_RATIO + ".");
        return DEFAULT_RATIO;
    }
    return probability;
}

},{"@opentelemetry/api":"6AC4z","@opentelemetry/core":"dBsXh","./sampler/AlwaysOffSampler":"9FEmX","./sampler/AlwaysOnSampler":"cnZtk","./sampler/ParentBasedSampler":"7pDAK","./sampler/TraceIdRatioBasedSampler":"bqqYo","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"9FEmX":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AlwaysOffSampler", ()=>AlwaysOffSampler);
var _sampler = require("../Sampler");
/** Sampler that samples no traces. */ var AlwaysOffSampler = /** @class */ function() {
    function AlwaysOffSampler() {}
    AlwaysOffSampler.prototype.shouldSample = function() {
        return {
            decision: (0, _sampler.SamplingDecision).NOT_RECORD
        };
    };
    AlwaysOffSampler.prototype.toString = function() {
        return "AlwaysOffSampler";
    };
    return AlwaysOffSampler;
}();

},{"../Sampler":"2IRN3","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"2IRN3":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A sampling decision that determines how a {@link Span} will be recorded
 * and collected.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SamplingDecision", ()=>SamplingDecision);
var SamplingDecision;
(function(SamplingDecision) {
    /**
     * `Span.isRecording() === false`, span will not be recorded and all events
     * and attributes will be dropped.
     */ SamplingDecision[SamplingDecision["NOT_RECORD"] = 0] = "NOT_RECORD";
    /**
     * `Span.isRecording() === true`, but `Sampled` flag in {@link TraceFlags}
     * MUST NOT be set.
     */ SamplingDecision[SamplingDecision["RECORD"] = 1] = "RECORD";
    /**
     * `Span.isRecording() === true` AND `Sampled` flag in {@link TraceFlags}
     * MUST be set.
     */ SamplingDecision[SamplingDecision["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
})(SamplingDecision || (SamplingDecision = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"cnZtk":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AlwaysOnSampler", ()=>AlwaysOnSampler);
var _sampler = require("../Sampler");
/** Sampler that samples all traces. */ var AlwaysOnSampler = /** @class */ function() {
    function AlwaysOnSampler() {}
    AlwaysOnSampler.prototype.shouldSample = function() {
        return {
            decision: (0, _sampler.SamplingDecision).RECORD_AND_SAMPLED
        };
    };
    AlwaysOnSampler.prototype.toString = function() {
        return "AlwaysOnSampler";
    };
    return AlwaysOnSampler;
}();

},{"../Sampler":"2IRN3","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"7pDAK":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ParentBasedSampler", ()=>ParentBasedSampler);
var _api = require("@opentelemetry/api");
var _core = require("@opentelemetry/core");
var _alwaysOffSampler = require("./AlwaysOffSampler");
var _alwaysOnSampler = require("./AlwaysOnSampler");
/**
 * A composite sampler that either respects the parent span's sampling decision
 * or delegates to `delegateSampler` for root spans.
 */ var ParentBasedSampler = /** @class */ function() {
    function ParentBasedSampler(config) {
        var _a, _b, _c, _d;
        this._root = config.root;
        if (!this._root) {
            (0, _core.globalErrorHandler)(new Error("ParentBasedSampler must have a root sampler configured"));
            this._root = new (0, _alwaysOnSampler.AlwaysOnSampler)();
        }
        this._remoteParentSampled = (_a = config.remoteParentSampled) !== null && _a !== void 0 ? _a : new (0, _alwaysOnSampler.AlwaysOnSampler)();
        this._remoteParentNotSampled = (_b = config.remoteParentNotSampled) !== null && _b !== void 0 ? _b : new (0, _alwaysOffSampler.AlwaysOffSampler)();
        this._localParentSampled = (_c = config.localParentSampled) !== null && _c !== void 0 ? _c : new (0, _alwaysOnSampler.AlwaysOnSampler)();
        this._localParentNotSampled = (_d = config.localParentNotSampled) !== null && _d !== void 0 ? _d : new (0, _alwaysOffSampler.AlwaysOffSampler)();
    }
    ParentBasedSampler.prototype.shouldSample = function(context, traceId, spanName, spanKind, attributes, links) {
        var parentContext = (0, _api.trace).getSpanContext(context);
        if (!parentContext || !(0, _api.isSpanContextValid)(parentContext)) return this._root.shouldSample(context, traceId, spanName, spanKind, attributes, links);
        if (parentContext.isRemote) {
            if (parentContext.traceFlags & (0, _api.TraceFlags).SAMPLED) return this._remoteParentSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
            return this._remoteParentNotSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
        }
        if (parentContext.traceFlags & (0, _api.TraceFlags).SAMPLED) return this._localParentSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
        return this._localParentNotSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
    };
    ParentBasedSampler.prototype.toString = function() {
        return "ParentBased{root=" + this._root.toString() + ", remoteParentSampled=" + this._remoteParentSampled.toString() + ", remoteParentNotSampled=" + this._remoteParentNotSampled.toString() + ", localParentSampled=" + this._localParentSampled.toString() + ", localParentNotSampled=" + this._localParentNotSampled.toString() + "}";
    };
    return ParentBasedSampler;
}();

},{"@opentelemetry/api":"6AC4z","@opentelemetry/core":"dBsXh","./AlwaysOffSampler":"9FEmX","./AlwaysOnSampler":"cnZtk","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"bqqYo":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TraceIdRatioBasedSampler", ()=>TraceIdRatioBasedSampler);
var _api = require("@opentelemetry/api");
var _sampler = require("../Sampler");
/** Sampler that samples a given fraction of traces based of trace id deterministically. */ var TraceIdRatioBasedSampler = /** @class */ function() {
    function TraceIdRatioBasedSampler(_ratio) {
        if (_ratio === void 0) _ratio = 0;
        this._ratio = _ratio;
        this._ratio = this._normalize(_ratio);
        this._upperBound = Math.floor(this._ratio * 0xffffffff);
    }
    TraceIdRatioBasedSampler.prototype.shouldSample = function(context, traceId) {
        return {
            decision: (0, _api.isValidTraceId)(traceId) && this._accumulate(traceId) < this._upperBound ? (0, _sampler.SamplingDecision).RECORD_AND_SAMPLED : (0, _sampler.SamplingDecision).NOT_RECORD
        };
    };
    TraceIdRatioBasedSampler.prototype.toString = function() {
        return "TraceIdRatioBased{" + this._ratio + "}";
    };
    TraceIdRatioBasedSampler.prototype._normalize = function(ratio) {
        if (typeof ratio !== "number" || isNaN(ratio)) return 0;
        return ratio >= 1 ? 1 : ratio <= 0 ? 0 : ratio;
    };
    TraceIdRatioBasedSampler.prototype._accumulate = function(traceId) {
        var accumulation = 0;
        for(var i = 0; i < traceId.length / 8; i++){
            var pos = i * 8;
            var part = parseInt(traceId.slice(pos, pos + 8), 16);
            accumulation = (accumulation ^ part) >>> 0;
        }
        return accumulation;
    };
    return TraceIdRatioBasedSampler;
}();

},{"@opentelemetry/api":"6AC4z","../Sampler":"2IRN3","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"alGsY":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _batchSpanProcessor = require("./export/BatchSpanProcessor");
parcelHelpers.exportAll(_batchSpanProcessor, exports);
var _randomIdGenerator = require("./RandomIdGenerator");
parcelHelpers.exportAll(_randomIdGenerator, exports);

},{"./export/BatchSpanProcessor":"cdQdB","./RandomIdGenerator":"5UX5u","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"cdQdB":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BatchSpanProcessor", ()=>BatchSpanProcessor);
var _batchSpanProcessorBase = require("../../../export/BatchSpanProcessorBase");
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var BatchSpanProcessor = /** @class */ function(_super) {
    __extends(BatchSpanProcessor, _super);
    function BatchSpanProcessor(_exporter, config) {
        var _this = _super.call(this, _exporter, config) || this;
        _this.onInit(config);
        return _this;
    }
    BatchSpanProcessor.prototype.onInit = function(config) {
        var _this = this;
        if ((config === null || config === void 0 ? void 0 : config.disableAutoFlushOnDocumentHide) !== true && typeof document !== "undefined") {
            this._visibilityChangeListener = function() {
                if (document.visibilityState === "hidden") _this.forceFlush();
            };
            this._pageHideListener = function() {
                _this.forceFlush();
            };
            document.addEventListener("visibilitychange", this._visibilityChangeListener);
            // use 'pagehide' event as a fallback for Safari; see https://bugs.webkit.org/show_bug.cgi?id=116769
            document.addEventListener("pagehide", this._pageHideListener);
        }
    };
    BatchSpanProcessor.prototype.onShutdown = function() {
        if (typeof document !== "undefined") {
            if (this._visibilityChangeListener) document.removeEventListener("visibilitychange", this._visibilityChangeListener);
            if (this._pageHideListener) document.removeEventListener("pagehide", this._pageHideListener);
        }
    };
    return BatchSpanProcessor;
}((0, _batchSpanProcessorBase.BatchSpanProcessorBase));

},{"../../../export/BatchSpanProcessorBase":"bVOll","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"bVOll":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BatchSpanProcessorBase", ()=>BatchSpanProcessorBase);
var _api = require("@opentelemetry/api");
var _core = require("@opentelemetry/core");
/**
 * Implementation of the {@link SpanProcessor} that batches spans exported by
 * the SDK then pushes them to the exporter pipeline.
 */ var BatchSpanProcessorBase = /** @class */ function() {
    function BatchSpanProcessorBase(_exporter, config) {
        this._exporter = _exporter;
        this._isExporting = false;
        this._finishedSpans = [];
        this._droppedSpansCount = 0;
        var env = (0, _core.getEnv)();
        this._maxExportBatchSize = typeof (config === null || config === void 0 ? void 0 : config.maxExportBatchSize) === "number" ? config.maxExportBatchSize : env.OTEL_BSP_MAX_EXPORT_BATCH_SIZE;
        this._maxQueueSize = typeof (config === null || config === void 0 ? void 0 : config.maxQueueSize) === "number" ? config.maxQueueSize : env.OTEL_BSP_MAX_QUEUE_SIZE;
        this._scheduledDelayMillis = typeof (config === null || config === void 0 ? void 0 : config.scheduledDelayMillis) === "number" ? config.scheduledDelayMillis : env.OTEL_BSP_SCHEDULE_DELAY;
        this._exportTimeoutMillis = typeof (config === null || config === void 0 ? void 0 : config.exportTimeoutMillis) === "number" ? config.exportTimeoutMillis : env.OTEL_BSP_EXPORT_TIMEOUT;
        this._shutdownOnce = new (0, _core.BindOnceFuture)(this._shutdown, this);
        if (this._maxExportBatchSize > this._maxQueueSize) {
            (0, _api.diag).warn("BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize");
            this._maxExportBatchSize = this._maxQueueSize;
        }
    }
    BatchSpanProcessorBase.prototype.forceFlush = function() {
        if (this._shutdownOnce.isCalled) return this._shutdownOnce.promise;
        return this._flushAll();
    };
    // does nothing.
    BatchSpanProcessorBase.prototype.onStart = function(_span, _parentContext) {};
    BatchSpanProcessorBase.prototype.onEnd = function(span) {
        if (this._shutdownOnce.isCalled) return;
        if ((span.spanContext().traceFlags & (0, _api.TraceFlags).SAMPLED) === 0) return;
        this._addToBuffer(span);
    };
    BatchSpanProcessorBase.prototype.shutdown = function() {
        return this._shutdownOnce.call();
    };
    BatchSpanProcessorBase.prototype._shutdown = function() {
        var _this = this;
        return Promise.resolve().then(function() {
            return _this.onShutdown();
        }).then(function() {
            return _this._flushAll();
        }).then(function() {
            return _this._exporter.shutdown();
        });
    };
    /** Add a span in the buffer. */ BatchSpanProcessorBase.prototype._addToBuffer = function(span) {
        if (this._finishedSpans.length >= this._maxQueueSize) {
            // limit reached, drop span
            if (this._droppedSpansCount === 0) (0, _api.diag).debug("maxQueueSize reached, dropping spans");
            this._droppedSpansCount++;
            return;
        }
        if (this._droppedSpansCount > 0) {
            // some spans were dropped, log once with count of spans dropped
            (0, _api.diag).warn("Dropped " + this._droppedSpansCount + " spans because maxQueueSize reached");
            this._droppedSpansCount = 0;
        }
        this._finishedSpans.push(span);
        this._maybeStartTimer();
    };
    /**
     * Send all spans to the exporter respecting the batch size limit
     * This function is used only on forceFlush or shutdown,
     * for all other cases _flush should be used
     * */ BatchSpanProcessorBase.prototype._flushAll = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
            var promises = [];
            // calculate number of batches
            var count = Math.ceil(_this._finishedSpans.length / _this._maxExportBatchSize);
            for(var i = 0, j = count; i < j; i++)promises.push(_this._flushOneBatch());
            Promise.all(promises).then(function() {
                resolve();
            }).catch(reject);
        });
    };
    BatchSpanProcessorBase.prototype._flushOneBatch = function() {
        var _this = this;
        this._clearTimer();
        if (this._finishedSpans.length === 0) return Promise.resolve();
        return new Promise(function(resolve, reject) {
            var timer = setTimeout(function() {
                // don't wait anymore for export, this way the next batch can start
                reject(new Error("Timeout"));
            }, _this._exportTimeoutMillis);
            // prevent downstream exporter calls from generating spans
            (0, _api.context).with((0, _core.suppressTracing)((0, _api.context).active()), function() {
                // Reset the finished spans buffer here because the next invocations of the _flush method
                // could pass the same finished spans to the exporter if the buffer is cleared
                // outside the execution of this callback.
                var spans;
                if (_this._finishedSpans.length <= _this._maxExportBatchSize) {
                    spans = _this._finishedSpans;
                    _this._finishedSpans = [];
                } else spans = _this._finishedSpans.splice(0, _this._maxExportBatchSize);
                var doExport = function() {
                    return _this._exporter.export(spans, function(result) {
                        var _a;
                        clearTimeout(timer);
                        if (result.code === (0, _core.ExportResultCode).SUCCESS) resolve();
                        else reject((_a = result.error) !== null && _a !== void 0 ? _a : new Error("BatchSpanProcessor: span export failed"));
                    });
                };
                var pendingResources = null;
                for(var i = 0, len = spans.length; i < len; i++){
                    var span = spans[i];
                    if (span.resource.asyncAttributesPending && span.resource.waitForAsyncAttributes) {
                        pendingResources !== null && pendingResources !== void 0 ? pendingResources : pendingResources = [];
                        pendingResources.push(span.resource.waitForAsyncAttributes());
                    }
                }
                // Avoid scheduling a promise to make the behavior more predictable and easier to test
                if (pendingResources === null) doExport();
                else Promise.all(pendingResources).then(doExport, function(err) {
                    (0, _core.globalErrorHandler)(err);
                    reject(err);
                });
            });
        });
    };
    BatchSpanProcessorBase.prototype._maybeStartTimer = function() {
        var _this = this;
        if (this._isExporting) return;
        var flush = function() {
            _this._isExporting = true;
            _this._flushOneBatch().finally(function() {
                _this._isExporting = false;
                if (_this._finishedSpans.length > 0) {
                    _this._clearTimer();
                    _this._maybeStartTimer();
                }
            }).catch(function(e) {
                _this._isExporting = false;
                (0, _core.globalErrorHandler)(e);
            });
        };
        // we only wait if the queue doesn't have enough elements yet
        if (this._finishedSpans.length >= this._maxExportBatchSize) return flush();
        if (this._timer !== undefined) return;
        this._timer = setTimeout(function() {
            return flush();
        }, this._scheduledDelayMillis);
        (0, _core.unrefTimer)(this._timer);
    };
    BatchSpanProcessorBase.prototype._clearTimer = function() {
        if (this._timer !== undefined) {
            clearTimeout(this._timer);
            this._timer = undefined;
        }
    };
    return BatchSpanProcessorBase;
}();

},{"@opentelemetry/api":"6AC4z","@opentelemetry/core":"dBsXh","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"5UX5u":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RandomIdGenerator", ()=>RandomIdGenerator);
var SPAN_ID_BYTES = 8;
var TRACE_ID_BYTES = 16;
var RandomIdGenerator = /** @class */ function() {
    function RandomIdGenerator() {
        /**
         * Returns a random 16-byte trace ID formatted/encoded as a 32 lowercase hex
         * characters corresponding to 128 bits.
         */ this.generateTraceId = getIdGenerator(TRACE_ID_BYTES);
        /**
         * Returns a random 8-byte span ID formatted/encoded as a 16 lowercase hex
         * characters corresponding to 64 bits.
         */ this.generateSpanId = getIdGenerator(SPAN_ID_BYTES);
    }
    return RandomIdGenerator;
}();
var SHARED_CHAR_CODES_ARRAY = Array(32);
function getIdGenerator(bytes) {
    return function generateId() {
        for(var i = 0; i < bytes * 2; i++){
            SHARED_CHAR_CODES_ARRAY[i] = Math.floor(Math.random() * 16) + 48;
            // valid hex characters in the range 48-57 and 97-102
            if (SHARED_CHAR_CODES_ARRAY[i] >= 58) SHARED_CHAR_CODES_ARRAY[i] += 39;
        }
        return String.fromCharCode.apply(null, SHARED_CHAR_CODES_ARRAY.slice(0, bytes * 2));
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"bv1bF":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ForceFlushState", ()=>ForceFlushState);
parcelHelpers.export(exports, "BasicTracerProvider", ()=>BasicTracerProvider);
var _api = require("@opentelemetry/api");
var _core = require("@opentelemetry/core");
var _resources = require("@opentelemetry/resources");
var _ = require(".");
var _config = require("./config");
var _multiSpanProcessor = require("./MultiSpanProcessor");
var _noopSpanProcessor = require("./export/NoopSpanProcessor");
var _platform = require("./platform");
var _utility = require("./utility");
var ForceFlushState;
(function(ForceFlushState) {
    ForceFlushState[ForceFlushState["resolved"] = 0] = "resolved";
    ForceFlushState[ForceFlushState["timeout"] = 1] = "timeout";
    ForceFlushState[ForceFlushState["error"] = 2] = "error";
    ForceFlushState[ForceFlushState["unresolved"] = 3] = "unresolved";
})(ForceFlushState || (ForceFlushState = {}));
/**
 * This class represents a basic tracer provider which platform libraries can extend
 */ var BasicTracerProvider = /** @class */ function() {
    function BasicTracerProvider(config) {
        if (config === void 0) config = {};
        var _a;
        this._registeredSpanProcessors = [];
        this._tracers = new Map();
        var mergedConfig = (0, _core.merge)({}, (0, _config.loadDefaultConfig)(), (0, _utility.reconfigureLimits)(config));
        this.resource = (_a = mergedConfig.resource) !== null && _a !== void 0 ? _a : (0, _resources.Resource).empty();
        this.resource = (0, _resources.Resource).default().merge(this.resource);
        this._config = Object.assign({}, mergedConfig, {
            resource: this.resource
        });
        var defaultExporter = this._buildExporterFromEnv();
        if (defaultExporter !== undefined) {
            var batchProcessor = new (0, _platform.BatchSpanProcessor)(defaultExporter);
            this.activeSpanProcessor = batchProcessor;
        } else this.activeSpanProcessor = new (0, _noopSpanProcessor.NoopSpanProcessor)();
    }
    BasicTracerProvider.prototype.getTracer = function(name, version, options) {
        var key = name + "@" + (version || "") + ":" + ((options === null || options === void 0 ? void 0 : options.schemaUrl) || "");
        if (!this._tracers.has(key)) this._tracers.set(key, new (0, _.Tracer)({
            name: name,
            version: version,
            schemaUrl: options === null || options === void 0 ? void 0 : options.schemaUrl
        }, this._config, this));
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this._tracers.get(key);
    };
    /**
     * Adds a new {@link SpanProcessor} to this tracer.
     * @param spanProcessor the new SpanProcessor to be added.
     */ BasicTracerProvider.prototype.addSpanProcessor = function(spanProcessor) {
        if (this._registeredSpanProcessors.length === 0) // since we might have enabled by default a batchProcessor, we disable it
        // before adding the new one
        this.activeSpanProcessor.shutdown().catch(function(err) {
            return (0, _api.diag).error("Error while trying to shutdown current span processor", err);
        });
        this._registeredSpanProcessors.push(spanProcessor);
        this.activeSpanProcessor = new (0, _multiSpanProcessor.MultiSpanProcessor)(this._registeredSpanProcessors);
    };
    BasicTracerProvider.prototype.getActiveSpanProcessor = function() {
        return this.activeSpanProcessor;
    };
    /**
     * Register this TracerProvider for use with the OpenTelemetry API.
     * Undefined values may be replaced with defaults, and
     * null values will be skipped.
     *
     * @param config Configuration object for SDK registration
     */ BasicTracerProvider.prototype.register = function(config) {
        if (config === void 0) config = {};
        (0, _api.trace).setGlobalTracerProvider(this);
        if (config.propagator === undefined) config.propagator = this._buildPropagatorFromEnv();
        if (config.contextManager) (0, _api.context).setGlobalContextManager(config.contextManager);
        if (config.propagator) (0, _api.propagation).setGlobalPropagator(config.propagator);
    };
    BasicTracerProvider.prototype.forceFlush = function() {
        var timeout = this._config.forceFlushTimeoutMillis;
        var promises = this._registeredSpanProcessors.map(function(spanProcessor) {
            return new Promise(function(resolve) {
                var state;
                var timeoutInterval = setTimeout(function() {
                    resolve(new Error("Span processor did not completed within timeout period of " + timeout + " ms"));
                    state = ForceFlushState.timeout;
                }, timeout);
                spanProcessor.forceFlush().then(function() {
                    clearTimeout(timeoutInterval);
                    if (state !== ForceFlushState.timeout) {
                        state = ForceFlushState.resolved;
                        resolve(state);
                    }
                }).catch(function(error) {
                    clearTimeout(timeoutInterval);
                    state = ForceFlushState.error;
                    resolve(error);
                });
            });
        });
        return new Promise(function(resolve, reject) {
            Promise.all(promises).then(function(results) {
                var errors = results.filter(function(result) {
                    return result !== ForceFlushState.resolved;
                });
                if (errors.length > 0) reject(errors);
                else resolve();
            }).catch(function(error) {
                return reject([
                    error
                ]);
            });
        });
    };
    BasicTracerProvider.prototype.shutdown = function() {
        return this.activeSpanProcessor.shutdown();
    };
    /**
     * TS cannot yet infer the type of this.constructor:
     * https://github.com/Microsoft/TypeScript/issues/3841#issuecomment-337560146
     * There is no need to override either of the getters in your child class.
     * The type of the registered component maps should be the same across all
     * classes in the inheritance tree.
     */ BasicTracerProvider.prototype._getPropagator = function(name) {
        var _a;
        return (_a = this.constructor._registeredPropagators.get(name)) === null || _a === void 0 ? void 0 : _a();
    };
    BasicTracerProvider.prototype._getSpanExporter = function(name) {
        var _a;
        return (_a = this.constructor._registeredExporters.get(name)) === null || _a === void 0 ? void 0 : _a();
    };
    BasicTracerProvider.prototype._buildPropagatorFromEnv = function() {
        var _this = this;
        // per spec, propagators from env must be deduplicated
        var uniquePropagatorNames = Array.from(new Set((0, _core.getEnv)().OTEL_PROPAGATORS));
        var propagators = uniquePropagatorNames.map(function(name) {
            var propagator = _this._getPropagator(name);
            if (!propagator) (0, _api.diag).warn('Propagator "' + name + '" requested through environment variable is unavailable.');
            return propagator;
        });
        var validPropagators = propagators.reduce(function(list, item) {
            if (item) list.push(item);
            return list;
        }, []);
        if (validPropagators.length === 0) return;
        else if (uniquePropagatorNames.length === 1) return validPropagators[0];
        else return new (0, _core.CompositePropagator)({
            propagators: validPropagators
        });
    };
    BasicTracerProvider.prototype._buildExporterFromEnv = function() {
        var exporterName = (0, _core.getEnv)().OTEL_TRACES_EXPORTER;
        if (exporterName === "none" || exporterName === "") return;
        var exporter = this._getSpanExporter(exporterName);
        if (!exporter) (0, _api.diag).error('Exporter "' + exporterName + '" requested through environment variable is unavailable.');
        return exporter;
    };
    BasicTracerProvider._registeredPropagators = new Map([
        [
            "tracecontext",
            function() {
                return new (0, _core.W3CTraceContextPropagator)();
            }
        ],
        [
            "baggage",
            function() {
                return new (0, _core.W3CBaggagePropagator)();
            }
        ]
    ]);
    BasicTracerProvider._registeredExporters = new Map();
    return BasicTracerProvider;
}();

},{"@opentelemetry/api":"6AC4z","@opentelemetry/core":"dBsXh","@opentelemetry/resources":"loqSh",".":"jj5uM","./config":"jo0pp","./MultiSpanProcessor":"5mHtM","./export/NoopSpanProcessor":"j2TGv","./platform":"alGsY","./utility":"99Faf","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"loqSh":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _resource = require("./Resource");
parcelHelpers.exportAll(_resource, exports);
var _iresource = require("./IResource");
parcelHelpers.exportAll(_iresource, exports);
var _platform = require("./platform");
parcelHelpers.exportAll(_platform, exports);
var _types = require("./types");
parcelHelpers.exportAll(_types, exports);
var _config = require("./config");
parcelHelpers.exportAll(_config, exports);
var _detectors = require("./detectors");
parcelHelpers.exportAll(_detectors, exports);
var _detectResources = require("./detect-resources");
parcelHelpers.exportAll(_detectResources, exports);

},{"./Resource":"205Or","./IResource":false,"./platform":false,"./types":false,"./config":false,"./detectors":false,"./detect-resources":false,"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"205Or":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Resource", ()=>Resource);
var _api = require("@opentelemetry/api");
var _semanticConventions = require("@opentelemetry/semantic-conventions");
var _core = require("@opentelemetry/core");
var _platform = require("./platform");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var __read = undefined && undefined.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
/**
 * A Resource describes the entity for which a signals (metrics or trace) are
 * collected.
 */ var Resource = /** @class */ function() {
    function Resource(/**
     * A dictionary of attributes with string keys and values that provide
     * information about the entity as numbers, strings or booleans
     * TODO: Consider to add check/validation on attributes.
     */ attributes, asyncAttributesPromise) {
        var _this = this;
        var _a;
        this._attributes = attributes;
        this.asyncAttributesPending = asyncAttributesPromise != null;
        this._syncAttributes = (_a = this._attributes) !== null && _a !== void 0 ? _a : {};
        this._asyncAttributesPromise = asyncAttributesPromise === null || asyncAttributesPromise === void 0 ? void 0 : asyncAttributesPromise.then(function(asyncAttributes) {
            _this._attributes = Object.assign({}, _this._attributes, asyncAttributes);
            _this.asyncAttributesPending = false;
            return asyncAttributes;
        }, function(err) {
            (0, _api.diag).debug("a resource's async attributes promise rejected: %s", err);
            _this.asyncAttributesPending = false;
            return {};
        });
    }
    /**
     * Returns an empty Resource
     */ Resource.empty = function() {
        return Resource.EMPTY;
    };
    /**
     * Returns a Resource that identifies the SDK in use.
     */ Resource.default = function() {
        var _a;
        return new Resource((_a = {}, _a[(0, _semanticConventions.SemanticResourceAttributes).SERVICE_NAME] = (0, _platform.defaultServiceName)(), _a[(0, _semanticConventions.SemanticResourceAttributes).TELEMETRY_SDK_LANGUAGE] = (0, _core.SDK_INFO)[(0, _semanticConventions.SemanticResourceAttributes).TELEMETRY_SDK_LANGUAGE], _a[(0, _semanticConventions.SemanticResourceAttributes).TELEMETRY_SDK_NAME] = (0, _core.SDK_INFO)[(0, _semanticConventions.SemanticResourceAttributes).TELEMETRY_SDK_NAME], _a[(0, _semanticConventions.SemanticResourceAttributes).TELEMETRY_SDK_VERSION] = (0, _core.SDK_INFO)[(0, _semanticConventions.SemanticResourceAttributes).TELEMETRY_SDK_VERSION], _a));
    };
    Object.defineProperty(Resource.prototype, "attributes", {
        get: function() {
            var _a;
            if (this.asyncAttributesPending) (0, _api.diag).error("Accessing resource attributes before async attributes settled");
            return (_a = this._attributes) !== null && _a !== void 0 ? _a : {};
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns a promise that will never be rejected. Resolves when all async attributes have finished being added to
     * this Resource's attributes. This is useful in exporters to block until resource detection
     * has finished.
     */ Resource.prototype.waitForAsyncAttributes = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.asyncAttributesPending) return [
                            3 /*break*/ ,
                            2
                        ];
                        return [
                            4 /*yield*/ ,
                            this._asyncAttributesPromise
                        ];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    /**
     * Returns a new, merged {@link Resource} by merging the current Resource
     * with the other Resource. In case of a collision, other Resource takes
     * precedence.
     *
     * @param other the Resource that will be merged with this.
     * @returns the newly merged Resource.
     */ Resource.prototype.merge = function(other) {
        var _this = this;
        var _a;
        if (!other) return this;
        // SpanAttributes from other resource overwrite attributes from this resource.
        var mergedSyncAttributes = __assign(__assign({}, this._syncAttributes), (_a = other._syncAttributes) !== null && _a !== void 0 ? _a : other.attributes);
        if (!this._asyncAttributesPromise && !other._asyncAttributesPromise) return new Resource(mergedSyncAttributes);
        var mergedAttributesPromise = Promise.all([
            this._asyncAttributesPromise,
            other._asyncAttributesPromise
        ]).then(function(_a) {
            var _b;
            var _c = __read(_a, 2), thisAsyncAttributes = _c[0], otherAsyncAttributes = _c[1];
            return __assign(__assign(__assign(__assign({}, _this._syncAttributes), thisAsyncAttributes), (_b = other._syncAttributes) !== null && _b !== void 0 ? _b : other.attributes), otherAsyncAttributes);
        });
        return new Resource(mergedSyncAttributes, mergedAttributesPromise);
    };
    Resource.EMPTY = new Resource({});
    return Resource;
}();

},{"@opentelemetry/api":"6AC4z","@opentelemetry/semantic-conventions":"lCgfj","@opentelemetry/core":"dBsXh","./platform":"4c85l","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"4c85l":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultServiceName = require("./default-service-name");
parcelHelpers.exportAll(_defaultServiceName, exports);
var _hostDetector = require("./HostDetector");
parcelHelpers.exportAll(_hostDetector, exports);
var _osdetector = require("./OSDetector");
parcelHelpers.exportAll(_osdetector, exports);
var _hostDetectorSync = require("./HostDetectorSync");
parcelHelpers.exportAll(_hostDetectorSync, exports);
var _osdetectorSync = require("./OSDetectorSync");
parcelHelpers.exportAll(_osdetectorSync, exports);
var _processDetector = require("./ProcessDetector");
parcelHelpers.exportAll(_processDetector, exports);
var _processDetectorSync = require("./ProcessDetectorSync");
parcelHelpers.exportAll(_processDetectorSync, exports);

},{"./default-service-name":"7YE6D","./HostDetector":false,"./OSDetector":false,"./HostDetectorSync":false,"./OSDetectorSync":false,"./ProcessDetector":false,"./ProcessDetectorSync":false,"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"7YE6D":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultServiceName", ()=>defaultServiceName);
function defaultServiceName() {
    return "unknown_service";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"5mHtM":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MultiSpanProcessor", ()=>MultiSpanProcessor);
var _core = require("@opentelemetry/core");
var __values = undefined && undefined.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/**
 * Implementation of the {@link SpanProcessor} that simply forwards all
 * received events to a list of {@link SpanProcessor}s.
 */ var MultiSpanProcessor = /** @class */ function() {
    function MultiSpanProcessor(_spanProcessors) {
        this._spanProcessors = _spanProcessors;
    }
    MultiSpanProcessor.prototype.forceFlush = function() {
        var e_1, _a;
        var promises = [];
        try {
            for(var _b = __values(this._spanProcessors), _c = _b.next(); !_c.done; _c = _b.next()){
                var spanProcessor = _c.value;
                promises.push(spanProcessor.forceFlush());
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        return new Promise(function(resolve) {
            Promise.all(promises).then(function() {
                resolve();
            }).catch(function(error) {
                (0, _core.globalErrorHandler)(error || new Error("MultiSpanProcessor: forceFlush failed"));
                resolve();
            });
        });
    };
    MultiSpanProcessor.prototype.onStart = function(span, context) {
        var e_2, _a;
        try {
            for(var _b = __values(this._spanProcessors), _c = _b.next(); !_c.done; _c = _b.next()){
                var spanProcessor = _c.value;
                spanProcessor.onStart(span, context);
            }
        } catch (e_2_1) {
            e_2 = {
                error: e_2_1
            };
        } finally{
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally{
                if (e_2) throw e_2.error;
            }
        }
    };
    MultiSpanProcessor.prototype.onEnd = function(span) {
        var e_3, _a;
        try {
            for(var _b = __values(this._spanProcessors), _c = _b.next(); !_c.done; _c = _b.next()){
                var spanProcessor = _c.value;
                spanProcessor.onEnd(span);
            }
        } catch (e_3_1) {
            e_3 = {
                error: e_3_1
            };
        } finally{
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally{
                if (e_3) throw e_3.error;
            }
        }
    };
    MultiSpanProcessor.prototype.shutdown = function() {
        var e_4, _a;
        var promises = [];
        try {
            for(var _b = __values(this._spanProcessors), _c = _b.next(); !_c.done; _c = _b.next()){
                var spanProcessor = _c.value;
                promises.push(spanProcessor.shutdown());
            }
        } catch (e_4_1) {
            e_4 = {
                error: e_4_1
            };
        } finally{
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally{
                if (e_4) throw e_4.error;
            }
        }
        return new Promise(function(resolve, reject) {
            Promise.all(promises).then(function() {
                resolve();
            }, reject);
        });
    };
    return MultiSpanProcessor;
}();

},{"@opentelemetry/core":"dBsXh","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"j2TGv":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** No-op implementation of SpanProcessor */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NoopSpanProcessor", ()=>NoopSpanProcessor);
var NoopSpanProcessor = /** @class */ function() {
    function NoopSpanProcessor() {}
    NoopSpanProcessor.prototype.onStart = function(_span, _context) {};
    NoopSpanProcessor.prototype.onEnd = function(_span) {};
    NoopSpanProcessor.prototype.shutdown = function() {
        return Promise.resolve();
    };
    NoopSpanProcessor.prototype.forceFlush = function() {
        return Promise.resolve();
    };
    return NoopSpanProcessor;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"hWVp2":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ConsoleSpanExporter", ()=>ConsoleSpanExporter);
var _core = require("@opentelemetry/core");
var __values = undefined && undefined.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/**
 * This is implementation of {@link SpanExporter} that prints spans to the
 * console. This class can be used for diagnostic purposes.
 */ /* eslint-disable no-console */ var ConsoleSpanExporter = /** @class */ function() {
    function ConsoleSpanExporter() {}
    /**
     * Export spans.
     * @param spans
     * @param resultCallback
     */ ConsoleSpanExporter.prototype.export = function(spans, resultCallback) {
        return this._sendSpans(spans, resultCallback);
    };
    /**
     * Shutdown the exporter.
     */ ConsoleSpanExporter.prototype.shutdown = function() {
        this._sendSpans([]);
        return this.forceFlush();
    };
    /**
     * Exports any pending spans in exporter
     */ ConsoleSpanExporter.prototype.forceFlush = function() {
        return Promise.resolve();
    };
    /**
     * converts span info into more readable format
     * @param span
     */ ConsoleSpanExporter.prototype._exportInfo = function(span) {
        var _a;
        return {
            traceId: span.spanContext().traceId,
            parentId: span.parentSpanId,
            traceState: (_a = span.spanContext().traceState) === null || _a === void 0 ? void 0 : _a.serialize(),
            name: span.name,
            id: span.spanContext().spanId,
            kind: span.kind,
            timestamp: (0, _core.hrTimeToMicroseconds)(span.startTime),
            duration: (0, _core.hrTimeToMicroseconds)(span.duration),
            attributes: span.attributes,
            status: span.status,
            events: span.events,
            links: span.links
        };
    };
    /**
     * Showing spans in console
     * @param spans
     * @param done
     */ ConsoleSpanExporter.prototype._sendSpans = function(spans, done) {
        var e_1, _a;
        try {
            for(var spans_1 = __values(spans), spans_1_1 = spans_1.next(); !spans_1_1.done; spans_1_1 = spans_1.next()){
                var span = spans_1_1.value;
                console.dir(this._exportInfo(span), {
                    depth: 3
                });
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (spans_1_1 && !spans_1_1.done && (_a = spans_1.return)) _a.call(spans_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        if (done) return done({
            code: (0, _core.ExportResultCode).SUCCESS
        });
    };
    return ConsoleSpanExporter;
}();

},{"@opentelemetry/core":"dBsXh","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"Yr1u5":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InMemorySpanExporter", ()=>InMemorySpanExporter);
var _core = require("@opentelemetry/core");
var __read = undefined && undefined.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = undefined && undefined.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/**
 * This class can be used for testing purposes. It stores the exported spans
 * in a list in memory that can be retrieved using the `getFinishedSpans()`
 * method.
 */ var InMemorySpanExporter = /** @class */ function() {
    function InMemorySpanExporter() {
        this._finishedSpans = [];
        /**
         * Indicates if the exporter has been "shutdown."
         * When false, exported spans will not be stored in-memory.
         */ this._stopped = false;
    }
    InMemorySpanExporter.prototype.export = function(spans, resultCallback) {
        var _a;
        if (this._stopped) return resultCallback({
            code: (0, _core.ExportResultCode).FAILED,
            error: new Error("Exporter has been stopped")
        });
        (_a = this._finishedSpans).push.apply(_a, __spreadArray([], __read(spans), false));
        setTimeout(function() {
            return resultCallback({
                code: (0, _core.ExportResultCode).SUCCESS
            });
        }, 0);
    };
    InMemorySpanExporter.prototype.shutdown = function() {
        this._stopped = true;
        this._finishedSpans = [];
        return this.forceFlush();
    };
    /**
     * Exports any pending spans in the exporter
     */ InMemorySpanExporter.prototype.forceFlush = function() {
        return Promise.resolve();
    };
    InMemorySpanExporter.prototype.reset = function() {
        this._finishedSpans = [];
    };
    InMemorySpanExporter.prototype.getFinishedSpans = function() {
        return this._finishedSpans;
    };
    return InMemorySpanExporter;
}();

},{"@opentelemetry/core":"dBsXh","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"fSt4P":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"Nq2MM":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SimpleSpanProcessor", ()=>SimpleSpanProcessor);
var _api = require("@opentelemetry/api");
var _core = require("@opentelemetry/core");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
/**
 * An implementation of the {@link SpanProcessor} that converts the {@link Span}
 * to {@link ReadableSpan} and passes it to the configured exporter.
 *
 * Only spans that are sampled are converted.
 */ var SimpleSpanProcessor = /** @class */ function() {
    function SimpleSpanProcessor(_exporter) {
        this._exporter = _exporter;
        this._shutdownOnce = new (0, _core.BindOnceFuture)(this._shutdown, this);
        this._unresolvedExports = new Set();
    }
    SimpleSpanProcessor.prototype.forceFlush = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        // await unresolved resources before resolving
                        return [
                            4 /*yield*/ ,
                            Promise.all(Array.from(this._unresolvedExports))
                        ];
                    case 1:
                        // await unresolved resources before resolving
                        _a.sent();
                        if (!this._exporter.forceFlush) return [
                            3 /*break*/ ,
                            3
                        ];
                        return [
                            4 /*yield*/ ,
                            this._exporter.forceFlush()
                        ];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    SimpleSpanProcessor.prototype.onStart = function(_span, _parentContext) {};
    SimpleSpanProcessor.prototype.onEnd = function(span) {
        var _this = this;
        var _a, _b;
        if (this._shutdownOnce.isCalled) return;
        if ((span.spanContext().traceFlags & (0, _api.TraceFlags).SAMPLED) === 0) return;
        var doExport = function() {
            return (0, _core.internal)._export(_this._exporter, [
                span
            ]).then(function(result) {
                var _a;
                if (result.code !== (0, _core.ExportResultCode).SUCCESS) (0, _core.globalErrorHandler)((_a = result.error) !== null && _a !== void 0 ? _a : new Error("SimpleSpanProcessor: span export failed (status " + result + ")"));
            }).catch(function(error) {
                (0, _core.globalErrorHandler)(error);
            });
        };
        // Avoid scheduling a promise to make the behavior more predictable and easier to test
        if (span.resource.asyncAttributesPending) {
            var exportPromise_1 = (_b = (_a = span.resource).waitForAsyncAttributes) === null || _b === void 0 ? void 0 : _b.call(_a).then(function() {
                if (exportPromise_1 != null) _this._unresolvedExports.delete(exportPromise_1);
                return doExport();
            }, function(err) {
                return (0, _core.globalErrorHandler)(err);
            });
            // store the unresolved exports
            if (exportPromise_1 != null) this._unresolvedExports.add(exportPromise_1);
        } else doExport();
    };
    SimpleSpanProcessor.prototype.shutdown = function() {
        return this._shutdownOnce.call();
    };
    SimpleSpanProcessor.prototype._shutdown = function() {
        return this._exporter.shutdown();
    };
    return SimpleSpanProcessor;
}();

},{"@opentelemetry/api":"6AC4z","@opentelemetry/core":"dBsXh","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"lzLTj":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"iqrBb":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"hdnwm":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"cwYEn":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"iYvXX":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"dXLQl":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StackContextManager", ()=>StackContextManager);
var _api = require("@opentelemetry/api");
var __read = undefined && undefined.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = undefined && undefined.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/**
 * Stack Context Manager for managing the state in web
 * it doesn't fully support the async calls though
 */ var StackContextManager = /** @class */ function() {
    function StackContextManager() {
        /**
         * whether the context manager is enabled or not
         */ this._enabled = false;
        /**
         * Keeps the reference to current context
         */ this._currentContext = (0, _api.ROOT_CONTEXT);
    }
    /**
     *
     * @param context
     * @param target Function to be executed within the context
     */ // eslint-disable-next-line @typescript-eslint/ban-types
    StackContextManager.prototype._bindFunction = function(context, target) {
        if (context === void 0) context = (0, _api.ROOT_CONTEXT);
        var manager = this;
        var contextWrapper = function() {
            var _this = this;
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return manager.with(context, function() {
                return target.apply(_this, args);
            });
        };
        Object.defineProperty(contextWrapper, "length", {
            enumerable: false,
            configurable: true,
            writable: false,
            value: target.length
        });
        return contextWrapper;
    };
    /**
     * Returns the active context
     */ StackContextManager.prototype.active = function() {
        return this._currentContext;
    };
    /**
     * Binds a the certain context or the active one to the target function and then returns the target
     * @param context A context (span) to be bind to target
     * @param target a function or event emitter. When target or one of its callbacks is called,
     *  the provided context will be used as the active context for the duration of the call.
     */ StackContextManager.prototype.bind = function(context, target) {
        // if no specific context to propagate is given, we use the current one
        if (context === undefined) context = this.active();
        if (typeof target === "function") return this._bindFunction(context, target);
        return target;
    };
    /**
     * Disable the context manager (clears the current context)
     */ StackContextManager.prototype.disable = function() {
        this._currentContext = (0, _api.ROOT_CONTEXT);
        this._enabled = false;
        return this;
    };
    /**
     * Enables the context manager and creates a default(root) context
     */ StackContextManager.prototype.enable = function() {
        if (this._enabled) return this;
        this._enabled = true;
        this._currentContext = (0, _api.ROOT_CONTEXT);
        return this;
    };
    /**
     * Calls the callback function [fn] with the provided [context]. If [context] is undefined then it will use the window.
     * The context will be set as active
     * @param context
     * @param fn Callback function
     * @param thisArg optional receiver to be used for calling fn
     * @param args optional arguments forwarded to fn
     */ StackContextManager.prototype.with = function(context, fn, thisArg) {
        var args = [];
        for(var _i = 3; _i < arguments.length; _i++)args[_i - 3] = arguments[_i];
        var previousContext = this._currentContext;
        this._currentContext = context || (0, _api.ROOT_CONTEXT);
        try {
            return fn.call.apply(fn, __spreadArray([
                thisArg
            ], __read(args), false));
        } finally{
            this._currentContext = previousContext;
        }
    };
    return StackContextManager;
}();

},{"@opentelemetry/api":"6AC4z","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"eNyqo":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PerformanceTimingNames", ()=>PerformanceTimingNames);
var PerformanceTimingNames;
(function(PerformanceTimingNames) {
    PerformanceTimingNames["CONNECT_END"] = "connectEnd";
    PerformanceTimingNames["CONNECT_START"] = "connectStart";
    PerformanceTimingNames["DECODED_BODY_SIZE"] = "decodedBodySize";
    PerformanceTimingNames["DOM_COMPLETE"] = "domComplete";
    PerformanceTimingNames["DOM_CONTENT_LOADED_EVENT_END"] = "domContentLoadedEventEnd";
    PerformanceTimingNames["DOM_CONTENT_LOADED_EVENT_START"] = "domContentLoadedEventStart";
    PerformanceTimingNames["DOM_INTERACTIVE"] = "domInteractive";
    PerformanceTimingNames["DOMAIN_LOOKUP_END"] = "domainLookupEnd";
    PerformanceTimingNames["DOMAIN_LOOKUP_START"] = "domainLookupStart";
    PerformanceTimingNames["ENCODED_BODY_SIZE"] = "encodedBodySize";
    PerformanceTimingNames["FETCH_START"] = "fetchStart";
    PerformanceTimingNames["LOAD_EVENT_END"] = "loadEventEnd";
    PerformanceTimingNames["LOAD_EVENT_START"] = "loadEventStart";
    PerformanceTimingNames["NAVIGATION_START"] = "navigationStart";
    PerformanceTimingNames["REDIRECT_END"] = "redirectEnd";
    PerformanceTimingNames["REDIRECT_START"] = "redirectStart";
    PerformanceTimingNames["REQUEST_START"] = "requestStart";
    PerformanceTimingNames["RESPONSE_END"] = "responseEnd";
    PerformanceTimingNames["RESPONSE_START"] = "responseStart";
    PerformanceTimingNames["SECURE_CONNECTION_START"] = "secureConnectionStart";
    PerformanceTimingNames["UNLOAD_EVENT_END"] = "unloadEventEnd";
    PerformanceTimingNames["UNLOAD_EVENT_START"] = "unloadEventStart";
})(PerformanceTimingNames || (PerformanceTimingNames = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"5dYQ0":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _performanceTimingNames = require("./enums/PerformanceTimingNames");

},{"./enums/PerformanceTimingNames":"eNyqo"}],"ccAWO":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Helper function to be able to use enum as typed key in type and in interface when using forEach
 * @param obj
 * @param key
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
parcelHelpers.export(exports, "hasKey", ()=>hasKey);
/**
 * Helper function for starting an event on span based on {@link PerformanceEntries}
 * @param span
 * @param performanceName name of performance entry for time start
 * @param entries
 */ parcelHelpers.export(exports, "addSpanNetworkEvent", ()=>addSpanNetworkEvent);
/**
 * Helper function for adding network events
 * @param span
 * @param resource
 */ parcelHelpers.export(exports, "addSpanNetworkEvents", ()=>addSpanNetworkEvents);
/**
 * sort resources by startTime
 * @param filteredResources
 */ parcelHelpers.export(exports, "sortResources", ()=>sortResources);
/**
 * Get closest performance resource ignoring the resources that have been
 * already used.
 * @param spanUrl
 * @param startTimeHR
 * @param endTimeHR
 * @param resources
 * @param ignoredResources
 * @param initiatorType
 */ parcelHelpers.export(exports, "getResource", ()=>getResource);
/**
 * Parses url using URL constructor or fallback to anchor element.
 * @param url
 */ parcelHelpers.export(exports, "parseUrl", ()=>parseUrl);
/**
 * Parses url using URL constructor or fallback to anchor element and serialize
 * it to a string.
 *
 * Performs the steps described in https://html.spec.whatwg.org/multipage/urls-and-fetching.html#parse-a-url
 *
 * @param url
 */ parcelHelpers.export(exports, "normalizeUrl", ()=>normalizeUrl);
/**
 * Get element XPath
 * @param target - target element
 * @param optimised - when id attribute of element is present the xpath can be
 * simplified to contain id
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
parcelHelpers.export(exports, "getElementXPath", ()=>getElementXPath);
/**
 * Checks if trace headers should be propagated
 * @param spanUrl
 * @private
 */ parcelHelpers.export(exports, "shouldPropagateTraceHeaders", ()=>shouldPropagateTraceHeaders);
var _performanceTimingNames = require("./enums/PerformanceTimingNames");
var _core = require("@opentelemetry/core");
var _semanticConventions = require("@opentelemetry/semantic-conventions");
// Used to normalize relative URLs
var urlNormalizingAnchor;
function getUrlNormalizingAnchor() {
    if (!urlNormalizingAnchor) urlNormalizingAnchor = document.createElement("a");
    return urlNormalizingAnchor;
}
function hasKey(obj, key) {
    return key in obj;
}
function addSpanNetworkEvent(span, performanceName, entries) {
    if (hasKey(entries, performanceName) && typeof entries[performanceName] === "number") {
        span.addEvent(performanceName, entries[performanceName]);
        return span;
    }
    return undefined;
}
function addSpanNetworkEvents(span, resource) {
    addSpanNetworkEvent(span, (0, _performanceTimingNames.PerformanceTimingNames).FETCH_START, resource);
    addSpanNetworkEvent(span, (0, _performanceTimingNames.PerformanceTimingNames).DOMAIN_LOOKUP_START, resource);
    addSpanNetworkEvent(span, (0, _performanceTimingNames.PerformanceTimingNames).DOMAIN_LOOKUP_END, resource);
    addSpanNetworkEvent(span, (0, _performanceTimingNames.PerformanceTimingNames).CONNECT_START, resource);
    if (hasKey(resource, "name") && resource["name"].startsWith("https:")) addSpanNetworkEvent(span, (0, _performanceTimingNames.PerformanceTimingNames).SECURE_CONNECTION_START, resource);
    addSpanNetworkEvent(span, (0, _performanceTimingNames.PerformanceTimingNames).CONNECT_END, resource);
    addSpanNetworkEvent(span, (0, _performanceTimingNames.PerformanceTimingNames).REQUEST_START, resource);
    addSpanNetworkEvent(span, (0, _performanceTimingNames.PerformanceTimingNames).RESPONSE_START, resource);
    addSpanNetworkEvent(span, (0, _performanceTimingNames.PerformanceTimingNames).RESPONSE_END, resource);
    var encodedLength = resource[(0, _performanceTimingNames.PerformanceTimingNames).ENCODED_BODY_SIZE];
    if (encodedLength !== undefined) span.setAttribute((0, _semanticConventions.SemanticAttributes).HTTP_RESPONSE_CONTENT_LENGTH, encodedLength);
    var decodedLength = resource[(0, _performanceTimingNames.PerformanceTimingNames).DECODED_BODY_SIZE];
    // Spec: Not set if transport encoding not used (in which case encoded and decoded sizes match)
    if (decodedLength !== undefined && encodedLength !== decodedLength) span.setAttribute((0, _semanticConventions.SemanticAttributes).HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED, decodedLength);
}
function sortResources(filteredResources) {
    return filteredResources.slice().sort(function(a, b) {
        var valueA = a[(0, _performanceTimingNames.PerformanceTimingNames).FETCH_START];
        var valueB = b[(0, _performanceTimingNames.PerformanceTimingNames).FETCH_START];
        if (valueA > valueB) return 1;
        else if (valueA < valueB) return -1;
        return 0;
    });
}
/** Returns the origin if present (if in browser context). */ function getOrigin() {
    return typeof location !== "undefined" ? location.origin : undefined;
}
function getResource(spanUrl, startTimeHR, endTimeHR, resources, ignoredResources, initiatorType) {
    if (ignoredResources === void 0) ignoredResources = new WeakSet();
    // de-relativize the URL before usage (does no harm to absolute URLs)
    var parsedSpanUrl = parseUrl(spanUrl);
    spanUrl = parsedSpanUrl.toString();
    var filteredResources = filterResourcesForSpan(spanUrl, startTimeHR, endTimeHR, resources, ignoredResources, initiatorType);
    if (filteredResources.length === 0) return {
        mainRequest: undefined
    };
    if (filteredResources.length === 1) return {
        mainRequest: filteredResources[0]
    };
    var sorted = sortResources(filteredResources);
    if (parsedSpanUrl.origin !== getOrigin() && sorted.length > 1) {
        var corsPreFlightRequest = sorted[0];
        var mainRequest = findMainRequest(sorted, corsPreFlightRequest[(0, _performanceTimingNames.PerformanceTimingNames).RESPONSE_END], endTimeHR);
        var responseEnd = corsPreFlightRequest[(0, _performanceTimingNames.PerformanceTimingNames).RESPONSE_END];
        var fetchStart = mainRequest[(0, _performanceTimingNames.PerformanceTimingNames).FETCH_START];
        // no corsPreFlightRequest
        if (fetchStart < responseEnd) {
            mainRequest = corsPreFlightRequest;
            corsPreFlightRequest = undefined;
        }
        return {
            corsPreFlightRequest: corsPreFlightRequest,
            mainRequest: mainRequest
        };
    } else return {
        mainRequest: filteredResources[0]
    };
}
/**
 * Will find the main request skipping the cors pre flight requests
 * @param resources
 * @param corsPreFlightRequestEndTime
 * @param spanEndTimeHR
 */ function findMainRequest(resources, corsPreFlightRequestEndTime, spanEndTimeHR) {
    var spanEndTime = (0, _core.hrTimeToNanoseconds)(spanEndTimeHR);
    var minTime = (0, _core.hrTimeToNanoseconds)((0, _core.timeInputToHrTime)(corsPreFlightRequestEndTime));
    var mainRequest = resources[1];
    var bestGap;
    var length = resources.length;
    for(var i = 1; i < length; i++){
        var resource = resources[i];
        var resourceStartTime = (0, _core.hrTimeToNanoseconds)((0, _core.timeInputToHrTime)(resource[(0, _performanceTimingNames.PerformanceTimingNames).FETCH_START]));
        var resourceEndTime = (0, _core.hrTimeToNanoseconds)((0, _core.timeInputToHrTime)(resource[(0, _performanceTimingNames.PerformanceTimingNames).RESPONSE_END]));
        var currentGap = spanEndTime - resourceEndTime;
        if (resourceStartTime >= minTime && (!bestGap || currentGap < bestGap)) {
            bestGap = currentGap;
            mainRequest = resource;
        }
    }
    return mainRequest;
}
/**
 * Filter all resources that has started and finished according to span start time and end time.
 *     It will return the closest resource to a start time
 * @param spanUrl
 * @param startTimeHR
 * @param endTimeHR
 * @param resources
 * @param ignoredResources
 */ function filterResourcesForSpan(spanUrl, startTimeHR, endTimeHR, resources, ignoredResources, initiatorType) {
    var startTime = (0, _core.hrTimeToNanoseconds)(startTimeHR);
    var endTime = (0, _core.hrTimeToNanoseconds)(endTimeHR);
    var filteredResources = resources.filter(function(resource) {
        var resourceStartTime = (0, _core.hrTimeToNanoseconds)((0, _core.timeInputToHrTime)(resource[(0, _performanceTimingNames.PerformanceTimingNames).FETCH_START]));
        var resourceEndTime = (0, _core.hrTimeToNanoseconds)((0, _core.timeInputToHrTime)(resource[(0, _performanceTimingNames.PerformanceTimingNames).RESPONSE_END]));
        return resource.initiatorType.toLowerCase() === (initiatorType || "xmlhttprequest") && resource.name === spanUrl && resourceStartTime >= startTime && resourceEndTime <= endTime;
    });
    if (filteredResources.length > 0) filteredResources = filteredResources.filter(function(resource) {
        return !ignoredResources.has(resource);
    });
    return filteredResources;
}
function parseUrl(url) {
    if (typeof URL === "function") return new URL(url, typeof document !== "undefined" ? document.baseURI : typeof location !== "undefined" // Some JS runtimes (e.g. Deno) don't define this
     ? location.href : undefined);
    var element = getUrlNormalizingAnchor();
    element.href = url;
    return element;
}
function normalizeUrl(url) {
    var urlLike = parseUrl(url);
    return urlLike.href;
}
function getElementXPath(target, optimised) {
    if (target.nodeType === Node.DOCUMENT_NODE) return "/";
    var targetValue = getNodeValue(target, optimised);
    if (optimised && targetValue.indexOf("@id") > 0) return targetValue;
    var xpath = "";
    if (target.parentNode) xpath += getElementXPath(target.parentNode, false);
    xpath += targetValue;
    return xpath;
}
/**
 * get node index within the siblings
 * @param target
 */ function getNodeIndex(target) {
    if (!target.parentNode) return 0;
    var allowedTypes = [
        target.nodeType
    ];
    if (target.nodeType === Node.CDATA_SECTION_NODE) allowedTypes.push(Node.TEXT_NODE);
    var elements = Array.from(target.parentNode.childNodes);
    elements = elements.filter(function(element) {
        var localName = element.localName;
        return allowedTypes.indexOf(element.nodeType) >= 0 && localName === target.localName;
    });
    if (elements.length >= 1) return elements.indexOf(target) + 1; // xpath starts from 1
    // if there are no other similar child xpath doesn't need index
    return 0;
}
/**
 * get node value for xpath
 * @param target
 * @param optimised
 */ function getNodeValue(target, optimised) {
    var nodeType = target.nodeType;
    var index = getNodeIndex(target);
    var nodeValue = "";
    if (nodeType === Node.ELEMENT_NODE) {
        var id = target.getAttribute("id");
        if (optimised && id) return '//*[@id="' + id + '"]';
        nodeValue = target.localName;
    } else if (nodeType === Node.TEXT_NODE || nodeType === Node.CDATA_SECTION_NODE) nodeValue = "text()";
    else if (nodeType === Node.COMMENT_NODE) nodeValue = "comment()";
    else return "";
    // if index is 1 it can be omitted in xpath
    if (nodeValue && index > 1) return "/" + nodeValue + "[" + index + "]";
    return "/" + nodeValue;
}
function shouldPropagateTraceHeaders(spanUrl, propagateTraceHeaderCorsUrls) {
    var propagateTraceHeaderUrls = propagateTraceHeaderCorsUrls || [];
    if (typeof propagateTraceHeaderUrls === "string" || propagateTraceHeaderUrls instanceof RegExp) propagateTraceHeaderUrls = [
        propagateTraceHeaderUrls
    ];
    var parsedSpanUrl = parseUrl(spanUrl);
    if (parsedSpanUrl.origin === getOrigin()) return true;
    else return propagateTraceHeaderUrls.some(function(propagateTraceHeaderUrl) {
        return (0, _core.urlMatches)(spanUrl, propagateTraceHeaderUrl);
    });
}

},{"./enums/PerformanceTimingNames":"eNyqo","@opentelemetry/core":"dBsXh","@opentelemetry/semantic-conventions":"lCgfj","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"cmUfS":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _contextZonePeerDep = require("@opentelemetry/context-zone-peer-dep");
parcelHelpers.exportAll(_contextZonePeerDep, exports);
var _zoneJs = require("zone.js");

},{"@opentelemetry/context-zone-peer-dep":"lln3o","zone.js":"9REDz","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"lln3o":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _zoneContextManager = require("./ZoneContextManager");
parcelHelpers.exportAll(_zoneContextManager, exports);
var _types = require("./types");
parcelHelpers.exportAll(_types, exports);

},{"./ZoneContextManager":"la9bE","./types":false,"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"la9bE":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /// <reference types="zone.js" />
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ZoneContextManager", ()=>ZoneContextManager);
var _api = require("@opentelemetry/api");
var _util = require("./util");
/* Key name to be used to save a context reference in Zone */ var ZONE_CONTEXT_KEY = "OT_ZONE_CONTEXT";
/**
 * ZoneContextManager
 * This module provides an easy functionality for tracing action between asynchronous operations in web.
 * It was not possible with standard [StackContextManager]{@link https://github.com/open-telemetry/opentelemetry-js/blob/main/packages/opentelemetry-sdk-trace-web/src/StackContextManager.ts}.
 * It heavily depends on [zone.js]{@link https://www.npmjs.com/package/zone.js}.
 * It stores the information about context in zone. Each Context will have always new Zone;
 * It also supports binding a certain Span to a target that has "addEventListener" and "removeEventListener".
 * When this happens a new zone is being created and the provided Span is being assigned to this zone.
 */ var ZoneContextManager = /** @class */ function() {
    function ZoneContextManager() {
        /**
         * whether the context manager is enabled or not
         */ this._enabled = false;
        /**
         * Helps to create a unique name for the zones - part of zone name
         */ this._zoneCounter = 0;
    }
    /**
     * Returns the active context from certain zone name
     * @param activeZone
     */ ZoneContextManager.prototype._activeContextFromZone = function(activeZone) {
        return activeZone && activeZone.get(ZONE_CONTEXT_KEY) || (0, _api.ROOT_CONTEXT);
    };
    /**
     * @param context A context (span) to be executed within target function
     * @param target Function to be executed within the context
     */ // eslint-disable-next-line @typescript-eslint/ban-types
    ZoneContextManager.prototype._bindFunction = function(context, target) {
        var manager = this;
        var contextWrapper = function() {
            var _this = this;
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return manager.with(context, function() {
                return target.apply(_this, args);
            });
        };
        Object.defineProperty(contextWrapper, "length", {
            enumerable: false,
            configurable: true,
            writable: false,
            value: target.length
        });
        return contextWrapper;
    };
    /**
     * @param context A context (span) to be bind to target
     * @param obj target object on which the listeners will be patched
     */ ZoneContextManager.prototype._bindListener = function(context, obj) {
        var target = obj;
        if (target.__ot_listeners !== undefined) return obj;
        target.__ot_listeners = {};
        if (typeof target.addEventListener === "function") target.addEventListener = this._patchAddEventListener(target, target.addEventListener, context);
        if (typeof target.removeEventListener === "function") target.removeEventListener = this._patchRemoveEventListener(target, target.removeEventListener);
        return obj;
    };
    /**
     * Creates a new unique zone name
     */ ZoneContextManager.prototype._createZoneName = function() {
        this._zoneCounter++;
        var random = Math.random();
        return this._zoneCounter + "-" + random;
    };
    /**
     * Creates a new zone
     * @param zoneName zone name
     * @param context A context (span) to be bind with Zone
     */ ZoneContextManager.prototype._createZone = function(zoneName, context) {
        var _a;
        return Zone.current.fork({
            name: zoneName,
            properties: (_a = {}, _a[ZONE_CONTEXT_KEY] = context, _a)
        });
    };
    /**
     * Returns the active zone
     */ ZoneContextManager.prototype._getActiveZone = function() {
        return Zone.current;
    };
    /**
     * Patches addEventListener method
     * @param target any target that has "addEventListener" method
     * @param original reference to the patched method
     * @param [context] context to be bind to the listener
     */ ZoneContextManager.prototype._patchAddEventListener = function(target, original, context) {
        var contextManager = this;
        return function(event, listener, opts) {
            if (target.__ot_listeners === undefined) target.__ot_listeners = {};
            var listeners = target.__ot_listeners[event];
            if (listeners === undefined) {
                listeners = new WeakMap();
                target.__ot_listeners[event] = listeners;
            }
            var patchedListener = contextManager.bind(context, listener);
            // store a weak reference of the user listener to ours
            listeners.set(listener, patchedListener);
            return original.call(this, event, patchedListener, opts);
        };
    };
    /**
     * Patches removeEventListener method
     * @param target any target that has "removeEventListener" method
     * @param original reference to the patched method
     */ ZoneContextManager.prototype._patchRemoveEventListener = function(target, original) {
        return function(event, listener) {
            if (target.__ot_listeners === undefined || target.__ot_listeners[event] === undefined) return original.call(this, event, listener);
            var events = target.__ot_listeners[event];
            var patchedListener = events.get(listener);
            events.delete(listener);
            return original.call(this, event, patchedListener || listener);
        };
    };
    /**
     * Returns the active context
     */ ZoneContextManager.prototype.active = function() {
        if (!this._enabled) return 0, _api.ROOT_CONTEXT;
        var activeZone = this._getActiveZone();
        var active = this._activeContextFromZone(activeZone);
        if (active) return active;
        return 0, _api.ROOT_CONTEXT;
    };
    /**
     * Binds a the certain context or the active one to the target function and then returns the target
     * @param context A context (span) to be bind to target
     * @param target a function or event emitter. When target or one of its callbacks is called,
     *  the provided context will be used as the active context for the duration of the call.
     */ ZoneContextManager.prototype.bind = function(context, target) {
        // if no specific context to propagate is given, we use the current one
        if (context === undefined) context = this.active();
        if (typeof target === "function") return this._bindFunction(context, target);
        else if ((0, _util.isListenerObject)(target)) this._bindListener(context, target);
        return target;
    };
    /**
     * Disable the context manager (clears all the contexts)
     */ ZoneContextManager.prototype.disable = function() {
        this._enabled = false;
        return this;
    };
    /**
     * Enables the context manager and creates a default(root) context
     */ ZoneContextManager.prototype.enable = function() {
        this._enabled = true;
        return this;
    };
    /**
     * Calls the callback function [fn] with the provided [context].
     *     If [context] is undefined then it will use the active context.
     *     The context will be set as active
     * @param context A context (span) to be called with provided callback
     * @param fn Callback function
     * @param thisArg optional receiver to be used for calling fn
     * @param args optional arguments forwarded to fn
     */ ZoneContextManager.prototype.with = function(context, fn, thisArg) {
        var args = [];
        for(var _i = 3; _i < arguments.length; _i++)args[_i - 3] = arguments[_i];
        var zoneName = this._createZoneName();
        var newZone = this._createZone(zoneName, context);
        return newZone.run(fn, thisArg, args);
    };
    return ZoneContextManager;
}();

},{"@opentelemetry/api":"6AC4z","./util":"5r8zZ","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"5r8zZ":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * check if an object has addEventListener and removeEventListener functions then it will return true.
 * Generally only called with a `TargetWithEvents` but may be called with an unknown / any.
 * @param obj - The object to check.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isListenerObject", ()=>isListenerObject);
function isListenerObject(obj) {
    if (obj === void 0) obj = {};
    return typeof obj.addEventListener === "function" && typeof obj.removeEventListener === "function";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"9REDz":[function(require,module,exports) {
"use strict";
/**
 * @license Angular v<unknown>
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */ // Initialize global `Zone` constant.
(function(global) {
    const performance = global["performance"];
    function mark(name) {
        performance && performance["mark"] && performance["mark"](name);
    }
    function performanceMeasure(name, label) {
        performance && performance["measure"] && performance["measure"](name, label);
    }
    mark("Zone");
    // Initialize before it's accessed below.
    // __Zone_symbol_prefix global can be used to override the default zone
    // symbol prefix with a custom one if needed.
    const symbolPrefix = global["__Zone_symbol_prefix"] || "__zone_symbol__";
    function __symbol__(name) {
        return symbolPrefix + name;
    }
    const checkDuplicate = global[__symbol__("forceDuplicateZoneCheck")] === true;
    if (global["Zone"]) {
        // if global['Zone'] already exists (maybe zone.js was already loaded or
        // some other lib also registered a global object named Zone), we may need
        // to throw an error, but sometimes user may not want this error.
        // For example,
        // we have two web pages, page1 includes zone.js, page2 doesn't.
        // and the 1st time user load page1 and page2, everything work fine,
        // but when user load page2 again, error occurs because global['Zone'] already exists.
        // so we add a flag to let user choose whether to throw this error or not.
        // By default, if existing Zone is from zone.js, we will not throw the error.
        if (checkDuplicate || typeof global["Zone"].__symbol__ !== "function") throw new Error("Zone already loaded.");
        else return global["Zone"];
    }
    class Zone1 {
        // tslint:disable-next-line:require-internal-with-underscore
        static{
            this.__symbol__ = __symbol__;
        }
        static assertZonePatched() {
            if (global["Promise"] !== patches["ZoneAwarePromise"]) throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)");
        }
        static get root() {
            let zone = Zone1.current;
            while(zone.parent)zone = zone.parent;
            return zone;
        }
        static get current() {
            return _currentZoneFrame.zone;
        }
        static get currentTask() {
            return _currentTask;
        }
        // tslint:disable-next-line:require-internal-with-underscore
        static __load_patch(name, fn, ignoreDuplicate = false) {
            if (patches.hasOwnProperty(name)) {
                // `checkDuplicate` option is defined from global variable
                // so it works for all modules.
                // `ignoreDuplicate` can work for the specified module
                if (!ignoreDuplicate && checkDuplicate) throw Error("Already loaded patch: " + name);
            } else if (!global["__Zone_disable_" + name]) {
                const perfName = "Zone:" + name;
                mark(perfName);
                patches[name] = fn(global, Zone1, _api);
                performanceMeasure(perfName, perfName);
            }
        }
        get parent() {
            return this._parent;
        }
        get name() {
            return this._name;
        }
        constructor(parent, zoneSpec){
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || "unnamed" : "<root>";
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate = new _ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }
        get(key) {
            const zone = this.getZoneWith(key);
            if (zone) return zone._properties[key];
        }
        getZoneWith(key) {
            let current = this;
            while(current){
                if (current._properties.hasOwnProperty(key)) return current;
                current = current._parent;
            }
            return null;
        }
        fork(zoneSpec) {
            if (!zoneSpec) throw new Error("ZoneSpec required!");
            return this._zoneDelegate.fork(this, zoneSpec);
        }
        wrap(callback, source) {
            if (typeof callback !== "function") throw new Error("Expecting function got: " + callback);
            const _callback = this._zoneDelegate.intercept(this, callback, source);
            const zone = this;
            return function() {
                return zone.runGuarded(_callback, this, arguments, source);
            };
        }
        run(callback, applyThis, applyArgs, source) {
            _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
            };
            try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            } finally{
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        }
        runGuarded(callback, applyThis = null, applyArgs, source) {
            _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
            };
            try {
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                } catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) throw error;
                }
            } finally{
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        }
        runTask(task, applyThis, applyArgs) {
            if (task.zone != this) throw new Error("A task can only be run in the zone of creation! (Creation: " + (task.zone || NO_ZONE).name + "; Execution: " + this.name + ")");
            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return
            if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) return;
            const reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            const previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
            };
            try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) task.cancelFn = undefined;
                try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                } catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) throw error;
                }
            } finally{
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || task.data && task.data.isPeriodic) reEntryGuard && task._transitionTo(scheduled, running);
                    else {
                        task.runCount = 0;
                        this._updateTaskCount(task, -1);
                        reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
                    }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
            }
        }
        scheduleTask(task) {
            if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                let newZone = this;
                while(newZone){
                    if (newZone === task.zone) throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${task.zone.name}`);
                    newZone = newZone.parent;
                }
            }
            task._transitionTo(scheduling, notScheduled);
            const zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;
            try {
                task = this._zoneDelegate.scheduleTask(this, task);
            } catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled);
                // TODO: @JiaLiPassion, should we check the result from handleError?
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            if (task._zoneDelegates === zoneDelegates) // we have to check because internally the delegate can reschedule the task.
            this._updateTaskCount(task, 1);
            if (task.state == scheduling) task._transitionTo(scheduled, scheduling);
            return task;
        }
        scheduleMicroTask(source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
        }
        scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
        }
        scheduleEventTask(source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
        }
        cancelTask(task) {
            if (task.zone != this) throw new Error("A task can only be cancelled in the zone of creation! (Creation: " + (task.zone || NO_ZONE).name + "; Execution: " + this.name + ")");
            if (task.state !== scheduled && task.state !== running) return;
            task._transitionTo(canceling, scheduled, running);
            try {
                this._zoneDelegate.cancelTask(this, task);
            } catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            this._updateTaskCount(task, -1);
            task._transitionTo(notScheduled, canceling);
            task.runCount = 0;
            return task;
        }
        _updateTaskCount(task, count) {
            const zoneDelegates = task._zoneDelegates;
            if (count == -1) task._zoneDelegates = null;
            for(let i = 0; i < zoneDelegates.length; i++)zoneDelegates[i]._updateTaskCount(task.type, count);
        }
    }
    const DELEGATE_ZS = {
        name: "",
        onHasTask: (delegate, _, target, hasTaskState)=>delegate.hasTask(target, hasTaskState),
        onScheduleTask: (delegate, _, target, task)=>delegate.scheduleTask(target, task),
        onInvokeTask: (delegate, _, target, task, applyThis, applyArgs)=>delegate.invokeTask(target, task, applyThis, applyArgs),
        onCancelTask: (delegate, _, target, task)=>delegate.cancelTask(target, task)
    };
    class _ZoneDelegate {
        constructor(zone, parentDelegate, zoneSpec){
            this._taskCounts = {
                "microTask": 0,
                "macroTask": 0,
                "eventTask": 0
            };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
            this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
            this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
            this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
            this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
            this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            const zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            const parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
            if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;
                if (!zoneSpec.onScheduleTask) {
                    this._scheduleTaskZS = DELEGATE_ZS;
                    this._scheduleTaskDlgt = parentDelegate;
                    this._scheduleTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onInvokeTask) {
                    this._invokeTaskZS = DELEGATE_ZS;
                    this._invokeTaskDlgt = parentDelegate;
                    this._invokeTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onCancelTask) {
                    this._cancelTaskZS = DELEGATE_ZS;
                    this._cancelTaskDlgt = parentDelegate;
                    this._cancelTaskCurrZone = this.zone;
                }
            }
        }
        fork(targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone1(targetZone, zoneSpec);
        }
        intercept(targetZone, callback, source) {
            return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
        }
        invoke(targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
        }
        handleError(targetZone, error) {
            return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
        }
        scheduleTask(targetZone, task) {
            let returnTask = task;
            if (this._scheduleTaskZS) {
                if (this._hasTaskZS) returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                // clang-format off
                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                // clang-format on
                if (!returnTask) returnTask = task;
            } else {
                if (task.scheduleFn) task.scheduleFn(task);
                else if (task.type == microTask) scheduleMicroTask(task);
                else throw new Error("Task is missing scheduleFn.");
            }
            return returnTask;
        }
        invokeTask(targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
        }
        cancelTask(targetZone, task) {
            let value;
            if (this._cancelTaskZS) value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            else {
                if (!task.cancelFn) throw Error("Task is not cancelable");
                value = task.cancelFn(task);
            }
            return value;
        }
        hasTask(targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
                this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            } catch (err) {
                this.handleError(targetZone, err);
            }
        }
        // tslint:disable-next-line:require-internal-with-underscore
        _updateTaskCount(type, count) {
            const counts = this._taskCounts;
            const prev = counts[type];
            const next = counts[type] = prev + count;
            if (next < 0) throw new Error("More tasks executed then were scheduled.");
            if (prev == 0 || next == 0) {
                const isEmpty = {
                    microTask: counts["microTask"] > 0,
                    macroTask: counts["macroTask"] > 0,
                    eventTask: counts["eventTask"] > 0,
                    change: type
                };
                this.hasTask(this.zone, isEmpty);
            }
        }
    }
    class ZoneTask {
        constructor(type, source, callback, options, scheduleFn, cancelFn){
            // tslint:disable-next-line:require-internal-with-underscore
            this._zone = null;
            this.runCount = 0;
            // tslint:disable-next-line:require-internal-with-underscore
            this._zoneDelegates = null;
            // tslint:disable-next-line:require-internal-with-underscore
            this._state = "notScheduled";
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;
            if (!callback) throw new Error("callback is not defined");
            this.callback = callback;
            const self1 = this;
            // TODO: @JiaLiPassion options should have interface
            if (type === eventTask && options && options.useG) this.invoke = ZoneTask.invokeTask;
            else this.invoke = function() {
                return ZoneTask.invokeTask.call(global, self1, this, arguments);
            };
        }
        static invokeTask(task, target, args) {
            if (!task) task = this;
            _numberOfNestedTaskFrames++;
            try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
            } finally{
                if (_numberOfNestedTaskFrames == 1) drainMicroTaskQueue();
                _numberOfNestedTaskFrames--;
            }
        }
        get zone() {
            return this._zone;
        }
        get state() {
            return this._state;
        }
        cancelScheduleRequest() {
            this._transitionTo(notScheduled, scheduling);
        }
        // tslint:disable-next-line:require-internal-with-underscore
        _transitionTo(toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;
                if (toState == notScheduled) this._zoneDelegates = null;
            } else throw new Error(`${this.type} '${this.source}': can not transition to '${toState}', expecting state '${fromState1}'${fromState2 ? " or '" + fromState2 + "'" : ""}, was '${this._state}'.`);
        }
        toString() {
            if (this.data && typeof this.data.handleId !== "undefined") return this.data.handleId.toString();
            else return Object.prototype.toString.call(this);
        }
        // add toJSON method to prevent cyclic error when
        // call JSON.stringify(zoneTask)
        toJSON() {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            };
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    const symbolSetTimeout = __symbol__("setTimeout");
    const symbolPromise = __symbol__("Promise");
    const symbolThen = __symbol__("then");
    let _microTaskQueue = [];
    let _isDrainingMicrotaskQueue = false;
    let nativeMicroTaskQueuePromise;
    function nativeScheduleMicroTask(func) {
        if (!nativeMicroTaskQueuePromise) {
            if (global[symbolPromise]) nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
        }
        if (nativeMicroTaskQueuePromise) {
            let nativeThen = nativeMicroTaskQueuePromise[symbolThen];
            if (!nativeThen) // native Promise is not patchable, we need to use `then` directly
            // issue 1078
            nativeThen = nativeMicroTaskQueuePromise["then"];
            nativeThen.call(nativeMicroTaskQueuePromise, func);
        } else global[symbolSetTimeout](func, 0);
    }
    function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) // We are not running in Task, so we need to kickstart the microtask queue.
        nativeScheduleMicroTask(drainMicroTaskQueue);
        task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;
            while(_microTaskQueue.length){
                const queue = _microTaskQueue;
                _microTaskQueue = [];
                for(let i = 0; i < queue.length; i++){
                    const task = queue[i];
                    try {
                        task.zone.runTask(task, null, null);
                    } catch (error) {
                        _api.onUnhandledError(error);
                    }
                }
            }
            _api.microtaskDrainDone();
            _isDrainingMicrotaskQueue = false;
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    const NO_ZONE = {
        name: "NO ZONE"
    };
    const notScheduled = "notScheduled", scheduling = "scheduling", scheduled = "scheduled", running = "running", canceling = "canceling", unknown = "unknown";
    const microTask = "microTask", macroTask = "macroTask", eventTask = "eventTask";
    const patches = {};
    const _api = {
        symbol: __symbol__,
        currentZoneFrame: ()=>_currentZoneFrame,
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: ()=>!Zone1[__symbol__("ignoreConsoleErrorUncaughtError")],
        patchEventTarget: ()=>[],
        patchOnProperties: noop,
        patchMethod: ()=>noop,
        bindArguments: ()=>[],
        patchThen: ()=>noop,
        patchMacroTask: ()=>noop,
        patchEventPrototype: ()=>noop,
        isIEOrEdge: ()=>false,
        getGlobalObjects: ()=>undefined,
        ObjectDefineProperty: ()=>noop,
        ObjectGetOwnPropertyDescriptor: ()=>undefined,
        ObjectCreate: ()=>undefined,
        ArraySlice: ()=>[],
        patchClass: ()=>noop,
        wrapWithCurrentZone: ()=>noop,
        filterProperties: ()=>[],
        attachOriginToPatched: ()=>noop,
        _redefineProperty: ()=>noop,
        patchCallbacks: ()=>noop,
        nativeScheduleMicroTask: nativeScheduleMicroTask
    };
    let _currentZoneFrame = {
        parent: null,
        zone: new Zone1(null, null)
    };
    let _currentTask = null;
    let _numberOfNestedTaskFrames = 0;
    function noop() {}
    performanceMeasure("Zone", "Zone");
    return global["Zone"] = Zone1;
})(globalThis);
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */ /// <reference types="node"/>
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */ const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */ const ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */ const ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */ const ObjectCreate = Object.create;
/** Array.prototype.slice */ const ArraySlice = Array.prototype.slice;
/** addEventListener string const */ const ADD_EVENT_LISTENER_STR = "addEventListener";
/** removeEventListener string const */ const REMOVE_EVENT_LISTENER_STR = "removeEventListener";
/** zoneSymbol addEventListener */ const ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */ const ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */ const TRUE_STR = "true";
/** false string const */ const FALSE_STR = "false";
/** Zone symbol prefix string const. */ const ZONE_SYMBOL_PREFIX = Zone.__symbol__("");
function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
const zoneSymbol = Zone.__symbol__;
const isWindowExists = typeof window !== "undefined";
const internalWindow = isWindowExists ? window : undefined;
const _global = isWindowExists && internalWindow || globalThis;
const REMOVE_ATTRIBUTE = "removeAttribute";
function bindArguments(args, source) {
    for(let i = args.length - 1; i >= 0; i--)if (typeof args[i] === "function") args[i] = wrapWithCurrentZone(args[i], source + "_" + i);
    return args;
}
function patchPrototype(prototype, fnNames) {
    const source = prototype.constructor["name"];
    for(let i = 0; i < fnNames.length; i++){
        const name = fnNames[i];
        const delegate = prototype[name];
        if (delegate) {
            const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);
            if (!isPropertyWritable(prototypeDesc)) continue;
            prototype[name] = ((delegate)=>{
                const patched = function() {
                    return delegate.apply(this, bindArguments(arguments, source + "." + name));
                };
                attachOriginToPatched(patched, delegate);
                return patched;
            })(delegate);
        }
    }
}
function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) return true;
    if (propertyDesc.writable === false) return false;
    return !(typeof propertyDesc.get === "function" && typeof propertyDesc.set === "undefined");
}
const isWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
const isNode = !("nw" in _global) && typeof _global.process !== "undefined" && ({}).toString.call(_global.process) === "[object process]";
const isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow["HTMLElement"]);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
const isMix = typeof _global.process !== "undefined" && ({}).toString.call(_global.process) === "[object process]" && !isWebWorker && !!(isWindowExists && internalWindow["HTMLElement"]);
const zoneSymbolEventNames$1 = {};
const wrapFn = function(event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) return;
    let eventNameSymbol = zoneSymbolEventNames$1[event.type];
    if (!eventNameSymbol) eventNameSymbol = zoneSymbolEventNames$1[event.type] = zoneSymbol("ON_PROPERTY" + event.type);
    const target = this || event.target || _global;
    const listener = target[eventNameSymbol];
    let result;
    if (isBrowser && target === internalWindow && event.type === "error") {
        // window.onerror have different signature
        // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
        // and onerror callback will prevent default when callback return true
        const errorEvent = event;
        result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
        if (result === true) event.preventDefault();
    } else {
        result = listener && listener.apply(this, arguments);
        if (result != undefined && !result) event.preventDefault();
    }
    return result;
};
function patchProperty(obj, prop, prototype) {
    let desc = ObjectGetOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) desc = {
            enumerable: true,
            configurable: true
        };
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) return;
    const onPropPatchedSymbol = zoneSymbol("on" + prop + "patched");
    if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) return;
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    const originalDescGet = desc.get;
    const originalDescSet = desc.set;
    // slice(2) cuz 'onclick' -> 'click', etc
    const eventName = prop.slice(2);
    let eventNameSymbol = zoneSymbolEventNames$1[eventName];
    if (!eventNameSymbol) eventNameSymbol = zoneSymbolEventNames$1[eventName] = zoneSymbol("ON_PROPERTY" + eventName);
    desc.set = function(newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        let target = this;
        if (!target && obj === _global) target = _global;
        if (!target) return;
        const previousValue = target[eventNameSymbol];
        if (typeof previousValue === "function") target.removeEventListener(eventName, wrapFn);
        // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet
        originalDescSet && originalDescSet.call(target, null);
        target[eventNameSymbol] = newValue;
        if (typeof newValue === "function") target.addEventListener(eventName, wrapFn, false);
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function() {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        let target = this;
        if (!target && obj === _global) target = _global;
        if (!target) return null;
        const listener = target[eventNameSymbol];
        if (listener) return listener;
        else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            let value = originalDescGet.call(this);
            if (value) {
                desc.set.call(this, value);
                if (typeof target[REMOVE_ATTRIBUTE] === "function") target.removeAttribute(prop);
                return value;
            }
        }
        return null;
    };
    ObjectDefineProperty(obj, prop, desc);
    obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype) {
    if (properties) for(let i = 0; i < properties.length; i++)patchProperty(obj, "on" + properties[i], prototype);
    else {
        const onProperties = [];
        for(const prop in obj)if (prop.slice(0, 2) == "on") onProperties.push(prop);
        for(let j = 0; j < onProperties.length; j++)patchProperty(obj, onProperties[j], prototype);
    }
}
const originalInstanceKey = zoneSymbol("originalInstance");
// wrap some native API on `window`
function patchClass(className) {
    const OriginalClass = _global[className];
    if (!OriginalClass) return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function() {
        const a = bindArguments(arguments, className);
        switch(a.length){
            case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;
            case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;
            case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;
            case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;
            case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;
            default:
                throw new Error("Arg list too long.");
        }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    const instance = new OriginalClass(function() {});
    let prop;
    for(prop in instance){
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === "XMLHttpRequest" && prop === "responseBlob") continue;
        (function(prop) {
            if (typeof instance[prop] === "function") _global[className].prototype[prop] = function() {
                return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
            };
            else ObjectDefineProperty(_global[className].prototype, prop, {
                set: function(fn) {
                    if (typeof fn === "function") {
                        this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + "." + prop);
                        // keep callback in wrapped function so we can
                        // use it in Function.prototype.toString to return
                        // the native one.
                        attachOriginToPatched(this[originalInstanceKey][prop], fn);
                    } else this[originalInstanceKey][prop] = fn;
                },
                get: function() {
                    return this[originalInstanceKey][prop];
                }
            });
        })(prop);
    }
    for(prop in OriginalClass)if (prop !== "prototype" && OriginalClass.hasOwnProperty(prop)) _global[className][prop] = OriginalClass[prop];
}
function patchMethod(target, name, patchFn) {
    let proto = target;
    while(proto && !proto.hasOwnProperty(name))proto = ObjectGetPrototypeOf(proto);
    if (!proto && target[name]) // somehow we did not find it, but we can see it. This happens on IE for Window properties.
    proto = target;
    const delegateName = zoneSymbol(name);
    let delegate = null;
    if (proto && (!(delegate = proto[delegateName]) || !proto.hasOwnProperty(delegateName))) {
        delegate = proto[delegateName] = proto[name];
        // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
        const desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
            const patchDelegate = patchFn(delegate, delegateName, name);
            proto[name] = function() {
                return patchDelegate(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
        }
    }
    return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
    let setNative = null;
    function scheduleTask(task) {
        const data = task.data;
        data.args[data.cbIdx] = function() {
            task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
    }
    setNative = patchMethod(obj, funcName, (delegate)=>function(self1, args) {
            const meta = metaCreator(self1, args);
            if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === "function") return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
            else // cause an error by calling it directly.
            return delegate.apply(self1, args);
        });
}
function attachOriginToPatched(patched, original) {
    patched[zoneSymbol("OriginalDelegate")] = original;
}
let isDetectedIEOrEdge = false;
let ieOrEdge = false;
function isIE() {
    try {
        const ua = internalWindow.navigator.userAgent;
        if (ua.indexOf("MSIE ") !== -1 || ua.indexOf("Trident/") !== -1) return true;
    } catch (error) {}
    return false;
}
function isIEOrEdge() {
    if (isDetectedIEOrEdge) return ieOrEdge;
    isDetectedIEOrEdge = true;
    try {
        const ua = internalWindow.navigator.userAgent;
        if (ua.indexOf("MSIE ") !== -1 || ua.indexOf("Trident/") !== -1 || ua.indexOf("Edge/") !== -1) ieOrEdge = true;
    } catch (error) {}
    return ieOrEdge;
}
Zone.__load_patch("ZoneAwarePromise", (global, Zone1, api)=>{
    const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    const ObjectDefineProperty = Object.defineProperty;
    function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
            const className = obj.constructor && obj.constructor.name;
            return (className ? className : "") + ": " + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    const __symbol__ = api.symbol;
    const _uncaughtPromiseErrors = [];
    const isDisableWrappingUncaughtPromiseRejection = global[__symbol__("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")] !== false;
    const symbolPromise = __symbol__("Promise");
    const symbolThen = __symbol__("then");
    const creationTrace = "__creationTrace__";
    api.onUnhandledError = (e)=>{
        if (api.showUncaughtError()) {
            const rejection = e && e.rejection;
            if (rejection) console.error("Unhandled Promise rejection:", rejection instanceof Error ? rejection.message : rejection, "; Zone:", e.zone.name, "; Task:", e.task && e.task.source, "; Value:", rejection, rejection instanceof Error ? rejection.stack : undefined);
            else console.error(e);
        }
    };
    api.microtaskDrainDone = ()=>{
        while(_uncaughtPromiseErrors.length){
            const uncaughtPromiseError = _uncaughtPromiseErrors.shift();
            try {
                uncaughtPromiseError.zone.runGuarded(()=>{
                    if (uncaughtPromiseError.throwOriginal) throw uncaughtPromiseError.rejection;
                    throw uncaughtPromiseError;
                });
            } catch (error) {
                handleUnhandledRejection(error);
            }
        }
    };
    const UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__("unhandledPromiseRejectionHandler");
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            const handler = Zone1[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
            if (typeof handler === "function") handler.call(this, e);
        } catch (err) {}
    }
    function isThenable(value) {
        return value && value.then;
    }
    function forwardResolution(value) {
        return value;
    }
    function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
    }
    const symbolState = __symbol__("state");
    const symbolValue = __symbol__("value");
    const symbolFinally = __symbol__("finally");
    const symbolParentPromiseValue = __symbol__("parentPromiseValue");
    const symbolParentPromiseState = __symbol__("parentPromiseState");
    const source = "Promise.then";
    const UNRESOLVED = null;
    const RESOLVED = true;
    const REJECTED = false;
    const REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return (v)=>{
            try {
                resolvePromise(promise, state, v);
            } catch (err) {
                resolvePromise(promise, false, err);
            }
        // Do not return value or you will break the Promise spec.
        };
    }
    const once = function() {
        let wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function() {
                if (wasCalled) return;
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    const TYPE_ERROR = "Promise resolved with itself";
    const CURRENT_TASK_TRACE_SYMBOL = __symbol__("currentTaskTrace");
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        const onceWrapper = once();
        if (promise === value) throw new TypeError(TYPE_ERROR);
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            let then = null;
            try {
                if (typeof value === "object" || typeof value === "function") then = value && value.then;
            } catch (err) {
                onceWrapper(()=>{
                    resolvePromise(promise, false, err);
                })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            } else if (state !== REJECTED && typeof then === "function") try {
                then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
            } catch (err) {
                onceWrapper(()=>{
                    resolvePromise(promise, false, err);
                })();
            }
            else {
                promise[symbolState] = state;
                const queue = promise[symbolValue];
                promise[symbolValue] = value;
                if (promise[symbolFinally] === symbolFinally) // the promise is generated by Promise.prototype.finally
                {
                    if (state === RESOLVED) {
                        // the state is resolved, should ignore the value
                        // and use parent promise value
                        promise[symbolState] = promise[symbolParentPromiseState];
                        promise[symbolValue] = promise[symbolParentPromiseValue];
                    }
                }
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    // check if longStackTraceZone is here
                    const trace = Zone1.currentTask && Zone1.currentTask.data && Zone1.currentTask.data[creationTrace];
                    if (trace) // only keep the long stack trace into error when in longStackTraceZone
                    ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
                        configurable: true,
                        enumerable: false,
                        writable: true,
                        value: trace
                    });
                }
                for(let i = 0; i < queue.length;)scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    let uncaughtPromiseError = value;
                    try {
                        // Here we throws a new Error to print more readable error log
                        // and if the value is not an error, zone.js builds an `Error`
                        // Object here to attach the stack information.
                        throw new Error("Uncaught (in promise): " + readableObjectToString(value) + (value && value.stack ? "\n" + value.stack : ""));
                    } catch (err) {
                        uncaughtPromiseError = err;
                    }
                    if (isDisableWrappingUncaughtPromiseRejection) // If disable wrapping uncaught promise reject
                    // use the value instead of wrapping it.
                    uncaughtPromiseError.throwOriginal = true;
                    uncaughtPromiseError.rejection = value;
                    uncaughtPromiseError.promise = promise;
                    uncaughtPromiseError.zone = Zone1.current;
                    uncaughtPromiseError.task = Zone1.currentTask;
                    _uncaughtPromiseErrors.push(uncaughtPromiseError);
                    api.scheduleMicroTask(); // to make sure that it is running
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    const REJECTION_HANDLED_HANDLER = __symbol__("rejectionHandledHandler");
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                const handler = Zone1[REJECTION_HANDLED_HANDLER];
                if (handler && typeof handler === "function") handler.call(this, {
                    rejection: promise[symbolValue],
                    promise: promise
                });
            } catch (err) {}
            promise[symbolState] = REJECTED;
            for(let i = 0; i < _uncaughtPromiseErrors.length; i++)if (promise === _uncaughtPromiseErrors[i].promise) _uncaughtPromiseErrors.splice(i, 1);
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        const promiseState = promise[symbolState];
        const delegate = promiseState ? typeof onFulfilled === "function" ? onFulfilled : forwardResolution : typeof onRejected === "function" ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, ()=>{
            try {
                const parentPromiseValue = promise[symbolValue];
                const isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];
                if (isFinallyPromise) {
                    // if the promise is generated from finally call, keep parent promise's state and value
                    chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                    chainPromise[symbolParentPromiseState] = promiseState;
                }
                // should not pass value to finally callback
                const value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [
                    parentPromiseValue
                ]);
                resolvePromise(chainPromise, true, value);
            } catch (error) {
                // if error occurs, should always return this error
                resolvePromise(chainPromise, false, error);
            }
        }, chainPromise);
    }
    const ZONE_AWARE_PROMISE_TO_STRING = "function ZoneAwarePromise() { [native code] }";
    const noop = function() {};
    const AggregateError = global.AggregateError;
    class ZoneAwarePromise {
        static toString() {
            return ZONE_AWARE_PROMISE_TO_STRING;
        }
        static resolve(value) {
            if (value instanceof ZoneAwarePromise) return value;
            return resolvePromise(new this(null), RESOLVED, value);
        }
        static reject(error) {
            return resolvePromise(new this(null), REJECTED, error);
        }
        static withResolvers() {
            const result = {};
            result.promise = new ZoneAwarePromise((res, rej)=>{
                result.resolve = res;
                result.reject = rej;
            });
            return result;
        }
        static any(values) {
            if (!values || typeof values[Symbol.iterator] !== "function") return Promise.reject(new AggregateError([], "All promises were rejected"));
            const promises = [];
            let count = 0;
            try {
                for (let v of values){
                    count++;
                    promises.push(ZoneAwarePromise.resolve(v));
                }
            } catch (err) {
                return Promise.reject(new AggregateError([], "All promises were rejected"));
            }
            if (count === 0) return Promise.reject(new AggregateError([], "All promises were rejected"));
            let finished = false;
            const errors = [];
            return new ZoneAwarePromise((resolve, reject)=>{
                for(let i = 0; i < promises.length; i++)promises[i].then((v)=>{
                    if (finished) return;
                    finished = true;
                    resolve(v);
                }, (err)=>{
                    errors.push(err);
                    count--;
                    if (count === 0) {
                        finished = true;
                        reject(new AggregateError(errors, "All promises were rejected"));
                    }
                });
            });
        }
        static race(values) {
            let resolve;
            let reject;
            let promise = new this((res, rej)=>{
                resolve = res;
                reject = rej;
            });
            function onResolve(value) {
                resolve(value);
            }
            function onReject(error) {
                reject(error);
            }
            for (let value of values){
                if (!isThenable(value)) value = this.resolve(value);
                value.then(onResolve, onReject);
            }
            return promise;
        }
        static all(values) {
            return ZoneAwarePromise.allWithCallback(values);
        }
        static allSettled(values) {
            const P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
            return P.allWithCallback(values, {
                thenCallback: (value)=>({
                        status: "fulfilled",
                        value
                    }),
                errorCallback: (err)=>({
                        status: "rejected",
                        reason: err
                    })
            });
        }
        static allWithCallback(values, callback) {
            let resolve;
            let reject;
            let promise = new this((res, rej)=>{
                resolve = res;
                reject = rej;
            });
            // Start at 2 to prevent prematurely resolving if .then is called immediately.
            let unresolvedCount = 2;
            let valueIndex = 0;
            const resolvedValues = [];
            for (let value of values){
                if (!isThenable(value)) value = this.resolve(value);
                const curValueIndex = valueIndex;
                try {
                    value.then((value)=>{
                        resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
                        unresolvedCount--;
                        if (unresolvedCount === 0) resolve(resolvedValues);
                    }, (err)=>{
                        if (!callback) reject(err);
                        else {
                            resolvedValues[curValueIndex] = callback.errorCallback(err);
                            unresolvedCount--;
                            if (unresolvedCount === 0) resolve(resolvedValues);
                        }
                    });
                } catch (thenErr) {
                    reject(thenErr);
                }
                unresolvedCount++;
                valueIndex++;
            }
            // Make the unresolvedCount zero-based again.
            unresolvedCount -= 2;
            if (unresolvedCount === 0) resolve(resolvedValues);
            return promise;
        }
        constructor(executor){
            const promise = this;
            if (!(promise instanceof ZoneAwarePromise)) throw new Error("Must be an instanceof Promise.");
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                const onceWrapper = once();
                executor && executor(onceWrapper(makeResolver(promise, RESOLVED)), onceWrapper(makeResolver(promise, REJECTED)));
            } catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        get [Symbol.toStringTag]() {
            return "Promise";
        }
        get [Symbol.species]() {
            return ZoneAwarePromise;
        }
        then(onFulfilled, onRejected) {
            // We must read `Symbol.species` safely because `this` may be anything. For instance, `this`
            // may be an object without a prototype (created through `Object.create(null)`); thus
            // `this.constructor` will be undefined. One of the use cases is SystemJS creating
            // prototype-less objects (modules) via `Object.create(null)`. The SystemJS creates an empty
            // object and copies promise properties into that object (within the `getOrCreateLoad`
            // function). The zone.js then checks if the resolved value has the `then` method and invokes
            // it with the `value` context. Otherwise, this will throw an error: `TypeError: Cannot read
            // properties of undefined (reading 'Symbol(Symbol.species)')`.
            let C = this.constructor?.[Symbol.species];
            if (!C || typeof C !== "function") C = this.constructor || ZoneAwarePromise;
            const chainPromise = new C(noop);
            const zone = Zone1.current;
            if (this[symbolState] == UNRESOLVED) this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            else scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            return chainPromise;
        }
        catch(onRejected) {
            return this.then(null, onRejected);
        }
        finally(onFinally) {
            // See comment on the call to `then` about why thee `Symbol.species` is safely accessed.
            let C = this.constructor?.[Symbol.species];
            if (!C || typeof C !== "function") C = ZoneAwarePromise;
            const chainPromise = new C(noop);
            chainPromise[symbolFinally] = symbolFinally;
            const zone = Zone1.current;
            if (this[symbolState] == UNRESOLVED) this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            else scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            return chainPromise;
        }
    }
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise["resolve"] = ZoneAwarePromise.resolve;
    ZoneAwarePromise["reject"] = ZoneAwarePromise.reject;
    ZoneAwarePromise["race"] = ZoneAwarePromise.race;
    ZoneAwarePromise["all"] = ZoneAwarePromise.all;
    const NativePromise = global[symbolPromise] = global["Promise"];
    global["Promise"] = ZoneAwarePromise;
    const symbolThenPatched = __symbol__("thenPatched");
    function patchThen(Ctor) {
        const proto = Ctor.prototype;
        const prop = ObjectGetOwnPropertyDescriptor(proto, "then");
        if (prop && (prop.writable === false || !prop.configurable)) // check Ctor.prototype.then propertyDescriptor is writable or not
        // in meteor env, writable is false, we should ignore such case
        return;
        const originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function(onResolve, onReject) {
            const wrapped = new ZoneAwarePromise((resolve, reject)=>{
                originalThen.call(this, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    api.patchThen = patchThen;
    function zoneify(fn) {
        return function(self1, args) {
            let resultPromise = fn.apply(self1, args);
            if (resultPromise instanceof ZoneAwarePromise) return resultPromise;
            let ctor = resultPromise.constructor;
            if (!ctor[symbolThenPatched]) patchThen(ctor);
            return resultPromise;
        };
    }
    if (NativePromise) {
        patchThen(NativePromise);
        patchMethod(global, "fetch", (delegate)=>zoneify(delegate));
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone1.__symbol__("uncaughtPromiseErrors")] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch("toString", (global)=>{
    // patch Func.prototype.toString to let them look like native
    const originalFunctionToString = Function.prototype.toString;
    const ORIGINAL_DELEGATE_SYMBOL = zoneSymbol("OriginalDelegate");
    const PROMISE_SYMBOL = zoneSymbol("Promise");
    const ERROR_SYMBOL = zoneSymbol("Error");
    const newFunctionToString = function toString() {
        if (typeof this === "function") {
            const originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
            if (originalDelegate) {
                if (typeof originalDelegate === "function") return originalFunctionToString.call(originalDelegate);
                else return Object.prototype.toString.call(originalDelegate);
            }
            if (this === Promise) {
                const nativePromise = global[PROMISE_SYMBOL];
                if (nativePromise) return originalFunctionToString.call(nativePromise);
            }
            if (this === Error) {
                const nativeError = global[ERROR_SYMBOL];
                if (nativeError) return originalFunctionToString.call(nativeError);
            }
        }
        return originalFunctionToString.call(this);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    // patch Object.prototype.toString to let them look like native
    const originalObjectToString = Object.prototype.toString;
    const PROMISE_OBJECT_TO_STRING = "[object Promise]";
    Object.prototype.toString = function() {
        if (typeof Promise === "function" && this instanceof Promise) return PROMISE_OBJECT_TO_STRING;
        return originalObjectToString.call(this);
    };
});
/**
 * @fileoverview
 * @suppress {missingRequire}
 */ let passiveSupported = false;
if (typeof window !== "undefined") try {
    const options = Object.defineProperty({}, "passive", {
        get: function() {
            passiveSupported = true;
        }
    });
    // Note: We pass the `options` object as the event handler too. This is not compatible with the
    // signature of `addEventListener` or `removeEventListener` but enables us to remove the handler
    // without an actual handler.
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
} catch (err) {
    passiveSupported = false;
}
// an identifier to tell ZoneTask do not create a new invoke closure
const OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
};
const zoneSymbolEventNames = {};
const globalSources = {};
const EVENT_NAME_SYMBOL_REGX = new RegExp("^" + ZONE_SYMBOL_PREFIX + "(\\w+)(true|false)$");
const IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol("propagationStopped");
function prepareEventNames(eventName, eventNameToString) {
    const falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
    const trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
    const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
    const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
    zoneSymbolEventNames[eventName] = {};
    zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
    zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
}
function patchEventTarget(_global, api, apis, patchOptions) {
    const ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
    const REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
    const LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || "eventListeners";
    const REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || "removeAllListeners";
    const zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    const ADD_EVENT_LISTENER_SOURCE = "." + ADD_EVENT_LISTENER + ":";
    const PREPEND_EVENT_LISTENER = "prependListener";
    const PREPEND_EVENT_LISTENER_SOURCE = "." + PREPEND_EVENT_LISTENER + ":";
    const invokeTask = function(task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) return;
        const delegate = task.callback;
        if (typeof delegate === "object" && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = (event)=>delegate.handleEvent(event);
            task.originalDelegate = delegate;
        }
        // invoke static task.invoke
        // need to try/catch error here, otherwise, the error in one event listener
        // will break the executions of the other event listeners. Also error will
        // not remove the event listener when `once` options is true.
        let error;
        try {
            task.invoke(task, target, [
                event
            ]);
        } catch (err) {
            error = err;
        }
        const options = task.options;
        if (options && typeof options === "object" && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            const delegate = task.originalDelegate ? task.originalDelegate : task.callback;
            target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate, options);
        }
        return error;
    };
    function globalCallback(context, event, isCapture) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) return;
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        const target = context || event.target || _global;
        const tasks = target[zoneSymbolEventNames[event.type][isCapture ? TRUE_STR : FALSE_STR]];
        if (tasks) {
            const errors = [];
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                const err = invokeTask(tasks[0], target, event);
                err && errors.push(err);
            } else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                const copyTasks = tasks.slice();
                for(let i = 0; i < copyTasks.length; i++){
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) break;
                    const err = invokeTask(copyTasks[i], target, event);
                    err && errors.push(err);
                }
            }
            // Since there is only one error, we don't need to schedule microTask
            // to throw the error.
            if (errors.length === 1) throw errors[0];
            else for(let i = 0; i < errors.length; i++){
                const err = errors[i];
                api.nativeScheduleMicroTask(()=>{
                    throw err;
                });
            }
        }
    }
    // global shared zoneAwareCallback to handle all event callback with capture = false
    const globalZoneAwareCallback = function(event) {
        return globalCallback(this, event, false);
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    const globalZoneAwareCaptureCallback = function(event) {
        return globalCallback(this, event, true);
    };
    function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) return false;
        let useGlobalCallback = true;
        if (patchOptions && patchOptions.useG !== undefined) useGlobalCallback = patchOptions.useG;
        const validateHandler = patchOptions && patchOptions.vh;
        let checkDuplicate = true;
        if (patchOptions && patchOptions.chkDup !== undefined) checkDuplicate = patchOptions.chkDup;
        let returnTarget = false;
        if (patchOptions && patchOptions.rt !== undefined) returnTarget = patchOptions.rt;
        let proto = obj;
        while(proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER))proto = ObjectGetPrototypeOf(proto);
        if (!proto && obj[ADD_EVENT_LISTENER]) // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = obj;
        if (!proto) return false;
        if (proto[zoneSymbolAddEventListener]) return false;
        const eventNameToString = patchOptions && patchOptions.eventNameToString;
        // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data
        const taskData = {};
        const nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        const nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
        const nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
        const nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        let nativePrependEventListener;
        if (patchOptions && patchOptions.prepend) nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] = proto[patchOptions.prepend];
        /**
         * This util function will build an option object with passive option
         * to handle all possible input from the user.
         */ function buildEventListenerOptions(options, passive) {
            if (!passiveSupported && typeof options === "object" && options) // doesn't support passive but user want to pass an object as options.
            // this will not work on some old browser, so we just pass a boolean
            // as useCapture parameter
            return !!options.capture;
            if (!passiveSupported || !passive) return options;
            if (typeof options === "boolean") return {
                capture: options,
                passive: true
            };
            if (!options) return {
                passive: true
            };
            if (typeof options === "object" && options.passive !== false) return {
                ...options,
                passive: true
            };
            return options;
        }
        const customScheduleGlobal = function(task) {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) return;
            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };
        const customCancelGlobal = function(task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
                const symbolEventNames = zoneSymbolEventNames[task.eventName];
                let symbolEventName;
                if (symbolEventNames) symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                const existingTasks = symbolEventName && task.target[symbolEventName];
                if (existingTasks) for(let i = 0; i < existingTasks.length; i++){
                    const existingTask = existingTasks[i];
                    if (existingTask === task) {
                        existingTasks.splice(i, 1);
                        // set isRemoved to data for faster invokeTask check
                        task.isRemoved = true;
                        if (existingTasks.length === 0) {
                            // all tasks for the eventName + capture have gone,
                            // remove globalZoneAwareCallback and remove the task cache from target
                            task.allRemoved = true;
                            task.target[symbolEventName] = null;
                        }
                        break;
                    }
                }
            }
            // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return
            if (!task.allRemoved) return;
            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };
        const customScheduleNonGlobal = function(task) {
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        const customSchedulePrepend = function(task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        const customCancelNonGlobal = function(task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };
        const customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        const customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        const compareTaskCallbackVsDelegate = function(task, delegate) {
            const typeOfDelegate = typeof delegate;
            return typeOfDelegate === "function" && task.callback === delegate || typeOfDelegate === "object" && task.originalDelegate === delegate;
        };
        const compare = patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;
        const unpatchedEvents = Zone[zoneSymbol("UNPATCHED_EVENTS")];
        const passiveEvents = _global[zoneSymbol("PASSIVE_EVENTS")];
        const makeAddListener = function(nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget = false, prepend = false) {
            return function() {
                const target = this || _global;
                let eventName = arguments[0];
                if (patchOptions && patchOptions.transferEventName) eventName = patchOptions.transferEventName(eventName);
                let delegate = arguments[1];
                if (!delegate) return nativeListener.apply(this, arguments);
                if (isNode && eventName === "uncaughtException") // don't patch uncaughtException of nodejs to prevent endless loop
                return nativeListener.apply(this, arguments);
                // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke
                let isHandleEvent = false;
                if (typeof delegate !== "function") {
                    if (!delegate.handleEvent) return nativeListener.apply(this, arguments);
                    isHandleEvent = true;
                }
                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) return;
                const passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
                const options = buildEventListenerOptions(arguments[2], passive);
                const signal = options && typeof options === "object" && options.signal && typeof options.signal === "object" ? options.signal : undefined;
                if (signal?.aborted) // the signal is an aborted one, just return without attaching the event listener.
                return;
                if (unpatchedEvents) {
                    // check unpatched list
                    for(let i = 0; i < unpatchedEvents.length; i++)if (eventName === unpatchedEvents[i]) {
                        if (passive) return nativeListener.call(target, eventName, delegate, options);
                        else return nativeListener.apply(this, arguments);
                    }
                }
                const capture = !options ? false : typeof options === "boolean" ? true : options.capture;
                const once = options && typeof options === "object" ? options.once : false;
                const zone = Zone.current;
                let symbolEventNames = zoneSymbolEventNames[eventName];
                if (!symbolEventNames) {
                    prepareEventNames(eventName, eventNameToString);
                    symbolEventNames = zoneSymbolEventNames[eventName];
                }
                const symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                let existingTasks = target[symbolEventName];
                let isExisting = false;
                if (existingTasks) {
                    // already have task registered
                    isExisting = true;
                    if (checkDuplicate) for(let i = 0; i < existingTasks.length; i++){
                        if (compare(existingTasks[i], delegate)) // same callback, same capture, same event name, just return
                        return;
                    }
                } else existingTasks = target[symbolEventName] = [];
                let source;
                const constructorName = target.constructor["name"];
                const targetSource = globalSources[constructorName];
                if (targetSource) source = targetSource[eventName];
                if (!source) source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
                // do not create a new object as task.data to pass those things
                // just use the global shared one
                taskData.options = options;
                if (once) // if addEventListener with once options, we don't pass it to
                // native addEventListener, instead we keep the once setting
                // and handle ourselves.
                taskData.options.once = false;
                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                const data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
                // keep taskData into data to allow onScheduleEventTask to access the task information
                if (data) data.taskData = taskData;
                if (signal) // if addEventListener with signal options, we don't pass it to
                // native addEventListener, instead we keep the signal setting
                // and handle ourselves.
                taskData.options.signal = undefined;
                const task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                if (signal) {
                    // after task is scheduled, we need to store the signal back to task.options
                    taskData.options.signal = signal;
                    nativeListener.call(signal, "abort", ()=>{
                        task.zone.cancelTask(task);
                    }, {
                        once: true
                    });
                }
                // should clear taskData.target to avoid memory leak
                // issue, https://github.com/angular/angular/issues/20442
                taskData.target = null;
                // need to clear up taskData because it is a global object
                if (data) data.taskData = null;
                // have to save those information to task in case
                // application may call task.zone.cancelTask() directly
                if (once) options.once = true;
                if (!(!passiveSupported && typeof task.options === "boolean")) // if not support passive, and we pass an option object
                // to addEventListener, we should save the options to task
                task.options = options;
                task.target = target;
                task.capture = capture;
                task.eventName = eventName;
                if (isHandleEvent) // save original delegate for compare to check duplicate
                task.originalDelegate = delegate;
                if (!prepend) existingTasks.push(task);
                else existingTasks.unshift(task);
                if (returnTarget) return target;
            };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
        if (nativePrependEventListener) proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        proto[REMOVE_EVENT_LISTENER] = function() {
            const target = this || _global;
            let eventName = arguments[0];
            if (patchOptions && patchOptions.transferEventName) eventName = patchOptions.transferEventName(eventName);
            const options = arguments[2];
            const capture = !options ? false : typeof options === "boolean" ? true : options.capture;
            const delegate = arguments[1];
            if (!delegate) return nativeRemoveEventListener.apply(this, arguments);
            if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) return;
            const symbolEventNames = zoneSymbolEventNames[eventName];
            let symbolEventName;
            if (symbolEventNames) symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            const existingTasks = symbolEventName && target[symbolEventName];
            if (existingTasks) for(let i = 0; i < existingTasks.length; i++){
                const existingTask = existingTasks[i];
                if (compare(existingTask, delegate)) {
                    existingTasks.splice(i, 1);
                    // set isRemoved to data for faster invokeTask check
                    existingTask.isRemoved = true;
                    if (existingTasks.length === 0) {
                        // all tasks for the eventName + capture have gone,
                        // remove globalZoneAwareCallback and remove the task cache from target
                        existingTask.allRemoved = true;
                        target[symbolEventName] = null;
                        // in the target, we have an event listener which is added by on_property
                        // such as target.onclick = function() {}, so we need to clear this internal
                        // property too if all delegates all removed
                        if (typeof eventName === "string") {
                            const onPropertySymbol = ZONE_SYMBOL_PREFIX + "ON_PROPERTY" + eventName;
                            target[onPropertySymbol] = null;
                        }
                    }
                    existingTask.zone.cancelTask(existingTask);
                    if (returnTarget) return target;
                    return;
                }
            }
            // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.
            return nativeRemoveEventListener.apply(this, arguments);
        };
        proto[LISTENERS_EVENT_LISTENER] = function() {
            const target = this || _global;
            let eventName = arguments[0];
            if (patchOptions && patchOptions.transferEventName) eventName = patchOptions.transferEventName(eventName);
            const listeners = [];
            const tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
            for(let i = 0; i < tasks.length; i++){
                const task = tasks[i];
                let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
            }
            return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function() {
            const target = this || _global;
            let eventName = arguments[0];
            if (!eventName) {
                const keys = Object.keys(target);
                for(let i = 0; i < keys.length; i++){
                    const prop = keys[i];
                    const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    let evtName = match && match[1];
                    // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed
                    if (evtName && evtName !== "removeListener") this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                }
                // remove removeListener listener finally
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, "removeListener");
            } else {
                if (patchOptions && patchOptions.transferEventName) eventName = patchOptions.transferEventName(eventName);
                const symbolEventNames = zoneSymbolEventNames[eventName];
                if (symbolEventNames) {
                    const symbolEventName = symbolEventNames[FALSE_STR];
                    const symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    const tasks = target[symbolEventName];
                    const captureTasks = target[symbolCaptureEventName];
                    if (tasks) {
                        const removeTasks = tasks.slice();
                        for(let i = 0; i < removeTasks.length; i++){
                            const task = removeTasks[i];
                            let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                    if (captureTasks) {
                        const removeTasks = captureTasks.slice();
                        for(let i = 0; i < removeTasks.length; i++){
                            const task = removeTasks[i];
                            let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                }
            }
            if (returnTarget) return this;
        };
        // for native toString patch
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        if (nativeListeners) attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        return true;
    }
    let results = [];
    for(let i = 0; i < apis.length; i++)results[i] = patchEventTargetMethods(apis[i], patchOptions);
    return results;
}
function findEventTasks(target, eventName) {
    if (!eventName) {
        const foundTasks = [];
        for(let prop in target){
            const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
            let evtName = match && match[1];
            if (evtName && (!eventName || evtName === eventName)) {
                const tasks = target[prop];
                if (tasks) for(let i = 0; i < tasks.length; i++)foundTasks.push(tasks[i]);
            }
        }
        return foundTasks;
    }
    let symbolEventName = zoneSymbolEventNames[eventName];
    if (!symbolEventName) {
        prepareEventNames(eventName);
        symbolEventName = zoneSymbolEventNames[eventName];
    }
    const captureFalseTasks = target[symbolEventName[FALSE_STR]];
    const captureTrueTasks = target[symbolEventName[TRUE_STR]];
    if (!captureFalseTasks) return captureTrueTasks ? captureTrueTasks.slice() : [];
    else return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
}
function patchEventPrototype(global, api) {
    const Event = global["Event"];
    if (Event && Event.prototype) api.patchMethod(Event.prototype, "stopImmediatePropagation", (delegate)=>function(self1, args) {
            self1[IMMEDIATE_PROPAGATION_SYMBOL] = true;
            // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not
            delegate && delegate.apply(self1, args);
        });
}
function patchCallbacks(api, target, targetName, method, callbacks) {
    const symbol = Zone.__symbol__(method);
    if (target[symbol]) return;
    const nativeDelegate = target[symbol] = target[method];
    target[method] = function(name, opts, options) {
        if (opts && opts.prototype) callbacks.forEach(function(callback) {
            const source = `${targetName}.${method}::` + callback;
            const prototype = opts.prototype;
            // Note: the `patchCallbacks` is used for patching the `document.registerElement` and
            // `customElements.define`. We explicitly wrap the patching code into try-catch since
            // callbacks may be already patched by other web components frameworks (e.g. LWC), and they
            // make those properties non-writable. This means that patching callback will throw an error
            // `cannot assign to read-only property`. See this code as an example:
            // https://github.com/salesforce/lwc/blob/master/packages/@lwc/engine-core/src/framework/base-bridge-element.ts#L180-L186
            // We don't want to stop the application rendering if we couldn't patch some
            // callback, e.g. `attributeChangedCallback`.
            try {
                if (prototype.hasOwnProperty(callback)) {
                    const descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
                    if (descriptor && descriptor.value) {
                        descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
                        api._redefineProperty(opts.prototype, callback, descriptor);
                    } else if (prototype[callback]) prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                } else if (prototype[callback]) prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
            } catch  {
            // Note: we leave the catch block empty since there's no way to handle the error related
            // to non-writable property.
            }
        });
        return nativeDelegate.call(target, name, opts, options);
    };
    api.attachOriginToPatched(target[method], nativeDelegate);
}
/**
 * @fileoverview
 * @suppress {globalThis}
 */ function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties || ignoreProperties.length === 0) return onProperties;
    const tip = ignoreProperties.filter((ip)=>ip.target === target);
    if (!tip || tip.length === 0) return onProperties;
    const targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter((op)=>targetIgnoreProperties.indexOf(op) === -1);
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) return;
    const filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
}
/**
 * Get all event name properties which the event name startsWith `on`
 * from the target object itself, inherited properties are not considered.
 */ function getOnEventNames(target) {
    return Object.getOwnPropertyNames(target).filter((name)=>name.startsWith("on") && name.length > 2).map((name)=>name.substring(2));
}
function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) return;
    if (Zone[api.symbol("patchEvents")]) // events are already been patched by legacy patch.
    return;
    const ignoreProperties = _global["__Zone_ignore_on_properties"];
    // for browsers that we can patch the descriptor:  Chrome & Firefox
    let patchTargets = [];
    if (isBrowser) {
        const internalWindow = window;
        patchTargets = patchTargets.concat([
            "Document",
            "SVGElement",
            "Element",
            "HTMLElement",
            "HTMLBodyElement",
            "HTMLMediaElement",
            "HTMLFrameSetElement",
            "HTMLFrameElement",
            "HTMLIFrameElement",
            "HTMLMarqueeElement",
            "Worker"
        ]);
        const ignoreErrorProperties = isIE() ? [
            {
                target: internalWindow,
                ignoreProperties: [
                    "error"
                ]
            }
        ] : [];
        // in IE/Edge, onProp not exist in window object, but in WindowPrototype
        // so we need to pass WindowPrototype to check onProp exist or not
        patchFilteredProperties(internalWindow, getOnEventNames(internalWindow), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow));
    }
    patchTargets = patchTargets.concat([
        "XMLHttpRequest",
        "XMLHttpRequestEventTarget",
        "IDBIndex",
        "IDBRequest",
        "IDBOpenDBRequest",
        "IDBDatabase",
        "IDBTransaction",
        "IDBCursor",
        "WebSocket"
    ]);
    for(let i = 0; i < patchTargets.length; i++){
        const target = _global[patchTargets[i]];
        target && target.prototype && patchFilteredProperties(target.prototype, getOnEventNames(target.prototype), ignoreProperties);
    }
}
Zone.__load_patch("util", (global, Zone1, api)=>{
    // Collect native event names by looking at properties
    // on the global namespace, e.g. 'onclick'.
    const eventNames = getOnEventNames(global);
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
    api.patchMacroTask = patchMacroTask;
    // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
    // define which events will not be patched by `Zone.js`.
    // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
    // the name consistent with angular repo.
    // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
    // backwards compatibility.
    const SYMBOL_BLACK_LISTED_EVENTS = Zone1.__symbol__("BLACK_LISTED_EVENTS");
    const SYMBOL_UNPATCHED_EVENTS = Zone1.__symbol__("UNPATCHED_EVENTS");
    if (global[SYMBOL_UNPATCHED_EVENTS]) global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
    if (global[SYMBOL_BLACK_LISTED_EVENTS]) Zone1[SYMBOL_BLACK_LISTED_EVENTS] = Zone1[SYMBOL_UNPATCHED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
    api.patchEventPrototype = patchEventPrototype;
    api.patchEventTarget = patchEventTarget;
    api.isIEOrEdge = isIEOrEdge;
    api.ObjectDefineProperty = ObjectDefineProperty;
    api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
    api.ObjectCreate = ObjectCreate;
    api.ArraySlice = ArraySlice;
    api.patchClass = patchClass;
    api.wrapWithCurrentZone = wrapWithCurrentZone;
    api.filterProperties = filterProperties;
    api.attachOriginToPatched = attachOriginToPatched;
    api._redefineProperty = Object.defineProperty;
    api.patchCallbacks = patchCallbacks;
    api.getGlobalObjects = ()=>({
            globalSources,
            zoneSymbolEventNames,
            eventNames,
            isBrowser,
            isMix,
            isNode,
            TRUE_STR,
            FALSE_STR,
            ZONE_SYMBOL_PREFIX,
            ADD_EVENT_LISTENER_STR,
            REMOVE_EVENT_LISTENER_STR
        });
});
/**
 * @fileoverview
 * @suppress {missingRequire}
 */ function patchQueueMicrotask(global, api) {
    api.patchMethod(global, "queueMicrotask", (delegate)=>{
        return function(self1, args) {
            Zone.current.scheduleMicroTask("queueMicrotask", args[0]);
        };
    });
}
/**
 * @fileoverview
 * @suppress {missingRequire}
 */ const taskSymbol = zoneSymbol("zoneTask");
function patchTimer(window1, setName, cancelName, nameSuffix) {
    let setNative = null;
    let clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    const tasksByHandleId = {};
    function scheduleTask(task) {
        const data = task.data;
        data.args[0] = function() {
            return task.invoke.apply(this, arguments);
        };
        data.handleId = setNative.apply(window1, data.args);
        return task;
    }
    function clearTask(task) {
        return clearNative.call(window1, task.data.handleId);
    }
    setNative = patchMethod(window1, setName, (delegate)=>function(self1, args) {
            if (typeof args[0] === "function") {
                const options = {
                    isPeriodic: nameSuffix === "Interval",
                    delay: nameSuffix === "Timeout" || nameSuffix === "Interval" ? args[1] || 0 : undefined,
                    args: args
                };
                const callback = args[0];
                args[0] = function timer() {
                    try {
                        return callback.apply(this, arguments);
                    } finally{
                        // issue-934, task will be cancelled
                        // even it is a periodic task such as
                        // setInterval
                        // https://github.com/angular/angular/issues/40387
                        // Cleanup tasksByHandleId should be handled before scheduleTask
                        // Since some zoneSpec may intercept and doesn't trigger
                        // scheduleFn(scheduleTask) provided here.
                        if (!options.isPeriodic) {
                            if (typeof options.handleId === "number") // in non-nodejs env, we remove timerId
                            // from local cache
                            delete tasksByHandleId[options.handleId];
                            else if (options.handleId) // Node returns complex objects as handleIds
                            // we remove task reference from timer object
                            options.handleId[taskSymbol] = null;
                        }
                    }
                };
                const task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                if (!task) return task;
                // Node.js must additionally support the ref and unref functions.
                const handle = task.data.handleId;
                if (typeof handle === "number") // for non nodejs env, we save handleId: task
                // mapping in local cache for clearTimeout
                tasksByHandleId[handle] = task;
                else if (handle) // for nodejs env, we save task
                // reference in timerId Object for clearTimeout
                handle[taskSymbol] = task;
                // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                if (handle && handle.ref && handle.unref && typeof handle.ref === "function" && typeof handle.unref === "function") {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                }
                if (typeof handle === "number" || handle) return handle;
                return task;
            } else // cause an error by calling it directly.
            return delegate.apply(window1, args);
        });
    clearNative = patchMethod(window1, cancelName, (delegate)=>function(self1, args) {
            const id = args[0];
            let task;
            if (typeof id === "number") // non nodejs env.
            task = tasksByHandleId[id];
            else {
                // nodejs env.
                task = id && id[taskSymbol];
                // other environments.
                if (!task) task = id;
            }
            if (task && typeof task.type === "string") {
                if (task.state !== "notScheduled" && (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                    if (typeof id === "number") delete tasksByHandleId[id];
                    else if (id) id[taskSymbol] = null;
                    // Do not cancel already canceled functions
                    task.zone.cancelTask(task);
                }
            } else // cause an error by calling it directly.
            delegate.apply(window1, args);
        });
}
function patchCustomElements(_global, api) {
    const { isBrowser, isMix } = api.getGlobalObjects();
    if (!isBrowser && !isMix || !_global["customElements"] || !("customElements" in _global)) return;
    // https://html.spec.whatwg.org/multipage/custom-elements.html#concept-custom-element-definition-lifecycle-callbacks
    const callbacks = [
        "connectedCallback",
        "disconnectedCallback",
        "adoptedCallback",
        "attributeChangedCallback",
        "formAssociatedCallback",
        "formDisabledCallback",
        "formResetCallback",
        "formStateRestoreCallback"
    ];
    api.patchCallbacks(api, _global.customElements, "customElements", "define", callbacks);
}
function eventTargetPatch(_global, api) {
    if (Zone[api.symbol("patchEventTarget")]) // EventTarget is already patched.
    return;
    const { eventNames, zoneSymbolEventNames, TRUE_STR, FALSE_STR, ZONE_SYMBOL_PREFIX } = api.getGlobalObjects();
    //  predefine all __zone_symbol__ + eventName + true/false string
    for(let i = 0; i < eventNames.length; i++){
        const eventName = eventNames[i];
        const falseEventName = eventName + FALSE_STR;
        const trueEventName = eventName + TRUE_STR;
        const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames[eventName] = {};
        zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    }
    const EVENT_TARGET = _global["EventTarget"];
    if (!EVENT_TARGET || !EVENT_TARGET.prototype) return;
    api.patchEventTarget(_global, api, [
        EVENT_TARGET && EVENT_TARGET.prototype
    ]);
    return true;
}
function patchEvent(global, api) {
    api.patchEventPrototype(global, api);
}
/**
 * @fileoverview
 * @suppress {missingRequire}
 */ Zone.__load_patch("legacy", (global)=>{
    const legacyPatch = global[Zone.__symbol__("legacyPatch")];
    if (legacyPatch) legacyPatch();
});
Zone.__load_patch("timers", (global)=>{
    const set = "set";
    const clear = "clear";
    patchTimer(global, set, clear, "Timeout");
    patchTimer(global, set, clear, "Interval");
    patchTimer(global, set, clear, "Immediate");
});
Zone.__load_patch("requestAnimationFrame", (global)=>{
    patchTimer(global, "request", "cancel", "AnimationFrame");
    patchTimer(global, "mozRequest", "mozCancel", "AnimationFrame");
    patchTimer(global, "webkitRequest", "webkitCancel", "AnimationFrame");
});
Zone.__load_patch("blocking", (global, Zone1)=>{
    const blockingMethods = [
        "alert",
        "prompt",
        "confirm"
    ];
    for(let i = 0; i < blockingMethods.length; i++){
        const name = blockingMethods[i];
        patchMethod(global, name, (delegate, symbol, name)=>{
            return function(s, args) {
                return Zone1.current.run(delegate, global, args, name);
            };
        });
    }
});
Zone.__load_patch("EventTarget", (global, Zone1, api)=>{
    patchEvent(global, api);
    eventTargetPatch(global, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    const XMLHttpRequestEventTarget = global["XMLHttpRequestEventTarget"];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) api.patchEventTarget(global, api, [
        XMLHttpRequestEventTarget.prototype
    ]);
});
Zone.__load_patch("MutationObserver", (global, Zone1, api)=>{
    patchClass("MutationObserver");
    patchClass("WebKitMutationObserver");
});
Zone.__load_patch("IntersectionObserver", (global, Zone1, api)=>{
    patchClass("IntersectionObserver");
});
Zone.__load_patch("FileReader", (global, Zone1, api)=>{
    patchClass("FileReader");
});
Zone.__load_patch("on_property", (global, Zone1, api)=>{
    propertyDescriptorPatch(api, global);
});
Zone.__load_patch("customElements", (global, Zone1, api)=>{
    patchCustomElements(global, api);
});
Zone.__load_patch("XHR", (global, Zone1)=>{
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    const XHR_TASK = zoneSymbol("xhrTask");
    const XHR_SYNC = zoneSymbol("xhrSync");
    const XHR_LISTENER = zoneSymbol("xhrListener");
    const XHR_SCHEDULED = zoneSymbol("xhrScheduled");
    const XHR_URL = zoneSymbol("xhrURL");
    const XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol("xhrErrorBeforeScheduled");
    function patchXHR(window1) {
        const XMLHttpRequest = window1["XMLHttpRequest"];
        if (!XMLHttpRequest) // XMLHttpRequest is not available in service worker
        return;
        const XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        function findPendingTask(target) {
            return target[XHR_TASK];
        }
        let oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        let oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        if (!oriAddListener) {
            const XMLHttpRequestEventTarget = window1["XMLHttpRequestEventTarget"];
            if (XMLHttpRequestEventTarget) {
                const XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
                oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
        }
        const READY_STATE_CHANGE = "readystatechange";
        const SCHEDULED = "scheduled";
        function scheduleTask(task) {
            const data = task.data;
            const target = data.target;
            target[XHR_SCHEDULED] = false;
            target[XHR_ERROR_BEFORE_SCHEDULED] = false;
            // remove existing event listener
            const listener = target[XHR_LISTENER];
            if (!oriAddListener) {
                oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
            if (listener) oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            const newListener = target[XHR_LISTENER] = ()=>{
                if (target.readyState === target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                        // check whether the xhr has registered onload listener
                        // if that is the case, the task should invoke after all
                        // onload listeners finish.
                        // Also if the request failed without response (status = 0), the load event handler
                        // will not be triggered, in that case, we should also invoke the placeholder callback
                        // to close the XMLHttpRequest::send macroTask.
                        // https://github.com/angular/angular/issues/38795
                        const loadTasks = target[Zone1.__symbol__("loadfalse")];
                        if (target.status !== 0 && loadTasks && loadTasks.length > 0) {
                            const oriInvoke = task.invoke;
                            task.invoke = function() {
                                // need to load the tasks again, because in other
                                // load listener, they may remove themselves
                                const loadTasks = target[Zone1.__symbol__("loadfalse")];
                                for(let i = 0; i < loadTasks.length; i++)if (loadTasks[i] === task) loadTasks.splice(i, 1);
                                if (!data.aborted && task.state === SCHEDULED) oriInvoke.call(task);
                            };
                            loadTasks.push(task);
                        } else task.invoke();
                    } else if (!data.aborted && target[XHR_SCHEDULED] === false) // error occurs when xhr.send()
                    target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                }
            };
            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            const storedTask = target[XHR_TASK];
            if (!storedTask) target[XHR_TASK] = task;
            sendNative.apply(target, data.args);
            target[XHR_SCHEDULED] = true;
            return task;
        }
        function placeholderCallback() {}
        function clearTask(task) {
            const data = task.data;
            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.
            data.aborted = true;
            return abortNative.apply(data.target, data.args);
        }
        const openNative = patchMethod(XMLHttpRequestPrototype, "open", ()=>function(self1, args) {
                self1[XHR_SYNC] = args[2] == false;
                self1[XHR_URL] = args[1];
                return openNative.apply(self1, args);
            });
        const XMLHTTPREQUEST_SOURCE = "XMLHttpRequest.send";
        const fetchTaskAborting = zoneSymbol("fetchTaskAborting");
        const fetchTaskScheduling = zoneSymbol("fetchTaskScheduling");
        const sendNative = patchMethod(XMLHttpRequestPrototype, "send", ()=>function(self1, args) {
                if (Zone1.current[fetchTaskScheduling] === true) // a fetch is scheduling, so we are using xhr to polyfill fetch
                // and because we already schedule macroTask for fetch, we should
                // not schedule a macroTask for xhr again
                return sendNative.apply(self1, args);
                if (self1[XHR_SYNC]) // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self1, args);
                else {
                    const options = {
                        target: self1,
                        url: self1[XHR_URL],
                        isPeriodic: false,
                        args: args,
                        aborted: false
                    };
                    const task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
                    if (self1 && self1[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted && task.state === SCHEDULED) // xhr request throw error when send
                    // we should invoke task instead of leaving a scheduled
                    // pending macroTask
                    task.invoke();
                }
            });
        const abortNative = patchMethod(XMLHttpRequestPrototype, "abort", ()=>function(self1, args) {
                const task = findPendingTask(self1);
                if (task && typeof task.type == "string") {
                    // If the XHR has already completed, do nothing.
                    // If the XHR has already been aborted, do nothing.
                    // Fix #569, call abort multiple times before done will cause
                    // macroTask task count be negative number
                    if (task.cancelFn == null || task.data && task.data.aborted) return;
                    task.zone.cancelTask(task);
                } else if (Zone1.current[fetchTaskAborting] === true) // the abort is called from fetch polyfill, we need to call native abort of XHR.
                return abortNative.apply(self1, args);
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
            });
    }
});
Zone.__load_patch("geolocation", (global)=>{
    /// GEO_LOCATION
    if (global["navigator"] && global["navigator"].geolocation) patchPrototype(global["navigator"].geolocation, [
        "getCurrentPosition",
        "watchPosition"
    ]);
});
Zone.__load_patch("PromiseRejectionEvent", (global, Zone1)=>{
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
        return function(e) {
            const eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach((eventTask)=>{
                // windows has added unhandledrejection event listener
                // trigger the event listener
                const PromiseRejectionEvent = global["PromiseRejectionEvent"];
                if (PromiseRejectionEvent) {
                    const evt = new PromiseRejectionEvent(evtName, {
                        promise: e.promise,
                        reason: e.rejection
                    });
                    eventTask.invoke(evt);
                }
            });
        };
    }
    if (global["PromiseRejectionEvent"]) {
        Zone1[zoneSymbol("unhandledPromiseRejectionHandler")] = findPromiseRejectionHandler("unhandledrejection");
        Zone1[zoneSymbol("rejectionHandledHandler")] = findPromiseRejectionHandler("rejectionhandled");
    }
});
Zone.__load_patch("queueMicrotask", (global, Zone1, api)=>{
    patchQueueMicrotask(global, api);
});

},{}],"3OTpd":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InstrumentationBase", ()=>(0, _index.InstrumentationBase));
parcelHelpers.export(exports, "InstrumentationNodeModuleDefinition", ()=>(0, _instrumentationNodeModuleDefinition.InstrumentationNodeModuleDefinition));
parcelHelpers.export(exports, "InstrumentationNodeModuleFile", ()=>(0, _instrumentationNodeModuleFile.InstrumentationNodeModuleFile));
var _autoLoader = require("./autoLoader");
parcelHelpers.exportAll(_autoLoader, exports);
var _index = require("./platform/index");
var _instrumentationNodeModuleDefinition = require("./instrumentationNodeModuleDefinition");
var _instrumentationNodeModuleFile = require("./instrumentationNodeModuleFile");
var _types = require("./types");
parcelHelpers.exportAll(_types, exports);
var _typesInternal = require("./types_internal");
parcelHelpers.exportAll(_typesInternal, exports);
var _utils = require("./utils");
parcelHelpers.exportAll(_utils, exports);

},{"./autoLoader":"4D6OU","./platform/index":"lLPwY","./instrumentationNodeModuleDefinition":false,"./instrumentationNodeModuleFile":false,"./types":false,"./types_internal":false,"./utils":"3YarC","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"4D6OU":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * It will register instrumentations and plugins
 * @param options
 * @return returns function to unload instrumentation and plugins that were
 *   registered
 */ parcelHelpers.export(exports, "registerInstrumentations", ()=>registerInstrumentations);
var _api = require("@opentelemetry/api");
var _apiLogs = require("@opentelemetry/api-logs");
var _autoLoaderUtils = require("./autoLoaderUtils");
function registerInstrumentations(options) {
    var instrumentations = (0, _autoLoaderUtils.parseInstrumentationOptions)(options.instrumentations).instrumentations;
    var tracerProvider = options.tracerProvider || (0, _api.trace).getTracerProvider();
    var meterProvider = options.meterProvider || (0, _api.metrics).getMeterProvider();
    var loggerProvider = options.loggerProvider || (0, _apiLogs.logs).getLoggerProvider();
    (0, _autoLoaderUtils.enableInstrumentations)(instrumentations, tracerProvider, meterProvider, loggerProvider);
    return function() {
        (0, _autoLoaderUtils.disableInstrumentations)(instrumentations);
    };
}

},{"@opentelemetry/api":"6AC4z","@opentelemetry/api-logs":"8PPAH","./autoLoaderUtils":"7OC7p","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"8PPAH":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "logs", ()=>logs);
var _logger = require("./types/Logger");
parcelHelpers.exportAll(_logger, exports);
var _loggerProvider = require("./types/LoggerProvider");
parcelHelpers.exportAll(_loggerProvider, exports);
var _logRecord = require("./types/LogRecord");
parcelHelpers.exportAll(_logRecord, exports);
var _loggerOptions = require("./types/LoggerOptions");
parcelHelpers.exportAll(_loggerOptions, exports);
var _anyValue = require("./types/AnyValue");
parcelHelpers.exportAll(_anyValue, exports);
var _noopLogger = require("./NoopLogger");
parcelHelpers.exportAll(_noopLogger, exports);
var _noopLoggerProvider = require("./NoopLoggerProvider");
parcelHelpers.exportAll(_noopLoggerProvider, exports);
var _logs = require("./api/logs");
var logs = (0, _logs.LogsAPI).getInstance();

},{"./types/Logger":false,"./types/LoggerProvider":false,"./types/LogRecord":false,"./types/LoggerOptions":false,"./types/AnyValue":false,"./NoopLogger":false,"./NoopLoggerProvider":false,"./api/logs":"bJuoF","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"3wEsI":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NoopLogger", ()=>NoopLogger);
parcelHelpers.export(exports, "NOOP_LOGGER", ()=>NOOP_LOGGER);
var NoopLogger = /** @class */ function() {
    function NoopLogger() {}
    NoopLogger.prototype.emit = function(_logRecord) {};
    return NoopLogger;
}();
var NOOP_LOGGER = new NoopLogger();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"d2o09":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NoopLoggerProvider", ()=>NoopLoggerProvider);
parcelHelpers.export(exports, "NOOP_LOGGER_PROVIDER", ()=>NOOP_LOGGER_PROVIDER);
var _noopLogger = require("./NoopLogger");
var NoopLoggerProvider = /** @class */ function() {
    function NoopLoggerProvider() {}
    NoopLoggerProvider.prototype.getLogger = function(_name, _version, _options) {
        return new (0, _noopLogger.NoopLogger)();
    };
    return NoopLoggerProvider;
}();
var NOOP_LOGGER_PROVIDER = new NoopLoggerProvider();

},{"./NoopLogger":"3wEsI","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"bJuoF":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LogsAPI", ()=>LogsAPI);
var _globalUtils = require("../internal/global-utils");
var _noopLoggerProvider = require("../NoopLoggerProvider");
var LogsAPI = /** @class */ function() {
    function LogsAPI() {}
    LogsAPI.getInstance = function() {
        if (!this._instance) this._instance = new LogsAPI();
        return this._instance;
    };
    LogsAPI.prototype.setGlobalLoggerProvider = function(provider) {
        if ((0, _globalUtils._global)[0, _globalUtils.GLOBAL_LOGS_API_KEY]) return this.getLoggerProvider();
        (0, _globalUtils._global)[0, _globalUtils.GLOBAL_LOGS_API_KEY] = (0, _globalUtils.makeGetter)((0, _globalUtils.API_BACKWARDS_COMPATIBILITY_VERSION), provider, (0, _noopLoggerProvider.NOOP_LOGGER_PROVIDER));
        return provider;
    };
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */ LogsAPI.prototype.getLoggerProvider = function() {
        var _a, _b;
        return (_b = (_a = (0, _globalUtils._global)[0, _globalUtils.GLOBAL_LOGS_API_KEY]) === null || _a === void 0 ? void 0 : _a.call((0, _globalUtils._global), (0, _globalUtils.API_BACKWARDS_COMPATIBILITY_VERSION))) !== null && _b !== void 0 ? _b : (0, _noopLoggerProvider.NOOP_LOGGER_PROVIDER);
    };
    /**
     * Returns a logger from the global logger provider.
     *
     * @returns Logger
     */ LogsAPI.prototype.getLogger = function(name, version, options) {
        return this.getLoggerProvider().getLogger(name, version, options);
    };
    /** Remove the global logger provider */ LogsAPI.prototype.disable = function() {
        delete (0, _globalUtils._global)[0, _globalUtils.GLOBAL_LOGS_API_KEY];
    };
    return LogsAPI;
}();

},{"../internal/global-utils":"glyIT","../NoopLoggerProvider":"d2o09","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"glyIT":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GLOBAL_LOGS_API_KEY", ()=>GLOBAL_LOGS_API_KEY);
parcelHelpers.export(exports, "_global", ()=>_global);
/**
 * Make a function which accepts a version integer and returns the instance of an API if the version
 * is compatible, or a fallback version (usually NOOP) if it is not.
 *
 * @param requiredVersion Backwards compatibility version which is required to return the instance
 * @param instance Instance which should be returned if the required version is compatible
 * @param fallback Fallback instance, usually NOOP, which will be returned if the required version is not compatible
 */ parcelHelpers.export(exports, "makeGetter", ()=>makeGetter);
parcelHelpers.export(exports, "API_BACKWARDS_COMPATIBILITY_VERSION", ()=>API_BACKWARDS_COMPATIBILITY_VERSION);
var _platform = require("../platform");
var GLOBAL_LOGS_API_KEY = Symbol.for("io.opentelemetry.js.api.logs");
var _global = (0, _platform._globalThis);
function makeGetter(requiredVersion, instance, fallback) {
    return function(version) {
        return version === requiredVersion ? instance : fallback;
    };
}
var API_BACKWARDS_COMPATIBILITY_VERSION = 1;

},{"../platform":"cicGq","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"cicGq":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _globalThis = require("./globalThis");
parcelHelpers.exportAll(_globalThis, exports);

},{"./globalThis":"7NLgd","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"7NLgd":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Updates to this file should also be replicated to @opentelemetry/api and
// @opentelemetry/core too.
/**
 * - globalThis (New standard)
 * - self (Will return the current window instance for supported browsers)
 * - window (fallback for older browser implementations)
 * - global (NodeJS implementation)
 * - <object> (When all else fails)
 */ /** only globals that common to node and browsers are allowed */ // eslint-disable-next-line node/no-unsupported-features/es-builtins, no-undef
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_globalThis", ()=>_globalThis);
var global = arguments[3];
var _globalThis = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof window === "object" ? window : typeof global === "object" ? global : {};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"7OC7p":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Parses the options and returns instrumentations, node plugins and
 *   web plugins
 * @param options
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseInstrumentationOptions", ()=>parseInstrumentationOptions);
/**
 * Enable instrumentations
 * @param instrumentations
 * @param tracerProvider
 * @param meterProvider
 */ parcelHelpers.export(exports, "enableInstrumentations", ()=>enableInstrumentations);
/**
 * Disable instrumentations
 * @param instrumentations
 */ parcelHelpers.export(exports, "disableInstrumentations", ()=>disableInstrumentations);
function parseInstrumentationOptions(options) {
    if (options === void 0) options = [];
    var instrumentations = [];
    for(var i = 0, j = options.length; i < j; i++){
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var option = options[i];
        if (Array.isArray(option)) {
            var results = parseInstrumentationOptions(option);
            instrumentations = instrumentations.concat(results.instrumentations);
        } else if (typeof option === "function") instrumentations.push(new option());
        else if (option.instrumentationName) instrumentations.push(option);
    }
    return {
        instrumentations: instrumentations
    };
}
function enableInstrumentations(instrumentations, tracerProvider, meterProvider, loggerProvider) {
    for(var i = 0, j = instrumentations.length; i < j; i++){
        var instrumentation = instrumentations[i];
        if (tracerProvider) instrumentation.setTracerProvider(tracerProvider);
        if (meterProvider) instrumentation.setMeterProvider(meterProvider);
        if (loggerProvider && instrumentation.setLoggerProvider) instrumentation.setLoggerProvider(loggerProvider);
        // instrumentations have been already enabled during creation
        // so enable only if user prevented that by setting enabled to false
        // this is to prevent double enabling but when calling register all
        // instrumentations should be now enabled
        if (!instrumentation.getConfig().enabled) instrumentation.enable();
    }
}
function disableInstrumentations(instrumentations) {
    instrumentations.forEach(function(instrumentation) {
        return instrumentation.disable();
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"lLPwY":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InstrumentationBase", ()=>(0, _instrumentation.InstrumentationBase));
parcelHelpers.export(exports, "normalize", ()=>(0, _noopNormalize.normalize));
var _instrumentation = require("./instrumentation");
var _noopNormalize = require("./noop-normalize");

},{"./instrumentation":"hCn2q","./noop-normalize":false,"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"hCn2q":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InstrumentationBase", ()=>InstrumentationBase);
var _instrumentation = require("../../instrumentation");
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
/**
 * Base abstract class for instrumenting web plugins
 */ var InstrumentationBase = /** @class */ function(_super) {
    __extends(InstrumentationBase, _super);
    function InstrumentationBase(instrumentationName, instrumentationVersion, config) {
        if (config === void 0) config = {};
        var _this = _super.call(this, instrumentationName, instrumentationVersion, config) || this;
        if (_this._config.enabled) _this.enable();
        return _this;
    }
    return InstrumentationBase;
}((0, _instrumentation.InstrumentationAbstract));

},{"../../instrumentation":"jMsGo","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"jMsGo":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InstrumentationAbstract", ()=>InstrumentationAbstract);
var _api = require("@opentelemetry/api");
var _apiLogs = require("@opentelemetry/api-logs");
var _shimmer = require("shimmer");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * Base abstract internal class for instrumenting node and web plugins
 */ var InstrumentationAbstract = /** @class */ function() {
    function InstrumentationAbstract(instrumentationName, instrumentationVersion, config) {
        if (config === void 0) config = {};
        this.instrumentationName = instrumentationName;
        this.instrumentationVersion = instrumentationVersion;
        /* Api to wrap instrumented method */ this._wrap = _shimmer.wrap;
        /* Api to unwrap instrumented methods */ this._unwrap = _shimmer.unwrap;
        /* Api to mass wrap instrumented method */ this._massWrap = _shimmer.massWrap;
        /* Api to mass unwrap instrumented methods */ this._massUnwrap = _shimmer.massUnwrap;
        this._config = __assign({
            enabled: true
        }, config);
        this._diag = (0, _api.diag).createComponentLogger({
            namespace: instrumentationName
        });
        this._tracer = (0, _api.trace).getTracer(instrumentationName, instrumentationVersion);
        this._meter = (0, _api.metrics).getMeter(instrumentationName, instrumentationVersion);
        this._logger = (0, _apiLogs.logs).getLogger(instrumentationName, instrumentationVersion);
        this._updateMetricInstruments();
    }
    Object.defineProperty(InstrumentationAbstract.prototype, "meter", {
        /* Returns meter */ get: function() {
            return this._meter;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Sets MeterProvider to this plugin
     * @param meterProvider
     */ InstrumentationAbstract.prototype.setMeterProvider = function(meterProvider) {
        this._meter = meterProvider.getMeter(this.instrumentationName, this.instrumentationVersion);
        this._updateMetricInstruments();
    };
    Object.defineProperty(InstrumentationAbstract.prototype, "logger", {
        /* Returns logger */ get: function() {
            return this._logger;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Sets LoggerProvider to this plugin
     * @param loggerProvider
     */ InstrumentationAbstract.prototype.setLoggerProvider = function(loggerProvider) {
        this._logger = loggerProvider.getLogger(this.instrumentationName, this.instrumentationVersion);
    };
    /**
     * @experimental
     *
     * Get module definitions defined by {@link init}.
     * This can be used for experimental compile-time instrumentation.
     *
     * @returns an array of {@link InstrumentationModuleDefinition}
     */ InstrumentationAbstract.prototype.getModuleDefinitions = function() {
        var _a;
        var initResult = (_a = this.init()) !== null && _a !== void 0 ? _a : [];
        if (!Array.isArray(initResult)) return [
            initResult
        ];
        return initResult;
    };
    /**
     * Sets the new metric instruments with the current Meter.
     */ InstrumentationAbstract.prototype._updateMetricInstruments = function() {
        return;
    };
    /* Returns InstrumentationConfig */ InstrumentationAbstract.prototype.getConfig = function() {
        return this._config;
    };
    /**
     * Sets InstrumentationConfig to this plugin
     * @param InstrumentationConfig
     */ InstrumentationAbstract.prototype.setConfig = function(config) {
        if (config === void 0) config = {};
        this._config = Object.assign({}, config);
    };
    /**
     * Sets TraceProvider to this plugin
     * @param tracerProvider
     */ InstrumentationAbstract.prototype.setTracerProvider = function(tracerProvider) {
        this._tracer = tracerProvider.getTracer(this.instrumentationName, this.instrumentationVersion);
    };
    Object.defineProperty(InstrumentationAbstract.prototype, "tracer", {
        /* Returns tracer */ get: function() {
            return this._tracer;
        },
        enumerable: false,
        configurable: true
    });
    return InstrumentationAbstract;
}();

},{"@opentelemetry/api":"6AC4z","@opentelemetry/api-logs":"8PPAH","shimmer":"kGpxk","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"kGpxk":[function(require,module,exports) {
"use strict";
function isFunction(funktion) {
    return typeof funktion === "function";
}
// Default to complaining loudly when things don't go according to plan.
var logger = console.error.bind(console);
// Sets a property on an object, preserving its enumerability.
// This function assumes that the property is already writable.
function defineProperty(obj, name, value) {
    var enumerable = !!obj[name] && obj.propertyIsEnumerable(name);
    Object.defineProperty(obj, name, {
        configurable: true,
        enumerable: enumerable,
        writable: true,
        value: value
    });
}
// Keep initialization idempotent.
function shimmer(options) {
    if (options && options.logger) {
        if (!isFunction(options.logger)) logger("new logger isn't a function, not replacing");
        else logger = options.logger;
    }
}
function wrap(nodule, name, wrapper) {
    if (!nodule || !nodule[name]) {
        logger("no original function " + name + " to wrap");
        return;
    }
    if (!wrapper) {
        logger("no wrapper function");
        logger(new Error().stack);
        return;
    }
    if (!isFunction(nodule[name]) || !isFunction(wrapper)) {
        logger("original object and wrapper must be functions");
        return;
    }
    var original = nodule[name];
    var wrapped = wrapper(original, name);
    defineProperty(wrapped, "__original", original);
    defineProperty(wrapped, "__unwrap", function() {
        if (nodule[name] === wrapped) defineProperty(nodule, name, original);
    });
    defineProperty(wrapped, "__wrapped", true);
    defineProperty(nodule, name, wrapped);
    return wrapped;
}
function massWrap(nodules, names, wrapper) {
    if (!nodules) {
        logger("must provide one or more modules to patch");
        logger(new Error().stack);
        return;
    } else if (!Array.isArray(nodules)) nodules = [
        nodules
    ];
    if (!(names && Array.isArray(names))) {
        logger("must provide one or more functions to wrap on modules");
        return;
    }
    nodules.forEach(function(nodule) {
        names.forEach(function(name) {
            wrap(nodule, name, wrapper);
        });
    });
}
function unwrap(nodule, name) {
    if (!nodule || !nodule[name]) {
        logger("no function to unwrap.");
        logger(new Error().stack);
        return;
    }
    if (!nodule[name].__unwrap) logger("no original to unwrap to -- has " + name + " already been unwrapped?");
    else return nodule[name].__unwrap();
}
function massUnwrap(nodules, names) {
    if (!nodules) {
        logger("must provide one or more modules to patch");
        logger(new Error().stack);
        return;
    } else if (!Array.isArray(nodules)) nodules = [
        nodules
    ];
    if (!(names && Array.isArray(names))) {
        logger("must provide one or more functions to unwrap on modules");
        return;
    }
    nodules.forEach(function(nodule) {
        names.forEach(function(name) {
            unwrap(nodule, name);
        });
    });
}
shimmer.wrap = wrap;
shimmer.massWrap = massWrap;
shimmer.unwrap = unwrap;
shimmer.massUnwrap = massUnwrap;
module.exports = shimmer;

},{}],"3YarC":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * function to execute patched function and being able to catch errors
 * @param execute - function to be executed
 * @param onFinish - callback to run when execute finishes
 */ parcelHelpers.export(exports, "safeExecuteInTheMiddle", ()=>safeExecuteInTheMiddle);
/**
 * Async function to execute patched function and being able to catch errors
 * @param execute - function to be executed
 * @param onFinish - callback to run when execute finishes
 */ parcelHelpers.export(exports, "safeExecuteInTheMiddleAsync", ()=>safeExecuteInTheMiddleAsync);
/**
 * Checks if certain function has been already wrapped
 * @param func
 */ parcelHelpers.export(exports, "isWrapped", ()=>isWrapped);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
function safeExecuteInTheMiddle(execute, onFinish, preventThrowingError) {
    var error;
    var result;
    try {
        result = execute();
    } catch (e) {
        error = e;
    } finally{
        onFinish(error, result);
        if (error && !preventThrowingError) // eslint-disable-next-line no-unsafe-finally
        throw error;
        // eslint-disable-next-line no-unsafe-finally
        return result;
    }
}
function safeExecuteInTheMiddleAsync(execute, onFinish, preventThrowingError) {
    return __awaiter(this, void 0, void 0, function() {
        var error, result, e_1;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    _a.trys.push([
                        0,
                        2,
                        3,
                        4
                    ]);
                    return [
                        4 /*yield*/ ,
                        execute()
                    ];
                case 1:
                    result = _a.sent();
                    return [
                        3 /*break*/ ,
                        4
                    ];
                case 2:
                    e_1 = _a.sent();
                    error = e_1;
                    return [
                        3 /*break*/ ,
                        4
                    ];
                case 3:
                    onFinish(error, result);
                    if (error && !preventThrowingError) // eslint-disable-next-line no-unsafe-finally
                    throw error;
                    // eslint-disable-next-line no-unsafe-finally
                    return [
                        2 /*return*/ ,
                        result
                    ];
                case 4:
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    });
}
function isWrapped(func) {
    return typeof func === "function" && typeof func.__original === "function" && typeof func.__unwrap === "function" && func.__wrapped === true;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"dZ0bF":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getWebAutoInstrumentations", ()=>(0, _utils.getWebAutoInstrumentations));
var _utils = require("./utils");

},{"./utils":"lSUFd","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"lSUFd":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getWebAutoInstrumentations", ()=>getWebAutoInstrumentations);
var _api = require("@opentelemetry/api");
var _instrumentationDocumentLoad = require("@opentelemetry/instrumentation-document-load");
var _instrumentationFetch = require("@opentelemetry/instrumentation-fetch");
var _instrumentationUserInteraction = require("@opentelemetry/instrumentation-user-interaction");
var _instrumentationXmlHttpRequest = require("@opentelemetry/instrumentation-xml-http-request");
var InstrumentationMap = {
    "@opentelemetry/instrumentation-document-load": (0, _instrumentationDocumentLoad.DocumentLoadInstrumentation),
    "@opentelemetry/instrumentation-fetch": (0, _instrumentationFetch.FetchInstrumentation),
    "@opentelemetry/instrumentation-user-interaction": (0, _instrumentationUserInteraction.UserInteractionInstrumentation),
    "@opentelemetry/instrumentation-xml-http-request": (0, _instrumentationXmlHttpRequest.XMLHttpRequestInstrumentation)
};
function getWebAutoInstrumentations(inputConfigs) {
    var _a;
    if (inputConfigs === void 0) inputConfigs = {};
    for(var _i = 0, _b = Object.keys(inputConfigs); _i < _b.length; _i++){
        var name_1 = _b[_i];
        if (!Object.prototype.hasOwnProperty.call(InstrumentationMap, name_1)) {
            (0, _api.diag).error('Provided instrumentation name "' + name_1 + '" not found');
            continue;
        }
    }
    var instrumentations = [];
    for(var _c = 0, _d = Object.keys(InstrumentationMap); _c < _d.length; _c++){
        var name_2 = _d[_c];
        var Instance = InstrumentationMap[name_2];
        // Defaults are defined by the instrumentation itself
        var userConfig = (_a = inputConfigs[name_2]) !== null && _a !== void 0 ? _a : {};
        if (userConfig.enabled === false) {
            (0, _api.diag).debug("Disabling instrumentation for " + name_2);
            continue;
        }
        try {
            (0, _api.diag).debug("Loading instrumentation for " + name_2);
            instrumentations.push(new Instance(userConfig));
        } catch (e) {
            (0, _api.diag).error(e);
        }
    }
    return instrumentations;
}

},{"@opentelemetry/api":"6AC4z","@opentelemetry/instrumentation-document-load":"exbkI","@opentelemetry/instrumentation-fetch":"iWezV","@opentelemetry/instrumentation-user-interaction":"lOen7","@opentelemetry/instrumentation-xml-http-request":"jYPe9","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"exbkI":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _instrumentation = require("./instrumentation");
parcelHelpers.exportAll(_instrumentation, exports);
var _attributeNames = require("./enums/AttributeNames");
parcelHelpers.exportAll(_attributeNames, exports);
var _types = require("./types");
parcelHelpers.exportAll(_types, exports);

},{"./instrumentation":"b9rsS","./enums/AttributeNames":"2uTf8","./types":"5cOeU","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"b9rsS":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DocumentLoadInstrumentation", ()=>DocumentLoadInstrumentation);
var _api = require("@opentelemetry/api");
var _core = require("@opentelemetry/core");
var _sdkTraceWeb = require("@opentelemetry/sdk-trace-web");
var _instrumentation = require("@opentelemetry/instrumentation");
var _attributeNames = require("./enums/AttributeNames");
var _version = require("./version");
var _semanticConventions = require("@opentelemetry/semantic-conventions");
var _utils = require("./utils");
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
/**
 * This class represents a document load plugin
 */ var DocumentLoadInstrumentation = /** @class */ function(_super) {
    __extends(DocumentLoadInstrumentation, _super);
    /**
     *
     * @param config
     */ function DocumentLoadInstrumentation(config) {
        if (config === void 0) config = {};
        var _this = _super.call(this, "@opentelemetry/instrumentation-document-load", (0, _version.VERSION), config) || this;
        _this.component = "document-load";
        _this.version = "1";
        _this.moduleName = _this.component;
        return _this;
    }
    DocumentLoadInstrumentation.prototype.init = function() {};
    /**
     * callback to be executed when page is loaded
     */ DocumentLoadInstrumentation.prototype._onDocumentLoaded = function() {
        var _this = this;
        // Timeout is needed as load event doesn't have yet the performance metrics for loadEnd.
        // Support for event "loadend" is very limited and cannot be used
        window.setTimeout(function() {
            _this._collectPerformance();
        });
    };
    /**
     * Adds spans for all resources
     * @param rootSpan
     */ DocumentLoadInstrumentation.prototype._addResourcesSpans = function(rootSpan) {
        var _this = this;
        var _a, _b;
        var resources = (_b = (_a = (0, _core.otperformance)).getEntriesByType) === null || _b === void 0 ? void 0 : _b.call(_a, "resource");
        if (resources) resources.forEach(function(resource) {
            _this._initResourceSpan(resource, rootSpan);
        });
    };
    /**
     * Collects information about performance and creates appropriate spans
     */ DocumentLoadInstrumentation.prototype._collectPerformance = function() {
        var _this = this;
        var metaElement = Array.from(document.getElementsByTagName("meta")).find(function(e) {
            return e.getAttribute("name") === (0, _core.TRACE_PARENT_HEADER);
        });
        var entries = (0, _utils.getPerformanceNavigationEntries)();
        var traceparent = metaElement && metaElement.content || "";
        (0, _api.context).with((0, _api.propagation).extract((0, _api.ROOT_CONTEXT), {
            traceparent: traceparent
        }), function() {
            var _a;
            var rootSpan = _this._startSpan((0, _attributeNames.AttributeNames).DOCUMENT_LOAD, (0, _sdkTraceWeb.PerformanceTimingNames).FETCH_START, entries);
            if (!rootSpan) return;
            (0, _api.context).with((0, _api.trace).setSpan((0, _api.context).active(), rootSpan), function() {
                var fetchSpan = _this._startSpan((0, _attributeNames.AttributeNames).DOCUMENT_FETCH, (0, _sdkTraceWeb.PerformanceTimingNames).FETCH_START, entries);
                if (fetchSpan) {
                    fetchSpan.setAttribute((0, _semanticConventions.SEMATTRS_HTTP_URL), location.href);
                    (0, _api.context).with((0, _api.trace).setSpan((0, _api.context).active(), fetchSpan), function() {
                        var _a;
                        (0, _sdkTraceWeb.addSpanNetworkEvents)(fetchSpan, entries);
                        _this._addCustomAttributesOnSpan(fetchSpan, (_a = _this._getConfig().applyCustomAttributesOnSpan) === null || _a === void 0 ? void 0 : _a.documentFetch);
                        _this._endSpan(fetchSpan, (0, _sdkTraceWeb.PerformanceTimingNames).RESPONSE_END, entries);
                    });
                }
            });
            rootSpan.setAttribute((0, _semanticConventions.SEMATTRS_HTTP_URL), location.href);
            rootSpan.setAttribute((0, _semanticConventions.SEMATTRS_HTTP_USER_AGENT), navigator.userAgent);
            _this._addResourcesSpans(rootSpan);
            (0, _sdkTraceWeb.addSpanNetworkEvent)(rootSpan, (0, _sdkTraceWeb.PerformanceTimingNames).FETCH_START, entries);
            (0, _sdkTraceWeb.addSpanNetworkEvent)(rootSpan, (0, _sdkTraceWeb.PerformanceTimingNames).UNLOAD_EVENT_START, entries);
            (0, _sdkTraceWeb.addSpanNetworkEvent)(rootSpan, (0, _sdkTraceWeb.PerformanceTimingNames).UNLOAD_EVENT_END, entries);
            (0, _sdkTraceWeb.addSpanNetworkEvent)(rootSpan, (0, _sdkTraceWeb.PerformanceTimingNames).DOM_INTERACTIVE, entries);
            (0, _sdkTraceWeb.addSpanNetworkEvent)(rootSpan, (0, _sdkTraceWeb.PerformanceTimingNames).DOM_CONTENT_LOADED_EVENT_START, entries);
            (0, _sdkTraceWeb.addSpanNetworkEvent)(rootSpan, (0, _sdkTraceWeb.PerformanceTimingNames).DOM_CONTENT_LOADED_EVENT_END, entries);
            (0, _sdkTraceWeb.addSpanNetworkEvent)(rootSpan, (0, _sdkTraceWeb.PerformanceTimingNames).DOM_COMPLETE, entries);
            (0, _sdkTraceWeb.addSpanNetworkEvent)(rootSpan, (0, _sdkTraceWeb.PerformanceTimingNames).LOAD_EVENT_START, entries);
            (0, _sdkTraceWeb.addSpanNetworkEvent)(rootSpan, (0, _sdkTraceWeb.PerformanceTimingNames).LOAD_EVENT_END, entries);
            (0, _utils.addSpanPerformancePaintEvents)(rootSpan);
            _this._addCustomAttributesOnSpan(rootSpan, (_a = _this._getConfig().applyCustomAttributesOnSpan) === null || _a === void 0 ? void 0 : _a.documentLoad);
            _this._endSpan(rootSpan, (0, _sdkTraceWeb.PerformanceTimingNames).LOAD_EVENT_END, entries);
        });
    };
    /**
     * Helper function for ending span
     * @param span
     * @param performanceName name of performance entry for time end
     * @param entries
     */ DocumentLoadInstrumentation.prototype._endSpan = function(span, performanceName, entries) {
        // span can be undefined when entries are missing the certain performance - the span will not be created
        if (span) {
            if ((0, _sdkTraceWeb.hasKey)(entries, performanceName)) span.end(entries[performanceName]);
            else // just end span
            span.end();
        }
    };
    /**
     * Creates and ends a span with network information about resource added as timed events
     * @param resource
     * @param parentSpan
     */ DocumentLoadInstrumentation.prototype._initResourceSpan = function(resource, parentSpan) {
        var _a;
        var span = this._startSpan((0, _attributeNames.AttributeNames).RESOURCE_FETCH, (0, _sdkTraceWeb.PerformanceTimingNames).FETCH_START, resource, parentSpan);
        if (span) {
            span.setAttribute((0, _semanticConventions.SEMATTRS_HTTP_URL), resource.name);
            (0, _sdkTraceWeb.addSpanNetworkEvents)(span, resource);
            this._addCustomAttributesOnResourceSpan(span, resource, (_a = this._getConfig().applyCustomAttributesOnSpan) === null || _a === void 0 ? void 0 : _a.resourceFetch);
            this._endSpan(span, (0, _sdkTraceWeb.PerformanceTimingNames).RESPONSE_END, resource);
        }
    };
    /**
     * Helper function for starting a span
     * @param spanName name of span
     * @param performanceName name of performance entry for time start
     * @param entries
     * @param parentSpan
     */ DocumentLoadInstrumentation.prototype._startSpan = function(spanName, performanceName, entries, parentSpan) {
        if ((0, _sdkTraceWeb.hasKey)(entries, performanceName) && typeof entries[performanceName] === "number") {
            var span = this.tracer.startSpan(spanName, {
                startTime: entries[performanceName]
            }, parentSpan ? (0, _api.trace).setSpan((0, _api.context).active(), parentSpan) : undefined);
            return span;
        }
        return undefined;
    };
    /**
     * executes callback {_onDocumentLoaded} when the page is loaded
     */ DocumentLoadInstrumentation.prototype._waitForPageLoad = function() {
        if (window.document.readyState === "complete") this._onDocumentLoaded();
        else {
            this._onDocumentLoaded = this._onDocumentLoaded.bind(this);
            window.addEventListener("load", this._onDocumentLoaded);
        }
    };
    DocumentLoadInstrumentation.prototype._getConfig = function() {
        return this._config;
    };
    /**
     * adds custom attributes to root span if configured
     */ DocumentLoadInstrumentation.prototype._addCustomAttributesOnSpan = function(span, applyCustomAttributesOnSpan) {
        var _this = this;
        if (applyCustomAttributesOnSpan) (0, _instrumentation.safeExecuteInTheMiddle)(function() {
            return applyCustomAttributesOnSpan(span);
        }, function(error) {
            if (!error) return;
            _this._diag.error("addCustomAttributesOnSpan", error);
        }, true);
    };
    /**
     * adds custom attributes to span if configured
     */ DocumentLoadInstrumentation.prototype._addCustomAttributesOnResourceSpan = function(span, resource, applyCustomAttributesOnSpan) {
        var _this = this;
        if (applyCustomAttributesOnSpan) (0, _instrumentation.safeExecuteInTheMiddle)(function() {
            return applyCustomAttributesOnSpan(span, resource);
        }, function(error) {
            if (!error) return;
            _this._diag.error("addCustomAttributesOnResourceSpan", error);
        }, true);
    };
    /**
     * implements enable function
     */ DocumentLoadInstrumentation.prototype.enable = function() {
        // remove previously attached load to avoid adding the same event twice
        // in case of multiple enable calling.
        window.removeEventListener("load", this._onDocumentLoaded);
        this._waitForPageLoad();
    };
    /**
     * implements disable function
     */ DocumentLoadInstrumentation.prototype.disable = function() {
        window.removeEventListener("load", this._onDocumentLoaded);
    };
    return DocumentLoadInstrumentation;
}((0, _instrumentation.InstrumentationBase));

},{"@opentelemetry/api":"6AC4z","@opentelemetry/core":"dBsXh","@opentelemetry/sdk-trace-web":"eXZZL","@opentelemetry/instrumentation":"3OTpd","./enums/AttributeNames":"2uTf8","./version":"kjKSa","@opentelemetry/semantic-conventions":"lCgfj","./utils":"hRpx5","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"2uTf8":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AttributeNames", ()=>AttributeNames);
var AttributeNames;
(function(AttributeNames) {
    AttributeNames["DOCUMENT_LOAD"] = "documentLoad";
    AttributeNames["DOCUMENT_FETCH"] = "documentFetch";
    AttributeNames["RESOURCE_FETCH"] = "resourceFetch";
})(AttributeNames || (AttributeNames = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"kjKSa":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // this is autogenerated file, see scripts/version-update.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
var VERSION = "0.37.0";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"hRpx5":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getPerformanceNavigationEntries", ()=>getPerformanceNavigationEntries);
parcelHelpers.export(exports, "addSpanPerformancePaintEvents", ()=>addSpanPerformancePaintEvents);
var _core = require("@opentelemetry/core");
var _sdkTraceWeb = require("@opentelemetry/sdk-trace-web");
var _eventNames = require("./enums/EventNames");
var getPerformanceNavigationEntries = function() {
    var _a, _b;
    var entries = {};
    var performanceNavigationTiming = (_b = (_a = (0, _core.otperformance)).getEntriesByType) === null || _b === void 0 ? void 0 : _b.call(_a, "navigation")[0];
    if (performanceNavigationTiming) {
        var keys = Object.values((0, _sdkTraceWeb.PerformanceTimingNames));
        keys.forEach(function(key) {
            if ((0, _sdkTraceWeb.hasKey)(performanceNavigationTiming, key)) {
                var value = performanceNavigationTiming[key];
                if (typeof value === "number") entries[key] = value;
            }
        });
    } else {
        // // fallback to previous version
        var perf = (0, _core.otperformance);
        var performanceTiming_1 = perf.timing;
        if (performanceTiming_1) {
            var keys = Object.values((0, _sdkTraceWeb.PerformanceTimingNames));
            keys.forEach(function(key) {
                if ((0, _sdkTraceWeb.hasKey)(performanceTiming_1, key)) {
                    var value = performanceTiming_1[key];
                    if (typeof value === "number") entries[key] = value;
                }
            });
        }
    }
    return entries;
};
var performancePaintNames = {
    "first-paint": (0, _eventNames.EventNames).FIRST_PAINT,
    "first-contentful-paint": (0, _eventNames.EventNames).FIRST_CONTENTFUL_PAINT
};
var addSpanPerformancePaintEvents = function(span) {
    var _a, _b;
    var performancePaintTiming = (_b = (_a = (0, _core.otperformance)).getEntriesByType) === null || _b === void 0 ? void 0 : _b.call(_a, "paint");
    if (performancePaintTiming) performancePaintTiming.forEach(function(_a) {
        var name = _a.name, startTime = _a.startTime;
        if ((0, _sdkTraceWeb.hasKey)(performancePaintNames, name)) span.addEvent(performancePaintNames[name], startTime);
    });
};

},{"@opentelemetry/core":"dBsXh","@opentelemetry/sdk-trace-web":"eXZZL","./enums/EventNames":"kWXpn","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"kWXpn":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventNames", ()=>EventNames);
var EventNames;
(function(EventNames) {
    EventNames["FIRST_PAINT"] = "firstPaint";
    EventNames["FIRST_CONTENTFUL_PAINT"] = "firstContentfulPaint";
})(EventNames || (EventNames = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"5cOeU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"iWezV":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _fetch = require("./fetch");
parcelHelpers.exportAll(_fetch, exports);

},{"./fetch":"3HP4m","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"3HP4m":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FetchInstrumentation", ()=>FetchInstrumentation);
var _api = require("@opentelemetry/api");
var _instrumentation = require("@opentelemetry/instrumentation");
var _core = require("@opentelemetry/core");
var _sdkTraceWeb = require("@opentelemetry/sdk-trace-web");
var _attributeNames = require("./enums/AttributeNames");
var _semanticConventions = require("@opentelemetry/semantic-conventions");
var _version = require("./version");
var process = require("ec4383a7c1392e8d");
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var _a;
// how long to wait for observer to collect information about resources
// this is needed as event "load" is called before observer
// hard to say how long it should really wait, seems like 300ms is
// safe enough
var OBSERVER_WAIT_TIME_MS = 300;
var isNode = typeof process === "object" && ((_a = process.release) === null || _a === void 0 ? void 0 : _a.name) === "node";
/**
 * This class represents a fetch plugin for auto instrumentation
 */ var FetchInstrumentation = /** @class */ function(_super) {
    __extends(FetchInstrumentation, _super);
    function FetchInstrumentation(config) {
        var _this = _super.call(this, "@opentelemetry/instrumentation-fetch", (0, _version.VERSION), config) || this;
        _this.component = "fetch";
        _this.version = (0, _version.VERSION);
        _this.moduleName = _this.component;
        _this._usedResources = new WeakSet();
        _this._tasksCount = 0;
        return _this;
    }
    FetchInstrumentation.prototype.init = function() {};
    FetchInstrumentation.prototype._getConfig = function() {
        return this._config;
    };
    /**
     * Add cors pre flight child span
     * @param span
     * @param corsPreFlightRequest
     */ FetchInstrumentation.prototype._addChildSpan = function(span, corsPreFlightRequest) {
        var childSpan = this.tracer.startSpan("CORS Preflight", {
            startTime: corsPreFlightRequest[_sdkTraceWeb.PerformanceTimingNames.FETCH_START]
        }, _api.trace.setSpan(_api.context.active(), span));
        if (!this._getConfig().ignoreNetworkEvents) _sdkTraceWeb.addSpanNetworkEvents(childSpan, corsPreFlightRequest);
        childSpan.end(corsPreFlightRequest[_sdkTraceWeb.PerformanceTimingNames.RESPONSE_END]);
    };
    /**
     * Adds more attributes to span just before ending it
     * @param span
     * @param response
     */ FetchInstrumentation.prototype._addFinalSpanAttributes = function(span, response) {
        var parsedUrl = _sdkTraceWeb.parseUrl(response.url);
        span.setAttribute((0, _semanticConventions.SemanticAttributes).HTTP_STATUS_CODE, response.status);
        if (response.statusText != null) span.setAttribute((0, _attributeNames.AttributeNames).HTTP_STATUS_TEXT, response.statusText);
        span.setAttribute((0, _semanticConventions.SemanticAttributes).HTTP_HOST, parsedUrl.host);
        span.setAttribute((0, _semanticConventions.SemanticAttributes).HTTP_SCHEME, parsedUrl.protocol.replace(":", ""));
        if (typeof navigator !== "undefined") span.setAttribute((0, _semanticConventions.SemanticAttributes).HTTP_USER_AGENT, navigator.userAgent);
    };
    /**
     * Add headers
     * @param options
     * @param spanUrl
     */ FetchInstrumentation.prototype._addHeaders = function(options, spanUrl) {
        if (!_sdkTraceWeb.shouldPropagateTraceHeaders(spanUrl, this._getConfig().propagateTraceHeaderCorsUrls)) {
            var headers = {};
            _api.propagation.inject(_api.context.active(), headers);
            if (Object.keys(headers).length > 0) this._diag.debug("headers inject skipped due to CORS policy");
            return;
        }
        if (options instanceof Request) _api.propagation.inject(_api.context.active(), options.headers, {
            set: function(h, k, v) {
                return h.set(k, typeof v === "string" ? v : String(v));
            }
        });
        else if (options.headers instanceof Headers) _api.propagation.inject(_api.context.active(), options.headers, {
            set: function(h, k, v) {
                return h.set(k, typeof v === "string" ? v : String(v));
            }
        });
        else if (options.headers instanceof Map) _api.propagation.inject(_api.context.active(), options.headers, {
            set: function(h, k, v) {
                return h.set(k, typeof v === "string" ? v : String(v));
            }
        });
        else {
            var headers = {};
            _api.propagation.inject(_api.context.active(), headers);
            options.headers = Object.assign({}, headers, options.headers || {});
        }
    };
    /**
     * Clears the resource timings and all resources assigned with spans
     *     when {@link FetchPluginConfig.clearTimingResources} is
     *     set to true (default false)
     * @private
     */ FetchInstrumentation.prototype._clearResources = function() {
        if (this._tasksCount === 0 && this._getConfig().clearTimingResources) {
            performance.clearResourceTimings();
            this._usedResources = new WeakSet();
        }
    };
    /**
     * Creates a new span
     * @param url
     * @param options
     */ FetchInstrumentation.prototype._createSpan = function(url, options) {
        var _a;
        if (options === void 0) options = {};
        if (_core.isUrlIgnored(url, this._getConfig().ignoreUrls)) {
            this._diag.debug("ignoring span as url matches ignored url");
            return;
        }
        var method = (options.method || "GET").toUpperCase();
        var spanName = "HTTP " + method;
        return this.tracer.startSpan(spanName, {
            kind: _api.SpanKind.CLIENT,
            attributes: (_a = {}, _a[(0, _attributeNames.AttributeNames).COMPONENT] = this.moduleName, _a[(0, _semanticConventions.SemanticAttributes).HTTP_METHOD] = method, _a[(0, _semanticConventions.SemanticAttributes).HTTP_URL] = url, _a)
        });
    };
    /**
     * Finds appropriate resource and add network events to the span
     * @param span
     * @param resourcesObserver
     * @param endTime
     */ FetchInstrumentation.prototype._findResourceAndAddNetworkEvents = function(span, resourcesObserver, endTime) {
        var resources = resourcesObserver.entries;
        if (!resources.length) {
            if (!performance.getEntriesByType) return;
            // fallback - either Observer is not available or it took longer
            // then OBSERVER_WAIT_TIME_MS and observer didn't collect enough
            // information
            resources = performance.getEntriesByType("resource");
        }
        var resource = _sdkTraceWeb.getResource(resourcesObserver.spanUrl, resourcesObserver.startTime, endTime, resources, this._usedResources, "fetch");
        if (resource.mainRequest) {
            var mainRequest = resource.mainRequest;
            this._markResourceAsUsed(mainRequest);
            var corsPreFlightRequest = resource.corsPreFlightRequest;
            if (corsPreFlightRequest) {
                this._addChildSpan(span, corsPreFlightRequest);
                this._markResourceAsUsed(corsPreFlightRequest);
            }
            if (!this._getConfig().ignoreNetworkEvents) _sdkTraceWeb.addSpanNetworkEvents(span, mainRequest);
        }
    };
    /**
     * Marks certain [resource]{@link PerformanceResourceTiming} when information
     * from this is used to add events to span.
     * This is done to avoid reusing the same resource again for next span
     * @param resource
     */ FetchInstrumentation.prototype._markResourceAsUsed = function(resource) {
        this._usedResources.add(resource);
    };
    /**
     * Finish span, add attributes, network events etc.
     * @param span
     * @param spanData
     * @param response
     */ FetchInstrumentation.prototype._endSpan = function(span, spanData, response) {
        var _this = this;
        var endTime = _core.millisToHrTime(Date.now());
        var performanceEndTime = _core.hrTime();
        this._addFinalSpanAttributes(span, response);
        setTimeout(function() {
            var _a;
            (_a = spanData.observer) === null || _a === void 0 || _a.disconnect();
            _this._findResourceAndAddNetworkEvents(span, spanData, performanceEndTime);
            _this._tasksCount--;
            _this._clearResources();
            span.end(endTime);
        }, OBSERVER_WAIT_TIME_MS);
    };
    /**
     * Patches the constructor of fetch
     */ FetchInstrumentation.prototype._patchConstructor = function() {
        var _this = this;
        return function(original) {
            var plugin = _this;
            return function patchConstructor() {
                var args = [];
                for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
                var self = this;
                var url = _sdkTraceWeb.parseUrl(args[0] instanceof Request ? args[0].url : String(args[0])).href;
                var options = args[0] instanceof Request ? args[0] : args[1] || {};
                var createdSpan = plugin._createSpan(url, options);
                if (!createdSpan) return original.apply(this, args);
                var spanData = plugin._prepareSpanData(url);
                function endSpanOnError(span, error) {
                    plugin._applyAttributesAfterFetch(span, options, error);
                    plugin._endSpan(span, spanData, {
                        status: error.status || 0,
                        statusText: error.message,
                        url: url
                    });
                }
                function endSpanOnSuccess(span, response) {
                    plugin._applyAttributesAfterFetch(span, options, response);
                    if (response.status >= 200 && response.status < 400) plugin._endSpan(span, spanData, response);
                    else plugin._endSpan(span, spanData, {
                        status: response.status,
                        statusText: response.statusText,
                        url: url
                    });
                }
                function onSuccess(span, resolve, response) {
                    try {
                        var resClone = response.clone();
                        var resClone4Hook_1 = response.clone();
                        var body = resClone.body;
                        if (body) {
                            var reader_1 = body.getReader();
                            var read_1 = function() {
                                reader_1.read().then(function(_a) {
                                    var done = _a.done;
                                    if (done) endSpanOnSuccess(span, resClone4Hook_1);
                                    else read_1();
                                }, function(error) {
                                    endSpanOnError(span, error);
                                });
                            };
                            read_1();
                        } else // some older browsers don't have .body implemented
                        endSpanOnSuccess(span, response);
                    } finally{
                        resolve(response);
                    }
                }
                function onError(span, reject, error) {
                    try {
                        endSpanOnError(span, error);
                    } finally{
                        reject(error);
                    }
                }
                return new Promise(function(resolve, reject) {
                    return _api.context.with(_api.trace.setSpan(_api.context.active(), createdSpan), function() {
                        plugin._addHeaders(options, url);
                        plugin._tasksCount++;
                        // TypeScript complains about arrow function captured a this typed as globalThis
                        // ts(7041)
                        return original.apply(self, options instanceof Request ? [
                            options
                        ] : [
                            url,
                            options
                        ]).then(onSuccess.bind(self, createdSpan, resolve), onError.bind(self, createdSpan, reject));
                    });
                });
            };
        };
    };
    FetchInstrumentation.prototype._applyAttributesAfterFetch = function(span, request, result) {
        var _this = this;
        var applyCustomAttributesOnSpan = this._getConfig().applyCustomAttributesOnSpan;
        if (applyCustomAttributesOnSpan) (0, _instrumentation.safeExecuteInTheMiddle)(function() {
            return applyCustomAttributesOnSpan(span, request, result);
        }, function(error) {
            if (!error) return;
            _this._diag.error("applyCustomAttributesOnSpan", error);
        }, true);
    };
    /**
     * Prepares a span data - needed later for matching appropriate network
     *     resources
     * @param spanUrl
     */ FetchInstrumentation.prototype._prepareSpanData = function(spanUrl) {
        var startTime = _core.hrTime();
        var entries = [];
        if (typeof PerformanceObserver !== "function") return {
            entries: entries,
            startTime: startTime,
            spanUrl: spanUrl
        };
        var observer = new PerformanceObserver(function(list) {
            var perfObsEntries = list.getEntries();
            perfObsEntries.forEach(function(entry) {
                if (entry.initiatorType === "fetch" && entry.name === spanUrl) entries.push(entry);
            });
        });
        observer.observe({
            entryTypes: [
                "resource"
            ]
        });
        return {
            entries: entries,
            observer: observer,
            startTime: startTime,
            spanUrl: spanUrl
        };
    };
    /**
     * implements enable function
     */ FetchInstrumentation.prototype.enable = function() {
        if (isNode) {
            // Node.js v18+ *does* have a global `fetch()`, but this package does not
            // support instrumenting it.
            this._diag.warn("this instrumentation is intended for web usage only, it does not instrument Node.js's fetch()");
            return;
        }
        if ((0, _instrumentation.isWrapped)(fetch)) {
            this._unwrap((0, _core._globalThis), "fetch");
            this._diag.debug("removing previous patch for constructor");
        }
        this._wrap((0, _core._globalThis), "fetch", this._patchConstructor());
    };
    /**
     * implements unpatch function
     */ FetchInstrumentation.prototype.disable = function() {
        if (isNode) return;
        this._unwrap((0, _core._globalThis), "fetch");
        this._usedResources = new WeakSet();
    };
    return FetchInstrumentation;
}((0, _instrumentation.InstrumentationBase));

},{"ec4383a7c1392e8d":"d5jf4","@opentelemetry/api":"6AC4z","@opentelemetry/instrumentation":"3OTpd","@opentelemetry/core":"dBsXh","@opentelemetry/sdk-trace-web":"eXZZL","./enums/AttributeNames":"2Hbiw","@opentelemetry/semantic-conventions":"lCgfj","./version":"cZp6b","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"2Hbiw":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * https://github.com/open-telemetry/opentelemetry-specification/blob/master/specification/trace/semantic_conventions/http.md
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AttributeNames", ()=>AttributeNames);
var AttributeNames;
(function(AttributeNames) {
    AttributeNames["COMPONENT"] = "component";
    AttributeNames["HTTP_ERROR_NAME"] = "http.error_name";
    AttributeNames["HTTP_STATUS_TEXT"] = "http.status_text";
})(AttributeNames || (AttributeNames = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"cZp6b":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // this is autogenerated file, see scripts/version-update.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
var VERSION = "0.50.0";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"lOen7":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _instrumentation = require("./instrumentation");
parcelHelpers.exportAll(_instrumentation, exports);
var _types = require("./types");
parcelHelpers.exportAll(_types, exports);
var _attributeNames = require("./enums/AttributeNames");
parcelHelpers.exportAll(_attributeNames, exports);

},{"./instrumentation":"5EeMl","./types":false,"./enums/AttributeNames":false,"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"5EeMl":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UserInteractionInstrumentation", ()=>UserInteractionInstrumentation);
/// <reference types="zone.js" />
var _instrumentation = require("@opentelemetry/instrumentation");
var _api = require("@opentelemetry/api");
var _core = require("@opentelemetry/core");
var _sdkTraceWeb = require("@opentelemetry/sdk-trace-web");
var _attributeNames = require("./enums/AttributeNames");
var _version = require("./version");
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var ZONE_CONTEXT_KEY = "OT_ZONE_CONTEXT";
var EVENT_NAVIGATION_NAME = "Navigation:";
var DEFAULT_EVENT_NAMES = [
    "click"
];
function defaultShouldPreventSpanCreation() {
    return false;
}
/**
 * This class represents a UserInteraction plugin for auto instrumentation.
 * If zone.js is available then it patches the zone otherwise it patches
 * addEventListener of HTMLElement
 */ var UserInteractionInstrumentation = /** @class */ function(_super) {
    __extends(UserInteractionInstrumentation, _super);
    function UserInteractionInstrumentation(config) {
        var _a;
        var _this = _super.call(this, "@opentelemetry/instrumentation-user-interaction", (0, _version.VERSION), config) || this;
        _this.version = (0, _version.VERSION);
        _this.moduleName = "user-interaction";
        _this._spansData = new WeakMap();
        // for addEventListener/removeEventListener state
        _this._wrappedListeners = new WeakMap();
        // for event bubbling
        _this._eventsSpanMap = new WeakMap();
        _this._eventNames = new Set((_a = config === null || config === void 0 ? void 0 : config.eventNames) !== null && _a !== void 0 ? _a : DEFAULT_EVENT_NAMES);
        _this._shouldPreventSpanCreation = typeof (config === null || config === void 0 ? void 0 : config.shouldPreventSpanCreation) === "function" ? config.shouldPreventSpanCreation : defaultShouldPreventSpanCreation;
        return _this;
    }
    UserInteractionInstrumentation.prototype.init = function() {};
    /**
     * This will check if last task was timeout and will save the time to
     * fix the user interaction when nothing happens
     * This timeout comes from xhr plugin which is needed to collect information
     * about last xhr main request from observer
     * @param task
     * @param span
     */ UserInteractionInstrumentation.prototype._checkForTimeout = function(task, span) {
        var spanData = this._spansData.get(span);
        if (spanData) {
            if (task.source === "setTimeout") spanData.hrTimeLastTimeout = (0, _core.hrTime)();
            else if (task.source !== "Promise.then" && task.source !== "setTimeout") spanData.hrTimeLastTimeout = undefined;
        }
    };
    /**
     * Controls whether or not to create a span, based on the event type.
     */ UserInteractionInstrumentation.prototype._allowEventName = function(eventName) {
        return this._eventNames.has(eventName);
    };
    /**
     * Creates a new span
     * @param element
     * @param eventName
     * @param parentSpan
     */ UserInteractionInstrumentation.prototype._createSpan = function(element, eventName, parentSpan) {
        var _a;
        if (!(element instanceof HTMLElement)) return undefined;
        if (!element.getAttribute) return undefined;
        if (element.hasAttribute("disabled")) return undefined;
        if (!this._allowEventName(eventName)) return undefined;
        var xpath = (0, _sdkTraceWeb.getElementXPath)(element, true);
        try {
            var span = this.tracer.startSpan(eventName, {
                attributes: (_a = {}, _a[(0, _attributeNames.AttributeNames).EVENT_TYPE] = eventName, _a[(0, _attributeNames.AttributeNames).TARGET_ELEMENT] = element.tagName, _a[(0, _attributeNames.AttributeNames).TARGET_XPATH] = xpath, _a[(0, _attributeNames.AttributeNames).HTTP_URL] = window.location.href, _a)
            }, parentSpan ? _api.trace.setSpan(_api.context.active(), parentSpan) : undefined);
            if (this._shouldPreventSpanCreation(eventName, element, span) === true) return undefined;
            this._spansData.set(span, {
                taskCount: 0
            });
            return span;
        } catch (e) {
            this._diag.error("failed to start create new user interaction span", e);
        }
        return undefined;
    };
    /**
     * Decrement number of tasks that left in zone,
     * This is needed to be able to end span when no more tasks left
     * @param span
     */ UserInteractionInstrumentation.prototype._decrementTask = function(span) {
        var spanData = this._spansData.get(span);
        if (spanData) {
            spanData.taskCount--;
            if (spanData.taskCount === 0) this._tryToEndSpan(span, spanData.hrTimeLastTimeout);
        }
    };
    /**
     * Return the current span
     * @param zone
     * @private
     */ UserInteractionInstrumentation.prototype._getCurrentSpan = function(zone) {
        var context = zone.get(ZONE_CONTEXT_KEY);
        if (context) return _api.trace.getSpan(context);
        return context;
    };
    /**
     * Increment number of tasks that are run within the same zone.
     *     This is needed to be able to end span when no more tasks left
     * @param span
     */ UserInteractionInstrumentation.prototype._incrementTask = function(span) {
        var spanData = this._spansData.get(span);
        if (spanData) spanData.taskCount++;
    };
    /**
     * Returns true iff we should use the patched callback; false if it's already been patched
     */ UserInteractionInstrumentation.prototype.addPatchedListener = function(on, type, listener, wrappedListener) {
        var listener2Type = this._wrappedListeners.get(listener);
        if (!listener2Type) {
            listener2Type = new Map();
            this._wrappedListeners.set(listener, listener2Type);
        }
        var element2patched = listener2Type.get(type);
        if (!element2patched) {
            element2patched = new Map();
            listener2Type.set(type, element2patched);
        }
        if (element2patched.has(on)) return false;
        element2patched.set(on, wrappedListener);
        return true;
    };
    /**
     * Returns the patched version of the callback (or undefined)
     */ UserInteractionInstrumentation.prototype.removePatchedListener = function(on, type, listener) {
        var listener2Type = this._wrappedListeners.get(listener);
        if (!listener2Type) return undefined;
        var element2patched = listener2Type.get(type);
        if (!element2patched) return undefined;
        var patched = element2patched.get(on);
        if (patched) {
            element2patched.delete(on);
            if (element2patched.size === 0) {
                listener2Type.delete(type);
                if (listener2Type.size === 0) this._wrappedListeners.delete(listener);
            }
        }
        return patched;
    };
    // utility method to deal with the Function|EventListener nature of addEventListener
    UserInteractionInstrumentation.prototype._invokeListener = function(listener, target, args) {
        if (typeof listener === "function") return listener.apply(target, args);
        else return listener.handleEvent(args[0]);
    };
    /**
     * This patches the addEventListener of HTMLElement to be able to
     * auto instrument the click events
     * This is done when zone is not available
     */ UserInteractionInstrumentation.prototype._patchAddEventListener = function() {
        var plugin = this;
        return function(original) {
            return function addEventListenerPatched(type, listener, useCapture) {
                // Forward calls with listener = null
                if (!listener) return original.call(this, type, listener, useCapture);
                // filter out null (typeof null === 'object')
                var once = useCapture && typeof useCapture === "object" && useCapture.once;
                var patchedListener = function() {
                    var _this = this;
                    var args = [];
                    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
                    var parentSpan;
                    var event = args[0];
                    var target = event === null || event === void 0 ? void 0 : event.target;
                    if (event) parentSpan = plugin._eventsSpanMap.get(event);
                    if (once) plugin.removePatchedListener(this, type, listener);
                    var span = plugin._createSpan(target, type, parentSpan);
                    if (span) {
                        if (event) plugin._eventsSpanMap.set(event, span);
                        return _api.context.with(_api.trace.setSpan(_api.context.active(), span), function() {
                            var result = plugin._invokeListener(listener, _this, args);
                            // no zone so end span immediately
                            span.end();
                            return result;
                        });
                    } else return plugin._invokeListener(listener, this, args);
                };
                if (plugin.addPatchedListener(this, type, listener, patchedListener)) return original.call(this, type, patchedListener, useCapture);
            };
        };
    };
    /**
     * This patches the removeEventListener of HTMLElement to handle the fact that
     * we patched the original callbacks
     * This is done when zone is not available
     */ UserInteractionInstrumentation.prototype._patchRemoveEventListener = function() {
        var plugin = this;
        return function(original) {
            return function removeEventListenerPatched(type, listener, useCapture) {
                var wrappedListener = plugin.removePatchedListener(this, type, listener);
                if (wrappedListener) return original.call(this, type, wrappedListener, useCapture);
                else return original.call(this, type, listener, useCapture);
            };
        };
    };
    /**
     * Most browser provide event listener api via EventTarget in prototype chain.
     * Exception to this is IE 11 which has it on the prototypes closest to EventTarget:
     *
     * * - has addEventListener in IE
     * ** - has addEventListener in all other browsers
     * ! - missing in IE
     *
     * HTMLElement -> Element -> Node * -> EventTarget **! -> Object
     * Document -> Node * -> EventTarget **! -> Object
     * Window * -> WindowProperties ! -> EventTarget **! -> Object
     */ UserInteractionInstrumentation.prototype._getPatchableEventTargets = function() {
        return window.EventTarget ? [
            EventTarget.prototype
        ] : [
            Node.prototype,
            Window.prototype
        ];
    };
    /**
     * Patches the history api
     */ UserInteractionInstrumentation.prototype._patchHistoryApi = function() {
        this._unpatchHistoryApi();
        this._wrap(history, "replaceState", this._patchHistoryMethod());
        this._wrap(history, "pushState", this._patchHistoryMethod());
        this._wrap(history, "back", this._patchHistoryMethod());
        this._wrap(history, "forward", this._patchHistoryMethod());
        this._wrap(history, "go", this._patchHistoryMethod());
    };
    /**
     * Patches the certain history api method
     */ UserInteractionInstrumentation.prototype._patchHistoryMethod = function() {
        var plugin = this;
        return function(original) {
            return function patchHistoryMethod() {
                var args = [];
                for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
                var url = "" + location.pathname + location.hash + location.search;
                var result = original.apply(this, args);
                var urlAfter = "" + location.pathname + location.hash + location.search;
                if (url !== urlAfter) plugin._updateInteractionName(urlAfter);
                return result;
            };
        };
    };
    /**
     * unpatch the history api methods
     */ UserInteractionInstrumentation.prototype._unpatchHistoryApi = function() {
        if ((0, _instrumentation.isWrapped)(history.replaceState)) this._unwrap(history, "replaceState");
        if ((0, _instrumentation.isWrapped)(history.pushState)) this._unwrap(history, "pushState");
        if ((0, _instrumentation.isWrapped)(history.back)) this._unwrap(history, "back");
        if ((0, _instrumentation.isWrapped)(history.forward)) this._unwrap(history, "forward");
        if ((0, _instrumentation.isWrapped)(history.go)) this._unwrap(history, "go");
    };
    /**
     * Updates interaction span name
     * @param url
     */ UserInteractionInstrumentation.prototype._updateInteractionName = function(url) {
        var span = _api.trace.getSpan(_api.context.active());
        if (span && typeof span.updateName === "function") span.updateName(EVENT_NAVIGATION_NAME + " " + url);
    };
    /**
     * Patches zone cancel task - this is done to be able to correctly
     * decrement the number of remaining tasks
     */ UserInteractionInstrumentation.prototype._patchZoneCancelTask = function() {
        var plugin = this;
        return function(original) {
            return function patchCancelTask(task) {
                var currentZone = Zone.current;
                var currentSpan = plugin._getCurrentSpan(currentZone);
                if (currentSpan && plugin._shouldCountTask(task, currentZone)) plugin._decrementTask(currentSpan);
                return original.call(this, task);
            };
        };
    };
    /**
     * Patches zone schedule task - this is done to be able to correctly
     * increment the number of tasks running within current zone but also to
     * save time in case of timeout running from xhr plugin when waiting for
     * main request from PerformanceResourceTiming
     */ UserInteractionInstrumentation.prototype._patchZoneScheduleTask = function() {
        var plugin = this;
        return function(original) {
            return function patchScheduleTask(task) {
                var currentZone = Zone.current;
                var currentSpan = plugin._getCurrentSpan(currentZone);
                if (currentSpan && plugin._shouldCountTask(task, currentZone)) {
                    plugin._incrementTask(currentSpan);
                    plugin._checkForTimeout(task, currentSpan);
                }
                return original.call(this, task);
            };
        };
    };
    /**
     * Patches zone run task - this is done to be able to create a span when
     * user interaction starts
     * @private
     */ UserInteractionInstrumentation.prototype._patchZoneRunTask = function() {
        var plugin = this;
        return function(original) {
            return function patchRunTask(task, applyThis, applyArgs) {
                var event = Array.isArray(applyArgs) && applyArgs[0] instanceof Event ? applyArgs[0] : undefined;
                var target = event === null || event === void 0 ? void 0 : event.target;
                var span;
                var activeZone = this;
                if (target) {
                    span = plugin._createSpan(target, task.eventName);
                    if (span) {
                        plugin._incrementTask(span);
                        return activeZone.run(function() {
                            try {
                                return _api.context.with(_api.trace.setSpan(_api.context.active(), span), function() {
                                    var currentZone = Zone.current;
                                    task._zone = currentZone;
                                    return original.call(currentZone, task, applyThis, applyArgs);
                                });
                            } finally{
                                plugin._decrementTask(span);
                            }
                        });
                    }
                } else span = plugin._getCurrentSpan(activeZone);
                try {
                    return original.call(activeZone, task, applyThis, applyArgs);
                } finally{
                    if (span && plugin._shouldCountTask(task, activeZone)) plugin._decrementTask(span);
                }
            };
        };
    };
    /**
     * Decides if task should be counted.
     * @param task
     * @param currentZone
     * @private
     */ UserInteractionInstrumentation.prototype._shouldCountTask = function(task, currentZone) {
        if (task._zone) currentZone = task._zone;
        if (!currentZone || !task.data || task.data.isPeriodic) return false;
        var currentSpan = this._getCurrentSpan(currentZone);
        if (!currentSpan) return false;
        if (!this._spansData.get(currentSpan)) return false;
        return task.type === "macroTask" || task.type === "microTask";
    };
    /**
     * Will try to end span when such span still exists.
     * @param span
     * @param endTime
     * @private
     */ UserInteractionInstrumentation.prototype._tryToEndSpan = function(span, endTime) {
        if (span) {
            var spanData = this._spansData.get(span);
            if (spanData) {
                span.end(endTime);
                this._spansData.delete(span);
            }
        }
    };
    /**
     * implements enable function
     */ UserInteractionInstrumentation.prototype.enable = function() {
        var _this = this;
        var ZoneWithPrototype = this.getZoneWithPrototype();
        this._diag.debug("applying patch to", this.moduleName, this.version, "zone:", !!ZoneWithPrototype);
        if (ZoneWithPrototype) {
            if ((0, _instrumentation.isWrapped)(ZoneWithPrototype.prototype.runTask)) {
                this._unwrap(ZoneWithPrototype.prototype, "runTask");
                this._diag.debug("removing previous patch from method runTask");
            }
            if ((0, _instrumentation.isWrapped)(ZoneWithPrototype.prototype.scheduleTask)) {
                this._unwrap(ZoneWithPrototype.prototype, "scheduleTask");
                this._diag.debug("removing previous patch from method scheduleTask");
            }
            if ((0, _instrumentation.isWrapped)(ZoneWithPrototype.prototype.cancelTask)) {
                this._unwrap(ZoneWithPrototype.prototype, "cancelTask");
                this._diag.debug("removing previous patch from method cancelTask");
            }
            this._zonePatched = true;
            this._wrap(ZoneWithPrototype.prototype, "runTask", this._patchZoneRunTask());
            this._wrap(ZoneWithPrototype.prototype, "scheduleTask", this._patchZoneScheduleTask());
            this._wrap(ZoneWithPrototype.prototype, "cancelTask", this._patchZoneCancelTask());
        } else {
            this._zonePatched = false;
            var targets = this._getPatchableEventTargets();
            targets.forEach(function(target) {
                if ((0, _instrumentation.isWrapped)(target.addEventListener)) {
                    _this._unwrap(target, "addEventListener");
                    _this._diag.debug("removing previous patch from method addEventListener");
                }
                if ((0, _instrumentation.isWrapped)(target.removeEventListener)) {
                    _this._unwrap(target, "removeEventListener");
                    _this._diag.debug("removing previous patch from method removeEventListener");
                }
                _this._wrap(target, "addEventListener", _this._patchAddEventListener());
                _this._wrap(target, "removeEventListener", _this._patchRemoveEventListener());
            });
        }
        this._patchHistoryApi();
    };
    /**
     * implements unpatch function
     */ UserInteractionInstrumentation.prototype.disable = function() {
        var _this = this;
        var ZoneWithPrototype = this.getZoneWithPrototype();
        this._diag.debug("removing patch from", this.moduleName, this.version, "zone:", !!ZoneWithPrototype);
        if (ZoneWithPrototype && this._zonePatched) {
            if ((0, _instrumentation.isWrapped)(ZoneWithPrototype.prototype.runTask)) this._unwrap(ZoneWithPrototype.prototype, "runTask");
            if ((0, _instrumentation.isWrapped)(ZoneWithPrototype.prototype.scheduleTask)) this._unwrap(ZoneWithPrototype.prototype, "scheduleTask");
            if ((0, _instrumentation.isWrapped)(ZoneWithPrototype.prototype.cancelTask)) this._unwrap(ZoneWithPrototype.prototype, "cancelTask");
        } else {
            var targets = this._getPatchableEventTargets();
            targets.forEach(function(target) {
                if ((0, _instrumentation.isWrapped)(target.addEventListener)) _this._unwrap(target, "addEventListener");
                if ((0, _instrumentation.isWrapped)(target.removeEventListener)) _this._unwrap(target, "removeEventListener");
            });
        }
        this._unpatchHistoryApi();
    };
    /**
     * returns Zone
     */ UserInteractionInstrumentation.prototype.getZoneWithPrototype = function() {
        var _window = window;
        return _window.Zone;
    };
    return UserInteractionInstrumentation;
}((0, _instrumentation.InstrumentationBase));

},{"@opentelemetry/instrumentation":"3OTpd","@opentelemetry/api":"6AC4z","@opentelemetry/core":"dBsXh","@opentelemetry/sdk-trace-web":"eXZZL","./enums/AttributeNames":"50VYj","./version":"6PVqs","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"50VYj":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AttributeNames", ()=>AttributeNames);
var AttributeNames;
(function(AttributeNames) {
    AttributeNames["EVENT_TYPE"] = "event_type";
    AttributeNames["TARGET_ELEMENT"] = "target_element";
    AttributeNames["TARGET_XPATH"] = "target_xpath";
    AttributeNames["HTTP_URL"] = "http.url";
})(AttributeNames || (AttributeNames = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"6PVqs":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // this is autogenerated file, see scripts/version-update.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
var VERSION = "0.37.0";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"jYPe9":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _xhr = require("./xhr");
parcelHelpers.exportAll(_xhr, exports);

},{"./xhr":"3C1i1","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"3C1i1":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "XMLHttpRequestInstrumentation", ()=>XMLHttpRequestInstrumentation);
var _api = require("@opentelemetry/api");
var _instrumentation = require("@opentelemetry/instrumentation");
var _core = require("@opentelemetry/core");
var _semanticConventions = require("@opentelemetry/semantic-conventions");
var _sdkTraceWeb = require("@opentelemetry/sdk-trace-web");
var _eventNames = require("./enums/EventNames");
var _version = require("./version");
var _attributeNames = require("./enums/AttributeNames");
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
// how long to wait for observer to collect information about resources
// this is needed as event "load" is called before observer
// hard to say how long it should really wait, seems like 300ms is
// safe enough
var OBSERVER_WAIT_TIME_MS = 300;
/**
 * This class represents a XMLHttpRequest plugin for auto instrumentation
 */ var XMLHttpRequestInstrumentation = /** @class */ function(_super) {
    __extends(XMLHttpRequestInstrumentation, _super);
    function XMLHttpRequestInstrumentation(config) {
        var _this = _super.call(this, "@opentelemetry/instrumentation-xml-http-request", (0, _version.VERSION), config) || this;
        _this.component = "xml-http-request";
        _this.version = (0, _version.VERSION);
        _this.moduleName = _this.component;
        _this._tasksCount = 0;
        _this._xhrMem = new WeakMap();
        _this._usedResources = new WeakSet();
        return _this;
    }
    XMLHttpRequestInstrumentation.prototype.init = function() {};
    XMLHttpRequestInstrumentation.prototype._getConfig = function() {
        return this._config;
    };
    /**
     * Adds custom headers to XMLHttpRequest
     * @param xhr
     * @param spanUrl
     * @private
     */ XMLHttpRequestInstrumentation.prototype._addHeaders = function(xhr, spanUrl) {
        var url = (0, _sdkTraceWeb.parseUrl)(spanUrl).href;
        if (!(0, _sdkTraceWeb.shouldPropagateTraceHeaders)(url, this._getConfig().propagateTraceHeaderCorsUrls)) {
            var headers_1 = {};
            _api.propagation.inject(_api.context.active(), headers_1);
            if (Object.keys(headers_1).length > 0) this._diag.debug("headers inject skipped due to CORS policy");
            return;
        }
        var headers = {};
        _api.propagation.inject(_api.context.active(), headers);
        Object.keys(headers).forEach(function(key) {
            xhr.setRequestHeader(key, String(headers[key]));
        });
    };
    /**
     * Add cors pre flight child span
     * @param span
     * @param corsPreFlightRequest
     * @private
     */ XMLHttpRequestInstrumentation.prototype._addChildSpan = function(span, corsPreFlightRequest) {
        var _this = this;
        _api.context.with(_api.trace.setSpan(_api.context.active(), span), function() {
            var childSpan = _this.tracer.startSpan("CORS Preflight", {
                startTime: corsPreFlightRequest[(0, _sdkTraceWeb.PerformanceTimingNames).FETCH_START]
            });
            if (!_this._getConfig().ignoreNetworkEvents) (0, _sdkTraceWeb.addSpanNetworkEvents)(childSpan, corsPreFlightRequest);
            childSpan.end(corsPreFlightRequest[(0, _sdkTraceWeb.PerformanceTimingNames).RESPONSE_END]);
        });
    };
    /**
     * Add attributes when span is going to end
     * @param span
     * @param xhr
     * @param spanUrl
     * @private
     */ XMLHttpRequestInstrumentation.prototype._addFinalSpanAttributes = function(span, xhrMem, spanUrl) {
        if (typeof spanUrl === "string") {
            var parsedUrl = (0, _sdkTraceWeb.parseUrl)(spanUrl);
            if (xhrMem.status !== undefined) span.setAttribute((0, _semanticConventions.SemanticAttributes).HTTP_STATUS_CODE, xhrMem.status);
            if (xhrMem.statusText !== undefined) span.setAttribute((0, _attributeNames.AttributeNames).HTTP_STATUS_TEXT, xhrMem.statusText);
            span.setAttribute((0, _semanticConventions.SemanticAttributes).HTTP_HOST, parsedUrl.host);
            span.setAttribute((0, _semanticConventions.SemanticAttributes).HTTP_SCHEME, parsedUrl.protocol.replace(":", ""));
            // @TODO do we want to collect this or it will be collected earlier once only or
            //    maybe when parent span is not available ?
            span.setAttribute((0, _semanticConventions.SemanticAttributes).HTTP_USER_AGENT, navigator.userAgent);
        }
    };
    XMLHttpRequestInstrumentation.prototype._applyAttributesAfterXHR = function(span, xhr) {
        var _this = this;
        var applyCustomAttributesOnSpan = this._getConfig().applyCustomAttributesOnSpan;
        if (typeof applyCustomAttributesOnSpan === "function") (0, _instrumentation.safeExecuteInTheMiddle)(function() {
            return applyCustomAttributesOnSpan(span, xhr);
        }, function(error) {
            if (!error) return;
            _this._diag.error("applyCustomAttributesOnSpan", error);
        }, true);
    };
    /**
     * will collect information about all resources created
     * between "send" and "end" with additional waiting for main resource
     * @param xhr
     * @param spanUrl
     * @private
     */ XMLHttpRequestInstrumentation.prototype._addResourceObserver = function(xhr, spanUrl) {
        var xhrMem = this._xhrMem.get(xhr);
        if (!xhrMem || typeof PerformanceObserver !== "function" || typeof PerformanceResourceTiming !== "function") return;
        xhrMem.createdResources = {
            observer: new PerformanceObserver(function(list) {
                var entries = list.getEntries();
                var parsedUrl = (0, _sdkTraceWeb.parseUrl)(spanUrl);
                entries.forEach(function(entry) {
                    if (entry.initiatorType === "xmlhttprequest" && entry.name === parsedUrl.href) {
                        if (xhrMem.createdResources) xhrMem.createdResources.entries.push(entry);
                    }
                });
            }),
            entries: []
        };
        xhrMem.createdResources.observer.observe({
            entryTypes: [
                "resource"
            ]
        });
    };
    /**
     * Clears the resource timings and all resources assigned with spans
     *     when {@link XMLHttpRequestInstrumentationConfig.clearTimingResources} is
     *     set to true (default false)
     * @private
     */ XMLHttpRequestInstrumentation.prototype._clearResources = function() {
        if (this._tasksCount === 0 && this._getConfig().clearTimingResources) {
            (0, _core.otperformance).clearResourceTimings();
            this._xhrMem = new WeakMap();
            this._usedResources = new WeakSet();
        }
    };
    /**
     * Finds appropriate resource and add network events to the span
     * @param span
     */ XMLHttpRequestInstrumentation.prototype._findResourceAndAddNetworkEvents = function(xhrMem, span, spanUrl, startTime, endTime) {
        if (!spanUrl || !startTime || !endTime || !xhrMem.createdResources) return;
        var resources = xhrMem.createdResources.entries;
        if (!resources || !resources.length) // fallback - either Observer is not available or it took longer
        // then OBSERVER_WAIT_TIME_MS and observer didn't collect enough
        // information
        // ts thinks this is the perf_hooks module, but it is the browser performance api
        resources = (0, _core.otperformance).getEntriesByType("resource");
        var resource = (0, _sdkTraceWeb.getResource)((0, _sdkTraceWeb.parseUrl)(spanUrl).href, startTime, endTime, resources, this._usedResources);
        if (resource.mainRequest) {
            var mainRequest = resource.mainRequest;
            this._markResourceAsUsed(mainRequest);
            var corsPreFlightRequest = resource.corsPreFlightRequest;
            if (corsPreFlightRequest) {
                this._addChildSpan(span, corsPreFlightRequest);
                this._markResourceAsUsed(corsPreFlightRequest);
            }
            if (!this._getConfig().ignoreNetworkEvents) (0, _sdkTraceWeb.addSpanNetworkEvents)(span, mainRequest);
        }
    };
    /**
     * Removes the previous information about span.
     * This might happened when the same xhr is used again.
     * @param xhr
     * @private
     */ XMLHttpRequestInstrumentation.prototype._cleanPreviousSpanInformation = function(xhr) {
        var xhrMem = this._xhrMem.get(xhr);
        if (xhrMem) {
            var callbackToRemoveEvents = xhrMem.callbackToRemoveEvents;
            if (callbackToRemoveEvents) callbackToRemoveEvents();
            this._xhrMem.delete(xhr);
        }
    };
    /**
     * Creates a new span when method "open" is called
     * @param xhr
     * @param url
     * @param method
     * @private
     */ XMLHttpRequestInstrumentation.prototype._createSpan = function(xhr, url, method) {
        var _a;
        if ((0, _core.isUrlIgnored)(url, this._getConfig().ignoreUrls)) {
            this._diag.debug("ignoring span as url matches ignored url");
            return;
        }
        var spanName = method.toUpperCase();
        var currentSpan = this.tracer.startSpan(spanName, {
            kind: _api.SpanKind.CLIENT,
            attributes: (_a = {}, _a[(0, _semanticConventions.SemanticAttributes).HTTP_METHOD] = method, _a[(0, _semanticConventions.SemanticAttributes).HTTP_URL] = (0, _sdkTraceWeb.parseUrl)(url).toString(), _a)
        });
        currentSpan.addEvent((0, _eventNames.EventNames).METHOD_OPEN);
        this._cleanPreviousSpanInformation(xhr);
        this._xhrMem.set(xhr, {
            span: currentSpan,
            spanUrl: url
        });
        return currentSpan;
    };
    /**
     * Marks certain [resource]{@link PerformanceResourceTiming} when information
     * from this is used to add events to span.
     * This is done to avoid reusing the same resource again for next span
     * @param resource
     * @private
     */ XMLHttpRequestInstrumentation.prototype._markResourceAsUsed = function(resource) {
        this._usedResources.add(resource);
    };
    /**
     * Patches the method open
     * @private
     */ XMLHttpRequestInstrumentation.prototype._patchOpen = function() {
        var _this = this;
        return function(original) {
            var plugin = _this;
            return function patchOpen() {
                var args = [];
                for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
                var method = args[0];
                var url = args[1];
                plugin._createSpan(this, url, method);
                return original.apply(this, args);
            };
        };
    };
    /**
     * Patches the method send
     * @private
     */ XMLHttpRequestInstrumentation.prototype._patchSend = function() {
        var plugin = this;
        function endSpanTimeout(eventName, xhrMem, performanceEndTime, endTime) {
            var callbackToRemoveEvents = xhrMem.callbackToRemoveEvents;
            if (typeof callbackToRemoveEvents === "function") callbackToRemoveEvents();
            var span = xhrMem.span, spanUrl = xhrMem.spanUrl, sendStartTime = xhrMem.sendStartTime;
            if (span) {
                plugin._findResourceAndAddNetworkEvents(xhrMem, span, spanUrl, sendStartTime, performanceEndTime);
                span.addEvent(eventName, endTime);
                plugin._addFinalSpanAttributes(span, xhrMem, spanUrl);
                span.end(endTime);
                plugin._tasksCount--;
            }
            plugin._clearResources();
        }
        function endSpan(eventName, xhr) {
            var xhrMem = plugin._xhrMem.get(xhr);
            if (!xhrMem) return;
            xhrMem.status = xhr.status;
            xhrMem.statusText = xhr.statusText;
            plugin._xhrMem.delete(xhr);
            if (xhrMem.span) plugin._applyAttributesAfterXHR(xhrMem.span, xhr);
            var performanceEndTime = (0, _core.hrTime)();
            var endTime = Date.now();
            // the timeout is needed as observer doesn't have yet information
            // when event "load" is called. Also the time may differ depends on
            // browser and speed of computer
            setTimeout(function() {
                endSpanTimeout(eventName, xhrMem, performanceEndTime, endTime);
            }, OBSERVER_WAIT_TIME_MS);
        }
        function onError() {
            endSpan((0, _eventNames.EventNames).EVENT_ERROR, this);
        }
        function onAbort() {
            endSpan((0, _eventNames.EventNames).EVENT_ABORT, this);
        }
        function onTimeout() {
            endSpan((0, _eventNames.EventNames).EVENT_TIMEOUT, this);
        }
        function onLoad() {
            if (this.status < 299) endSpan((0, _eventNames.EventNames).EVENT_LOAD, this);
            else endSpan((0, _eventNames.EventNames).EVENT_ERROR, this);
        }
        function unregister(xhr) {
            xhr.removeEventListener("abort", onAbort);
            xhr.removeEventListener("error", onError);
            xhr.removeEventListener("load", onLoad);
            xhr.removeEventListener("timeout", onTimeout);
            var xhrMem = plugin._xhrMem.get(xhr);
            if (xhrMem) xhrMem.callbackToRemoveEvents = undefined;
        }
        return function(original) {
            return function patchSend() {
                var _this = this;
                var args = [];
                for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
                var xhrMem = plugin._xhrMem.get(this);
                if (!xhrMem) return original.apply(this, args);
                var currentSpan = xhrMem.span;
                var spanUrl = xhrMem.spanUrl;
                if (currentSpan && spanUrl) _api.context.with(_api.trace.setSpan(_api.context.active(), currentSpan), function() {
                    plugin._tasksCount++;
                    xhrMem.sendStartTime = (0, _core.hrTime)();
                    currentSpan.addEvent((0, _eventNames.EventNames).METHOD_SEND);
                    _this.addEventListener("abort", onAbort);
                    _this.addEventListener("error", onError);
                    _this.addEventListener("load", onLoad);
                    _this.addEventListener("timeout", onTimeout);
                    xhrMem.callbackToRemoveEvents = function() {
                        unregister(_this);
                        if (xhrMem.createdResources) xhrMem.createdResources.observer.disconnect();
                    };
                    plugin._addHeaders(_this, spanUrl);
                    plugin._addResourceObserver(_this, spanUrl);
                });
                return original.apply(this, args);
            };
        };
    };
    /**
     * implements enable function
     */ XMLHttpRequestInstrumentation.prototype.enable = function() {
        this._diag.debug("applying patch to", this.moduleName, this.version);
        if ((0, _instrumentation.isWrapped)(XMLHttpRequest.prototype.open)) {
            this._unwrap(XMLHttpRequest.prototype, "open");
            this._diag.debug("removing previous patch from method open");
        }
        if ((0, _instrumentation.isWrapped)(XMLHttpRequest.prototype.send)) {
            this._unwrap(XMLHttpRequest.prototype, "send");
            this._diag.debug("removing previous patch from method send");
        }
        this._wrap(XMLHttpRequest.prototype, "open", this._patchOpen());
        this._wrap(XMLHttpRequest.prototype, "send", this._patchSend());
    };
    /**
     * implements disable function
     */ XMLHttpRequestInstrumentation.prototype.disable = function() {
        this._diag.debug("removing patch from", this.moduleName, this.version);
        this._unwrap(XMLHttpRequest.prototype, "open");
        this._unwrap(XMLHttpRequest.prototype, "send");
        this._tasksCount = 0;
        this._xhrMem = new WeakMap();
        this._usedResources = new WeakSet();
    };
    return XMLHttpRequestInstrumentation;
}((0, _instrumentation.InstrumentationBase));

},{"@opentelemetry/api":"6AC4z","@opentelemetry/instrumentation":"3OTpd","@opentelemetry/core":"dBsXh","@opentelemetry/semantic-conventions":"lCgfj","@opentelemetry/sdk-trace-web":"eXZZL","./enums/EventNames":"2ideG","./version":"ce7eg","./enums/AttributeNames":"eLfrd","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"2ideG":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventNames", ()=>EventNames);
var EventNames;
(function(EventNames) {
    EventNames["METHOD_OPEN"] = "open";
    EventNames["METHOD_SEND"] = "send";
    EventNames["EVENT_ABORT"] = "abort";
    EventNames["EVENT_ERROR"] = "error";
    EventNames["EVENT_LOAD"] = "loaded";
    EventNames["EVENT_TIMEOUT"] = "timeout";
})(EventNames || (EventNames = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"ce7eg":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // this is autogenerated file, see scripts/version-update.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
var VERSION = "0.50.0";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"eLfrd":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * https://github.com/open-telemetry/opentelemetry-specification/blob/master/specification/trace/semantic_conventions/http.md
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AttributeNames", ()=>AttributeNames);
var AttributeNames;
(function(AttributeNames) {
    AttributeNames["HTTP_STATUS_TEXT"] = "http.status_text";
})(AttributeNames || (AttributeNames = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"8Sk0y":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _platform = require("./platform");
parcelHelpers.exportAll(_platform, exports);
var _zipkin = require("./zipkin");
parcelHelpers.exportAll(_zipkin, exports);

},{"./platform":false,"./zipkin":"fgtec","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"32G3p":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _util = require("./util");
parcelHelpers.exportAll(_util, exports);

},{"./util":"lxmr7","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"lxmr7":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Prepares send function that will send spans to the remote Zipkin service.
 * @param urlStr - url to send spans
 * @param headers - headers
 * send
 */ parcelHelpers.export(exports, "prepareSend", ()=>prepareSend);
var _api = require("@opentelemetry/api");
var _core = require("@opentelemetry/core");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = undefined && undefined.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
function prepareSend(urlStr, headers) {
    var xhrHeaders;
    var useBeacon = typeof navigator.sendBeacon === "function" && !headers;
    if (headers) xhrHeaders = __assign({
        Accept: "application/json",
        "Content-Type": "application/json"
    }, headers);
    /**
     * Send spans to the remote Zipkin service.
     */ return function send(zipkinSpans, done) {
        if (zipkinSpans.length === 0) {
            (0, _api.diag).debug("Zipkin send with empty spans");
            return done({
                code: (0, _core.ExportResultCode).SUCCESS
            });
        }
        var payload = JSON.stringify(zipkinSpans);
        if (useBeacon) sendWithBeacon(payload, done, urlStr);
        else sendWithXhr(payload, done, urlStr, xhrHeaders);
    };
}
/**
 * Sends data using beacon
 * @param data
 * @param done
 * @param urlStr
 */ function sendWithBeacon(data, done, urlStr) {
    if (navigator.sendBeacon(urlStr, data)) {
        (0, _api.diag).debug("sendBeacon - can send", data);
        done({
            code: (0, _core.ExportResultCode).SUCCESS
        });
    } else done({
        code: (0, _core.ExportResultCode).FAILED,
        error: new Error("sendBeacon - cannot send " + data)
    });
}
/**
 * Sends data using XMLHttpRequest
 * @param data
 * @param done
 * @param urlStr
 * @param xhrHeaders
 */ function sendWithXhr(data, done, urlStr, xhrHeaders) {
    if (xhrHeaders === void 0) xhrHeaders = {};
    var xhr = new XMLHttpRequest();
    xhr.open("POST", urlStr);
    Object.entries(xhrHeaders).forEach(function(_a) {
        var _b = __read(_a, 2), k = _b[0], v = _b[1];
        xhr.setRequestHeader(k, v);
    });
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            var statusCode = xhr.status || 0;
            (0, _api.diag).debug("Zipkin response status code: " + statusCode + ", body: " + data);
            if (xhr.status >= 200 && xhr.status < 400) return done({
                code: (0, _core.ExportResultCode).SUCCESS
            });
            else return done({
                code: (0, _core.ExportResultCode).FAILED,
                error: new Error("Got unexpected status code from zipkin: " + xhr.status)
            });
        }
    };
    xhr.onerror = function(msg) {
        (0, _core.globalErrorHandler)(new Error("Zipkin request error: " + msg));
        return done({
            code: (0, _core.ExportResultCode).FAILED
        });
    };
    // Issue request to remote service
    (0, _api.diag).debug("Zipkin request payload: " + data);
    xhr.send(data);
}

},{"@opentelemetry/api":"6AC4z","@opentelemetry/core":"dBsXh","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"fgtec":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ZipkinExporter", ()=>ZipkinExporter);
var _api = require("@opentelemetry/api");
var _core = require("@opentelemetry/core");
var _index = require("./platform/index");
var _transform = require("./transform");
var _semanticConventions = require("@opentelemetry/semantic-conventions");
var _utils = require("./utils");
/**
 * Zipkin Exporter
 */ var ZipkinExporter = /** @class */ function() {
    function ZipkinExporter(config) {
        if (config === void 0) config = {};
        this.DEFAULT_SERVICE_NAME = "OpenTelemetry Service";
        this._sendingPromises = [];
        this._urlStr = config.url || (0, _core.getEnv)().OTEL_EXPORTER_ZIPKIN_ENDPOINT;
        this._send = (0, _index.prepareSend)(this._urlStr, config.headers);
        this._serviceName = config.serviceName;
        this._statusCodeTagName = config.statusCodeTagName || (0, _transform.defaultStatusCodeTagName);
        this._statusDescriptionTagName = config.statusDescriptionTagName || (0, _transform.defaultStatusErrorTagName);
        this._isShutdown = false;
        if (typeof config.getExportRequestHeaders === "function") this._getHeaders = (0, _utils.prepareGetHeaders)(config.getExportRequestHeaders);
        else // noop
        this._beforeSend = function() {};
    }
    /**
     * Export spans.
     */ ZipkinExporter.prototype.export = function(spans, resultCallback) {
        var _this = this;
        var serviceName = String(this._serviceName || spans[0].resource.attributes[(0, _semanticConventions.SemanticResourceAttributes).SERVICE_NAME] || this.DEFAULT_SERVICE_NAME);
        (0, _api.diag).debug("Zipkin exporter export");
        if (this._isShutdown) {
            setTimeout(function() {
                return resultCallback({
                    code: (0, _core.ExportResultCode).FAILED,
                    error: new Error("Exporter has been shutdown")
                });
            });
            return;
        }
        var promise = new Promise(function(resolve) {
            _this._sendSpans(spans, serviceName, function(result) {
                resolve();
                resultCallback(result);
            });
        });
        this._sendingPromises.push(promise);
        var popPromise = function() {
            var index = _this._sendingPromises.indexOf(promise);
            _this._sendingPromises.splice(index, 1);
        };
        promise.then(popPromise, popPromise);
    };
    /**
     * Shutdown exporter. Noop operation in this exporter.
     */ ZipkinExporter.prototype.shutdown = function() {
        (0, _api.diag).debug("Zipkin exporter shutdown");
        this._isShutdown = true;
        return this.forceFlush();
    };
    /**
     * Exports any pending spans in exporter
     */ ZipkinExporter.prototype.forceFlush = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
            Promise.all(_this._sendingPromises).then(function() {
                resolve();
            }, reject);
        });
    };
    /**
     * if user defines getExportRequestHeaders in config then this will be called
     * every time before send, otherwise it will be replaced with noop in
     * constructor
     * @default noop
     */ ZipkinExporter.prototype._beforeSend = function() {
        if (this._getHeaders) this._send = (0, _index.prepareSend)(this._urlStr, this._getHeaders());
    };
    /**
     * Transform spans and sends to Zipkin service.
     */ ZipkinExporter.prototype._sendSpans = function(spans, serviceName, done) {
        var _this = this;
        var zipkinSpans = spans.map(function(span) {
            return (0, _transform.toZipkinSpan)(span, String(span.attributes[(0, _semanticConventions.SemanticResourceAttributes).SERVICE_NAME] || span.resource.attributes[(0, _semanticConventions.SemanticResourceAttributes).SERVICE_NAME] || serviceName), _this._statusCodeTagName, _this._statusDescriptionTagName);
        });
        this._beforeSend();
        return this._send(zipkinSpans, function(result) {
            if (done) return done(result);
        });
    };
    return ZipkinExporter;
}();

},{"@opentelemetry/api":"6AC4z","@opentelemetry/core":"dBsXh","./platform/index":"32G3p","./transform":"8smwV","@opentelemetry/semantic-conventions":"lCgfj","./utils":"kRvd5","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"8smwV":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultStatusCodeTagName", ()=>defaultStatusCodeTagName);
parcelHelpers.export(exports, "defaultStatusErrorTagName", ()=>defaultStatusErrorTagName);
/**
 * Translate OpenTelemetry ReadableSpan to ZipkinSpan format
 * @param span Span to be translated
 */ parcelHelpers.export(exports, "toZipkinSpan", ()=>toZipkinSpan);
/** Converts OpenTelemetry Span properties to Zipkin Tags format. */ parcelHelpers.export(exports, "_toZipkinTags", ()=>_toZipkinTags);
/**
 * Converts OpenTelemetry Events to Zipkin Annotations format.
 */ parcelHelpers.export(exports, "_toZipkinAnnotations", ()=>_toZipkinAnnotations);
var _api = require("@opentelemetry/api");
var _core = require("@opentelemetry/core");
var _types = require("./types");
var __values = undefined && undefined.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var _a;
var ZIPKIN_SPAN_KIND_MAPPING = (_a = {}, _a[_api.SpanKind.CLIENT] = _types.SpanKind.CLIENT, _a[_api.SpanKind.SERVER] = _types.SpanKind.SERVER, _a[_api.SpanKind.CONSUMER] = _types.SpanKind.CONSUMER, _a[_api.SpanKind.PRODUCER] = _types.SpanKind.PRODUCER, // When absent, the span is local.
_a[_api.SpanKind.INTERNAL] = undefined, _a);
var defaultStatusCodeTagName = "otel.status_code";
var defaultStatusErrorTagName = "error";
function toZipkinSpan(span, serviceName, statusCodeTagName, statusErrorTagName) {
    var zipkinSpan = {
        traceId: span.spanContext().traceId,
        parentId: span.parentSpanId,
        name: span.name,
        id: span.spanContext().spanId,
        kind: ZIPKIN_SPAN_KIND_MAPPING[span.kind],
        timestamp: (0, _core.hrTimeToMicroseconds)(span.startTime),
        duration: Math.round((0, _core.hrTimeToMicroseconds)(span.duration)),
        localEndpoint: {
            serviceName: serviceName
        },
        tags: _toZipkinTags(span, statusCodeTagName, statusErrorTagName),
        annotations: span.events.length ? _toZipkinAnnotations(span.events) : undefined
    };
    return zipkinSpan;
}
function _toZipkinTags(_a, statusCodeTagName, statusErrorTagName) {
    var e_1, _b;
    var attributes = _a.attributes, resource = _a.resource, status = _a.status, droppedAttributesCount = _a.droppedAttributesCount, droppedEventsCount = _a.droppedEventsCount, droppedLinksCount = _a.droppedLinksCount;
    var tags = {};
    try {
        for(var _c = __values(Object.keys(attributes)), _d = _c.next(); !_d.done; _d = _c.next()){
            var key = _d.value;
            tags[key] = String(attributes[key]);
        }
    } catch (e_1_1) {
        e_1 = {
            error: e_1_1
        };
    } finally{
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        } finally{
            if (e_1) throw e_1.error;
        }
    }
    if (status.code !== _api.SpanStatusCode.UNSET) tags[statusCodeTagName] = String(_api.SpanStatusCode[status.code]);
    if (status.code === _api.SpanStatusCode.ERROR && status.message) tags[statusErrorTagName] = status.message;
    /* Add droppedAttributesCount as a tag */ if (droppedAttributesCount) tags["otel.dropped_attributes_count"] = String(droppedAttributesCount);
    /* Add droppedEventsCount as a tag */ if (droppedEventsCount) tags["otel.dropped_events_count"] = String(droppedEventsCount);
    /* Add droppedLinksCount as a tag */ if (droppedLinksCount) tags["otel.dropped_links_count"] = String(droppedLinksCount);
    Object.keys(resource.attributes).forEach(function(name) {
        return tags[name] = String(resource.attributes[name]);
    });
    return tags;
}
function _toZipkinAnnotations(events) {
    return events.map(function(event) {
        return {
            timestamp: Math.round((0, _core.hrTimeToMicroseconds)(event.time)),
            value: event.name
        };
    });
}

},{"@opentelemetry/api":"6AC4z","@opentelemetry/core":"dBsXh","./types":"7VBQw","@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"7VBQw":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * When present, kind clarifies timestamp, duration and remoteEndpoint. When
 * absent, the span is local or incomplete. Unlike client and server, there
 * is no direct critical path latency relationship between producer and
 * consumer spans.
 * `CLIENT`
 *   timestamp is the moment a request was sent to the server.
 *   duration is the delay until a response or an error was received.
 *   remoteEndpoint is the server.
 * `SERVER`
 *   timestamp is the moment a client request was received.
 *   duration is the delay until a response was sent or an error.
 *   remoteEndpoint is the client.
 * `PRODUCER`
 *   timestamp is the moment a message was sent to a destination.
 *   duration is the delay sending the message, such as batching.
 *   remoteEndpoint is the broker.
 * `CONSUMER`
 *   timestamp is the moment a message was received from an origin.
 *   duration is the delay consuming the message, such as from backlog.
 *   remoteEndpoint - Represents the broker. Leave serviceName absent if unknown.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SpanKind", ()=>SpanKind);
var SpanKind;
(function(SpanKind) {
    SpanKind["CLIENT"] = "CLIENT";
    SpanKind["SERVER"] = "SERVER";
    SpanKind["CONSUMER"] = "CONSUMER";
    SpanKind["PRODUCER"] = "PRODUCER";
})(SpanKind || (SpanKind = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}],"kRvd5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "prepareGetHeaders", ()=>prepareGetHeaders);
function prepareGetHeaders(getExportRequestHeaders) {
    return function() {
        return getExportRequestHeaders();
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hzbf6"}]},["kRfeB"], "kRfeB", "parcelRequiredc15")

//# sourceMappingURL=index.b8ff9365.js.map
