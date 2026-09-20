<script>
    let {
            currentColor = $bindable(),
            class: klass
        } = $props();
</script>

<!-- EXAMPLE USE -->
<!-- 
    <div class="background w-full h-screen">
        <Blob class="
            blur-2xl rounded-br-full rounded-tr-full  
            pulse-animate
            absolute 
            left-1/2 top-1/2 
            -translate-x-1/12 -translate-y-1/2

            bg-blue-700 opacity-80
            w-3/12 sm:w-1/12 h-8/12
            max-w-[180px] max-h-4/6
        "/>
    </div>
-->

<div class="{klass}"></div>

<style>
/*     .bluish{
        background: radial-gradient(
            farthest-corner circle in oklab,
            oklab(38.338% 0.00262 -0.23915) 0%, oklab(30.083% 0.0005 -0.19293) 100%
        );
    }
    .purple-gradient {
        background: radial-gradient(
            farthest-corner circle in oklab,
            oklab(63.209% 0.24733 -0.10027) 0%, oklab(39.271% 0.13142 -0.14047) 100%
        );
    } */

    /* Check which timing works best */
    .pulse-animate {
        animation: custom-pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    @keyframes custom-pulse {
        0%, 100% {
            transform: scaleX(1);
            opacity: 0.8; /* match base opacity */
        }
        50% {
            transform: scaleX(1.01); /* Bigger or smaller pulse */
            opacity: 0.4; /* fade effect */
        }
    }


</style>