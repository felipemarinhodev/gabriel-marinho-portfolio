const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@gabrielmarinho/design-system',
  '@gabrielmarinho/utils'
]);

/**
 * @type {import('next').NextConfig}
 */
module.exports = withPlugins([withTM], {
  trailingSlash: true,
});
