<script>
    import { Button } from 'svelte-admin'
    const colors = ['primary', 'success', 'danger', 'warning']
</script>

{#each colors as color}
    <Button href="/" target="__blank" rel="noreferrer noopener" {color}>
        {color} link
    </Button>
{/each}
