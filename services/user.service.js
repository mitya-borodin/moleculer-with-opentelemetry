"use strict";

const DbMixin = require("../mixins/db.mixin");

/**
 * @typedef {import('moleculer').ServiceSchema} ServiceSchema Moleculer's Service Schema
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

/** @type {ServiceSchema} */
module.exports = {
	name: "user",

	/**
	 * Mixins
	 */
	mixins: [DbMixin("user")],

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
				{ name: "Vasia", money: 1, capital: 100 },
				{ name: "Lena", money: 2, capital: 32 },
				{ name: "Kola", money: 4, capital: 34234 },
				{ name: "Jenia", money: 3, capital: 435345 },
				{ name: "Oleg", money: 56, capital: 234234 },
			]);
		},
	},
};
