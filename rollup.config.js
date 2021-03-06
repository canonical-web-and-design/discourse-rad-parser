import pkg from './package.json';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/js/main.js',
    output: {
      file: pkg.iife,
      format: 'iife',
      name: 'drpNs',
      sourcemap: true,
    },
    plugins: [babel(), terser()],
  },
  {
    input: 'src/js/main.js',
    output: {
      file: pkg.main,
      format: 'esm',
      name: 'drpNs',
      sourcemap: true,
    },
    plugins: [babel()],
  },
];
