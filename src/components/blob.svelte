<script>
    let className = ""
    // This lets me use class as normal outside the component
    export {className as class}
</script>

<div class="blob {className}">

</div>

<style>
    .blob{
        z-index: 2;
        /* animation: rotomove 20s infinite; */
        background-repeat: no-repeat;
        opacity: .3;
        
        filter: blur(50px);
        border-radius: 100%;
    }
    .pink-gradient {
        background-image: 
            linear-gradient(
            311deg in oklab, 
            oklch(75% 0.27 32) 0%, oklch(79% 0.33 360) 100%
            )
        ;
    }
</style>