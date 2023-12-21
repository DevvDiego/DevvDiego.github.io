<script>
    import Icon from "./Icon.svelte";
    import openIcon from "../assets/icons/open-link.svg";

    export let date = "Unknown date";
    export let link = "";
    export let title = "No title";
    export let text = "No description";
    
    export let src = "";
    export let alt = "some alt";

    export let icons = [];
    

    function hasIcons(){
        if(icons.length >= 1){
            return true;
        }

        return false;
    }
    function hasImage(){
        if(src.length > 5){
            return true;
        }

        return false;
    }

    function hasWebUrl(){
        if(link.length > 4){return true} return false


    }
</script>

<li class="w-fit max-w-[300px] p-3 mb-10 mr-3 ms-4 rounded-xl select-none
shadow-sm shadow-gray-500 bg-secondary-100

sm:max-w-lg sm:flex sm:flex-row sm:flex-wrap sm:

">
    
    <div class="absolute w-3 h-3 bg-slate-900 rounded-full mt-2 -start-1.5"></div>
    

    <time datetime="" class="sm:w-full text-sm font-normal text-gray-500">
        {date}
    </time>


    <h3 class="rounded-md text-lg font-semibold w-fit hover:no-underline underline">
        
        {#if hasWebUrl()}
            <!-- 
                for the data-sveltekit to know its an external url
                it must contain the https or https prefix
             -->
            <a data-sveltekit-reload href={link} class="flex items-center gap-1">
        
                {title}
        
                <div class="inline-block font-bold">
                    <Icon size="small" src={openIcon}/>
                </div>
        
            </a>

        {:else}

            {title}

        {/if}

    </h3>


    {#if hasImage() == true}
        <img src={src} alt={alt} class="max-w-11-12 max-h-[250px] rounded-lg shadow-sm shadow-gray-500">
    {:else}
        <!-- gen nothing -->
    {/if}


    <p class="mt-3 text-md">
        {text}
    </p>


    {#if hasIcons() == true }

        <p class="sm:w-full text-xs font-normal text-gray-500 mt-4">
            Technologies used
        </p>

        <div class="flex justify-evenly align-middle w-fit gap-2">
        
            {#each icons as item}
                <Icon size="small" src={item}/>
            {/each}

        </div>

    {:else}
        <!-- gen nothing -->
    {/if}

</li>

<style>
</style>