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

    let toggle1;
    let toggle2;
    let openModal;
    let resultCount;

    let search = "";
    $: filtering = (row) => row.ho.includes(search)
</script>

<FilledCheckBox />
<CheckBox />
<Switch />
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
        { name: "Ho", cellContent: { type: Switch , props: (row) => [] } },
        { name: "Hi", sorting: (row1, row2) => row1.hi - row2.hi, cellContent: (row) => row.hi },
        { name: "He", cellContent: (row) => row.he },
    ]}
    rows={[
        { hi: 0, ho: "abc", he: "hij" },
        { hi: 1, ho: "def", he: "hij" },
        { hi: 2, ho: "hij", he: "hij" },
        { hi: 3, ho: "klm", he: "hij" },
        { hi: 4, ho: "nop", he: "hij" },
        { hi: 5, ho: "qrs", he: "hij" },
        { hi: 6, ho: "tuv", he: "hij" },
        { hi: 7, ho: "wxy", he: "hij" },
        { hi: 8, ho: "z", he: "hij" },
    ]}
    bind:filtering
    bind:resultCount
/>

<input bind:value={search} />
{resultCount}
