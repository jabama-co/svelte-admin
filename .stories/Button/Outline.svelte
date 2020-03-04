<script>
    import { Button } from 'svelte-admin'

    const colors = ['primary', 'success', 'danger', 'warning']
</script>

{#each colors as color}
    <Button outline {color}>{color}</Button>
{/each}
