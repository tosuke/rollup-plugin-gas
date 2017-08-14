import gasEntryGenerator from 'gas-entry-generator';

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

export default gas;
