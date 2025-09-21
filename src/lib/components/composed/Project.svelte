<script>
    import Badge from "./Badge.svelte";

    let {
        href,
        imageSrc, imageAlt,
        title = "Project", summary = "",
        techs = [],
        class: klass
    } = $props();

</script>

<div class="bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700">
    
    <div class="h-48 overflow-hidden">
        <img src={imageSrc} alt={imageAlt} class="w-full h-full object-cover object-center">
    </div>

    <div class="p-6">

        <h3 class="text-xl font-bold mb-2">
            {title}
        </h3>

        <p class="text-zinc-400 mb-4">
            {summary}
        </p>
        
        <!-- 
        <Badge>

        </Badge>
        -->
        
        <a {href} class="inline-block mt-6 text-blue-400 font-medium hover:text-blue-300 transition-colors">
            Ver proyecto →
        </a>

    </div>
</div>
