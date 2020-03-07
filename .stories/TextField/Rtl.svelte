<script>
    import { TextField } from 'svelte-admin'
    import { TextFieldIcon } from 'svelte-admin'
    import CalendarSvg from './CalendarSvg.svelte'
</script>

<TextField dir="rtl" label="Rtl" />
<TextField label="With icon" dir="rtl" withLeadingIcon>
    <TextFieldIcon>
        <i>
            <CalendarSvg />
        </i>
    </TextFieldIcon>
</TextField>
