'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var gasEntryGenerator = _interopDefault(require('gas-entry-generator'));

function gas() {
  return {
    name: 'gas',

    transformBundle: function transformBundle(code) {
      return {
        code: gasify(code)
      }
    }
  }
}

function gasify(src) {
  var entries = gasEntryGenerator(src);
  return ("var global=this;" + entries + src)
}

module.exports = gas;
