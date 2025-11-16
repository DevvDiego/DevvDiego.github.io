<script>

    let {
        id, text, class: klass, children
    } = $props();

</script>

<label for={id} class="block text-sm font-medium text-gray-500 {klass}">
    {@render children?.()}
</label>