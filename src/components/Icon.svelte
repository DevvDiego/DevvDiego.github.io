<script>
    export let src;
    export let alt = "icon";
    export let size = "small";
    export let extraClasses;

    function mapSize(){
        if(size === "small"){
            return "w-4";
        }else if(size === "medium"){
            return "w-6";
        }else if(size === "large"){
            return "w-9";
        }

        return "w-6";
    }
</script>

<img {src} {alt} class={mapSize() + " " + extraClasses}>

<style>

</style>