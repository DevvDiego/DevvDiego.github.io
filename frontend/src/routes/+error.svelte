<script>
	import { page } from '$app/state';
</script>


<main class="bg-zinc-900 text-zinc-100 min-h-screen flex items-center justify-center p-4 py-28">

    <div >

        <h1 class="text-4xl font-bold mb-4">
            Oops!
        </h1>
        
        <div>
            <p class="md:text-2xl font-medium">{page.error.message}</p>
            <p class="md:text-2xl text-zinc-400">Code: {page.status}</p>
        </div>

    </div>

</main>