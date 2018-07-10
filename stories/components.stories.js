import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import headerLeft from '../assets/images/home_header_left.svg';
import headerRight from '../assets/images/home_header_right.svg';

import CookiesBanner from '../components/CookiesBanner.vue';
import AppFooter from '../components/AppFooter.vue';
import AppHeader from '../components/AppHeader.vue';
import HeroBackground from '../components/HeroBackground.vue';

import './external.styl';

storiesOf('Asyncy Components/Cookie Banner', module)
  .add('Cookie Banner', () => ({
    components: { CookiesBanner },
    template: '<div><cookies-banner :force-active="true"/></div>'
  }));

storiesOf('Asyncy Components/Header', module)
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
      { text: 'About Hub', to: '/' },
      { text: 'Platform', to: '/platform' },
      { text: 'Documentation', to: 'https://docs.asyncy.com'},
      { text: 'Submit a service', to: '/', button: true },
    ]"/></div>`
  }))

storiesOf('Asyncy Components/Footer', module)
  .add('Footer', () => ({
    components: { AppFooter },
    template: '<div><app-footer/></div>'
  }));

storiesOf('Header background', module)
  .add('Header background', () => ({
    components: { HeroBackground },
    template: `<hero-background
      left-image="${headerLeft}"
      right-image="${headerRight}"
      :scale="0.6"
      :left-x="-320"
      :left-y="1"
      :right-x="-85"
      :right-y="1"
    />`
  }));