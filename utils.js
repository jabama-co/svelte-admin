export function getProps($$props) {
    const props = {}
    Object.keys($$props).map(prop => {
        if (prop !== 'children' && prop !== '$$scope' && prop !== '$$slots') {
            props[prop] = $$props[prop]
        }
    })
    return props
}
