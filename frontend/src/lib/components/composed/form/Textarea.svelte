<script lang="ts">

    import Label from "$lib/components/base/Label.svelte";

    interface TextareaProps {
        value: string,
        id: string,
        label: string,
        rows: number
        isRequired: boolean,
        isDisabled: boolean
    }

    let {
        value = $bindable(),
        id, label, rows, isRequired = false, isDisabled = false,
    }: TextareaProps = $props();

</script>

<Label {id} class="block text-sm font-medium text-gray-500">
    {label}
</Label>
<textarea 
    {id} {rows} bind:value disabled={isDisabled} required={isRequired}
    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
></textarea>