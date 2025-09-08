<script>
    export let type = "";
    export let img = "";
    export let link = "";
    export let alt = "unknown"
    export let title = "Title";
    export let desc = "Little description for a card";
    export let techArr = [];


    function setSize(){
        
        switch(type){
            case "normal":
                return "min-h-96"
            case "tiny":
                return "min-h-22";
            default:
                return "min-h-96";
        }
    }
    
</script>

<div class="card w-11/12 {setSize()} max-w-80 p-6 bg-base-300 shadow-2xl">
    
    

    {#if img.length > 3}
        <figure>
            <img src={img} alt={alt} class="min-h-36 object-cover" />
        </figure>        
    {/if}
                               
    <div class="card-body pt-6 p-2">

        <h2 class="card-title dark:text-base-700">
            {#if link.length > 3}
                
                <a href={link} class="relative flex items-center gap-3">

                    <span>{title}</span>
                    
                    <svg class="w-5 h-5 absolute -right-7 top-[2px]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M12.795 6.375a.625.625 0 0 0-.625-.625H3.875A1.875 1.875 0 0 0 2 7.625v12.5A1.875 1.875 0 0 0 3.875 22h12.5a1.875 1.875 0 0 0 1.875-1.875V11.83a.624.624 0 1 0-1.25 0v8.295a.624.624 0 0 1-.625.625h-12.5a.625.625 0 0 1-.625-.625v-12.5A.625.625 0 0 1 3.875 7h8.295a.625.625 0 0 0 .625-.625Z" clip-rule="evenodd"></path>
                        <path fill-rule="evenodd" d="M22 2.625A.625.625 0 0 0 21.375 2h-6.25a.625.625 0 1 0 0 1.25h4.741L9.682 13.432a.626.626 0 1 0 .885.886L20.75 4.134v4.741a.625.625 0 1 0 1.25 0v-6.25Z" clip-rule="evenodd"></path>
                    </svg>

                </a>

            {:else}

                {title}

            {/if}
        </h2>
        
        <p>
            {desc}
        </p>

        <!-- ? use this for the techArr? -->

        <!-- <div class="card-actions justify-end">
            <button class="btn btn-xs btn-outline btn-ghost">Link</button>
        </div> -->
        
        <!-- ! add the tech iterating over every element on techArr -->

        <!-- <div class="card-actions justify-end">
            <div class="badge badge-outline">Badge</div> 
            <div class="badge badge-outline">Badge</div>
        </div> -->

    </div>

</div>