<script>
    import TimelineItem from "../components/TimelineItem.svelte";
    // import svelteIcon from "../assets/icons/svelte.svg";

    // import tailwindIcon from "../assets/icons/tailwindcss.svg";
    import cssIcon from "../assets/icons/lang/css-3.svg";
    import htmlIcon from "../assets/icons/lang/html-5.svg";
    import phpIcon from "../assets/icons/lang/php.svg";
    import mysqlIcon from "../assets/icons/lang/mysql.svg";

    import whoamiImage from "../assets/images/whoami-web.webp"
</script>

<main class="mt-14 m-auto max-w-4xl w-full">

    <div class="mt-32">
        <h1 class="px-3 opacity-75 text-md">
            Hi, i'm Diego Varela
        </h1>
        <h2 class="px-3 text-4xl font-bold">
            Programming my way out
        </h2>

        <p class="p-3 my-10 text-xl max-w-2xl">
            I've been doing backend programming since +3 years combining
            it with embedded systems to get the real challenge of a entire
            system design.
        </p>

    </div>

    <!-- 11/12 to avoid shifting -->
    <div id="Timeline" class="max-w-11/12 h-fit ml-4">

        <h3 class="text-lg font-semibold mb-6">
            Projects i made
        </h3>

        <ol class="relative border-s border-slate-700">

            <TimelineItem text="WhoAmI it's a project with medical-recognition purposes. Using
            a NFC device we display the needed information with a short response time"
            title="WhoAmI" src={whoamiImage} date="January 2023"
            icons={[htmlIcon, cssIcon, phpIcon, mysqlIcon]}
            link="https://findwhoami.infinityfreeapp.com"
            />

            <TimelineItem text="WhoAmI it's a project with medical-recognition purposes. Using
            a NFC device we display the needed information with a short response time"
            title="WhoAmI" src={whoamiImage} date="January 2023"
            icons={[htmlIcon, cssIcon, phpIcon, mysqlIcon]}
            link="https://findwhoami.infinityfreeapp.com"
            />

            <TimelineItem text="WhoAmI it's a project with medical-recognition purposes. Using
            a NFC device we display the needed information with a short response time"
            title="WhoAmI" src={whoamiImage} date="January 2023"
            icons={[htmlIcon, cssIcon, phpIcon, mysqlIcon]}
            link="https://findwhoami.infinityfreeapp.com"
            />

        </ol>

    </div>

</main>

<style></style>