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
        border-radius: 5px;
    }

    input::before {
        width: 24px;
        height: 12px;
        background-color: #000;
    }

    input::after {
        left: 4px;
        width: 16px;
        height: 16px;
        background-color: #9f56ff;
        transition: all 0.2s;
    }

    input:checked::after {
        left: 20px;
    }
</style>
