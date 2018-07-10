import { storiesOf } from '@storybook/vue';

import blackLogo from '../assets/images/logo_black.svg';
import whiteLogo from '../assets/images/logo.svg';

storiesOf('Assets/Logo', module)
  .add('Black Logo', () => ({
    template: `<div><img src="${blackLogo}"/></div>`
  }))
  .add('White Logo', () => ({
    template: `<div style="background-color: #111"><img style="height: 55px" src="${whiteLogo}"/></div>`
  }));
