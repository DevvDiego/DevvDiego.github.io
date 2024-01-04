<script>
    //tailwind styles
    import css from "../app.css";

    //Stick with these icons: https://iconer.app/bootstrap/
    // import iconGithub from "$lib/assets/icons/github.svg";
    // import iconSun from "$lib/assets/icons/sun.svg";
    // import iconMoon from "$lib/assets/icons/moon.svg";


    export const prerender = true;
</script>

<nav class="navbar bg-base-200 fixed z-40">
    
    <div class="flex-1">
        <button class="btn btn-ghost text-xl no-animation">
            DevvDiego
        </button>
    </div>

    <div class="flex-0 gap-2">
        <label class="swap swap-rotate btn btn-ghost">
  
            <!-- this hidden checkbox controls the state -->
            <input type="checkbox" class="theme-controller" value="dark" />
            
            <!-- ? how to use imported icons instead of direct svg -->
            <!-- sun icon -->
            <!-- <img src={iconSun} alt="sun icon" class="swap-on fill-current w-6 h-6"> -->
            <svg width="46" height="46" class="swap-on fill-current w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-15a.625.625 0 0 1 .625.625v2.5a.625.625 0 1 1-1.25 0v-2.5A.625.625 0 0 1 12 2Zm0 16.25a.624.624 0 0 1 .625.625v2.5a.624.624 0 1 1-1.25 0v-2.5A.624.624 0 0 1 12 18.25ZM22 12a.624.624 0 0 1-.625.625h-2.5a.624.624 0 1 1 0-1.25h2.5A.624.624 0 0 1 22 12ZM5.75 12a.625.625 0 0 1-.625.625h-2.5a.625.625 0 1 1 0-1.25h2.5A.625.625 0 0 1 5.75 12Zm13.321-7.071a.625.625 0 0 1 0 .883l-1.767 1.77a.626.626 0 0 1-.884-.886l1.767-1.767a.625.625 0 0 1 .884 0ZM7.58 16.42a.625.625 0 0 1 0 .884L5.812 19.07a.625.625 0 0 1-.883-.884l1.767-1.767a.625.625 0 0 1 .884 0Zm11.491 2.651a.625.625 0 0 1-.884 0l-1.767-1.767a.625.625 0 0 1 .884-.884l1.767 1.767a.625.625 0 0 1 0 .884ZM7.58 7.581a.625.625 0 0 1-.884 0L4.93 5.812a.625.625 0 1 1 .883-.883L7.58 6.696a.625.625 0 0 1 0 .885Z"></path>
            </svg>

            <!-- moon icon -->
            <!-- <img src={iconMoon} alt="moon icon" class="swap-off fill-current w-6 h-6">
            -->
            <svg width="46" height="46" class="swap-off fill-current w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.08 2.734a.922.922 0 0 1 .096 1.03 8.65 8.65 0 0 0-1.054 4.152c0 4.825 3.934 8.732 8.782 8.732.632 0 1.248-.066 1.84-.192a.945.945 0 0 1 .971.38.88.88 0 0 1-.037 1.071 10.02 10.02 0 0 1-7.785 3.694C7.36 21.6 2.88 17.144 2.88 11.653c0-4.133 2.537-7.678 6.149-9.18a.903.903 0 0 1 1.05.261Z"></path>
            </svg>

        </label>


        <!-- ? how to make the icon adapt itself for dark or light mode -->
        <button class="btn btn-ghost">
            <a href="https://github.com/devvdiego" target="_blank">
                <svg width="46" height="46" class="fill-current w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.246c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.475 0-.238-.013-1.025-.013-1.863C7 19.86 6.35 18.784 6.15 18.221c-.113-.287-.6-1.175-1.025-1.412-.35-.188-.85-.65-.013-.663.788-.012 1.35.725 1.538 1.025.9 1.513 2.338 1.088 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.087.387-1.987 1.025-2.687-.1-.25-.45-1.275.1-2.65 0 0 .837-.263 2.75 1.025a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.113 2.5.338 1.912-1.3 2.75-1.025 2.75-1.025.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.575.688.475A10.015 10.015 0 0 0 22 12.246c0-5.525-4.475-10-10-10Z"></path>
                </svg>
            </a>
        </button>

    </div>

</nav>


<slot />


<footer class="mt-12 footer footer-center p-10 bg-base-200 text-base-content rounded">
    <nav class="grid grid-flow-col gap-4 text-xs">
        <a class="link link-hover">About me</a>
        <a class="link link-hover">Projects</a>
        <a class="link link-hover">Contact Me</a>
    </nav> 
    <nav>
        <div class="grid grid-flow-col gap-4">
            <a href="https://github.com/devvdiego" target="_blank">
                <svg width="46" height="46" class="fill-current w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.246c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.475 0-.238-.013-1.025-.013-1.863C7 19.86 6.35 18.784 6.15 18.221c-.113-.287-.6-1.175-1.025-1.412-.35-.188-.85-.65-.013-.663.788-.012 1.35.725 1.538 1.025.9 1.513 2.338 1.088 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.087.387-1.987 1.025-2.687-.1-.25-.45-1.275.1-2.65 0 0 .837-.263 2.75 1.025a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.113 2.5.338 1.912-1.3 2.75-1.025 2.75-1.025.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.575.688.475A10.015 10.015 0 0 0 22 12.246c0-5.525-4.475-10-10-10Z"></path>
                </svg>
            </a>
        </div>
    </nav> 
    <aside>
        <p>DevvDiego 2024 - Find me on Github!</p>
    </aside>
</footer>