<script>
    import { onMount } from "svelte";

    let range;

    function onInput() {
        /* required for webkit */
        range.style.setProperty("--progress-percent", `${range.value}%`)
    }

    onMount(onInput);
</script>

<input type="range" bind:this={range} on:input={onInput} />

<style>
    input {
        /* required for webkit */
        --progress-percent: 0;
        position: relative;
        appearance: none;
        width: 150px;
        height: 20px;
        background-color: #0000;
    }

    /* using `before` instead of `-webkit-slider-runnable-track` because of width */
    input::before {
        content: "";
        display: block;
        position: absolute;
        inset: 7.5px 7.5px;
        /* required for webkit */
        background-image: linear-gradient(90deg, #000 var(--progress-percent), #AAA 0);
        border-radius: 5px;
    }

    input::-webkit-slider-thumb {
        appearance: none;
        width: 20px;
        height: 20px;
        background-color: #FFF;
        border: 4px solid #000;
        border-radius: 50%;
        /* using mask to size border to not offset thumb */
        -webkit-mask: radial-gradient(circle, #FFF 65%, #0000 75%, #0000 0);;
        -webkit-mask-size: 16px 16px;
        -webkit-mask-position: center;
        -webkit-mask-repeat: no-repeat;
        box-shadow: calc(-100vw - 10px) 0 0 100vw #90c531;
        transition: all 0.2s;
        /* on top of `before` */
        isolation: isolate;
    }

    input::-moz-range-track {
        width: calc(100% - 15px);
        height: 5px;
        border-radius: 5px;
        background-color: #AAA;
    }

    input::-moz-range-thumb {
        width: 12px;
        height: 12px;
        border: 4px solid #000;
        border-radius: 50%;
        background-color: #FFF;
        /* using mask to size border to not offset thumb */
        mask: radial-gradient(circle, #FFF 65%, #0000 75%, #0000 0);;
        mask-size: 16px 16px;
        mask-position: center;
        mask-repeat: no-repeat;
        transition: all 0.2s;
    }

    input::-moz-range-progress {
        background-color: #000;
        height: 5px;
        clip-path: path("M10 0a2.5 2.5 0 1 0 0 5h130a2.5 2.5 0 1 0 0 -5");
    }

    @media (hover: hover) {
        input {
            cursor: pointer;
        }

        input:focus::-webkit-slider-thumb,
        input::-webkit-slider-thumb:hover {
            -webkit-mask-size: 20px 20px;
        }

        input:focus::-moz-range-thumb,
        input::-moz-range-thumb:hover {
            mask-size: 20px 20px;
        }
    }
</style>
