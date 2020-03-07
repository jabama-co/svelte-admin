<script>
    import { createEventDispatcher } from 'svelte'
    let cls = ''
    export let items = []
    export let exclude = []
    export let title = 'Select Item'
    export let selected = ''
    export let size = 'md'
    export let block = ''
    export let dark = false
    export let style = ''
    export { cls as class }

    let el,
        value = selected || '',
        open = false

    const dispatch = createEventDispatcher()
    const toggle = () => (open = !open)

    const set = val => {
        value = val
        dispatch('select', {
            value: val,
        })
        return () => (open = false)
    }

    const isExcluded = target => {
        let parent = target
        while (parent) {
            if (exclude.indexOf(parent) >= 0 || parent === el) {
                return true
            }
            parent = parent.parentNode
        }
        return false
    }

    const onClickOutside = event => {
        if (!isExcluded(event.target)) {
            open = false
        }
    }
</script>

<style lang="scss">
    @import './Dropdown.scss';
</style>

<svelte:body on:click={onClickOutside} />
<div
    class:block
    {style}
    bind:this={el}
    class:dark
    on:click={toggle}
    class="custom-select {size ? 'size-' + size : ''}
    {cls}">
    <div class="select">{value ? value : title}</div>
    <span class="chevron" />
    {#if open}
        <div class="options">
            {#if value}
                <div class="options-item disabled">{title}</div>
            {/if}
            {#each items as item, index (index)}
                <div
                    on:click={() => set(item)}
                    class="options-item {value === item ? 'selected' : ''}">
                    {item}
                </div>
            {/each}
        </div>
    {/if}
</div>
