<script>
    let className = ""
    // This lets me use class as normal outside the component
    export {className as class}
</script>

<!-- EXAMPLE USE -->
<!-- 
    <div class="background w-full h-screen">



            <Blob class="
                purple-gradient opacity-50
                absolute top-1/2 left-0 
                -translate-x-1/2 -translate-y-1/2
                w-full h-screen
                max-w-[600px] max-h-5/6
            "/>

    </div>
-->

<div class="{className}
    blur-2xl rounded-br-full rounded-tr-full
">
</div>

<style>
  /*   .purple-gradient {
        background: radial-gradient(
            farthest-corner circle in oklab,
            oklab(63.209% 0.24733 -0.10027) 0%, oklab(39.271% 0.13142 -0.14047) 100%
        );
    } */

    /* Check which timing works best */
    .pulse-animate {
        animation: custom-pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    @keyframes custom-pulse {
        0%, 100% {
            transform: scaleX(1);
            opacity: 1;
        }
        50% {
            transform: scaleX(1.01); /* Bigger or smaller pulse */
            opacity: 0.4; /* fade effect */
        }
    }


</style>