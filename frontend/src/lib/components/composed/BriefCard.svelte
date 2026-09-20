<script lang="ts">

    import { resolve } from "$app/paths";
    import type { Post, ClassProp } from "$lib/types";
    
    let {
        slug, title, summary, date, read_time_estimation,
        class: klass
    }: Post & ClassProp = $props();

    let post: string = $derived(slug);


    function formatDate(date: number | string | Date) {
        return new Date(date + 'T00:00:00').toLocaleDateString("es-ES", {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }

</script>

<article class="
    bg-zinc-800 rounded-xl
    border border-zinc-700
">
    
    <div class="p-6">

        <div class="flex items-center gap-2 text-sm text-zinc-400 mb-4">
            <span>{formatDate(date)}</span>
        </div>

        <div>
            <h3 class="text-lg font-bold mb-2">
                {title}
            </h3>

            <!-- Maybe restore component into admin dashboard? Inconsistency of modularity here -->
            <a href={resolve("/blog/[slug]", {slug})} class="
                cursor-pointer rounded-lg mt-4 mr-3 p-3 px-4
                inline-block font-medium transition-colors
                border border-white hover:bg-white hover:text-black
            ">
                Ver mas
            </a>

            <a href={resolve("/blog/admin/edit/[post]", {post})} class="
                cursor-pointer rounded-lg mt-4 p-3 px-4
                inline-block font-medium transition-colors
                border border-neutral-950 hover:bg-neutral-950
            ">
                Editar
            </a>
        </div>

    </div>
    
</article>
