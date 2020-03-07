<script>
    import { TextField } from 'svelte-admin'
    let text = ''
</script>

<TextField label="Binding sample" bind:value={text} />
&nbsp;
<span>Value:</span>
{text}
