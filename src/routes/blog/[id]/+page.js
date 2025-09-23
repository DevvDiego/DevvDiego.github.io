/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
    try {

        /* Maybe load from an external API ?? */

        /* options are a rest api in php */

        /* const response = fetch("https:/myapi.somedomain"); */

        /* if( !response ){

        } */

        let post;

        if(params.id == "optimizando-apis-nodejs-express"){
            post = {
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

        }else if(params.id == "blog-usando-sveltekit"){
            post = {
                "id": 2,
                "title": "Sveltekit para un blog dinamico",
                "slug": "blog-usando-sveltekit",
                "technology": "Sveltekit",
                "date": "22 Sep 2025",
                "readTimeEstimation": "5 min read",
                "author": {
                    "name": "Diego Varela",
                    "degree": "Systems Engineer"
                },
                "summary": "Conseguir hacer un blog estatico es una tarea ardua, sin embargo, las capacidades de Sveltekit son perfectas para esto.",
                "content": [
                    {
                    "type": "paragraph",
                    "text": "Conseguir hacer un blog estatico es una tarea ardua, sin embargo, las capacidades de Sveltekit son perfectas para esto."
                    },
                    {
                    "type": "subtitle",
                    "text": "Instalando Sveltekit"
                    },
                    {
                    "type": "paragraph", 
                    "text": "Algun texto que habla acerca de sveltekit y el como puede ser usado para trabajar con blogs y rutas dinamicas o estaticas"
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
                "tags": ["Sveltekit", "APIs"]
            }

        }

        return {
            post
        }

    } catch (error) {
        return {
            status: 404,
            error: error.message
        };

    }

}