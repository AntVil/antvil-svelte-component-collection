<script>
    import { focusOutside } from "../../scripts/focusOutside";

    export function open() {
        dialog.showModal();
    }

    function close() {
        dialog.close();
    }

    function focusout(e) {
        close();
    }

    let dialog;
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog bind:this={dialog}>
    <!-- requires tab index to prevent closing on click inside -->
    <section use:focusOutside on:focusOutside={focusout} tabindex="-1">
        <button on:click={close}>close</button>
        <slot></slot>
    </section>
</dialog>

<style>
    dialog {
        /* always visible to have out-transition */
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #0000;
        outline: none;
        /* full content */
        inset: 0;
        margin: 0;
        padding: 0;
        width: auto;
        height: auto;
        border: none;
        /* remove weird browser standard `calc(100% - 2cm - 6px)` */
        max-width: unset;
        max-height: unset;
        /* disable clicks while not open */
        pointer-events: none;
    }

    dialog[open] {
        pointer-events: all;
    }

    dialog:not([open]) > section > :global(*) {
        display: none;
    }

    dialog > section {
        background-color: #0000;
        border: 1px solid #0000;
        padding: 0;
        border-radius: 15px;
        opacity: 0;
        outline: none;
        transition: all 0.2s;
        width: 0;
        max-width: 800px;
        height: 0;
    }

    dialog[open] > section {
        width: 90%;
        height: 90%;
        opacity: 1;
        border-color: #000;
        padding: 10px;
        background-color: #fff;
        /* using box shadow instead of backdrop because of animation reasons */
        box-shadow: 0 0 0 max(100vw, 100vh) #0003;
    }
</style>
