var itemVue = require('item/vue'); // src/main/resources/lib/item/vue.js
var portal = require('/lib/xp/portal');


exports.get = function (req) {
  var component = portal.getComponent();

  return itemVue.getVueResponse({
    id: itemVue.pathToId(component.path),
    appName: 'IncludeParts',
    data: component.config,
  });
};
