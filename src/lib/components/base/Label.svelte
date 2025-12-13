<script lang="ts">
    import type { LabelProps } from "$lib/types";


    let {
        id, class: klass, children
    }: LabelProps = $props();

</script>

<label for={id} class="block text-sm font-medium text-gray-500 {klass}">
    {@render children?.()}
</label>