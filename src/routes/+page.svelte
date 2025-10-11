<script>
    import BlogCard from "$lib/components/composed/BlogCard.svelte";

    let {
        data,
    } = $props();
    
    let posts = data.posts;

</script>

<main class="w-full min-h-screen bg-zinc-900 ">

    <section class="w-11/12 md:w-3/4 mx-auto py-16">
        
        <div class="my-16">
            
            <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                Blog
            </h1>
            <p class="text-zinc-400 text-lg">
                Pensamientos sobre desarrollo, diseño y tecnología
            </p>

        </div>
        
        <div class="space-y-12 max-w-4xl">

            {#each posts as post}
                <BlogCard {...post} />
            {/each}

        </div>

    </section>

</main>