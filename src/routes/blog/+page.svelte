<script>
    import BlogCard from "$lib/components/composed/BlogCard.svelte";
    
    /* Add API call to retrieve real data */
    let posts = [
        {
            id: 1,
            title: "Por qué elegí SvelteKit para mi portfolio",
            summary: "Una reflexión sobre las decisiones técnicas detrás de este proyecto y por qué SvelteKit fue la elección correcta.",
            date: "2023-11-15",
            readTime: "4 min"
        },
        {
            id: 2,
            title: "El proceso de diseño de interfaces que realmente funciona",
            summary: "Cómo evolucionó mi approach al diseño UI/UX a lo largo de los años y qué metodologías mantengo hoy.",
            date: "2023-11-10", 
            readTime: "6 min"
        },
    ];

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