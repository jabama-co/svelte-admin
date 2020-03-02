<script>
    import { Button } from 'svelte-admin'

    const colors = ['primary', 'success', 'danger', 'warning']
</script>

{#each colors as color}
    <Button {color}>{color}</Button>
{/each}
