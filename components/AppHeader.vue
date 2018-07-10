<template>
  <div class="app-header">
    <div class="columns app-header-columns is-mobile">
      <div class="column logo-container align-center is-narrow">
        <component :is="linkComponent" to='/'>
          <img :style="{
            margin: '6px 0 0 0'
          }" :src="logo" alt="Asyncy"/>
        </component>
      </div>

      <div class="column is-hidden-touch" />

      <div v-if="showSearch" class="column align-center is-hidden-mobile search-container is-narrow">
        <form class="header-form" @submit.prevent="onSubmit">
          <input class="header-search-bar" :placeholder="placeholder" v-model="search" />
        </form>
      </div>

      <div class="column is-hidden-touch" />

      <div class="column is-hidden-touch is-narrow align-center">
        <nav>
          <ul class="links">
            <li v-for="(link, index) in headerLinks" class="web-header-link" :key="index">
              <span class="link" v-if="!link.items && !link.button">
                <component :is="linkComponent" :to="link.to">{{link.text}}</component>
              </span>
              
              <button v-if="link.button" class="header-button">{{link.text}}</button>

              <dropdown :items="link.items" v-if="link.items">
                <span class="dropdown-header-text" v-html="link.text" :link-component="linkComponent"/>
              </dropdown>
            </li>
          </ul>
        </nav>
      </div>

      <div class="column is-hidden-desktop align-center hamburger-container">
        <div class="mobile-menu-icon-hamburger">
          <a class="icon" @click="openMenu">☰</a>
        </div>
      </div>
    </div>
    <div class="mobile-menu" v-if="mobileMenuOpen">
      <div class="mobile-menu-icon-close">
        <a class="icon" @click="closeMenu">✕</a>
      </div>
      <nav>
        <ul class="mobile-links">
          <div v-for="(link, index) in mobileHeaderLinks" :key="index">
            <li v-if="!link.items" class='column' :style="{
              padding: '22px',
            }">
              <span class="link" @click="closeMenu">
                <component :is="linkComponent" :to="link.to">{{link.text}}</component>
              </span>
            </li>
            <li v-else v-for="(item, index) in link.items" :key="index" class='column' :style="{
              padding: '22px',
            }">
              <span class="link" @click="closeMenu">
                <component :is="linkComponent" :to="item.to">{{item.text}}</component>
              </span>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import Dropdown from './Dropdown.vue';
import logo from '../assets/images/logo.svg';

export default {
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
}
</script>

<style scoped lang="styl">
.app-header {
  font-family: Graphik Web,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizelegibility;
  background: #111;
  padding-top: 10px;
  padding-bottom: 10px;
  min-height: 66px;
  display: flex;
  align-items: center;

  .app-header-columns {
    flex-grow: 1;
    margin: 0 auto;
    max-width: 1440px;
    padding: 0 25px;
  }
}

.logo-container {
  margin: 0;
}

.mobile-menu {
  position: fixed;
  background: #111;
  text-align: right;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  padding: 23px;
  z-index: 3000;
}

.hamburger-container {
  justify-content: flex-end;
  margin-left: 30px;

  .mobile-menu-icon-hamburger {
    font-size: 32px;
    line-height: 20px;
    text-align: right;
    vertical-align: top;
  }
}

.mobile-menu-icon-close {
  width: 100%;
  font-size: 2em;
  padding-bottom: 25px;
}

.icon {
  color: white;
  cursor: pointer;
}

.mobile-links {
  text-align: center;
  font-size: 1.2em;
  padding-left: 0;
}

.links {
  text-align: right;
  font-size: 1.06em;
  margin: 0;
  padding: 0;

  .web-header-link {
    display: inline;
    margin-left: 90px;

    &:first-child {
      margin-left: 0px;
    }
  }

  .web-header-link:first-child:nth-last-child(5), .web-header-link:first-child:nth-last-child(5) ~ .web-header-link {
    margin-left: 65px;
  }
}

.header-button {
  color: white;
  padding: 13px 22px;
  border-radius: 6px;
  cursor: pointer;
  background-color: #111;
  border: 1px solid #8F8F8F;
  text-align: center;
  transition: all 0.2s;
  font-size: 0.9em;

  &:hover {
    color: #111;
    background-color: white;
    border-color: #111;
  }
}

.link {
  position: relative;

  a {
    color: white;
    font-weight: 400;
    font-size: 0.9em;
    cursor: pointer;
  }
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -9px;
    background-color: #888;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.15s ease-out 0s;
  }
  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
  &:hover a {
    color: #D1D1D1;
    transition: all 0.15s ease-in-out 0s;
  }
}

.dropdown-header-text {
  color: white;
  font-size: 0.9em;
}

.dropdown {
  vertical-align: baseline;
}

.dropdown-menu {
  min-width: 130px;
}

.dropdown-item {
  font-weight: 400;
  font-size: 0.9em;
  padding-right: 0;
  cursor: pointer;
}

.dropdown-content {
  text-align: left;
}

.header-form {
  width: 100%;
}

.search-container
  margin-left 2rem

.header-search-bar {
  font-size: 1em;
  border-radius: 6px;
  border: 1px solid transparent;
  padding: 12px 20px;
  background-color: rgba(35,35,35,1);
  color: rgba(190,190,190,1);
  transition: all 0.2s ease-in-out;
  outline: none;
  width: 100%;
}

.header-search-bar:focus {
  border-color: #515CF9;
  filter: brightness(120%);
  color: white;
}

.align-center {
  padding: 0;
  display: flex;
  align-items: center;
}
</style>
