<script>
    import "../app.css";
    import Navbar from "../components/Navbar.svelte";

    export const ssr = false

    let { children } = $props();
</script>

<Navbar/>

{@render children?.()}