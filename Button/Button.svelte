<script>
    import { getProps } from '../utils'
    let cls = ''
    export let outline = false
    export { cls as class }
    export let block = false
    export let color = 'primary'
    export let style = ''
    export let disabled = false
    export let href = ''
    export let size = ''

    const iconSlot = $$props.$$slots && 'icon' in $$props.$$slots

    function iconBgColor(color) {
        if (color === 'primary') return ' #0069d9'
        if (color === 'danger') return '#df2b1e'
        if (color === 'warning') return '#fda624'
        if (color === 'success') return '#218838'
    }

    const props = getProps($$props)

    $: classNames = `${cls} btn btn-${color} 
    ${outline ? 'btn-outline-' + color : ''} 
    ${size ? 'btn-size-' + size : ''}
    ${block ? 'btn-block' : ''}
    ${href && disabled ? 'disabled' : ''}
    ${props.dir === 'rtl' ? 'rtl' : 'ltr'}
    `
</script>

<style type="text/scss" lang="scss">
    @import './Button.scss';
</style>

{#if href}
    <a {...props} {href} {style} {disabled} class={classNames} on:click>
        {#if iconSlot}
            <span style="--bg-color: {iconBgColor(color)}" class="icon">
                <slot name="icon" />
            </span>
        {/if}
        <span class="btn-text">
            <slot />
        </span>
    </a>
{:else}
    <button {...props} {style} {disabled} class={classNames} on:click>
        {#if iconSlot}
            <span style="--bg-color: {iconBgColor(color)}" class="icon">
                <slot name="icon" />
            </span>
        {/if}
        <span class="btn-text">
            <slot />
        </span>
    </button>
{/if}
