import Title from '../title'

export default { title: 'Title component' }

export const withText = () => ({
    Component: Title,
    props: {
        name: 'DLS',
    },
})
