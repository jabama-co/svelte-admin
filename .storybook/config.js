import { configure } from '@storybook/svelte'

configure(require.context('../.stories', true, /\.stories\.[jt]s$/), module)
