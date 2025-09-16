<script>
    import Blob from "$lib/components/blob.svelte";

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
                absolute top-1/2 left-0 
                -translate-x-1/2 -translate-y-1/2

                bg-blue-700 opacity-70
                w-2/12 sm:w-3/12 h-8/12
                max-w-[200px] max-h-4/6
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

        <h1 class="text-zinc-700 text-3xl sm:text-4xl tracking-tight">
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
                <p class="opacity-50 font-normal">Studying Systems Engineering</p>
            </div>

            <div>
                <h1 class="">Seeking</h1>
                <ul class="opacity-50 font-normal">
                    <li>Backend Development role</li>                                      
                </ul>
            </div>
        </div>


    </div>

</main>


<style>

    /* .makeRotation{
        animation: rotomove 3s infinite;
    } */



    /* @keyframes rotomove {
    0% {
        transform: rotate(0deg) translateX(0px) translateY(0px);
        animation-timing-function: ease-in-out;
    }
    25% {
        transform: rotate(90deg) translateX(50px) translateY(50px);
        animation-timing-function: ease-in-out;
    }
    50% {
        transform: rotate(180deg) translateX(100px) translateY(100px);
        animation-timing-function: ease-in-out;
    }
    75% {
        transform: rotate(270deg) translateX(50px) translateY(50px);
        animation-timing-function: ease-in-out;
    }
    100% {
        transform: rotate(360deg) translateX(0px) translateY(0px);
        animation-timing-function: ease-in-out;
    }
} */


</style>