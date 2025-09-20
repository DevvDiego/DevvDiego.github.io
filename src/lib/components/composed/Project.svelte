<script>
    import Badge from "./Badge.svelte";

    let {
        href,
        imageSrc, imageAlt,
        title = "Project", summary = "",
        techs = [],
        class: klass
    } = $props();

</script>


<div class="
    rounded-lg bg-zinc-900/50 {klass}
    w-full h-fit max-w-[480px]

">   

    <a {href} class="rounded-t-lg block overflow-hidden h-2/6">
        <img class="w-full h-full object-cover" src={imageSrc} alt={imageAlt} />
    </a>

    <div class="p-5">
        
        
        
        <a {href}>
            <h5 class="my-2 text-3xl font-bold text-white">
                {title}
            </h5>
        </a>

        <p class="font-normal text-gray-400">
            {summary}
        </p>

        <div class="badges py-4">

            {#each techs as item}
                <Badge name={item.name} width="18px" height="18px">
                
                    <!-- Render element as any other snippet -->
                    {@render item.icon()}
                
                </Badge>
            {/each}

        </div>


        <a {href} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-900">
            Read more
            <svg class="w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>



    </div>

</div>

