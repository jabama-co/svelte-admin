<script>
    import { Button } from 'svelte-admin'

    function click() {
        alert('hello from button')
    }
</script>

<Button text="Click!" on:click={click} />
