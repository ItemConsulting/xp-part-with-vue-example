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
  var config = {}

  log.info("%s", JSON.stringify(component,null,4));

  return itemVue.getVueResponse({
    id: pathToId(component.path),
    appName: 'TestButton',
    data: component.config,
  });
};
