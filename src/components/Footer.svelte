<script>
    import ButtonWithIcon from "./ButtonWithIcon.svelte";

    import githubLogo from "../assets/icons/github.svg";
    import emailIcon from "../assets/icons/email.svg";

</script>





<div class="max-w-4xl w-full lg:rounded-xl  m-auto p-6  border border-gray-200">

    <div class="max-w-lg w-fit m-auto">
            
        <h5 class="mb-2 text-2xl font-bold text-gray-900 ">Get in touch with me</h5>

        <ButtonWithIcon text="Github" src={githubLogo} />
        <ButtonWithIcon text="Email" src={emailIcon} />

    </div>

</div>
