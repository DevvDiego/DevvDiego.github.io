<script lang="ts">

    import type { ClassProp } from "$lib/types";

    let {
        class: klass
    }: ClassProp  = $props();

</script>

<div class="
    bg-zinc-800 rounded-xl overflow-hidden 
    border border-zinc-700 animate-pulse {klass}
">

</div>