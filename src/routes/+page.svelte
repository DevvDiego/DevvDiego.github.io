<script>
    import Blob from "../components/blob.svelte";
    import Card from "../components/Card.svelte";

</script>

<main class="pt-16 bg-zinc-900">

    <div class="relative w-full h-lvh">
        
        <div class="
        absolute top-0 left-0 z-[1] w-full h-full
        bg-[url('$lib/noise.svg')] opacity-40
        "></div>

        <div class="absolute top-0 left-0 z-[1] w-full h-full">
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


        <div class="relative z-[2] px-[15%] sm:pt-[50px]" >

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
    
    </div>

    <div class="w-full h-dvh bg-zinc-900">

        <Card 
            src="https://picsum.photos/800/800" alt="from picsum photos"
            

        >
            


        </Card>

    </div>

</main>
