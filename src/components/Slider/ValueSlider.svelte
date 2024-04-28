<input type="range" />

<style>
    input {
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
        background-color: #000;
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
        transition: all 0.2s;
        /* on top of `before` */
        isolation: isolate;
    }

    input::-moz-range-track {
        width: calc(100% - 15px);
        height: 5px;
        border-radius: 5px;
        background-color: #000;
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
