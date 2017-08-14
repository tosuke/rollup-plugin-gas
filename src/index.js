import gasEntryGenerator from 'gas-entry-generator'

export default function gas(options = {}) {
  return {
    name: 'gas',

    transformBunble(code) {
      return {
        code: gasify(code)
      }
    }
  }
}

function gasify(src) {
  const entries = gasEntryGenerator(src)
  return entries + src
}