<script>
    //Stick with these icons: https://iconer.app/bootstrap/
    import iconGithub from "$lib/assets/icons/github.svg";

</script>

<div class="navbar bg-base-100">
    
    <button class="flex-1">
        <a class="btn btn-ghost text-xl">DevvDiego</a>
    </button>

    <div class="flex-0 gap-2">

        <!-- ? how to make the icon adapt itself for dark or light mode -->
        <button class="btn btn-ghost">
            <img src={iconGithub} alt="github icon" class="w-6 h-6">
        </button>

        <button class="btn btn-primary btn-outline">
            <a>Contact me</a>
        </button>

    </div>

</div>

<style>
</style>