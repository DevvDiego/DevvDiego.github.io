<script>
    import Image from "./Image.svelte";
    
    let { class: className = "", src, alt, ...rest} = $props();
</script>


<div class="{className}">
    

    <Image {src} {alt} />



</div>