import { storiesOf } from '@storybook/svelte'
import Button from './Button'
import Modal from './Modal'
import Dropdown from './Dropdown'

const story = Component => () => ({
    Component,
})

storiesOf('Components', module)
    .add('Button', story(Button))
    .add('Dropdown', story(Dropdown))
    .add('Modal', story(Modal))
