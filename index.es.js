import gasEntryGenerator from 'gas-entry-generator';

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
  return ("var global=this;" + entries + src)
}

export default gas;
