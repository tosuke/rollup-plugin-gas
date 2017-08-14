import gasEntryGenerator from 'gas-entry-generator'

export default function gas() {
  return {
    name: 'gas',

    transformBundle(code) {
      return {
        code: gasify(code)
      }
    }
  }
}

function gasify(src) {
  const entries = gasEntryGenerator(src)
  return `var global=this;${entries}${src}`
}