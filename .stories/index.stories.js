import { storiesOf } from '@storybook/svelte'
import Button from './Button'

const story = Component => () => ({
    Component,
})

storiesOf('Components', module).add('Button', story(Button))
