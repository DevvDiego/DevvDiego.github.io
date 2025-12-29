<script>
    import Blob from "$lib/components/base/blob.svelte";
    /* import Button from "$lib/components/base/Button.svelte"; */
    import Project from "$lib/components/composed/Project.svelte";
    import { config } from "$lib/config.js";
    import { resolve } from "$app/paths";

/*     import SvelteIcon from "$lib/assets/icons/svelte.svelte";
    import EspressifIcon from "$lib/assets/icons/espressif.svelte"; */


/*     let projects = {
        backend: [
            {
                href: "#",
                imageSrc: "https://picsum.photos/1440",
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
            },
            {
                href: "#",
                imageSrc: "https://picsum.photos/1440",
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
            },
        ],

        embedded: [
            {
                href: "#",
                imageSrc: "https://picsum.photos/1224",
                imageAlt: "foto de lorem picsum",
                title: "Titulo 2",
                summary: "Resumen de un proyecto embebido que nunca ha existido pero existira",
                techs: [
                    {
                        "name":"espressif",
                        "link":"https://www.espressif.com/",
                        "icon": EspressifIcon
                    }
                ]
            },
            {
                href: "#",
                imageSrc: "https://picsum.photos/1224",
                imageAlt: "foto de lorem picsum",
                title: "Titulo 2",
                summary: "Resumen de un proyecto embebido que nunca ha existido pero existira",
                techs: [
                    {
                        "name":"espressif",
                        "link":"https://www.espressif.com/",
                        "icon": EspressifIcon
                    }
                ]
            },
        ],

    } */

    
    let {
        data,
    } = $props();
    
    let posts = data.posts;
    

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


    <section class="
        relative z-[3]
        w-11/12 md:w-3/4 mx-auto h-screen 
        flex flex-col justify-center
        pt-16 md:pt-24 pb-20 md:pb-80
    ">

        <h1 class="
            text-4xl md:text-5xl lg:text-6xl
            font-extrabold tracking-tight pt-8 pb-3
        ">
            Diego V.
        </h1>
        
        <h2 class="
            text-2xl md:text-3xl lg:text-4xl
            font-bold tracking-tight opacity-30 mb-8
        ">
            Systems Engineer
        </h2>
        
        <p class="
            text-lg md:text-xl lg:text-2xl 
            font-light max-w-2xl mb-12 leading-relaxed
        ">
            I'm a backend developer with 2+ years of experience, and I also develop embedded software solutions as a hobby.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
            
            <div>
                <h3 class="text-lg md:text-xl font-semibold mb-2">Currently</h3>
                <p class="opacity-50 md:text-lg 
                    font-normal tracking-wider
                ">
                    Studying Systems Engineering
                </p>
            </div>
            
            <div>
                <h3 class="text-lg md:text-xl font-semibold mb-2">
                    Seeking
                </h3>
                <ul class="opacity-50 md:text-lg font-normal tracking-wider">
                    <li>Backend Development role</li>
                </ul>
            </div>

        </div>

        <div class="mt-12">

            <!-- <Button href={config.BLOG} text="Ver blog" /> -->
            <!-- <a href={config.BLOG}>
                ver blog
            </a> -->

            <a href={resolve("/blog")}>
                ver blog
            </a>

        </div>

    </section>


    {#if posts.length >= 1}
        <section class="w-11/12 md:w-3/4 mx-auto py-16 relative z-[3]">
            
            <div class="mb-16">
                
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                    Projects
                </h1>
                
    <!--             <h2 class="opacity-30 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mt-2">
                    Backend
                </h2> -->

            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

                {#each posts as post}
                    <Project {...post}/>
                {/each}

            </div>

        </section>


    {/if}

<!-- 
    <section class="w-11/12 md:w-3/4 mx-auto py-16 relative z-[3]">
        
        <div class="mb-16">
            
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                Projects
            </h1>
            
            <h2 class="opacity-30 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mt-2">
                Embedded
            </h2>

        </div>

        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

            {#each projects.embedded as project}
                <Project {...project}/>
            {/each}

        </div>

    </section> -->

</main>







<style>

</style>