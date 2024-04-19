"use strict";

const DbMixin = require("../mixins/db.mixin");

/**
 * @typedef {import('moleculer').ServiceSchema} ServiceSchema Moleculer's Service Schema
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

/** @type {ServiceSchema} */
module.exports = {
	name: "cart",

	/**
	 * Mixins
	 */
	mixins: [DbMixin("cart")],

	/**
	 * Actions
	 */
	actions: {},
};
