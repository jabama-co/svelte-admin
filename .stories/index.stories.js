import { storiesOf } from '@storybook/svelte'
import Button from './Button'
import Modal from './Modal'

const story = Component => () => ({
    Component,
})

storiesOf('Components', module)
    .add('Button Component', story(Button))
    .add('Modal', story(Modal))
