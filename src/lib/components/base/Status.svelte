<script lang="ts">
    import type { MouseEventHandler } from "svelte/elements";

    interface props {
        error:boolean,
        success:boolean,
        details:string, 
        onclick:MouseEventHandler<HTMLButtonElement> | null | undefined 
    }

    let {
        error, success, details, onclick
    }: props = $props();

</script>



{#if error}
    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 relative">
        {#if details}
            {details}
        {:else}
            Ha ocurrido un error
        {/if}
        <button class="absolute top-3 right-3" {onclick}>x</button>
    </div>
{:else if success}
    <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 relative">
        {#if details}
            {details}
        {:else}
            Exito en la operacion
        {/if}
        <button class="absolute top-3 right-3" {onclick}>x</button>
    </div>
{/if}