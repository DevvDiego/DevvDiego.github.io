<script>
    let { 
        post
    } = $props();


/*     let post = $state(
    {
        "title": "The basics for react",
        "slug": "react-basics",
        "technology": "Node.js",
        "date": "2023-11-15",
        "read_time_estimation": "5 min read",
        "author_name": "Diego Varela",
        "author_degree": "Systems Engineer",
        "summary": "En el desarrollo moderno de aplicaciones, la optimización de APIs es crucial para garantizar una experiencia de usuario fluida y eficiente.",
        "content": "[\n        {\n            \"type\": \"paragraph\",\n            \"text\": \"En el desarrollo moderno de aplicaciones, la optimización de APIs es crucial para garantizar una experiencia de usuario fluida y eficiente. En este artículo, exploraremos técnicas avanzadas para optimizar APIs construidas con Node.js y Express.\"\n        },\n        {\n            \"type\": \"subtitle\",\n            \"text\": \"Caching de respuestas\"\n        },\n        {\n            \"type\": \"paragraph\",\n            \"text\": \"Una de las técnicas más efectivas para mejorar el rendimiento de tu API es implementar caching. Al almacenar respuestas frecuentemente solicitadas, reduces la carga en tu servidor y disminuyes los tiempos de respuesta.\"\n        },\n        {\n            \"type\": \"tip\",\n            \"text\": \"Utiliza Redis para almacenamiento en caché distribuido en entornos de producción.\"\n        },\n        {\n            \"type\": \"subtitle\",\n            \"text\": \"Implementación básica de caching\"\n        },\n        {\n            \"type\": \"code\",\n            \"language\": \"javascript\",\n            \"code\": \"const express = require('express');\"\n        }\n    ]",
	"conclusion": "here should be a conclusion about the theme"
        "tags": "['Node.js', 'Express', 'Optimización', 'APIs']",
        "created_at": "2025-09-26 23:55:27",
        "updated_at": "2025-09-26 23:55:27"
    }
    ); */

    // ADD POST CONCLUSION


</script>



{#snippet paragraph(item)}

    <p class="text-zinc-300 leading-relaxed mb-4">{item.text}</p>

{/snippet}

{#snippet subtitle(item)}

    <h2 class="text-2xl font-semibold pt-8 mt-8 border-t border-zinc-700/50 mb-4">{item.text}</h2>

{/snippet}


{#snippet tip(item)}

    <div class="bg-zinc-800/80 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
        <p class="text-zinc-200 italic">💡 {item.text}</p>
    </div>

{/snippet}


{#snippet code(item)}

    <div class="bg-zinc-900 p-4 rounded-lg mb-6">

        <div class="flex justify-between items-center mb-2">
            <span class="text-zinc-400 text-sm">{item.language}</span>
        </div>

        <pre class="overflow-x-auto">
            <code class="text-zinc-200 text-sm">{item.code}</code>
        </pre>

    </div>

{/snippet}



<article class="max-w-3xl w-full bg-zinc-800/50 rounded-xl border border-zinc-700/30 p-8">
    
    <!-- Encabezado -->
    <header class="mb-10">
        <div class="flex items-center gap-2 text-sm text-zinc-400 mb-4">
            <span class="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full">
                {post.technology}
            </span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.read_time_estimation}</span>
        </div>
        
        <h1 class="text-4xl font-bold mb-4">
            {post.title}
        </h1>
        
        <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center">
                <i class="fas fa-user text-zinc-300"></i>
            </div>
            <div>
                <p class="font-medium">{post.author_name}</p>
                <p class="text-sm text-zinc-400">{post.author_degree}</p>
            </div>
        </div>
    </header>

    <!-- Contenido del artículo -->
    <div class="article-content space-y-6">
        
        
        {#each post.content as item}
            {#if item.type === 'paragraph'}
                {@render paragraph(item)}
            
            {:else if item.type === 'subtitle'}
                {@render subtitle(item)}
            
            {:else if item.type === 'tip'}
                {@render tip(item)}

            {:else if item.type === 'code'}
                {@render code(item)}
            
            <!-- {:else if item.type === 'image'}
                {$rendered.image(item)} -->
            {/if}
        {/each}

        
        <!-- Conclusión -->
        <div class="bg-emerald-900/20 p-5 rounded-lg border border-emerald-700/30 mt-8">
            <h3 class="font-semibold text-emerald-300 flex items-center gap-2">
                <i class="fas fa-lightbulb"></i> Conclusión
            </h3>
            <p class="text-zinc-300 mt-2">
                {post.conclusion}
            </p>
        </div>
    </div>
    <!-- Etiquetas -->
    <div class="flex flex-wrap gap-2 mt-10 pt-8 border-t border-zinc-700/50">
        {#each post.tags as tag}
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
