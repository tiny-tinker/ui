import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import CookiesBanner from '../components/CookiesBanner.vue';
import RevokeCookieConsent from '../components/RevokeCookieConsent.vue';

storiesOf('Cookies', module)
  .add('give and revoke consent for cookies', () => ({
    components: { CookiesBanner, RevokeCookieConsent },
    template: '<div><revoke-cookie-consent/><cookies-banner/></div>'
  }));