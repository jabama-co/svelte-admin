<script>
    import { TextField } from 'svelte-admin'
    import { TextFieldIcon } from 'svelte-admin'
    import CalendarSvg from './CalendarSvg.svelte'
</script>

<style type="text/scss" lang="scss">
    i {
        display: flex;
    }
</style>

<TextField label="Leading icon" withLeadingIcon>
    <TextFieldIcon>
        <i>
            <CalendarSvg />
        </i>
    </TextFieldIcon>
</TextField>

<TextField label="Trailing icon" withTrailingIcon>
    <TextFieldIcon>
        <i>
            <CalendarSvg />
        </i>
    </TextFieldIcon>
</TextField>

<TextField label="Both icon" withLeadingIcon withTrailingIcon>
    <TextFieldIcon>
        <i>
            <CalendarSvg />
        </i>
    </TextFieldIcon>
    <TextFieldIcon>
        <i>
            <CalendarSvg />
        </i>
    </TextFieldIcon>
</TextField>
