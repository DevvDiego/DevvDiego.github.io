<script>
    import BlogPost from "$lib/components/composed/BlogPost.svelte";

    
    let post = $state(
            {
            "id": 1,
            "title": "Optimizando APIs con Node.js y Express",
            "slug": "optimizando-apis-nodejs-express",
            "technology": "Node.js",
            "date": "15 Nov 2023",
            "readTimeEstimation": "5 min read",
            "author": {
                "name": "Diego Varela",
                "degree": "Systems Engineer"
            },
            "summary": "En el desarrollo moderno de aplicaciones, la optimización de APIs es crucial para garantizar una experiencia de usuario fluida y eficiente.",
            "content": [
                {
                "type": "paragraph",
                "text": "En el desarrollo moderno de aplicaciones, la optimización de APIs es crucial para garantizar una experiencia de usuario fluida y eficiente. En este artículo, exploraremos técnicas avanzadas para optimizar APIs construidas con Node.js y Express."
                },
                {
                "type": "subtitle",
                "text": "Caching de respuestas"
                },
                {
                "type": "paragraph", 
                "text": "Una de las técnicas más efectivas para mejorar el rendimiento de tu API es implementar caching. Al almacenar respuestas frecuentemente solicitadas, reduces la carga en tu servidor y disminuyes los tiempos de respuesta."
                },
                {
                "type": "tip",
                "text": "Utiliza Redis para almacenamiento en caché distribuido en entornos de producción."
                },
                {
                "type": "subtitle",
                "text": "Implementación básica de caching"
                },
                {
                "type": "code",
                "language": "javascript",
                "code": "const express = require('express');\nconst app = express();\n\n// Middleware de caching básico\nconst cache = {};\n\napp.get('/api/data', (req, res) => {\n  const key = req.originalUrl;\n  \n  if (cache[key]) {\n    return res.json(cache[key]);\n  }\n  \n  // Lógica de negocio aquí\n  const data = { message: 'Datos frescos' };\n  \n  // Almacenar en cache por 5 minutos\n  cache[key] = data;\n  setTimeout(() => delete cache[key], 300000);\n  \n  res.json(data);\n});"
                }
            ],
            "tags": ["Node.js", "Express", "Optimización", "APIs"]
            }
    );

</script>


<main class="bg-zinc-900 text-zinc-100 min-h-screen flex items-center justify-center p-4 py-28">
    
    <BlogPost {post} />

</main>

<style>

</style>