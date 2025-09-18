<script>
    import Blob from "$lib/components/blob.svelte";
    import Project from "$lib/components/Project.svelte";

    import link_icon from "$lib/assets/icons/link.svelte";

    import SvelteIcon from "$lib/assets/icons/svelte.svelte";

    let projects = [
        {
            imagenSrc: "https://picsum.photos/720",
            imageAlt: "foto de lorem picsum",
            title: "Titulo 1",
            summary: "Resumen de un proyecto que nunca ha existido pero existira",
            techs: [
                {
                    "name":"svelte",
                    "link":"https://svelte.dev",
                    "icon": SvelteIcon
                }
            ]
        }
    ]

</script>


<main class="relative z-[1] w-full bg-zinc-900 ">

    <div class="
        background w-full h-screen
        fixed z-[2]
        
    ">

        <div class="
            w-full h-full
            absolute top-0 left-0  
            bg-[url('$lib/assets/noise.svg')] opacity-70
        "></div>

        <div class="blobs">
            <Blob class="
                blur-2xl rounded-br-full rounded-tr-full  
                pulse-animate
                absolute 
                -left-15 top-1/2 
                -translate-x-1/12 -translate-y-1/2

                bg-blue-700 opacity-80
                w-3/12 sm:w-1/12 h-8/12
                max-w-[180px] max-h-4/6
            "/>
        </div>



    </div>



    <div class="
        relative z-[3]
        w-3/4 h-dvh mx-auto pt-16
        text-zinc-50 text-5xl sm:text-6xl 
        font-extrabold
    ">

        <h1 class="pt-8 pb-3 tracking-tight">
            Diego V.
        </h1>

        <h1 class="opacity-30 text-3xl sm:text-4xl tracking-tight">
            Systems Engineer
        </h1>


        
        <h1 class="
            mt-8
            text-text-50 text-xl font-light 
            lg:max-w-[600px]"
        >
            I'm a backend developer with 2+ years of experience,
            and i also develop embedded software solutions as a hobby.

        </h1>

        <div class="
            py-12 text-base
            flex flex-row flex-wrap justify-between gap-x-8 gap-y-8
            max-w-[600px]
        ">
            <div>
                <h1 class="">Currently</h1>
                <p class="opacity-50 font-normal tracking-wider">Studying Systems Engineering</p>
            </div>

            <div>
                <h1 class="">Seeking</h1>
                <ul class="opacity-50 font-normal tracking-wider">
                    <li>Backend Development role</li>                                      
                </ul>
            </div>
        </div>


    </div>



    <div class="
        relative z-[3]
        w-3/4 mx-auto pt-16
        text-zinc-50 
    ">

        <div class="
            text-5xl sm:text-6xl 
            font-extrabold
        ">

            <h1 class="pt-8 pb-3 tracking-tight">
                Projects
            </h1>

            <h2 class="opacity-30 text-3xl sm:text-4xl tracking-tight">
                Backend
            </h2>

        </div>


        <Project 
            href="https://picsum.photos/720"   
            techs={projects[0].techs}
            summary="Resumen de un proyecto que nunca ha existido pero existira"
            
            imageSrc="https://picsum.photos/1440" imageAlt="lorem picsum photo"
        />


    </div>



</main>







<style>

</style>