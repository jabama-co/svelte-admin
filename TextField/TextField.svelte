<script>
    export let type = 'text'
    export let textarea = false
    let className = ''
    export { className as class }
    let plcHolder = ' '
    export { plcHolder as placeholder }
    export let invalid = false
    export let value = ''
    export let files = () => {}
    export let readonly
    export let id = ''
    export let name = ''
    export let disabled = false
    export let fullwidth = false
    export let label = ''
    export let withLeadingIcon = false
    export let withTrailingIcon = false
    export let dir = ''
    let valueProp = {}

    $: if (type === 'file') {
        delete valueProp.value
    } else {
        valueProp.value = value === undefined ? '' : value
    }

    function updateValue(e) {
        switch (type) {
            case 'number':
            case 'range':
                value = +e.target.value
                break
            case 'file':
                files = e.target.files
                break
            default:
                value = e.target.value
                break
        }
    }
</script>

<style type="text/scss" lang="scss">
    @import './TextField.scss';
</style>

<label
    class=" textfield-outlined {className}
    {disabled ? 'textfield-disabled' : ''}
    {fullwidth ? 'textfield-fullwidth' : ''}
    {textarea ? 'textfield-textarea' : ''}
    {!label ? 'textfield-no-label' : ''}
    {withLeadingIcon ? 'textfield-with-leading-icon' : ''}
    {withTrailingIcon ? 'textfield-with-trailing-icon' : ''}
    {invalid ? 'textfield-invalid' : ''}
    {dir === 'rtl' ? 'rtl' : ''}
    ">
    <slot />
    {#if textarea}
        <textarea
            class="textfield__input {className}"
            placeholder={plcHolder ? plcHolder : ' '}
            {id}
            {name}
            {disabled}
            {readonly}
            bind:value
            on:blur
            on:focus
            on:keydown
            on:keypress
            on:keyup
            on:change
            on:input />
    {:else}
        <input
            class="textfield__input {className}"
            placeholder={plcHolder ? plcHolder : ' '}
            {id}
            {name}
            {disabled}
            {readonly}
            {type}
            {...valueProp}
            on:blur
            on:focus
            on:keydown
            on:keypress
            on:keyup
            on:change
            on:change={e => (type === 'file' || type === 'range') && updateValue(e)}
            on:input={e => type !== 'file' && updateValue(e)} />
    {/if}
    <span class={!label ? 'no-label' : ''}>{label}</span>
</label>
