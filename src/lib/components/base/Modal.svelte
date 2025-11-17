<script>

    let {
        open = false, children
    } = $props();

</script>


{#if open}
    <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div class="bg-zinc-800 rounded-lg p-6 max-w-md w-full border border-zinc-700">

            {@render children?.()}

        </div>
    </div>
{/if}