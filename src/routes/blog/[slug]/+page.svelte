<script>
    import BlogPost from "$lib/components/composed/BlogPost.svelte";

    let {
        data,
    } = $props();
    
    let post = data.post;

</script>


<main class="bg-zinc-900 text-zinc-100 min-h-screen flex items-center justify-center p-4 py-28">
    
    <BlogPost {post} />

</main>

<style>

</style>