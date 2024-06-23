<script>
    import CheckBox from "./components/Toggle/CheckBox.svelte";
    import CloseButton from "./components/Button/CloseButton.svelte";
    import CollapsibleSection from "./components/CollapsibleSection.svelte";
    import FilledCheckBox from "./components/Toggle/FilledCheckBox.svelte";
    import HamburgerButton from "./components/Button/HamburgerButton.svelte";
    import Switch from "./components/Toggle/Switch.svelte";
    import InnerSwitch from "./components/Toggle/InnerSwitch.svelte";
    import Radio from "./components/Radio/Radio.svelte";
    import FilledRadio from "./components/Radio/FilledRadio.svelte";
    import IntegerInput from "./components/Field/IntegerInput.svelte";
    import DecimalInput from "./components/Field/DecimalInput.svelte";
    import ValueSlider from "./components/Slider/ValueSlider.svelte";
    import FilledValueSlider from "./components/Slider/FilledValueSlider.svelte";
    import Rating from "./components/Radio/Rating.svelte";
    import Select from "./components/DropDown/Select.svelte";
    import Modal from "./components/Modal/Modal.svelte";
    import Menu from "./components/Modal/Menu.svelte";
    import MenuButton from "./components/Modal/MenuButton.svelte";
    import Table from "./components/Table/Table.svelte";
    import TableSwitch from "./components/Table/TableSwitch.svelte";

    let toggle1;
    let toggle2;
    let openModal;
    let resultCount;

    let search = "";
    $: filtering = (row) => row.name.includes(search);
</script>

<FilledCheckBox />
<CheckBox />
<Switch checked={false} />
<HamburgerButton />
<CollapsibleSection />
<CloseButton />
<InnerSwitch />
<Radio />
<FilledRadio />
<IntegerInput />
<DecimalInput />
<ValueSlider />
<FilledValueSlider />
<Select name="select" options={[1, 2, 3]} />
<Rating name="rating" />
<Menu bind:toggle={toggle1}>
    <p>Hello world!</p>
</Menu>
<Menu bind:toggle={toggle2}>
    <p>Hello Dude!</p>
</Menu>

<MenuButton toggle={toggle1} />
<MenuButton toggle={toggle2} />

<Modal bind:open={openModal} />

<button on:click={openModal}>open</button>

<Table
    headers={[
        { name: "", cellContent: TableSwitch },
        {
            name: "Name",
            sorting: (row1, row2) => row1.value - row2.value,
            cellContent: (row) => row.value,
        },
        { name: "Value", cellContent: (row) => row.name },
    ]}
    rows={[
        { value: 0, name: "abc", selected: false },
        { value: 1, name: "def", selected: false },
        { value: 2, name: "hij", selected: false },
        { value: 3, name: "klm", selected: false },
        { value: 4, name: "nop", selected: false },
        { value: 5, name: "qrs", selected: false },
        { value: 6, name: "tuv", selected: false },
        { value: 7, name: "wxy", selected: false },
        { value: 8, name: "z", selected: false },
    ]}
    bind:filtering
    bind:resultCount
/>

<input bind:value={search} />
{resultCount}
