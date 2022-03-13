'use strict';
const fs = require('fs');
const path = require('path');
/**
 * `404` middleware.
 */

const indexFilePath = path.join(__dirname, '..', '..', 'public', 'index.html');

const pathExists = (filepath) => new Promise((res) => {
  fs.access(filepath, fs.constants.F_OK, (err) => {
    if(err) {
      res(false)
    } else {
      res(true)
    }
  })
})

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In 404 middleware.');
    await next();
    if (ctx.response.status === 404) {
      strapi.log.info('override body with index.html.');
      const exists = await pathExists(indexFilePath)
      if (!!exists) {
        strapi.log.info('index.html found');
        ctx.set('Content-Type', 'text/html');
        ctx.body = fs.createReadStream(indexFilePath);
      } else {
        strapi.log.info('index.html not found found');
      }
    }
  };
};
