<script>


    let {
        title = "Project", summary = "",
        link = "", linkText = "",
        src = "", alt = "",
        tech = []
    } = $props();





</script>




<section class="pt-10">

    <div class="title pb-4 flex flex-row flex-nowrap justify-between items-baseline">
        <h3 class="text-3xl">{title}</h3>
        <!-- change anchor text for an icon -->
        <a class="text-lg" href={link}>{linkText}</a>
    </div>

    <div class="summary
        text-base font-normal
        pb-4
    ">
        <p>{summary}</p>
    </div>

    <div>
        <img {src} {alt}>
    </div>

</section>




<style>



</style>