<script>

    import Label from "$lib/components/base/Label.svelte";

    let {
        value = $bindable(),
        // Accept an oninput function prop
        oninput,
        // other props
        type, id, label, rows, isRequired = false, isDisabled = false,
    } = $props();

</script>

<Label for={id} class="block text-sm font-medium text-gray-500">
    {label}
</Label>
<textarea 
    {id} {rows} bind:value disabled={isDisabled} required={isRequired}
    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
></textarea>