import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import CookiesBanner from '../components/CookiesBanner.vue';
import AppFooter from '../components/AppFooter.vue';
import AppHeader from '../components/AppHeader.vue';

import './external.scss';

storiesOf('Cookies', module)
  .add('give and revoke consent for cookies', () => ({
    components: { CookiesBanner },
    template: '<div><cookies-banner :force-active="true"/></div>'
  }));

storiesOf('App Header and Footer', module)
  .add('Header with dropdown', () => ({
    components: { AppHeader },
    template: `<div><app-header link-component="a" :links="[  { text: 'Platform', to: '/platform' },
      { text: 'Documentation', to: 'https://docs.asyncy.com'},
      {
        text: 'More &#x25BE;',
        items: [
          { text: 'About', to: '/about' },
          { text: 'Events', to: '/events' },
          { text: 'Contact', to: '/contact' },
        ],
      }]"/></div>`
  }))
  .add('Header with search bar and button', () => ({
    components: { AppHeader },
    template: `<div><app-header link-component="a" :show-search="true" :links="[
      { text: 'Explore', to: '/' },
      { text: 'Platform', to: '/platform' },
      { text: 'Documentation', to: 'https://docs.asyncy.com'},
      { text: 'Submit a service', to: '/', button: true },
    ]"/></div>`
  }))
  .add('a footer', () => ({
    components: { AppFooter },
    template: '<div><app-footer/></div>'
  }));