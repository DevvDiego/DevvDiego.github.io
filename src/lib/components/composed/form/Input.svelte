<script>

    import Label from "$lib/components/base/Label.svelte";

    let {
        value = $bindable(),
        // Accept an oninput function prop
        oninput,
        // other props
        type, id, label, placeholder, isRequired = false, isDisabled = false
    } = $props();

    // Local function to handle the input event
    function handleInput(event) {
        // Update the local 'slug' value
        value = event.target.value;
        // Call the parent's oninput handler if provided
        oninput?.(event);
    }

</script>

<Label for={id} class="block text-sm font-medium text-gray-500">
    {label}
</Label>
<input
    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    {type}
    id="slug"
    {placeholder}
    bind:value
    oninput={handleInput}
    required={isRequired} disabled={isDisabled}
/>