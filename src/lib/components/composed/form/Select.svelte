<script lang="ts">

    import Label from "$lib/components/base/Label.svelte";
    import type { SelectProps } from "$lib/types";

    let {
        value = $bindable(),
        // other props
        id, label, isRequired = false, isDisabled = false,
        class:klass, children
    }: SelectProps = $props();

</script>



<Label {id} class="block text-sm font-medium text-gray-500">
    {label}
</Label>
<select 
    {id} bind:value disabled={isDisabled} required={isRequired}
    class="
        w-full px-3 py-2 border border-gray-300 rounded-md
        focus:outline-none focus:ring-2 focus:ring-blue-500
        text-gray-400 {klass}
    "
>

    {@render children?.()}

</select>