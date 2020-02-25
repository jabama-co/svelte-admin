<script>
    export let name
</script>

<style type="text/scss" lang="scss">
    @import '../styles/variables.scss';
    h1 {
        font: {
            size: $size-font-large;
        }
        color: $color-font-success;
    }
</style>

<h1>Hello {name}!</h1>
