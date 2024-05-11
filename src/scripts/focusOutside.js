export let ignoreFocusOutside = Symbol("ignore focus outside");

/** Dispatch event on focus outside of node */
export function focusOutside(node) {
    const handleFocus = event => {
        if (
            node &&
            !node.contains(event.target) &&
            !(event.target[ignoreFocusOutside] ?? false)
        ) {
            node.dispatchEvent(
                new CustomEvent("focusOutside", node)
            );
        }
    }

    document.addEventListener("focusin", handleFocus, true);

    return {
        destroy() {
            document.removeEventListener("focusin", handleFocus, true);
        }
    }
}
