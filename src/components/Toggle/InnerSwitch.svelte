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
        border-radius: 14px;
    }

    input::before {
        width: 30px;
        height: 16px;
        background-color: #000;
    }

    input::after {
        left: 8px;
        width: 12px;
        height: 12px;
        background-color: #FFF;
        transition: all 0.2s;
    }

    input:checked::after {
        left: 20px;
    }
</style>
