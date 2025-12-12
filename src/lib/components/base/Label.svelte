<script lang="ts">

    interface LabelProps {
        id: string,
        class?: string
        children: any
    }

    let {
        id, class: klass, children
    }: LabelProps = $props();

</script>

<label for={id} class="block text-sm font-medium text-gray-500 {klass}">
    {@render children?.()}
</label>