import { configure, addParameters } from '@storybook/svelte'
import pkg from '../package.json';

// Option defaults:
addParameters({
  options: {
    name: `${pkg.name} ${pkg.version}`,
    url: 'https://github.com/jabama-co/svelte-admin',
  },
});

configure(require.context('../.stories', true, /\.stories\.[jt]s$/), module)
