<script lang="ts">
    import type { ContentBlock, Post } from '$lib/types.js';


    let { data } = $props();

    let {
        title, 
        slug, 
        technology,
        date, 
        read_time_estimation, 
        author_name,
        author_degree,
        summary, 
        content, 
        conclusion, 
        tags
    }: Post = $derived({...data.post});
    //add whitespace-pre-line also to the paragraph?

    function formatDate(date: number | string | Date ) {
        return new Date(date + 'T00:00:00').toLocaleDateString("es-ES", {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }

</script>



{#snippet paragraph(item: ContentBlock)}

    <p class="text-zinc-300 leading-relaxed mb-4">{item.text}</p>

{/snippet}

{#snippet subtitle(item: ContentBlock)}

    <h2 class="text-2xl font-semibold pt-8 mt-8 border-t border-zinc-700/50 mb-4">{item.text}</h2>

{/snippet}


{#snippet tip(item: ContentBlock)}

    <div class="bg-zinc-800/80 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
        <p class="text-zinc-200 italic">💡 {item.text}</p>
    </div>

{/snippet}


<!-- {#snippet code(item)}

    <div class="bg-zinc-900 p-4 rounded-lg mb-6">

        <div class="flex justify-between items-center mb-2">
            <span class="text-zinc-400 text-sm">{item.language}</span>
        </div>

        <pre class="overflow-x-auto">
            <code class="text-zinc-200 text-sm">{item.code}</code>
        </pre>

    </div>

{/snippet} -->



<main class="bg-zinc-900 text-zinc-100 min-h-screen flex items-center justify-center p-4 py-28">

    <article class="max-w-3xl w-full rounded-none md:rounded-xl p-4 md:p-8 
            bg-transparent md:bg-zinc-800/50 
            border-0 md:border md:border-zinc-700/30
            transition-all duration-300">


        <!-- Encabezado -->
        <header class="mb-10">
            <div class="flex items-center gap-2 text-sm text-zinc-400 mb-4">
                <span class="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full">
                    {technology}
                </span>
                <span>•</span>
                <span>{formatDate(date)}</span>
                <span>•</span>
                <span>{read_time_estimation} min</span>
            </div>
            
            <h1 class="text-4xl font-bold mb-4">
                {title}
            </h1>
            
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center">
                    <i class="fas fa-user text-zinc-300"></i>
                </div>
                <div>
                    <p class="font-medium">{author_name}</p>
                    <p class="text-sm text-zinc-400">{author_degree}</p>
                </div>
            </div>
        </header>


        <p class="text-zinc-300 leading-relaxed mb-4">
            {summary}
        </p>


        <!-- Contenido del artículo -->
        <div class="article-content space-y-6">
            
            
            {#each content as item}
                {#if item.type === 'paragraph'}
                    {@render paragraph(item)}
                
                {:else if item.type === 'subtitle'}
                    {@render subtitle(item)}
                
                {:else if item.type === 'tip'}
                    {@render tip(item)}

                <!-- {:else if item.type === 'code'}
                    {@render code(item)}
                
                {:else if item.type === 'image'}
                    {$rendered.image(item)} -->
                {/if} 
            {/each}

            
            <!-- Conclusión -->
            <div class="bg-emerald-900/20 p-5 rounded-lg border border-emerald-700/30 mt-8">
                <h3 class="font-semibold text-emerald-300 flex items-center gap-2">
                    <i class="fas fa-lightbulb"></i> Conclusión
                </h3>
                <p class="text-zinc-300 mt-2 whitespace-pre-line">
                    {conclusion}
                </p>
            </div>
        </div>


        <!-- Etiquetas -->
        <div class="flex flex-wrap gap-2 mt-10 pt-8 border-t border-zinc-700/50">
            {#each tags.split(", ") as tag}
                <span class="bg-zinc-700/50 text-zinc-300 px-3 py-1 rounded-full text-sm">
                    {tag}
                </span>
            {/each}
        </div>


        <!-- Acciones -->
        <!-- <div class="flex justify-between items-center mt-8 pt-6 border-t border-zinc-700/50">
            
            <div class="flex items-center gap-4 text-zinc-400">
                
                <button class="flex items-center gap-1 hover:text-blue-400 transition-colors">
                    <i class="far fa-heart"></i>
                    <span>42</span>
                </button>

                <button class="flex items-center gap-1 hover:text-blue-400 transition-colors">
                    <i class="far fa-bookmark"></i>
                    <span>Guardar</span>
                </button>

            </div>
            

        </div> -->
        
        
    <!--     <div class="flex items-center gap-3">
            <span class="text-sm text-zinc-400">Compartir:</span>
            <button class="w-8 h-8 rounded-full bg-zinc-700/50 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i class="fab fa-twitter text-sm"></i>
            </button>
            <button class="w-8 h-8 rounded-full bg-zinc-700/50 flex items-center justify-center hover:bg-blue-800 transition-colors">
                <i class="fab fa-linkedin-in text-sm"></i>
            </button>
            <button class="w-8 h-8 rounded-full bg-zinc-700/50 flex items-center justify-center hover:bg-gray-700 transition-colors">
                <i class="far fa-copy text-sm"></i>
            </button>
        </div> -->


    </article>


</main>


<style>
    pre {
        white-space: pre-wrap;
        word-wrap: break-word;
    }
    
    code {
        font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
        font-size: 0.9em;
    }
</style>