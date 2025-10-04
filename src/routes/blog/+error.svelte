<script>
	import { page } from '$app/state';
    import { config } from '$lib/config';
</script>


<main class="bg-zinc-900 text-zinc-100 min-h-screen flex items-center justify-center p-4 py-28">

    <div >

        <h1 class="text-4xl font-bold mb-4">
            Oops!
        </h1>
        
        <div>
            <p class="md:text-2xl font-medium">{page.error.message}</p>
            <p class="md:text-2xl text-zinc-400">Code: {page.status}</p>
            <p class="md:text-2xl mt-10 text-zinc-400">
                Are you looking for my
                <a class="underline text-green-800" href={config.BLOG}>
                    blog?
                </a>
            </p>
        </div>

    </div>

</main>