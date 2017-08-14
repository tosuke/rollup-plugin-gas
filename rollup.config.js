import buble from 'rollup-plugin-buble'

const external = Object.keys(require('./package.json').dependencies)

export default {
  entry: 'src/index.js',
  plugins: [
    buble()
  ],
  external,
  targets: [
    { dest: 'index.cjs.js', format: 'cjs' },
    { dest: 'index.es.js' , format: 'es'  },
  ],
  sourceMap: false
}
