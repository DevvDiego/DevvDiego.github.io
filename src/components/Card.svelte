<script>
    import Image from "./Image.svelte";
    
    let {
        class: className = "",
        src, alt,
        logoTitle = "Logo title", heading = "Card heading",
        text = "Card text", tech=[{}],

        ...rest
    } = $props();
</script>


<div class="{className}
    max-w-[500px] p-4 pt-8
    flex flex-col flex-wrap
    text-text-950
    shadow-md rounded-lg
">


    <div class="flex flex-row items-center">
        
        <Image {src} {alt} class="
            w-2/12 max-w-14
        "/>

        <p class="text-xl font-bold ml-2">
            {logoTitle}
        </p>

    </div>

    <p class="text-2xl sm:text-3xl leading-tight tracking-widest font-bold mt-5">
        {heading}
    </p>

    <p class="mt-4 text-base leading-5">
        {text}
    </p>
    
    <div class="mt-3 gap-4 
    flex flex-row flex-nowrap items-center">
        
        {#each tech as item}
            <Image class="w-6" src={item.icon} alt={item.name}/>
        {/each}

    </div>
    
    
</div>