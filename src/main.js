import App from './App.svelte'

const app = new App({
  target: document.body,
  props: {
    name: 'world',
    title: 'from design language system'
  }
})

window.app = app

export default app
