<button></button>

<style>
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #0000;
        border: none;
        transition: all 0.2s;
    }

    button:hover {
        background-color: #0003;
        cursor: pointer;
    }

    button:active {
        background-color: #0005;
        transition: 0s;
    }

    button::after {
        content: "";
        display: block;
        width: 50%;
        height: 60%;
        /* generate 3 stripes */
        background: linear-gradient(
            0deg,
            #0000 27.27%, #000 27.27%,
            #000 36.36%, #0000 36.36%,
            #0000 45.45%, #000 45.45%,
            #000 54.54%, #0000 54.54%,
            #0000 63.63%, #000 63.63%,
            #000 72.72%, #0000 72.72%
        );
    }
</style>
