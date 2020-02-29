<script>
    import { Button } from 'svelte-admin'

    function click() {
        alert('hello from button')
    }
</script>

<Button outline text="click" on:click={click} />
