<script lang="ts">
    import Input from "$lib/components/composed/form/Input.svelte";
    import Select from "$lib/components/composed/form/Select.svelte";
    import Textarea from "$lib/components/composed/form/Textarea.svelte";
    /* import BlogPost from "$lib/components/composed/BlogPost.svelte"; */
    import ContentCreator from "$lib/components/composed/ContentCreator.svelte";
    
    import { config } from "$lib/config";
    import type { Post } from "$lib/types";


    let { data } = $props();
    
    // simmilar data model as the API
    // difference from create page, we get the post from a load func
    // and already display it here
    let newPostData: Post = $state({
        ...data.post // we only need the initial value (the fetched from the api)
    });
    

    let loading = $state(false);
    /* let formSent = $state(false); */
    let error: boolean = $state(false);
    let success: boolean = $state(false);



    const resetPostData = () => {
        newPostData = {
            title: "",
            slug: "",
            technology: "", 
            date: "", 
            read_time_estimation: 0,
            author_name: "Diego Varela", 
            author_degree: "Systems Engineer",
            summary: "",
            content: [],
            conclusion: "",
            tags: "",
        };
    } 

    function formatDate(){
        let current = new Date(newPostData.date);

        // insert current time
        let DateAndTime = new Date(current);

        DateAndTime.setHours(
            current.getHours(),
            current.getMinutes(),
            current.getSeconds()
        );

        newPostData.date = DateAndTime;
        /* return DateAndTime; */

        // read the date like this
        /* const opciones = { year: 'numeric', month: 'long', day: 'numeric' }; */
        /* return date.toLocaleDateString('es-ES', opciones); */

    }

    // Función para generar slug automáticamente desde el título
    function generateSlug() {
        if (!newPostData.title) return;
        newPostData.slug = newPostData.title
            .toLowerCase()
            .replace(/[^\w ]+/g, '')
            .replace(/ +/g, '-');
    }

    async function sendForm(event: SubmitEvent) {
        event.preventDefault();
        loading = true;
        /* formSent = true; */

        try {

            const fetch_options: RequestInit = {
                method: "UPDATE", headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newPostData)
            };

            const response = await fetch(`${config.API}/blog/post`, fetch_options);

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Error ${response.status}: ${errorText}`);
                
            }

            success = true;
            resetPostData();

        } catch (err) {
            
            let error;

            if (err instanceof Error){
                console.error('Error enviando formulario:', err);

            }else{
                error = "Unknown error";
                console.error("Error capturado: ", err);

            }

        } finally {
            loading = false;
        }
    }    
</script>

<svelte:head>
    <title>Editando post - Admin</title>
</svelte:head>

<main class="container py-24 mx-auto p-4 max-w-4xl">
    
    <header>
        <h1 class="text-2xl font-bold mb-6">Crear Nuevo Post</h1>
    </header>

    {#if error}
      <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 relative">
        {error}
        <button class="absolute top-3 right-3" onclick={() => error = false}>x</button>
      </div>
    {/if}

    {#if success}
      <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 relative">
        {success}
        <button class="absolute top-3 right-3" onclick={() => success = false}>x</button>
      </div>
    {/if}

    <form onsubmit={sendForm} class="space-y-6">
        
        <!-- Add technology badge -->

        <!-- 
            modify the paragraph content editor and so
            to be able to expand the editing content
            maybe using a textarea?
        -->

        <!-- 
            Add storing capabilities might be using localstorage
            or and also add file storing and uploading? (might be big feat.)
        -->

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-2">

                <Input 
                    type="text" id="title" label="Title" placeholder="Post title"
                    bind:value={newPostData.title} oninput={generateSlug} isRequired={true} >
                </Input>

            </div>

            <div class="space-y-2">

                <Input 
                    type="text" id="slug" label="Slug" placeholder="slug-for-the-post"
                    bind:value={newPostData.slug} isRequired={true} >
                </Input>

            </div>
        </div>

        <div class="grid grid-cols-2 items-end gap-4">
            <div class="space-y-2">

                <Input 
                    type="date" id="date" label="Date" placeholder="DD-MM-YYYY"
                    bind:value={newPostData.date} isRequired={true} >
                </Input>

            </div>

            <div class="space-y-2">

                <Select 
                    id="read_time_estimation" label="Tiempo de lectura" 
                    bind:value={newPostData.read_time_estimation}
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
                    id="category" label="Selecciona una categoria" isDisabled={true}
                    value=""
                >
                    <option value="">Categoría</option>
                    <option value="tecnologia">Tecnología</option>
                    <option value="tutoriales">Tutoriales</option>
                    <option value="noticias">Noticias</option>
                </Select>

            </div>

            <div class="space-y-2">

                <Input 
                    type="text" label="Etiquetas (separados por comas)" id="tags" bind:value={newPostData.tags} 
                    placeholder="svelte, javascript, webdev"
                >
                </Input>

            </div>
        </div>

        <div class="space-y-2">

            <Textarea 
                id="summary" label="Resumen"
                bind:value={newPostData.summary}
            ></Textarea>

        </div>

        <div class="space-y-2">
            <ContentCreator bind:postContent={newPostData.content} label="Content *" />
        </div>

        <div class="space-y-2">

            <Textarea 
                id="conclusion" label="Conclusion"
                bind:value={newPostData.conclusion}
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
                    resetPostData();
                    error = false;
                    success = false;
                }}
                class="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
                Limpiar
            </button>
        </div>
    </form>

</main>