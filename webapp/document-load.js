import { getWebAutoInstrumentations } from "@opentelemetry/auto-instrumentations-web";
import { ZoneContextManager } from "@opentelemetry/context-zone";
import { ZipkinExporter } from "@opentelemetry/exporter-zipkin";
import { registerInstrumentations } from "@opentelemetry/instrumentation";
import { BatchSpanProcessor } from "@opentelemetry/sdk-trace-base";
import { WebTracerProvider } from "@opentelemetry/sdk-trace-web";
import { Resource } from "@opentelemetry/resources";
import {
	SEMRESATTRS_SERVICE_NAME,
	SEMRESATTRS_SERVICE_VERSION,
} from "@opentelemetry/semantic-conventions";

// Add your zipkin url (`http://localhost:9411/api/v2/spans` is used as
// default) and application name to the Zipkin options.
// You can also define your custom headers which will be added automatically.
const exporter = new ZipkinExporter({
	url: "http://localhost:9411/api/v2/spans",
});

const provider = new WebTracerProvider({
	resource: new Resource({
		[SEMRESATTRS_SERVICE_NAME]: "web-app",
		[SEMRESATTRS_SERVICE_VERSION]: "1.5.3",
	}),
});

provider.addSpanProcessor(
	new BatchSpanProcessor(exporter, { maxExportBatchSize: 1 })
);

provider.register({
	contextManager: new ZoneContextManager(),
});

registerInstrumentations({
	instrumentations: [getWebAutoInstrumentations()],
});
