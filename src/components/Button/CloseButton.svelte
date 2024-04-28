<button></button>

<style>
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 40px;
        height: 40px;
        background-color: #0000;
        border-radius: 50%;
        border: none;
        transition: all 0.2s;
    }

    button:hover {
        cursor: pointer;
        background-color: #0003;
    }

    button:active {
        background-color: #0005;
        transition: 0s;
    }

    button::before,
    button::after {
        content: "";
        display: block;
        position: absolute;
        width: 60%;
        height: 2px;
        background-color: #000;
    }

    button::before {
        transform: rotate(-45deg);
    }
    button::after {
        transform: rotate(45deg);
    }
</style>
