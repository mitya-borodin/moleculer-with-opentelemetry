"use strict";

const DbMixin = require("../mixins/db.mixin");

/**
 * @typedef {import('moleculer').ServiceSchema} ServiceSchema Moleculer's Service Schema
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

/** @type {ServiceSchema} */
module.exports = {
	name: "order",

	/**
	 * Mixins
	 */
	mixins: [DbMixin("order")],

	/**
	 * Actions
	 */
	actions: {},
};
