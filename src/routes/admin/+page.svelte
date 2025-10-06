<script>
    import Input from "$lib/components/base/Input.svelte";
    import Select from "$lib/components/base/Select.svelte";
    import Textarea from "$lib/components/base/Textarea.svelte";
    import { config } from "$lib/config";

    let loading = $state(false);
    let error = $state(null);
    let success = $state(null);

    // simmilar data model as the API
    let formData = $state({
        title: "",
        slug: "",
        technology: "", 
        date: "", 
        read_time_estimation: "",
        author_name: "Diego Varela", 
        author_degree: "Systems Engineer",
        summary: "",
        content: "",
        conclusion: "",
        tags: "",
    });

    // Función para generar slug automáticamente desde el título
    function generateSlug() {
        if (!formData.title) return;
        formData.slug = formData.title
            .toLowerCase()
            .replace(/[^\w ]+/g, '')
            .replace(/ +/g, '-');
    }

    async function sendForm(event) {
        event.preventDefault();
        loading = true;
        error = null;
        success = null;

        try {

            const formDataToSend = new FormData();
            
            // Agregar todos los campos al FormData
            Object.entries(formData).forEach(([key, value]) => {
                if (value !== null && value !== undefined) {
                    formDataToSend.append(key, value);
                }
               console.log(key +" : "+ value)
            });
            /* console.log(formData); */
/* 
            const response = await fetch(`${config.API}/post`, {
                method: 'POST',
                body: formDataToSend,
                headers: "Content-Type: multipart/form-data"
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Error ${response.status}: ${errorText}`);
            }

            success = 'Post creado exitosamente!';
            
            // Resetear formulario después de éxito
            formData = {
                title: '',
                slug: '',
                content: '',
                category: '',
                tags: '',
                image: null
            }; */

        } catch (err) {
            error = err.message;
            console.error('Error enviando formulario:', err);
        } finally {
            loading = false;
        }
    }    
</script>

<svelte:head>
  <title>Crear Post - Admin</title>
</svelte:head>

<main class="container py-24 mx-auto p-4 max-w-4xl">
    
    <header>
        <h1 class="text-2xl font-bold mb-6">Crear Nuevo Post</h1>
    </header>

    {#if error}
      <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 relative">
        {error}
        <button class="absolute top-3 right-3" onclick={() => error = null}>x</button>
      </div>
    {/if}

    {#if success}
      <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 relative">
        {success}
        <button class="absolute top-3 right-3" onclick={() => success = null}>x</button>
      </div>
    {/if}

    <form onsubmit={sendForm} class="space-y-6">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-2">

                <Input 
                    type="text" id="title" label="Title" 
                    bind:value={formData.title} oninput={generateSlug} isRequired={true} >
                </Input>

            </div>

            <div class="space-y-2">

                <Input 
                    type="text" id="slug" label="Slug"
                    bind:value={formData.slug} isRequired={true} >
                </Input>

            </div>
        </div>

        <div class="grid grid-cols-2 items-end gap-4">
            <div class="space-y-2">

                <Input 
                    type="date" id="date" label="Date" 
                    bind:value={formData.date} isRequired={true} >
                </Input>

            </div>

            <div class="space-y-2">

                <Select 
                    id="read_time_estimation" label="Tiempo de lectura" 
                    bind:value={formData.read_time_estimation}
                >
                    <option value="">Seleccionar un tiempo</option>
                    <option value="1">1 min</option>
                    <option value="2">2 min</option>
                    <option value="3">3 min</option>
                    <option value="4">4 min</option>
                    <option value="5">5 min</option>
                    <option value="7">7 min</option>
                    <option value="10">10 min</option>
                    <option value="15">15 min</option>
                    <option value="20">20 min</option>
                    <option value="25">25 min</option>
                </Select>

            </div>
        </div>

    
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-2">

                <Select 
                    id="category" label="Selecciona una categoria" 
                    bind:value={formData.category}
                >
                    <option value="">Seleccionar categoría</option>
                    <option value="tecnologia">Tecnología</option>
                    <option value="tutoriales">Tutoriales</option>
                    <option value="noticias">Noticias</option>
                </Select>

            </div>

            <div class="space-y-2">

                <Input 
                    type="text" label="Etiquetas" id="tags" bind:value={formData.tags} 
                    placeholder="svelte, javascript, webdev">
                    Tags (separados por comas)
                </Input>

            </div>
        </div>


        <div class="space-y-2">

            <Textarea 
                id="content" label="Contenido *" rows="6" 
                bind:value={formData.content} isRequired={true}
            ></Textarea>

        </div>

        <div class="space-y-2">

            <Textarea 
                id="summary" label="Resumen" rows="6" 
                bind:value={formData.summary} isRequired={true}
            ></Textarea>

        </div>


        <div class="space-y-2">

            <Textarea 
                id="conclusion" label="Conclusion" rows="6" 
                bind:value={formData.conclusion} isRequired={true}
            ></Textarea>

        </div>


        <div class="flex gap-4 pt-4">
            <button
                type="submit"
                disabled={loading}
                class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {#if loading}
                    <span class="flex items-center">
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                    </span>
                {:else}
                    Crear Post
                {/if}
            </button>

            <button
                type="button"
                onclick={() => {
                    formData = {
                        title: '',
                        slug: '',
                        content: '',
                        category: '',
                        tags: '',
                        image: null
                    };
                    error = null;
                    success = null;
                }}
                class="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
                Limpiar
            </button>
        </div>
    </form>
</main>