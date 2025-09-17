<script>
    import Icon from "./Icon.svelte";
    import Image from "./Image.svelte";

    let {
        title = "Project", summary = "",

        iconSrc, iconAlt, href,

        imageSrc = "", imageAlt = "",

        tech = []
    } = $props();

</script>







<div class="max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a {href}>
            <img class="rounded-t-lg" src={imageSrc} alt="" />
        </a>

        <a {href}>
            <h5 class="my-2 text-3xl font-bold text-white">
                {title}
            </h5>
        </a>

        <p class="mb-3 font-normal text-gray-400">
            {summary}
        </p>
        
        <a {href} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-900">
            Read more
            <svg class="w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
</div>






<!-- <section class="pt-10">

    <div class="
        title pb-4 
        flex flex-row flex-nowrap 
        justify-start items-center gap-x-4"
    >
                
        <h3 class="text-3xl">{title}</h3>
        
        <a class="h-8" {href}>
            <Icon src={iconSrc} alt={iconAlt} />    
        </a>

    </div>

    <div class="summary
        text-base font-normal
        pb-4
    ">
        <p>{summary}</p>
    </div>

    <div class="
        bg-zinc-800 rounded-xl
        max-w-2xl max-h-7/12 m-auto p-5 py-10

    ">
    
        <Image 
            src={imageSrc} alt={imageAlt}
            class="m-auto max-w-lg"
        />
    
    </div>

</section> -->



<style>
</style>