<script>
    export let text
    export let outline
</script>

<style type="text/scss" lang="scss">
    @import '../styles/variables.scss';
    button {
        padding: 8px 12px;
    }
    .outline {
        background: none;
        border: 1px solid;
        color: red;
    }
</style>

<button class:outline on:click>{text}!</button>
