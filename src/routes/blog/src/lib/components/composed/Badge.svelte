<script lang="ts">
    import Icon from "../base/Icon.svelte";

    interface BadgeProps {
        href: string,
    }

    let { 
        href,
        name, isDecorative = false,
        fill, stroke,
        width, height,
        children
    }: BadgeProps = $props();

</script>

<a {href} class="inline-flex items-center gap-2 px-3 py-2  text-xs font-medium text-center text-white rounded-lg bg-zinc-800/60">
        
    <Icon {width} {height} {name} {fill} {stroke} {isDecorative} >
        {@render children?.()}
    </Icon>
    
    {name}

</a>
