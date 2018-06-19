import vue from 'rollup-plugin-vue';
import svg from 'rollup-plugin-svg';
import scss from 'rollup-plugin-scss';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const fromComponents = (componentNames) => {
  return componentNames.map((name) => ({
    input: `components/${name}.vue`,
    output: {
      format: 'esm',
      file: `dist/${name}.js`,
    },
    plugins: [
      vue({ css: false }),
      scss({ output: `dist/${name}.css` }),
      svg(),
      resolve({
        customResolveOptions: {
          moduleDirectory: 'node_modules',
        },
      }),
      commonjs(),
    ],
    external: [ 'vue', 'vue-bus' ],
  }));
};

export default fromComponents(['CookiesBanner', 'AppHeader', 'AppFooter', 'HeroBackground']);