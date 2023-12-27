<script>
    export let count = 0;
</script>


<h1>On portfolio but using <a style="color: orangered;" href="https://kit.svelte.dev/">SvelteKit</a></h1>
<h1>
    Counter: {count}
</h1>

<button on:click={()=>{count++}}>
    add
</button>

<button on:click={()=>{count--}}>
    sub
</button>

<style>
    h1{
        font-size: 24px;
        color: rgb(255, 184, 4);

        background-color: rgb(139, 139, 139);
        padding: 8px;
    }
</style>