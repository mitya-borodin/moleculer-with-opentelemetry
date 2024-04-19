"use strict";

const DbMixin = require("../mixins/db.mixin");

/**
 * @typedef {import('moleculer').ServiceSchema} ServiceSchema Moleculer's Service Schema
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

/** @type {ServiceSchema} */
module.exports = {
	name: "product",

	/**
	 * Mixins
	 */
	mixins: [DbMixin("product")],

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
				{ name: "BQ 6430L Aurora 4/64 GB", quantity: 1, price: 100 },
				{ name: "MAXVI MS531 1/8 GB", quantity: 2, price: 200 },
				{ name: "BQ 6040L Magic 2/32 GB", quantity: 3, price: 300 },
				{ name: "BQ 6630L Magic L 3/32 GB", quantity: 4, price: 350 },
				{
					name: "Black Fox B10 Fox 2/32 GB",
					quantity: 5,
					price: 400,
				},
				{ name: "F+ SA55 2/16 GB", quantity: 6, price: 450 },
				{ name: "INOI 2 Lite 1/8 GB", quantity: 7, price: 500 },
			]);
		},
	},
};
