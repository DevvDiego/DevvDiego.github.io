<script>
    let { class: className = "", src, alt } = $props();
</script>


<img {src} {alt} loading="lazy"
class="
    {className}
    object-fill
    object-center
">