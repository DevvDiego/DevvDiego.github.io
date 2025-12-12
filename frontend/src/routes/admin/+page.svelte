<script lang="ts">
    import BriefCard from '$lib/components/composed/BriefCard.svelte';
    import { config } from '$lib/config';
    import type { ManyPosts } from '$lib/types.js';
    
    const loadPosts = async () => {
        const response = await fetch(`${config.API}/blog/`);
        if( !response.ok ){ 
            throw new Error(`failed loading posts: ${response.statusText}`);
        }
    
        return await response.json() as ManyPosts;
    }

    //store the promise for the await block
    let postsPromise = loadPosts();

</script>

<svelte:head>
  <title>Admin panel</title>
</svelte:head>

<main class="container py-24 mx-auto p-4 max-w-7xl">
    
    <header>
        <h1 class="text-2xl font-bold mb-6">Admin panel</h1>
    </header>
    
    
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
                <h1>Loading</h1>
            {:then postsData}
                
                <h1>Posts cargados: {postsData.length}</h1>
                
                {#each postsData as post}
                    <BriefCard {...post} class="" />
                {/each}

            {:catch error}
                <h1>Error loading posts</h1>
            {/await}

        </div>

    </section>


</main>