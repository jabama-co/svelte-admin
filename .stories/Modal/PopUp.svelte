<script>
    import { Modal, Button } from 'svelte-admin'
    import Content from './Content.svelte'

    const popup = true
    let isOpened = false

    const toggle = () => (isOpened = !isOpened)
</script>

<Modal size="sm" {popup} {toggle} {isOpened}>
    <Content />
    <div style="text-align:center">
        <Button color="success" on:click={toggle}>accept</Button>
    </div>
</Modal>
<Button on:click={toggle}>Popup</Button>
