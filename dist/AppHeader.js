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
  props: ['items', 'linkComponent'],
};

/* script */
            const __vue_script__ = script;
/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dropdown-container"},[_c('div',{staticClass:"dropdown-trigger"},[_vm._t("default")],2),_vm._v(" "),_c('div',{staticClass:"dropdown-menu"},[_c('div',{staticClass:"dropdown-content"},_vm._l((_vm.items),function(item){return _c('div',{key:item.text,staticClass:"dropdown-item"},[(_vm.linkComponent)?_c(_vm.linkComponent,{tag:"component",attrs:{"to":item.to}},[_vm._v(_vm._s(item.text))]):_c('a',{attrs:{"href":item.to}},[_vm._v(_vm._s(item.text))])],1)}))])])};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = "data-v-dbaf01f8";
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
  

  
  var Dropdown = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  );

var logo = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTczcHgiIGhlaWdodD0iMTlweCIgdmlld0JveD0iMCAwIDE3MyAxOSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBza2V0Y2h0b29sIDQ5ICg1MTAwMikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+NjA2MzRBNzEtOTc0RC00QkNELTg2NDEtRTg2NTU3QzE3MDA1QDN4PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJNYWluIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iSGVhZGVyIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9IkxvZ290eXBlIj4KICAgICAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMi4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03LjQxMTc2NDcxLDcuODQ3NjYwODcgQzQuNTI5NDExNzYsNy4xODY3OTEzIDMuODcwNTg4MjQsNi43NzM3NDc4MyAzLjg3MDU4ODI0LDUuNDUyMDA4NyBDMy44NzA1ODgyNCwzLjc5OTgzNDc4IDQuOTQxMTc2NDcsMy4xMzg5NjUyMiA2LjY3MDU4ODI0LDMuMTM4OTY1MjIgQzguMzE3NjQ3MDYsMy4xMzg5NjUyMiA5LjcxNzY0NzA2LDMuNzk5ODM0NzggMTAuNzA1ODgyNCw0LjYyNTkyMTc0IEwxMS4wMzUyOTQxLDQuOTU2MzU2NTIgTDEyLjc2NDcwNTksMi4yMzAyNjk1NyBMMTIuNTE3NjQ3MSwxLjk4MjQ0MzQ4IEMxMS4xMTc2NDcxLDAuODI1OTIxNzM5IDkuMDU4ODIzNTMsLTAuMDAwMTY1MjE3MzkxIDYuNjcwNTg4MjQsLTAuMDAwMTY1MjE3MzkxIEMzLjEyOTQxMTc2LC0wLjAwMDE2NTIxNzM5MSAwLjY1ODgyMzUyOSwyLjE0NzY2MDg3IDAuNjU4ODIzNTI5LDUuNDUyMDA4NyBDMC42NTg4MjM1MjksOC4yNjA3MDQzNSAyLjMwNTg4MjM1LDkuOTk1NDg2OTYgNi41ODgyMzUyOSwxMC45MDQxODI2IEM5LjQ3MDU4ODI0LDExLjU2NTA1MjIgMTAuMjk0MTE3NiwxMi4xNDMzMTMgMTAuMjk0MTE3NiwxMy4zODI0NDM1IEMxMC4yOTQxMTc2LDE0Ljk1MjAwODcgOS4wNTg4MjM1MywxNS43NzgwOTU3IDcuMDgyMzUyOTQsMTUuODYwNzA0MyBDNS4zNTI5NDExOCwxNS44NjA3MDQzIDMuNDU4ODIzNTMsMTUuMTE3MjI2MSAyLjM4ODIzNTI5LDEzLjk2MDcwNDMgTDIuMDU4ODIzNTMsMTMuNjMwMjY5NiBMMC4yNDcwNTg4MjQsMTYuMzU2MzU2NSBMMC40OTQxMTc2NDcsMTYuNjA0MTgyNiBDMi4xNDExNzY0NywxOC4wOTExMzkxIDQuNDQ3MDU4ODIsMTguOTE3MjI2MSA3LDE4LjkxNzIyNjEgQzEwLjg3MDU4ODIsMTguOTE3MjI2MSAxMy41MDU4ODI0LDE2LjYwNDE4MjYgMTMuNTA1ODgyNCwxMy4yMTcyMjYxIEMxMy41MDU4ODI0LDEwLjQwODUzMDQgMTEuNjExNzY0Nyw4LjY3Mzc0NzgzIDcuNDExNzY0NzEsNy44NDc2NjA4NyIgaWQ9IkZpbGwtMSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC00IiBwb2ludHM9IjY5LjQ1NzcxMTQgNy4xNjc0MjA4MSA2NC44MDU5NzAxIDAgNjEgMCA2Ny44NTA3NDYzIDEwLjUwNjc4NzMgNjcuODUwNzQ2MyAxOCA2OC4yNzM2MzE4IDE4IDcxLjE0OTI1MzcgMTggNzEuMTQ5MjUzNyAxMC40MjUzMzk0IDc4IDAgNzQuMTA5NDUyNyAwIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTgiPgogICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC02IiBwb2ludHM9IjguNDE4OTY2NjcgMC4wODI1MjYwODcgOC4xNzYxMDk1MiAwLjA4MjUyNjA4NyAtOC4wOTUyMzgxZS0wNSAxOC42Njk0ODI2IDMuMzk5OTE5MDUgMTguNjY5NDgyNiA4LjQxODk2NjY3IDYuODU2NDM5MTMgMTMuNDM4MDE0MyAxOC42Njk0ODI2IDEzLjc2MTgyMzggMTguNjY5NDgyNiAxNi44MzgwMTQzIDE4LjY2OTQ4MjYgOC43NDI3NzYxOSAwLjA4MjUyNjA4NyI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC05IiBwb2ludHM9IjE2OS4xMDk0NTMgMCAxNjQuNDU3NzExIDcuMTY3NDIwODEgMTU5Ljg5MDU0NyAwIDE1NiAwIDE2Mi44NTA3NDYgMTAuNTA2Nzg3MyAxNjIuODUwNzQ2IDE4IDE2My4yNzM2MzIgMTggMTY2LjE0OTI1NCAxOCAxNjYuMTQ5MjU0IDEwLjQyNTMzOTQgMTczIDAiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk0LjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtMTEiIHBvaW50cz0iMTEuNDE2ODMzMyAxMS40ODI3NzM5IDEuMjUwMTY2NjcgMC4wODI3NzM5MTMgMC45MTYgMC4wODI3NzM5MTMgMC40OTkzMzMzMzMgMC4wODI3NzM5MTMgMC40OTkzMzMzMzMgMTguNjY5NzMwNCAzLjc1MDE2NjY3IDE4LjY2OTczMDQgMy43NTAxNjY2NyA3LjYwMDE2NTIyIDE0LjAwMDE2NjcgMTkuMDAwMTY1MiAxNC4xNjY4MzMzIDE5LjAwMDE2NTIgMTQuMjQ5MzMzMyAxOS4wMDAxNjUyIDE0LjY2NiAxOS4wMDAxNjUyIDE0LjY2NiAwLjQxMzIwODY5NiAxMS40MTY4MzMzIDAuNDEzMjA4Njk2Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI1LjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0LjM2NTM0LDEzLjg3ODM0MzUgQzEzLjI1OTQ5LDE1LjExNzQ3MzkgMTEuODE1MzQsMTUuOTQzNTYwOSA5Ljg1OTQ5LDE1Ljk0MzU2MDkgQzYuMjkwMzQsMTUuOTQzNTYwOSAzLjkwOTQ5LDEzLjMwMDA4MjYgMy44MjUzNCw5LjU4MjY5MTMgQzMuODI1MzQsNS43ODI2OTEzIDYuMjA0NDksMy4yMjE4MjE3NCA5Ljg1OTQ5LDMuMTM5MjEzMDQgQzExLjcyOTQ5LDMuMTM5MjEzMDQgMTMuMTc1MzQsMy45NjUzIDE0LjE5NTM0LDUuMDM5MjEzMDQgTDE0LjUzNDQ5LDUuMzY5NjQ3ODMgTDE2LjY1OTQ5LDIuOTczOTk1NjUgTDE2LjQwNDQ5LDIuNzI2MTY5NTcgQzE0LjcwNDQ5LDAuOTkxMzg2OTU3IDEyLjU3OTQ5LDAuMDgyNjkxMzA0MyA5Ljg1OTQ5LDAuMDgyNjkxMzA0MyBDNC40MjAzNCwwLjA4MjY5MTMwNDMgMC41MDk0OSw0LjEzMDUxNzM5IDAuNTA5NDksOS41ODI2OTEzIEMwLjUwOTQ5LDE0Ljk1MjI1NjUgNC40MjAzNCwxOS4wMDAwODI2IDkuODU5NDksMTkuMDAwMDgyNiBDMTIuNDk1MzQsMTkuMDAwMDgyNiAxNC43OTAzNCwxOC4wOTEzODcgMTYuNDkwMzQsMTYuMjczOTk1NyBMMTYuNzQ1MzQsMTYuMDI2MTY5NiBMMTQuNjIwMzQsMTMuNTQ3OTA4NyBMMTQuMzY1MzQsMTMuODc4MzQzNSBaIiBpZD0iRmlsbC0xNCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';

