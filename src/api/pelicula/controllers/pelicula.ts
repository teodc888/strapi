/**
 * pelicula controller
 */

import { factories } from '@strapi/strapi'


export default factories.createCoreController('api::pelicula.pelicula', ({strapi}) =>({
  
  async custom(ctx) {
    try {
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  },

    async prueba1(ctx) {
      // some custom logic here
      ctx.query = { ...ctx.query, local: 'en' };
  
      // Calling the default core action
      const { data, meta } = await super.find(ctx);
  
      // some more custom logic
      meta.date = Date.now();
  
      return { data, meta };
    },
  
    // Method 3: Replacing a core action
    async prueba2(ctx) {
      const { id } = ctx.params;
      const { query } = ctx;
  
      const entity = await strapi.service('api::pelicula.pelicula').findOne(id, query);
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
  
      return this.transformResponse(sanitizedEntity);
    },
}));


