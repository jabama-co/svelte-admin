<script>
    import { Modal, Button } from 'svelte-admin'
    import Content from './Content.svelte'

    let isOpenedOne = false
    let isOpenedTwo = false
    let isOpenedThree = false

    const toggleOne = () => (isOpenedOne = !isOpenedOne)
    const toggleTwo = () => (isOpenedTwo = !isOpenedTwo)
    const toggleThree = () => (isOpenedThree = !isOpenedThree)
</script>

<Modal size="sm" toggle={toggleOne} isOpened={isOpenedOne}>
    <h3 slot="header">header text</h3>
    <div slot="body">
        <Content />
    </div>
    <div slot="footer" style="text-align: right">
        <Button on:click={toggleOne} outline color="primary">cancel</Button>
        <Button on:click={toggleOne} color="primary">agree</Button>
    </div>
</Modal>
<Button on:click={toggleOne}>Open small modal</Button>

<Modal size="md" toggle={toggleTwo} isOpened={isOpenedTwo}>
    <h3 slot="header">header text</h3>
    <div slot="body">
        <Content />
    </div>
    <div slot="footer" style="text-align: right">
        <Button on:click={toggleTwo} outline color="primary">cancel</Button>
        <Button on:click={toggleTwo} color="primary">agree</Button>
    </div>
</Modal>
<Button on:click={toggleTwo}>Open medium modal</Button>

<Modal size="lg" toggle={toggleThree} isOpened={isOpenedThree}>
    <h3 slot="header">header text</h3>
    <div slot="body">
        <Content />
    </div>
    <div slot="footer" style="text-align: right">
        <Button on:click={toggleThree} outline color="primary">cancel</Button>
        <Button on:click={toggleThree} color="primary">agree</Button>
    </div>
</Modal>
<Button on:click={toggleThree}>Open large modal</Button>
