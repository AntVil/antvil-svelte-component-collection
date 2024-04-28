<script>
    export let name;
</script>

<div>
    <input type="radio" name="{name}" />
    <input type="radio" name="{name}" />
    <input type="radio" name="{name}" />
    <input type="radio" name="{name}" />
    <input type="radio" name="{name}" />
</div>

<style>
    div {
        display: inline-flex;
        flex-direction: row-reverse;
    }

    input {
        appearance: none;
    }

    input::before {
        content: "";
        display: block;
        background-color: #AAA;
        mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M10 0L12.2 7L19.6 7L13.6 11.4L15.8 18.2L10 14L4.2 18.2L6.4 11.4L0.4 7L7.8 7'/%3E%3C/svg%3E");
        -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M10 0L12.2 7L19.6 7L13.6 11.4L15.8 18.2L10 14L4.2 18.2L6.4 11.4L0.4 7L7.8 7'/%3E%3C/svg%3E");
        width: 20px;
        height: 20px;
        transition: all 0.2s;
    }

    input:checked::before,
    input:checked~input::before {
        background-color: #000;
    }

    input:hover::before, input:hover~input::before {
        cursor: pointer;
        background-color: #000;
    }

    input:has(~input:hover)::before {
        background-color: #AAA;
    }
</style>
