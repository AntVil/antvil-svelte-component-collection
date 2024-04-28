<script>
    export let name;
    export let options;
    let value = options[0];

    function onChange(newValue) {
        value = newValue
    }
</script>

<div>
    <button>{value}</button>
    <section>
        {#each options as option, index}
        <label><input type="radio" name="{name}" on:change={() => onChange(option)} checked={index===0}/>{option}</label>
        {/each}
    </section>
</div>

<style>
    input {
        appearance: none;
    }

    input:hover {
        cursor: pointer;
    }

    label{
        display: flex;
        align-items: center;
        width: 100%;
        height: 28px;
    }

    label:has(:checked) {
        background-color: #0001;
    }

    label:hover {
        background-color: #AAA6;
        cursor: pointer;
    }

    div {
        position: relative;
        width: 300px;
        overflow: visible;
    }

    button {
        position: relative;
        background-color: #FFF;
        border: 1px solid #AAA;
        border-radius: 5px;
        width: 100%;
        height: 28px;
        cursor: pointer;
    }

    button::after {
        content: "";
        position: absolute;
        right: 10px;
        width: 10px;
        height: 10px;
        border-width: 1px;
        border-style: solid;
        border-color: #0000 #AAA #AAA #0000;
        transform: translate(0, -3px) rotate(45deg);
        transition: all 0.2s;
        transition-delay: 0.2s;
    }

    button:focus::after {
        transition-delay: 0s;
        transform: translate(0, 3px) rotate(-135deg);
    }

    section {
        position: absolute;
        top: 100%;
        border-radius: 5px;
        width: 300px;
        height: 0;
        transition: all 0.2s;
        /* tiny delay so click on option is registered before collapse */
        transition-delay: 0.2s;
        background-color: #EEE;
        overflow: hidden;
        z-index: 1;
    }

    button:focus+section {
        height: 80px;
        /* no delay on open */
        transition-delay: 0s;
    }
</style>
