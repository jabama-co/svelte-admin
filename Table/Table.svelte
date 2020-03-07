<script>
    export let bordered = ''
    export let dark = ''
    export let size = ''
    export let responsive = ''
</script>

<style lang="scss">
    @import './Table.scss';
</style>

<div class:responsive>
    <table class:bordered class:dark class={size ? 'size-' + size : ''}>
        <slot />
    </table>
</div>
