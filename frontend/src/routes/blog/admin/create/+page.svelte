<script lang="ts">
    import Input from "$lib/components/composed/form/Input.svelte";
    import Select from "$lib/components/composed/form/Select.svelte";
    import Textarea from "$lib/components/composed/form/Textarea.svelte";
    /* import BlogPost from "$lib/components/composed/BlogPost.svelte"; */
    import ContentCreator from "$lib/components/composed/ContentCreator.svelte";
    
    import { config } from "$lib/config";
    import type { FetchStatus, Post } from "$lib/types";

    import { error as sv_error } from "@sveltejs/kit";
    import { api, ApiError } from "$lib/services/ApiService";
    import Status from "$lib/components/base/Status.svelte";

    let details: string = $state("");
    let status: FetchStatus = $state({
        success: false,
        error: false,
        loading: false
    });

    // simmilar data model as the API
    let newPostData: Post = $state({
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
    });

    function resetFormStatusDiv(){
        status.error = false;
        status.success = false;
    }

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

    // SHould i use epoch time instead?
    // Funcion para formatear a una fecha manipulable
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

    function formatFormData(){

        try {
            formatDate();

        } catch (error) {
            console.error(error);

        }

    }

    async function sendForm(event: SubmitEvent) {
        event.preventDefault();
        status.loading = true;
        /* formSent = true; */

        try {

            let stored_token = sessionStorage.getItem("blog_jwt");
            if( stored_token === null ){ sv_error(401, "Not authorized"); } // keep error, or redirect straight to home???
            
            const res = await api.post(
                `${config.API}/admin/blog/post`,
                JSON.stringify(newPostData),
                {"Authorization": `Bearer ${stored_token}`}
            );

            details = res.message;

            res.success ? status.success = true : status.error = true

            resetPostData();

        } catch (err) {

            status.error = true;
            
            if (err instanceof ApiError) {
                console.error(err.message);
                details = err.message;

            }else if (err instanceof Error){                
                console.error('Error enviando formulario:', err);
                details = err.message;

            }else{
                console.error("Unknown error captured during post loading: ", err);
                details = "An error ocurred";
            }
            
        } finally {
            resetPostData();
            status.loading = false;

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

    <Status 
        error={status.error}
        success={status.success}
        {details}
        onclick={resetFormStatusDiv}
    />

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
                disabled={status.loading}
                class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {#if status.loading}
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
                    resetFormStatusDiv();
                }}
                class="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
                Limpiar
            </button>
        </div>
    </form>

<!--     {#if formSent}
    
        <BlogPost post={formData} />
    
    {/if} -->
</main>