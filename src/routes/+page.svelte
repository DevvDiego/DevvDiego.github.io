<script>
    import Blob from "../components/blob.svelte";

</script>

<main class="relative pt-16 bg-zinc-900 w-full h-screen">
    
    <div id="noise"></div>
    <div id="blobs">
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
        opacity-95"
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
                <h1 class="info_prev">What i'm doing</h1>
                <p class="info_visual">studying systems engineering</p>
            </div>

            <div>
                <h1 class="info_prev">What i like to do</h1>
                <p class="info_visual">Use tech for a social good</p>
            </div>
        </div>

    </div>

</main>
    <!-- <div class="mt-32">
        <h1 class="px-3 opacity-75 text-md">
            Hi, i'm Diego Varela
        </h1>
        <h2 class="px-3 text-4xl font-bold">
            Programming my way out
        </h2>

        <p class="p-3 my-10 text-xl max-w-2xl">
            I've been doing backend programming since +3 years combining
            it with embedded systems to get the real challenge of a entire
            system design.
        </p>

    </div> -->


        <!-- <ol class="relative border-s border-slate-700">

            <TimelineItem text="WhoAmI it's a project with medical-recognition purposes. Using
            a NFC device we display the needed information with a short response time"
            title="WhoAmI" src={whoamiImage} date="January 2023"
            icons={[htmlIcon, cssIcon, phpIcon, mysqlIcon]}
            link="https://findwhoami.infinityfreeapp.com"
            />

            <TimelineItem text="WhoAmI it's a project with medical-recognition purposes. Using
            a NFC device we display the needed information with a short response time"
            title="WhoAmI" src={whoamiImage} date="January 2023"
            icons={[htmlIcon, cssIcon, phpIcon, mysqlIcon]}
            link="https://findwhoami.infinityfreeapp.com"
            />

            <TimelineItem text="WhoAmI it's a project with medical-recognition purposes. Using
            a NFC device we display the needed information with a short response time"
            title="WhoAmI" src={whoamiImage} date="January 2023"
            icons={[htmlIcon, cssIcon, phpIcon, mysqlIcon]}
            link="https://findwhoami.infinityfreeapp.com"
            />

        </ol>-->

        <!-- ?Refactor css to use only tailwind classes? -->

<style>

    .info-prev{
        @apply text-base;
    }

    .info_visual{
        @apply text-white text-sm leading-5 opacity-50;
    }

    #blobs{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
        width: 100%;
        height: 100%;
    }

    #noise{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
        width: 100%;
        height: 100%;
        background-image: url("$lib/noise.png");
        opacity: .39;
    }


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