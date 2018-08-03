'use strict';

/**
 * Affiliate.js controller
 *
 * @description: A set of functions called "actions" for managing `Affiliate`.
 */

module.exports = {

  /**
   * Retrieve affiliate records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.affiliate.search(ctx.query);
    } else {
      return strapi.services.affiliate.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a affiliate record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.affiliate.fetch(ctx.params);
  },

  /**
   * Count affiliate records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.affiliate.count(ctx.query);
  },

  /**
   * Create a/an affiliate record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.affiliate.add(ctx.request.body);
  },

  /**
   * Update a/an affiliate record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.affiliate.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an affiliate record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.affiliate.remove(ctx.params);
  }
};
