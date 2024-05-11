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

    let toggle1;
    let toggle2;
    let openModal;
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
