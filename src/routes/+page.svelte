<script>
    import Blob from "../components/blob.svelte";

</script>

<main class="relative pt-16 bg-zinc-900 w-full h-screen">

    <div class="
        absolute top-0 left-0 z-[3] w-dvw h-dvh
        bg-[url('$lib/noise.png')] opacity-40
    "></div>

    <div class="absolute top-0 left-0 z-[3] w-dvw h-dvh">
        <Blob class="
            bg-accent-300
            w-2/6 h-2/5 max-w-lg
            absolute top-12 left-14"
        />

        <Blob class="
            pink-gradient 
            w-5/6 h-3/5 max-w-lg
            xs:w-11/12
            absolute top-12 -left-10"
        />

        <Blob class="
            pink-gradient
            w-5/6 h-3/6 max-w-lg
            xs:w-11/12
            absolute top-52 -left-40"
        />

        <Blob class="
            pink-gradient
            w-2/6 h-2/5 max-w-sm
            absolute top-64 left-24"
        />
    </div>

    
    <div class="relative z-[4] px-[15%] sm:pt-[50px]" >

        <div class="
        pt-8 leading-tight tracking-widest
        text-text-50 text-5xl text-left
        "
        >
            Diego Varela
        </div>

        <h1 class="
        mt-8
        text-text-50 text-xl font-light 
        lg:max-w-[600px]"
        >
            I'm a backend developer with 2+ years of experience
            architecturing systems and software 
            as a hobby
        </h1>

        <div class="
        mt-20 text-white 
        flex flex-row flex-wrap justify-between gap-x-8 gap-y-8
        max-w-[600px]
        ">
            <div>
                <h1 class="text-base">What i'm doing</h1>
                <p class="text-white text-sm leading-5 opacity-50">studying systems engineering</p>
            </div>

            <div>
                <h1 class="text-base">What i like to do</h1>
                <p class="text-white text-sm leading-5 opacity-50">Use tech for a social good</p>
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