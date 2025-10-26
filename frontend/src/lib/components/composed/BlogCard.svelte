<script>
    import { base } from "$app/paths";
    
    let {
        slug, title, summary, date, read_time_estimation,
        class: klass
    } = $props();

    function formatDate(date) {
        return new Date(date + 'T00:00:00').toLocaleDateString("es-ES", {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }

</script>

<article class="
    bg-zinc-800 rounded-xl
    border border-zinc-700
">
    
    <a href={`${base}/${slug}`}>
        <div class="p-6">

            <div class="flex items-center gap-2 text-sm text-zinc-400 mb-4">
                <span>{formatDate(date)}</span>
                <span>•</span>
                <span>{read_time_estimation} min</span>
            </div>

            <h3 class="text-xl font-bold mb-2">
                {title}
            </h3>

            <p class="text-zinc-400 md:text-lg mb-4">
                {summary}
            </p>
            
            <button class="
                cursor-pointer inline-block mt-6
                text-blue-400 font-medium 
                hover:text-blue-300 transition-colors
            ">
                Ver mas
            </button>

        </div>
    </a>

</article>
