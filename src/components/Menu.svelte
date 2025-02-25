<script>
    let selectedIndex = $state(0);
    function changeSelected(index) {
        selectedIndex = index;
    }

    let { elements } = $props();
</script>


<!-- ? SOLUTION -->
<!-- 
Maybe handle differrently everything? like a father handling the two
components 
-->
<div class="
    w-full min-h-12
    text-black text-xl font-semibold
    rounded-sm shadow-lg
    flex flex-row flex-nowrap justify-evenly 
">

    {#each elements as elm, index}
        <button class="
            w-full min-h-max
            shadow-md hover:shadow-lg
            text-center
            {selectedIndex === index ? 'bg-zinc-800 text-text-50' : 'bg-transparent text-black'}

        " onclick={() => changeSelected(index)}>

            {elm}

        </button>
    {/each}

</div>