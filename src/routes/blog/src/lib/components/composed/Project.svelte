<script lang="ts">
    /* import Badge from "./Badge.svelte"; */
    import { base } from "$app/paths";
    import type { Post, ClassProp } from "$lib/types";


    let {
        /* imageSrc, imageAlt, */
        slug, title, summary, date, read_time_estimation,
        /* techs = [], */
        class: klass
    }: Post & ClassProp  = $props();

</script>

<article class="bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700">
    
    <!-- check later a image feature -->
<!--     <div class="h-48 overflow-hidden">
        <img src={imageSrc} alt={imageAlt} class="w-full h-full object-cover object-center">
    </div> -->

    <div class="p-6">
        <a href={ base + "/blog/" + slug }>

            <div class="flex items-center gap-2 text-sm text-zinc-400 mb-4">
                <span>{date}</span>
                <span>•</span>
                <span>{read_time_estimation}</span>
            </div>

            <h3 class="text-xl font-bold mb-2">
                {title}
            </h3>

            <p class="text-zinc-400 md:text-lg mb-4">
                {summary}
            </p>

        </a>
    </div>

</article>
