'use strict';

/**
 * blog-part service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blog-part.blog-part');
