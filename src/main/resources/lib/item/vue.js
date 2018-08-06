var thymeleaf = require('/lib/xp/thymeleaf');
var portal = require('/lib/xp/portal');

var view = resolve('vue.html');

/**
 * Create a <script> element
 *
 * @param {string} path
 * @returns {string}
 */
function scriptElement (path) {
  return '<script src="' + path + '"></script>';
}

/**
 * Creates a <link> element with rel="stylesheet"
 * @param {string} path
 * @returns {string}
 */
function linkElement (path) {
  return '<link href="' + path + '" rel="stylesheet">';
}

/**
 * Returns a function that will return a <link> element, where
 * the "as" attribute is set to the input of this function
 *
 * @param {string} as
 * @returns {function(string): string}
 */
function linkElementWithPreload (as) {
  return function (path) {
    return '<link as="' + as + '" href="' + path + '" rel="preload">';
  }
}

/**
 * Get configuration for part with VueJS
 *
 * @param {object} config
 * @param {string} config.id
 * @param {string} config.data
 * @returns {object}
 */
exports.getVueResponse = function (config, resourcePath) {

  var styles = [
    { path: "app.css" }
  ].map(portal.assetUrl);

  var scripts = [
    { path: "app.js" },
    { path: "chunk-vendors.js" }
  ].map(portal.assetUrl);

  return {
    body: thymeleaf.render(view, config),

    pageContributions: {
      headEnd:
        styles.map(linkElementWithPreload('style')).join('') +
        scripts.reverse().map(linkElementWithPreload('script')).join('') +
        styles.map(linkElement).join('') +
        (typeof(resourcePath) != "undefined" ? scriptElement(resourcePath) : ''),

      bodyEnd:
        scripts.map(scriptElement).join('')
    }
  }
};

/**
 * Replace all "/" with "-" to create a valid id string
 *
 * @param {string} path
 * @returns {string}
 */
exports.pathToId = function (path) {
  return path.replaceAll('/', '-');
}
