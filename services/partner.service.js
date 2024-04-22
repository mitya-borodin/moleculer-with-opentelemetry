"use strict";

const DbMixin = require("../mixins/db.mixin");

/**
 * @typedef {import('moleculer').ServiceSchema} ServiceSchema Moleculer's Service Schema
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

/** @type {ServiceSchema} */
module.exports = {
	name: "partner",

	/**
	 * Mixins
	 */
	mixins: [DbMixin("partner")],

	/**
	 * Actions
	 */
	actions: {
		delivery: {
			rest: {
				method: "POST",
			},
			params: {
				products: "array",
			},
			async handler(ctx) {
				this.logger.info("Start delivery 🚀");
				this.logger.info({ products: ctx.params.products });

				const spanDelivery = ctx.startSpan("check-delivery", {
					tags: ["partner", "delivery", "car"],
					products: ctx.params.products,
				});

				await new this.Promise((resolve) => {
					setTimeout(resolve, 500);
				});

				ctx.finishSpan(spanDelivery);

				const spanDb = ctx.startSpan("save-to-db", {
					tags: ["db", "mongo", "postgres"],
				});

				await new this.Promise((resolve) => {
					setTimeout(resolve, 1500);
				});

				ctx.finishSpan(spanDb);

				const spanRabbitMQ = ctx.startSpan("emit-to-rabbitMQ", {
					tags: ["mq", "rabbitMQ", "bus"],
				});

				await new this.Promise((resolve) => {
					setTimeout(resolve, 750);
				});

				ctx.finishSpan(spanRabbitMQ);
			},
		},
	},
	/**
	 * Methods
	 */
	methods: {
		/**
		 * Loading sample data to the collection.
		 * It is called in the DB.mixin after the database
		 * connection establishing & the collection is empty.
		 */
		async seedDB() {
			await this.adapter.insertMany([
				{ name: "Volga instruments", amount: 5000, capital: 100 },
				{ name: "ETM", amount: 4000, capital: 32 },
				{ name: "DCK", amount: 6000, capital: 34234 },
				{ name: "IEK", amount: 2000, capital: 435345 },
				{ name: "EKF", amount: 3000, capital: 234234 },
			]);
		},
	},
};
