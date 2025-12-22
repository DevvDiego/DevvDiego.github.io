<script lang="ts">
    import BlogCard from "$lib/components/composed/BlogCard.svelte";
    import type { ManyPosts } from "$lib/types";
    import { api } from '$lib/services/ApiService';
    import { config } from "$lib/config";

    async function loadPosts(){
        try {

            const response = await api.get(
                `${config.API}/blog`
            );

            return response.data as ManyPosts;
        
        } catch (err) {
            if(err instanceof Error){ throw err; }

        }
    }

    let postsPromise = loadPosts();

</script>
<main class="w-full min-h-screen bg-zinc-900 ">

    <section class="w-11/12 md:w-3/4  max-w-4xl mx-auto py-16">
        
        <div class="my-16">
            
            <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                Blog
            </h1>
            <p class="text-zinc-400 text-lg">
                Pensamientos sobre desarrollo, diseño y tecnología
            </p>

        </div>
        
        <div class="space-y-12 max-w-4xl">

            {#await postsPromise}
                <h1>Place skeleton here</h1>

            {:then posts}
                
                {#each posts as post}
                    <BlogCard {...post} class="" />
                {/each}

            {:catch error: Error}
            
                <h1>Ha ocurrido un error fatal.</h1>
                <p>
                    {error.message}
                </p>

            {/await}



        </div>

    </section>

</main>