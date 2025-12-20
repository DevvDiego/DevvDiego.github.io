<script lang="ts">
    import type { FetchStatus } from "$lib/types";

    import Input from "$lib/components/composed/form/Input.svelte";
    import { config } from "$lib/config";
    import { api, ApiError } from "$lib/services/ApiService";

    let loginData = $state({
        //add another field? email?
        password: ""
    });

    /* let errorDetails: string = $state("No details"); */
    let status: FetchStatus = $state({
        success: false,
        error: false,
        loading: false
    });

    function resetLoginData(){
        loginData.password = "";
    }

    async function sendForm(event: SubmitEvent) {
        event.preventDefault();
        status.loading = true;

        try {

            const res = await api.post(
                `${config.API}/login`, 
                JSON.stringify(loginData)
            );
            
            // store the token for later requests
            sessionStorage.setItem("blog_jwt", res.data.token); // use generics for the api service            

        } catch (err) {
            
            if (err instanceof ApiError) {
                console.error(err.message);

            }else if (err instanceof Error){                
                console.error('Error enviando formulario:', err);

            }else{
                console.error("Unknown error captured during post loading: ", err);

            }
            
        } finally {
            resetLoginData();
            status.loading = false;

        }
    }


</script>


<main class="container py-24 mx-auto p-4 max-w-4xl">

    <form onsubmit={sendForm} class="space-y-6">

        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- <div class="space-y-2">

                <Input 
                    type="text" id="title" label="Title" placeholder=""
                    bind:value={loginData.title} isRequired={true} >
                </Input>

            </div> -->

            <div class="space-y-2">

                <Input 
                    type="password" id="password" label="Password" placeholder="Password"
                    bind:value={loginData.password} isRequired={true} >
                </Input>

            </div>
        </div>


        <div class="flex gap-4 pt-4">
            <button
                type="submit" disabled={status.loading}
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
        </div>


    </form>

</main>