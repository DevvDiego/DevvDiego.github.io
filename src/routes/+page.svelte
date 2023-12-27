<script>
    //Stick with these icons: https://iconer.app/bootstrap/
    import iconGithub from "$lib/assets/icons/github.svg";

</script>

<nav class="navbar bg-base-200">
    
    <div class="flex-1">
        <button class="btn btn-ghost text-xl no-animation">
            DevvDiego
        </button>
    </div>

    <div class="flex-0 gap-2">

        <!-- <div class="dropdown mr-52">
            <div tabindex="0" role="button" class="btn ">
              Theme
            </div>
            <ul tabindex="0" class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
              <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="default"/></li>
              <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro"/></li>
              <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cyberpunk" value="cyberpunk"/></li>
              <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" value="valentine"/></li>
              <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Aqua" value="aqua"/></li>
            </ul>

        </div> -->

        <!-- ? how to make the icon adapt itself for dark or light mode -->
        <button class="btn btn-ghost">
            <a href="https://github.com/devvdiego" target="_blank">
                <img src={iconGithub} alt="github icon" class="w-8 h-8">
            </a>
        </button>

        <!-- ? maybe remove a tag and put div for a js page moving func -->
        <button class="btn btn-primary btn-outline">
            <a>
                Reach me
            </a>
        </button>

    </div>

</nav>

<style>
</style>