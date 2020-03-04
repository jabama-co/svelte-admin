<script>
    import { Dropdown } from 'svelte-admin'
    const items = ['Apple', 'Banana', 'Onion', 'Peach', 'Orange']
    let value = ''
    const setValue = e => (value = e.detail.value)
</script>

<Dropdown {items} size="sm" on:select={setValue} />
<Dropdown {items} size="md" on:select={setValue} />
<Dropdown {items} size="lg" on:select={setValue} />
<!-- <Dropdown {items} block on:select={setValue} /> -->
