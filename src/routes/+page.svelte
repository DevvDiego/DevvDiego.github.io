<script>
    import whoamiPNG from "$lib/assets/images/whoami.png";
    import drawAppPNG from "$lib/assets/images/draw-app.png"

    import Card from "../components/Card.svelte";


</script>


<main>
    <!-- maybe redo as https://kellyhu.me? -->
    <section class="hero min-h-screen bg-base-100">
        <div class="mt-16 hero-content">
            <div>

                <h1 class="text-5xl font-bold">I'm Diego Varela</h1>

                <p class="pt-6 sm:w-7/12 ">

                    Backend developer that likes to solve the day to day problems using code.
                    <br>
                    Interested in the Internet of Things and software architecture
                </p>

                <span class="text-xs sm:text-sm text-gray-500">
                    "<i>Be better than better and automate the 5 minute manual task</i>"
                </span>
                
                <div class="m-auto mt-24 w-7 h-7 animate-bounce">
                    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M12.48 3.12a.6.6 0 0 1 .6.6v14.152l3.775-3.777a.6.6 0 1 1 .85.85l-4.8 4.8a.601.601 0 0 1-.85 0l-4.8-4.8a.6.6 0 1 1 .85-.85l3.775 3.777V3.72a.6.6 0 0 1 .6-.6Z" clip-rule="evenodd"></path>
                    </svg>
                </div>



            </div>
        </div>
    </section>


    <section class="w-full my-12 ">
        
        <h1 id="projects" class="text-3xl font-bold text-center mb-12" >Main projects</h1>              
    
        <div class="flex gap-12 items-center justify-center flex-row flex-wrap">
            
            <Card img={whoamiPNG} alt={"whoami service"}
            title={"Whoami"} link={"https://findwhoami.infinityfreeapp.com"}
            desc={"Service that uses NFC wearables to identify users medical data with a short response time."}
            />
            
            <Card img={drawAppPNG} alt={"draw app"}
            title={"SketchIt"} link={"https://devvdiego.github.io/SketchIt/"}
            desc={"A drawing app that has all the basic tools to make simple drawings."}
            />
        
        </div>

    </section>


    <section class="w-full my-24 mt-32">

        <h1 class="text-3xl font-bold text-center mb-12" >Side projects</h1>              
    
        <div class="w-11/12 m-auto flex gap-12 items-center justify-center flex-row flex-wrap">
            
            <Card type = {"tiny"}
            title={"Bomber game"} link={"https://devvdiego.github.io/BomberGame/"}
            desc={"A prototype project based of the play store game \"Atomic Bomber\"."}
            />

        </div>

    </section>

</main>


<style>
</style>