//

var script$1 = {
  props: ['links', 'linkComponent', 'showSearch', 'onSearch', 'placeholderText'],
  components: { Dropdown },
  data() {
    return {
      logo,
      search: '',
      mobileMenuOpen: false,
      headerLinks: this.links,
    };
  },
  methods: {
    onSubmit() {
      this.onSearch(this.search);
    },
    openMenu() {
      this.mobileMenuOpen = true;
    },
    closeMenu() {
      this.mobileMenuOpen = false;
    },
  },
  computed: {
    placeholder() {
      return this.placeholderText || 'Search';
    },
    mobileHeaderLinks() {
      const mobileHeaderLinks = this.headerLinks.slice();
      mobileHeaderLinks.unshift({ text: 'Home', to: '/' });
      return mobileHeaderLinks;
    },
  },
};

/* script */
            const __vue_script__$1 = script$1;
/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-header"},[_c('div',{staticClass:"columns app-header-columns is-mobile"},[_c('div',{staticClass:"column logo-container align-center is-narrow"},[_c(_vm.linkComponent,{tag:"component",attrs:{"to":"/"}},[_c('img',{style:({
          margin: '6px 0 0 0'
        }),attrs:{"src":_vm.logo,"alt":"Asyncy"}})])],1),_vm._v(" "),_c('div',{staticClass:"column is-hidden-touch"}),_vm._v(" "),(_vm.showSearch)?_c('div',{staticClass:"column align-center is-hidden-mobile search-container is-narrow"},[_c('form',{staticClass:"header-form",on:{"submit":function($event){$event.preventDefault();return _vm.onSubmit($event)}}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.search),expression:"search"}],staticClass:"header-search-bar",attrs:{"placeholder":_vm.placeholder},domProps:{"value":(_vm.search)},on:{"input":function($event){if($event.target.composing){ return; }_vm.search=$event.target.value;}}})])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"column is-hidden-touch"}),_vm._v(" "),_c('div',{staticClass:"column is-hidden-touch align-center links-column"},[_c('nav',{staticClass:"nav"},[_c('ul',{staticClass:"links"},_vm._l((_vm.headerLinks),function(link,index){return _c('li',{key:index,staticClass:"web-header-link"},[(!link.items && !link.button)?_c('span',{staticClass:"link"},[_c(_vm.linkComponent,{tag:"component",attrs:{"to":link.to}},[_vm._v(_vm._s(link.text))])],1):_vm._e(),_vm._v(" "),(link.button)?_c('button',{staticClass:"header-button"},[_vm._v(_vm._s(link.text))]):_vm._e(),_vm._v(" "),(link.items)?_c('dropdown',{attrs:{"items":link.items}},[_c('span',{staticClass:"dropdown-header-text",attrs:{"link-component":_vm.linkComponent},domProps:{"innerHTML":_vm._s(link.text)}})]):_vm._e()],1)}))])]),_vm._v(" "),_c('div',{staticClass:"column is-hidden-desktop align-center hamburger-container"},[_c('div',{staticClass:"mobile-menu-icon-hamburger"},[_c('a',{staticClass:"icon",on:{"click":_vm.openMenu}},[_vm._v("☰")])])])]),_vm._v(" "),(_vm.mobileMenuOpen)?_c('div',{staticClass:"mobile-menu"},[_c('div',{staticClass:"mobile-menu-icon-close"},[_c('a',{staticClass:"icon",on:{"click":_vm.closeMenu}},[_vm._v("✕")])]),_vm._v(" "),_c('nav',[_c('ul',{staticClass:"mobile-links"},_vm._l((_vm.mobileHeaderLinks),function(link,index){return _c('div',{key:index},[(!link.items)?_c('li',{staticClass:"column",style:({
            padding: '22px',
          })},[_c('span',{staticClass:"link",on:{"click":_vm.closeMenu}},[_c(_vm.linkComponent,{tag:"component",attrs:{"to":link.to}},[_vm._v(_vm._s(link.text))])],1)]):_vm._l((link.items),function(item,index){return _c('li',{key:index,staticClass:"column",style:({
            padding: '22px',
          })},[_c('span',{staticClass:"link",on:{"click":_vm.closeMenu}},[_c(_vm.linkComponent,{tag:"component",attrs:{"to":item.to}},[_vm._v(_vm._s(item.text))])],1)])})],2)}))])]):_vm._e()])};
var __vue_staticRenderFns__$1 = [];

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = "data-v-3b2c8216";
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* component normalizer */
  function __vue_normalize__$1(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

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
  function __vue_create_injector__$1() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$1.styles || (__vue_create_injector__$1.styles = {});
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
  

  
  var AppHeader = __vue_normalize__$1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    __vue_create_injector__$1,
    undefined
  );

export default AppHeader;
