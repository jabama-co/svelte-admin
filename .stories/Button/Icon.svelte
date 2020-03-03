<script>
    import { Button } from 'svelte-admin'

    const colors = ['primary', 'success', 'danger', 'warning']
</script>

{#each colors as color}
    <Button {color}>
        <svg
            slot="icon"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="50"
            height="50"
            viewBox="0 0 16 17">
            <defs>
                <path
                    id="prefix__a"
                    d="M14.707
                    6.707l-.045.043-.027.023c-.116.095-.254.165-.406.2l-.112.02c-.037.005-.074.007-.111.007H9c-.552
                    0-1-.448-1-1s.448-1 1-1h3.155C11.073 3.735 9.603 3 8 3 4.686
                    3 2 5.686 2 9s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1
                    .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.892
                    0 3.632.734 5 1.999V1c0-.552.448-1 1-1s1 .448 1 1v4.994c0
                    .033-.001.067-.004.1l-.009.066c-.003.02-.007.042-.012.062-.012.055-.03.109-.05.16l-.022.048c-.027.056-.058.109-.094.158l-.02.027-.02.024c-.015.019-.031.037-.048.054l-.014.014z" />
            </defs>
            <g>
                <use fill="white" fill-rule="nonzero" xlink:href="#prefix__a" />
            </g>
        </svg>
        {color}
    </Button>
{/each}
