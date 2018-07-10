import vue from 'rollup-plugin-vue';
import svg from 'rollup-plugin-svg';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const toRollupConf = (name, isSSR) => {
  const outputFile = isSSR ? `dist/${name}.ssr.js` : `dist/${name}.js`;
  return {
    input: `components/${name}.vue`,
    output: {
      format: 'esm',
      file: outputFile,
    },
    plugins: [
      vue({
        style: {
          preprocessOptions: {
            stylus: {},
          },
        },
        template: {
          optimizeSSR: isSSR,
        },
      }),
      svg(),
      resolve({
        customResolveOptions: {
          moduleDirectory: 'node_modules',
        },
      }),
      commonjs(),
    ],
    external: [ 'vue' ],
  }
};

const fromComponents = (componentNames) => {
  return componentNames.map(name => toRollupConf(name, false))
    .concat(componentNames.map(name => toRollupConf(name, true)));
};

const components = ['CookiesBanner', 'AppHeader', 'AppFooter', 'HeroBackground', 'AButton', 'AInput'];

export default fromComponents(components);