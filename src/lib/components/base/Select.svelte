<script>
    let {
        value = $bindable(),
        // other props
        id, label, isRequired = false, isDisabled = false,
        children
    } = $props();

</script>


<label for={id} class="block text-sm font-medium text-gray-700">
    {label}
</label>
<select 
    {id} bind:value disabled={isDisabled} required={isRequired}
    class="
        w-full px-3 py-2 border border-gray-300 rounded-md
        focus:outline-none focus:ring-2 focus:ring-blue-500
        text-gray-400
    "
>

    {@render children?.()}

</select>