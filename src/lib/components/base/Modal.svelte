<script lang="ts">
    import Danger from "$lib/assets/icons/danger.svelte";

    interface ModalProps {
        open: boolean,
        title: string,
        isDestructive?: string,
        children: any
    }

    let {
        open = false, title, isDestructive, children
    }: ModalProps = $props();

</script>


{#if open}
    <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

        <div class="bg-zinc-800 rounded-lg max-w-md w-full border border-zinc-700">

            {#if title}
                <div class="flex flex-row gap-4 justify-center items-center">
                    
                    <h3 class="p-4 rounded text-center text-lg font-semibold text-white">
                        {title}
                    </h3>

                    {#if isDestructive}
                        <div class="text-red-400">
                            <Danger />
                        </div>
                    {/if}

                </div>

            {/if}

            <div class="p-6">
                {@render children?.()}
            </div>

        </div>

    </div>
{/if}