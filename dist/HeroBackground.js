//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
  props: ['leftImage', 'rightImage', 'leftX', 'leftY', 'rightX', 'rightY', 'scale'],
  data() {
    return {
      rightImageHeight: 700,
      rightImageWidth: 1200,
      leftImageHeight: 700,
      leftImageWidth: 1200,
    };
  },
  methods: {
    setRightImageHeight(event) {
      const image = event.target;
      this.rightImageHeight = image.naturalHeight;
      this.rightImageWidth = image.naturalWidth;
    },
    setLeftImageHeight(event) {
      const image = event.target;
      this.leftImageHeight = image.naturalHeight;
      this.leftImageWidth = image.naturalWidth;
    },
  },
};

/* script */
            const __vue_script__ = script;
            
/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"left-image",style:({
    position: 'absolute',
    zIndex: '0',
    left: '0px',
    top: '0px',
  })},[_c('img',{style:({
      position: 'relative',
      left: _vm.leftX ? (_vm.leftX + "px") : '0px',
      top: _vm.leftY ? (_vm.leftY + "px") : '0px',
      width: ("calc(" + _vm.leftImageWidth + "px * " + (_vm.scale || 1) + ")"),
      height: ("calc(" + _vm.rightImageHeight + "px * " + (_vm.scale || 1) + ")"),
    }),attrs:{"src":_vm.leftImage,"alt":"null"},on:{"~load":function($event){return _vm.setLeftImageHeight($event)}}})]),_vm._v(" "),_c('div',{staticClass:"right-image",style:({
    position: 'absolute',
    zIndex: '0',
    top: '0px',
    right: '0px',
  })},[_c('img',{style:({
      position: 'relative',
      width: ("calc(" + _vm.rightImageWidth + "px * " + (_vm.scale || 1) + ")"),
      height: ("calc(" + _vm.rightImageHeight + "px * " + (_vm.scale || 1) + ")"),
      top: _vm.rightY ? (_vm.rightY + "px") : '0px',
      right: _vm.rightX ? (_vm.rightX + "px") : '0px',
    }),attrs:{"src":_vm.rightImage,"alt":"null"},on:{"~load":function($event){return _vm.setRightImageHeight($event)}}})])])};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-75471cf2_0", { source: "\n.left-image[data-v-75471cf2],.right-image[data-v-75471cf2]{pointer-events:none\n}\n@media (max-width:1250px) and (min-width:1101px){\n.left-image[data-v-75471cf2]{left:-70px!important\n}\n.right-image[data-v-75471cf2]{right:-70px!important\n}\n}\n@media (max-width:1100px) and (min-width:626px){\n.left-image[data-v-75471cf2]{left:-155px!important\n}\n.right-image[data-v-75471cf2]{right:-155px!important\n}\n}\n@media (max-width:625px){\n.left-image[data-v-75471cf2]{left:-270px!important\n}\n.right-image[data-v-75471cf2]{right:-270px!important\n}\n}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-75471cf2";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (css.map) {
          // https://developer.chrome.com/devtools/docs/javascript-debugging
          // this makes source maps inside style tags work properly in Chrome
          code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
          // http://stackoverflow.com/a/26603875
          code +=
            '\n/*# sourceMappingURL=data:application/json;base64,' +
            btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
            ' */';
        }

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var HeroBackground = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  );

export default HeroBackground;
