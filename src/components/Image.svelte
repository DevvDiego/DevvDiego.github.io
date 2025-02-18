<script>
    let { class: className = "", src, alt } = $props();
</script>


<div class="{className} ">
    <img {src} {alt} loading="lazy"
    class="
        w-full
        object-fill
        object-center
    ">
</div>