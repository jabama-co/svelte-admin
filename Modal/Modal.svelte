<script>
    import { fade } from 'svelte/transition'
    export let closeButton = true
    export let closeOnOuter = true
    export let transitionBg = fade
    export let size = 'md'
    export let isOpened = false
    export let toggle = () => {}
    export let transitionBgProps = { duration: 250 }
    export let transitionWindow = transitionBg
    export let transitionWindowProps = transitionBgProps
    export let popup = false

    let background
    let wrap

    $: currentTransitionBg = transitionBg
    $: currentTransitionWindow = transitionWindow

    const closeOnOuterClick = e => {
        if (closeOnOuter && (e.target === background || e.target === wrap)) {
            e.preventDefault()
            toggle()
        }
    }
    const handleKeydown = e => {
        if (e.key === 'Escape') {
            toggle()
            return
        }
    }
</script>

<style type="text/scss" lang="scss">
    @import './Modal.scss';
</style>

<svelte:window on:keydown={handleKeydown} />

{#if isOpened}
    <div
        class="modal"
        on:click={closeOnOuterClick}
        bind:this={background}
        transition:currentTransitionBg={transitionBgProps}>
        <div class="modal-window-wrap" bind:this={wrap}>
            <div
                class="modal-window modal-size-{size}"
                transition:currentTransitionWindow={transitionWindowProps}>
                <div class="modal-content">
                    {#if !popup}
                        <div class="modal-header">
                            <slot name="header" />
                            {#if closeButton}
                                <button on:click={toggle} class="close">
                                    ❌
                                </button>
                            {/if}
                        </div>
                        <div class="modal-body">
                            <slot name="body" />
                        </div>
                        <div class="modal-footer">
                            <slot name="footer" />
                        </div>
                    {:else}
                        <div class="popup">
                            <slot />
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </div>
{/if}
