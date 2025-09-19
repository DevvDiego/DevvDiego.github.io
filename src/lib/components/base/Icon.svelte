<script>

    let {
        name, isDecorative = false,
        fill = "none", stroke = "currentColor",
        width = "12px", height = "12px",
        children,
    } = $props();

</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24" 
    {width}
    {height}
    {stroke}
    {fill}
    role={isDecorative ? null : 'img'}
    aria-hidden={isDecorative}
    aria-label={isDecorative ? null : name}
>
    
    <!-- 
    {#if !decorative && name}
        <title>{name}</title>
    {/if} 
    -->

    {#if name}
        <title>{name}</title>
    {/if}
    
    {@render children?.()}
</svg>

<style>
    svg{
        vertical-align: middle; /* Fixes alignment issues next to text */
    }
</style>
