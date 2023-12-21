<script>
import Icon from "./Icon.svelte";

export let text = "";    
export let link = "#";
export let src;
</script>

<a data-sveltekit-reload href={link} 
class="inline-flex items-center px-3 py-2 mb-2 
text-sm font-medium text-center text-white 
bg-background-500 opacity-90 rounded-lg hover:bg-background-800">
    {text}
    

    <Icon size="medium" src={src} extraClasses="ms-2" />

</a>