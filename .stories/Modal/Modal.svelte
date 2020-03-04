<script>
    import { Modal, Button } from 'svelte-admin'
    import Content from './Content.svelte'
    let isOpened = false
    const toggle = () => (isOpened = !isOpened)
    const title = 'Modal header'
</script>

<Modal {toggle} {isOpened} {title}>
    <h3 slot="header">header text</h3>
    <div slot="body">
        <Content />
    </div>
    <div slot="footer" style="text-align: right">
        <Button on:click={toggle} outline color="primary">cancel</Button>
        <Button on:click={toggle} color="primary">agree</Button>
    </div>
</Modal>
<Button on:click={toggle}>Open</Button>
