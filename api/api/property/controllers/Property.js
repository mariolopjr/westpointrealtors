'use strict';

/**
 * Property.js controller
 *
 * @description: A set of functions called "actions" for managing `Property`.
 */

module.exports = {

  /**
   * Retrieve property records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.property.search(ctx.query);
    } else {
      return strapi.services.property.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a property record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.property.fetch(ctx.params);
  },

  /**
   * Count property records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.property.count(ctx.query);
  },

  /**
   * Create a/an property record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.property.add(ctx.request.body);
  },

  /**
   * Update a/an property record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.property.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an property record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.property.remove(ctx.params);
  }
};
