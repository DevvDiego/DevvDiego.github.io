<script>
    
    let {
        href = "", text, variant="primary", size = "lg"
    } = $props();

    const variants = {
        primary: "bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg hover:shadow-xl",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
        xl: "px-10 py-5 text-xl"
    };

</script>


{#if href}
    <a href={href} class="inline-block">
        <button 
            class="
                font-semibold rounded-xl transition-all duration-300 ease-out
                transform hover:scale-105 active:scale-95
                focus:outline-none focus:ring-4 focus:ring-blue-500/50
                disabled:opacity-50 disabled:cursor-not-allowed
                shadow-lg hover:shadow-xl
                {variants[variant]} {sizes[size]}
            "
        >
        {text}
        </button>
    </a>
{:else}
    <button 
        class="
            font-semibold rounded-full transition-all duration-300 ease-out
            transform hover:scale-105 active:scale-95
            focus:outline-none focus:ring-4 focus:ring-blue-500/50
            disabled:opacity-50 disabled:cursor-not-allowed
            shadow-lg hover:shadow-xl
            {variants[variant]} {sizes[size]}
        "
    >
        {text}
    </button>
{/if}