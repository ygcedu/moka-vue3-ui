// 请先安装 rollup-plugin-esbuild rollup-plugin-vue rollup-plugin-scss sass rollup-plugin-terser
// 为了保证版本一致，请复制我的 package.json 到你的项目，并把 name 改成你的库名
import esbuild from 'rollup-plugin-esbuild';
import vue from 'rollup-plugin-vue';
import scss from 'rollup-plugin-scss';
import dartSass from 'sass';
import {terser} from 'rollup-plugin-terser';

export default {
  input: 'src/lib/index.ts',
  output: {
    globals: {
      vue: 'Vue'
    },
    name: 'Moka',
    file: 'dist/lib/moka.js',
    format: 'umd',
    // plugins: []// 不执行丑化代码
    plugins: [terser()]
  },
  plugins: [
    vue({
      include: /\.vue$/,
    }),
    scss({
      include: /\.scss$/,
      sass: dartSass,
      prefix: `@import './src/lib/vars.scss';`,
    }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015'
    })
  ],
};