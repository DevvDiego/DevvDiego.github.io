<script>
    import Image from "./Image.svelte";
    
    let {
        class: className = "",
        src, alt,
        logoTitle = "Logo title", heading = "Card heading", 

        ...rest
    } = $props();
</script>


<div class="{className}
    flex flex-col    
    text-black
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

</div>