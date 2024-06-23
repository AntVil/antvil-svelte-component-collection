<script>
    export let headers = [];
    export let rows = [];
    export let filtering = () => true;
    export let offset = 0;
    export let limit = Infinity;
    export let resultCount = 0;

    const SORTED_BY = Symbol("sortedBy");
    const SORTED_ASC = Symbol("sorted asc");
    const SORTED_DESC = Symbol("sorted desc");

    function toggleSorting(header) {
        if (header[SORTED_BY] === SORTED_ASC) {
            header[SORTED_BY] = SORTED_DESC;
            sortFunction = (row1, row2) => header.sorting(row2, row1);
        } else if (header[SORTED_BY] === SORTED_DESC) {
            delete header[SORTED_BY];
            sortFunction = () => 0;
        } else {
            header[SORTED_BY] = SORTED_ASC;
            sortFunction = header.sorting;
        }
    }

    let sortFunction = () => 0;

    $: filteredRows = rows.filter(filtering);

    $: renderedRows = filteredRows
        .toSorted(sortFunction)
        .slice(offset, offset + limit);

    $: resultCount = filteredRows.length;
</script>

<table>
    <thead>
        {#each headers as header}
            {#if header.sorting}
                <th>
                    <button
                        class:asc={header[SORTED_BY] === SORTED_ASC}
                        class:desc={header[SORTED_BY] === SORTED_DESC}
                        on:click={() => toggleSorting(header)}
                    >
                        {header.name}
                    </button>
                </th>
            {:else}
                <th>{header.name}</th>
            {/if}
        {/each}
    </thead>
    <tbody>
        {#each renderedRows as row}
            <tr>
                {#each headers as header}
                    <td>
                        {#if typeof header.cellContent === "function"}
                            {header.cellContent(row)}
                        {:else}
                            <svelte:component
                                this={header.cellContent.type}
                                {...header.cellContent.props(row)}
                            />
                        {/if}
                    </td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>
