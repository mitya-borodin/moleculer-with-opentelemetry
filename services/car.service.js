"use strict";

const DbMixin = require("../mixins/db.mixin");

/**
 * @typedef {import('moleculer').ServiceSchema} ServiceSchema Moleculer's Service Schema
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

/** @type {ServiceSchema} */
module.exports = {
	name: "car",

	/**
	 * Mixins
	 */
	mixins: [DbMixin("car")],

	/**
	 * Actions
	 */
	actions: {},

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
				{ name: "Lada Vesta", quantity: 1, price: 100 },
				{ name: "KIA Ceed", quantity: 2, price: 200 },
				{ name: "TOYOTA LCP", quantity: 3, price: 300 },
				{ name: "BMW E45", quantity: 4, price: 350 },
				{
					name: "Reno Logan",
					quantity: 5,
					price: 400,
				},
				{ name: "TOYOTA HILUX", quantity: 6, price: 450 },
				{ name: "Tesla Model 3", quantity: 7, price: 500 },
			]);
		},
	},
};
