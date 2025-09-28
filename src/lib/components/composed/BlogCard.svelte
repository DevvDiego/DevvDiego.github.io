<script>

    let {
        href,
        title = "Project", summary = "",
        class: klass
    } = $props();

</script>

<article class="
    bg-zinc-800 rounded-xl
    border border-zinc-700
">

    <div class="p-6">

        <h3 class="text-xl font-bold mb-2">
            {title}
        </h3>

        <p class="text-zinc-400 md:text-lg mb-4">
            {summary}
        </p>
        
        <a {href} class="inline-block mt-6 text-blue-400 font-medium hover:text-blue-300 transition-colors">
            Ver mas
        </a>

    </div>

</article>
