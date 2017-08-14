import buble from 'rollup-plugin-buble'

const external = Object.keys(require('./package.json').dependencies)

export default {
  entry: 'src/index.js',
  plugins: [
    buble()
  ],
  external,
  targets: [
    { dest: 'dist/rollup-plugin-gas.cjs.js', format: 'cjs' },
    { dest: 'dist/rollup-plugin-gas.es.js' , format: 'es'  },
  ],
  sourceMap: true
}
