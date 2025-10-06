<script>

    let {
        value = $bindable(),
        // Accept an oninput function prop
        oninput,
        // other props
        type, id, label, rows, isRequired = false, isDisabled = false,
    } = $props();

</script>


<label for="content" class="block text-sm font-medium text-gray-700">
    {label}
</label>
<textarea 
    {id} {rows} bind:value disabled={isDisabled} required={isRequired}
    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
></textarea>