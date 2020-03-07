import { storiesOf } from '@storybook/svelte'
import Button from './Button'
import Modal from './Modal'
import Dropdown from './Dropdown'
import Table from './Table'

const story = Component => () => ({
    Component,
})

storiesOf('Components', module)
    .add('Button', story(Button))
    .add('Dropdown', story(Dropdown))
    .add('Modal', story(Modal))
    .add('Table', story(Table))
