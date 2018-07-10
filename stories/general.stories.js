import { storiesOf } from '@storybook/vue';

import AButton from '../components/AButton';
import AInput from '../components/AInput';

storiesOf('General/Buttons', module)
  .add('Black button', () => ({
    components: { AButton },
    template: `<a-button>Submit a service</a-button>`,
  }))
  .add('White button', () => ({
    components: { AButton },
    template: `<a-button color="white">Submit a service</a-button>`,
  }));

storiesOf('General/Input', module)
  .add('Black Input', () => ({
    components: { AInput },
    template: `<a-input placeholder='Submit your email'></a-input>`,
  }))
  .add('White Input', () => ({
    components: { AInput },
    template: `<a-input placeholder='Submit your email' color="white"></a-input>`
  }));