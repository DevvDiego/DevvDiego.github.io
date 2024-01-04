<script>
    import whoamiPNG from "$lib/assets/images/whoami.png";
    import drawAppPNG from "$lib/assets/images/draw-app.png"

    import Card from "../components/Card.svelte";
</script>


<main>
    <section class="hero min-h-screen bg-base-100">
        <div class="hero-content">
            <div>

                <!--? maybe add image here -->

                <h1 class="text-5xl font-bold">I'm Diego Varela</h1>

                <p class="pt-6 sm:w-7/12 ">

                    Backend developer that likes to solve the day to day problems using code.
                    <br>
                    Interested in the Internet of Things and software architecture

                    <!-- creating solutions for day to day problems on my developer life.
                    Interested in the Internet of Things and the world of embedded systems -->
                </p>

                <span class="text-xs sm:text-sm text-gray-500">
                    "<i>Be better than better and automate the 5 minute manual task</i>"
                </span>
                
                <div class="mt-16 flex items-center flex-wrap flex-col sm:flex-row gap-4">
                    <button class="w-9/12 sm:w-72 btn btn-md btn-primary">See my work</button>
                    <!-- <button class="w-9/12  sm:w-72 btn btn-md btn-ghost btn-outline">Contact me</button> -->
                </div>



            </div>
        </div>
    </section>


    <section class="w-full my-12 ">
        
        <h1 class="text-3xl font-bold text-center mb-12" >Main projects</h1>              
    
        <div class="flex gap-12 items-center justify-center flex-row flex-wrap">
            
            <Card img={whoamiPNG} alt={"whoami service"}
            title={"Whoami"} link={"https://findwhoami.infinityfreeapp.com"}
            desc={"Service that uses NFC wearables to identify users medical data with a short response time."}
            />
            
            <Card img={drawAppPNG} alt={"draw app"}
            title={"SketchIt"} link={"https://devvdiego.github.io/SketchIt/"}
            desc={"A drawing app that conveys all the basic tools to drawsimple drawings."}
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