import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import CookiesBanner from '../components/CookiesBanner.vue';

storiesOf('CookiesBanner', module)
  .add('story as a component', () => ({
    components: { CookiesBanner },
    template: '<cookies-banner :onConsentReceived="() => {}"></cookies-banner>'
  }));