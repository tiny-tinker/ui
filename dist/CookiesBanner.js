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
  data() {
    return {
      show: false,
      showThanks: false,
      showRevoked: false,
    }
  },
  mounted() {
    const consent = document.cookie.split(';').find((item) => {
      return item.includes('cookie-consent-received=true');
    });

    if (!consent) {
      this.show = true;
    } else {
      this.$emit('cookie-consent-received');
    }
  },
  methods: {
    allowAllCookies() {
      this.show = false;
      this.showThanks = true;
      setTimeout(() => {
        this.showThanks = false;
      }, 3000);
      const expiry = new Date();
      expiry.setFullYear(expiry.getFullYear() + 1);
      document.cookie = `cookie-consent-received=true;expires=${expiry.toGMTString()}`;
      this.$emit('cookie-consent-received');
    },
    revokeConsent() {
      this.$emit('cookie-consent-revoked');
      this.showRevoked = true;
      this.clearAllCookies();

      setTimeout(() => {
        this.showRevoked = false;
        this.show = true;
      }, 3000);
    },
    clearAllCookies() {
      document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    },
  }
};

const __vue_script__ = script;
/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('transition',{attrs:{"name":"fade"}},[(_vm.show)?_c('div',{staticClass:"cookies-banner"},[_c('div',{staticClass:"side1"},[_vm._v("\n        We use cookies to track your usage of this site. We also share information about your usage with the services we use for form creation, who may combine it with other information that you've provided them or that they've collected from your use of their services. We will never track you without your permission.\n      ")]),_vm._v(" "),_c('div',{staticClass:"side2"},[_c('button',{staticClass:"cookie-button",on:{"click":_vm.allowAllCookies}},[_vm._v("Allow all cookies")])])]):_vm._e()]),_vm._v(" "),_c('transition',{attrs:{"name":"fade"}},[(_vm.showThanks)?_c('div',{staticClass:"cookies-banner"},[_vm._v("\n      Thanks! 🎉 You can always revoke your consent at the bottom of the page.\n    ")]):_vm._e()]),_vm._v(" "),_c('transition',{attrs:{"name":"fade"}},[(_vm.showRevoked)?_c('div',{staticClass:"cookies-banner"},[_vm._v("\n      Your consent has been revoked. We won't track you any longer.\n    ")]):_vm._e()]),_vm._v(" "),(!_vm.show)?_c('div',{staticClass:"revoke-banner"},[_vm._v("\n    Thanks for letting us use cookies! "),_c('a',{attrs:{"href":"javascript:void(0)"},on:{"click":_vm.revokeConsent}},[_vm._v("Revoke your consent.")])]):_vm._e()],1)};
var __vue_staticRenderFns__ = [];

const __vue_template__ = typeof __vue_render__ !== 'undefined'
  ? { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }
  : {};
/* style */
const __vue_inject_styles__ = undefined;
/* scoped */
const __vue_scope_id__ = "data-v-358d8b57";
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


var CookiesBanner = __vue_normalize__(
  __vue_template__,
  __vue_inject_styles__,
  typeof __vue_script__ === 'undefined' ? {} : __vue_script__,
  __vue_scope_id__,
  __vue_is_functional_template__,
  __vue_module_identifier__,
  typeof __vue_create_injector__ !== 'undefined' ? __vue_create_injector__ : function () {},
  typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {}
);

export default CookiesBanner;
