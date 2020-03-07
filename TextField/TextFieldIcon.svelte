<script>
    export let tabindex = -1
    let className = ''
    export { className as class }
</script>

<style type="text/scss" lang="scss">
    .textfield__icon {
        position: absolute;
        top: 22px;
        cursor: pointer;
    }

    .textfield__icon:not([tabindex]),
    .textfield__icon[tabindex='-1'] {
        cursor: default;
        pointer-events: none;
    }
</style>

<div
    class="textfield__icon {className}"
    {tabindex}
    aria-hidden={tabindex === '-1' ? 'true' : 'false'}>
    <slot />
</div>
