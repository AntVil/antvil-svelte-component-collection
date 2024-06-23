<!--
@component
A wrapper around a `Switch` which bridges the gap between the `Table` and `Switch`.

It takes in a row with a `selected` field which is bound to the `Switch`.
-->

<script>
    import Switch from "../Toggle/Switch.svelte";

    export let row;
</script>

<Switch bind:checked={row.selected} />
