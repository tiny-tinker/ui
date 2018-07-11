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
//
//
//

var script = {
  props: ['leftImage', 'rightImage', 'leftX', 'leftY', 'rightX', 'rightY', 'scale'],
};

/* script */
            const __vue_script__ = script;
            
/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"left-image\""+(_vm._ssrStyle(null,{
    position: 'absolute',
    zIndex: '0',
    left: '-30px',
    top: '0px',
  }, null))+"><img"+(_vm._ssrAttr("src",_vm.leftImage))+" alt=\"null\""+(_vm._ssrStyle(null,{
      position: 'absolute',
      left: _vm.leftX ? (_vm.leftX + "px") : '-750px',
      top: _vm.leftY ? (_vm.leftY + "px") : '-45px',
      width: ("calc(1200px * " + (_vm.scale || 1) + ")"),
      height: ("calc(700px * " + (_vm.scale || 1) + ")"),
    }, null))+"></div> <div class=\"right-image\""+(_vm._ssrStyle(null,{
    position: 'absolute',
    zIndex: '0',
    width: '450px',
    height: '700px',
    overflow: 'hidden',
    top: '0px',
    right: '0px',
  }, null))+"><img"+(_vm._ssrAttr("src",_vm.rightImage))+" alt=\"null\""+(_vm._ssrStyle(null,{
      position: 'relative',
      width: ("calc(1200px * " + (_vm.scale || 1) + ")"),
      height: ("calc(700px * " + (_vm.scale || 1) + ")"),
      top: _vm.rightY ? (_vm.rightY + "px") : '-170px',
      right: _vm.rightX ? (_vm.rightX + "px") : '0px',
    }, null))+"></div>")])};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-1ec7cd83_0", { source: "\n.left-image[data-v-1ec7cd83],.right-image[data-v-1ec7cd83]{pointer-events:none\n}\n@media (max-width:1250px) and (min-width:1101px){\n.left-image[data-v-1ec7cd83]{left:calc(100vw - 1265px)!important\n}\n.right-image[data-v-1ec7cd83]{width:calc(-780px + 100vw)!important\n}\n}\n@media (max-width:1100px) and (min-width:626px){\n.left-image[data-v-1ec7cd83]{left:-155px!important\n}\n.right-image[data-v-1ec7cd83]{width:326px!important\n}\n}\n@media (max-width:625px){\n.left-image[data-v-1ec7cd83]{left:-270px!important\n}\n.right-image[data-v-1ec7cd83]{width:215px!important\n}\n}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-1ec7cd83";
  /* module identifier */
  const __vue_module_identifier__ = "data-v-1ec7cd83";
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
      {
        // In SSR.
        hook = function(context) {
          // 2.3 injection
          context =
            context || // cached call
            (this.$vnode && this.$vnode.ssrContext) || // stateful
            (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
          // 2.2 with runInNewContext: true
          if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
            context = __VUE_SSR_CONTEXT__;
          }
          // inject component styles
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          // register component module identifier for async chunk inference
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        component._ssrRegister = hook;
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
  
  /* style inject SSR */
  function __vue_create_injector_ssr__(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
      context = __VUE_SSR_CONTEXT__;
    }

    if (!context) return function () {}

    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: () => context._styles
      });
      context._renderStyles = renderStyles;
    }

    function renderStyles(styles) {
      let css = '';
      for (const {ids, media, parts} of styles) {
        css +=
          '<style data-vue-ssr-id="' + ids.join(' ') + '"' + (media ? ' media="' + media + '"' : '') + '>'
          + parts.join('\n') +
          '</style>';
      }

      return css
    }

    return function addStyle(id, css) {
      const group = css.media || 'default';
      const style = context._styles[group] || (context._styles[group] = { ids: [], parts: [] });

      if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.parts.push(code);
      }
    }
  }

  
  var HeroBackground = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    __vue_create_injector_ssr__
  );

export default HeroBackground;
