var itemVue = require('item/vue'); // src/main/resources/lib/item/vue.js
var portal = require('/lib/xp/portal');

/**
 * Replace all "/" with "-" to create a valid id string
 *
 * @param {string} path
 * @returns {string}
 */
function pathToId  (path) {
  return path.replaceAll('/', '-');
}

exports.get = function (req) {
  var component = portal.getComponent();

  var scripts = [
    { path: "client/app.js" },
    { path: "client/chunk-vendors.js" }
  ].map(portal.assetUrl);

  var styles = [
    { path: "client/app.css" }
  ].map(portal.assetUrl);

  return itemVue.getVueResponse({
    id: pathToId(component.path),
    appName: 'HelloVue',
    data: component.config,
    scripts: scripts,
    styles: styles
  });
};