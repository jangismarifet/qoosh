<script>
    import Square from './Square.svelte';
    let loc = [0, 0]
    let grid = [];
    for (let i = 0; i < 5; i++) {
        let row = [];
        for (let j = 0; j < 5; j++) {
            let square = {
                x: j,
                y: i,
                occupied: false,
            };
            if (j === loc[1] && i === loc[0]) {
                square.occupied = true;
            }
            row.push(square);
        }
        grid[i] = row;
    }
    function moveDown() {
        if (loc[0] < 4) {
            grid[loc[1]][loc[0]].occupied = false;
            loc[1]++;
            grid[loc[1]][loc[0]].occupied = true;
        }
    }
    moveDown()
    moveDown()
    
</script>

<div id="grid">
    {#each grid as row}
    <div class="row">
        {#each row as square}
            <Square {square} />
        {/each}
    </div>
{/each}
</div>
<style>
    #grid {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .row {
        display: flex;
    }
</style>