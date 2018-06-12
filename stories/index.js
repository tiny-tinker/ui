import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import CookiesBanner from '../components/CookiesBanner.vue';
import AppFooter from '../components/AppFooter.vue';

storiesOf('Cookies', module)
  .add('give and revoke consent for cookies', () => ({
    components: { CookiesBanner },
    template: '<div><cookies-banner/></div>'
  }));

storiesOf('App Footer', module)
  .add('a footer', () => ({
    components: { AppFooter },
    template: '<div><app-footer link-component="a"/></div>'
  }));