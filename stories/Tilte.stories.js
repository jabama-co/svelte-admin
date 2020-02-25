import Title from '../src/elements/Title.svelte'

export default { title: 'Title component' }

export const withText = () => ({
    Component: Title,
    props: {
        name: 'DLS',
    },
})
