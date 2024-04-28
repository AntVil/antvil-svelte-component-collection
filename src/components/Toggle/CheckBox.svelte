<input type="checkbox" />

<style>
    input {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        appearance: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        transition: all 0.2s;
    }

    input:hover {
        background-color: #0003;
        cursor: pointer;
    }

    input:active {
        background-color: #0005;
        transition: 0s;
    }

    input::before,
    input::after {
        position: absolute;
        content: "";
        display: block;
    }

    input::before {
        width: 16px;
        height: 16px;
        border-radius: 5px;
        border: 2px solid #000;
    }

    input:checked::after {
        width: 3px;
        height: 9px;
        border-width: 2px;
        border-style: none solid solid none;
        transform: translate(0, -2px) rotate(45deg);
    }
</style>
