'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var gasEntryGenerator = _interopDefault(require('gas-entry-generator'));

function gas(options) {
  if ( options === void 0 ) options = {};

  return {
    name: 'gas',

    transformBunble: function transformBunble(code) {
      return {
        code: gasify(code)
      }
    }
  }
}

function gasify(src) {
  var entries = gasEntryGenerator(src);
  return entries + src
}

module.exports = gas;
//# sourceMappingURL=rollup-plugin-gas.cjs.js.map
