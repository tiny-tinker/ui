import { storiesOf } from '@storybook/vue';

import '../assets/styles/global.styl';

storiesOf('Typography', module)
  .add('Headers', () => ({
    template: '<div><h1>Header 1</h1><h2>Header 2</h2><h3>Header 3</h3><h4>Header 4</h4><h5>Header 5</h5></div>'
  }))
  .add('Text', () => ({
    template: '<p>Hello</p>'
  }));