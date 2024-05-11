<script>
    import { onMount } from "svelte";
    import { ignoreFocusOutside } from "../../scripts/focusOutside";

    export let toggle;

    let button;

    onMount(() => {
        // TODO: this technically leads to the ability to tab off to different menu buttons which is not ideal..
        button[ignoreFocusOutside] = true;
    });
</script>

<button bind:this={button} on:click={toggle}>open</button>
