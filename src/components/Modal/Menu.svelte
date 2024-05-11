<script>
    import { focusOutside } from "../../scripts/focusOutside";

    export function toggle() {
        if (dialog.hasAttribute("open")) {
            close();
        } else {
            dialog.show();
        }
    }

    function close() {
        dialog.close();
    }

    function focusout(e) {
        close();
    }

    function keypress(e) {
        if (e.key === "Escape") {
            e.preventDefault();
            e.stopPropagation();
            close();
        }
    }

    let dialog;
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog bind:this={dialog} on:keydown={keypress}>
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
        /* click behind always allowed */
        pointer-events: none;
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
        transition: all 0.2s;
        outline: none;
        width: 0;
        max-width: 800px;
        height: 0;
        /* click inside must be allowed still */
        pointer-events: all;
    }

    dialog[open] > section {
        width: 90%;
        height: 90%;
        opacity: 1;
        border-color: #000;
        padding: 10px;
        background-color: #fff;
    }
</style>
