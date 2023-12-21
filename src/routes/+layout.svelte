<script>
    import "../app.css";
    import Icon from "../components/Icon.svelte";
    import githubLogo from "../assets/icons/github.svg";
    import Footer from "../components/Footer.svelte";

    export const prerender = true;
</script>

<nav class="fixed top-0 w-full h-14 bg-background-50 z-40
    text-xl border-b-2
    shadow-md">

    <ul class="max-w-4xl m-auto w-11/12 h-full py-3 select-none
        flex justify-between align-center 
        rounded-xl">

        <li class="active:bg-primary-400 hover:bg-primary-400 transition-colors duration-150
            rounded-md px-1 ">
            
            <h1 class="text-2xl font-bold">
                DevvDiego
            </h1>
        </li>
    
        <li>
            <a href="http://github.com/devvdiego">
                <Icon src={githubLogo} alt={"github logo"} size="large" />
            </a>
        </li>

    </ul>
</nav>

<slot />

<Footer />

<style>
    nav li{
        @apply text-center text-lg text-text-950 flex justify-center content-center;
    }
</style>