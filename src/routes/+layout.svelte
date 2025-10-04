<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>


<svelte:head>
    <meta name="color-scheme" content="dark" />
	<link rel="icon" href={favicon} />
</svelte:head>


<nav class="
    z-[10] fixed
    w-full min-h-[60px] h-20 px-8 py-5
    flex flex-row flex-nowrap justify-between items-center"
>
    <span class="
        text-2xl text-transparent font-bold 
        bg-clip-text 
        bg-gradient-to-r from-blue-500 to-green-500
    ">
        devvdiego
    </span>

</nav>

{@render children?.()}