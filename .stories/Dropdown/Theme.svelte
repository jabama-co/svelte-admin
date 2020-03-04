<script>
    import { Dropdown } from 'svelte-admin'
    const items = [
        'Gorilla',
        'Banana',
        'Gorilla holding the banana',
        'And the entire jungle!',
    ]
    let value = ''
    const setValue = e => (value = e.detail.value)
</script>

<Dropdown {items} dark on:select={setValue} title="Select Item" />
