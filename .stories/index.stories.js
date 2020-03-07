import { storiesOf } from '@storybook/svelte'
import Button from './Button'
import TextField from './TextField'

const story = Component => () => ({
    Component,
})

storiesOf('Components', module)
    .add('Button Component', story(Button))
    .add('TextField Component', story(TextField))
