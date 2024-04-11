# moleculer-training-ground

The example of integration opentelemetry to moleculer.

## Roadmap

1. Setup webapp for emit spans to Zipkin backend and share context with moleculer backend.
2. Setup the `api-gateway` service that will broadcast requests to another services-(product, cart, order).
3. Setup the `product` service that will handle actions:
   1. by them self and return list of products.
4. Setup the `cart` service that will handle actions:
   1. them self by save cart to `db`.
   2. emit some message to RabbitMQ, for collect `metrics`.
   3. emit some message to RabbitMQ, for reservation products on the `warehouse`.
5. Setup the `order` service that will handle action:
   1. by them self by save order to db.
   2. by call cart service for getting cart data.
   3. emit some message to RabbitMQ, for collect `metrics`.
   4. emit some message to RabbitMQ, for activate `delivery`.
6. Setup the `partner` service that will handle action:
   1. by them self, save data to db.
   2. emit events for `metrics` consumer.
7. Configure `metrics` consumer, which itself will handle events that were triggered by "product", "cart" and "order".
8. Configure `delivery` consumer, which itself will process events that were launched by the service `order` through calling actions in the service `product`, and will also generate events that will be processed by the consumer `metrics`
9. Configure `warehouse` consumer, which itself will handle events that were triggered by `cart` service through calling actions in the service `product`, and also make http request to `partner` service.

## What will check ?

1. Emit trace form webapp.
2. Spreading the trace context between the web application and the api gateway, as well as services and consumers.
3. Emit trace from moleculer services, consumers, any http service.
4. The continuity of the trace in all the involved areas.

## Goal

In the result I'm want to see all traces in Zipkin GUI.
