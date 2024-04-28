<details>
    <summary></summary>
</details>

<style>
    summary {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        transition: all 0.2s;
        user-select: none;
    }

    summary:hover {
        cursor: pointer;
        background-color: #0003;
    }

    summary:active {
        background-color: #0005;
        transition: 0s;
    }

    /* style as triangle */
    summary::before {
        content: "";
        display: block;
        width: 0;
        height: 0;
        background-color: #0000;
        border-left: 8px solid #0000;
        border-right: 8px solid #0000;
        border-top: 8px solid #000;
        transition: all 0.2s;
    }

    /* style as minus-sign */
    details[open]>summary::before {
        background-color: #000;
        width: 16px;
        height: 2px;
        border: 0px;
    }

    details {
        height: 36px;
        transition: all 0.2s;
    }

    details[open] {
        height: 200px;
    }
</style>
