<script>
    import Square from "./Square.svelte";

    let currentPosition = 0;
    let letters = ["Q", "", "", "", ""]; // 5 squares

    function moveLeft() {
        if (currentPosition > 0) {
            currentPosition--;
        }
    }

    function moveRight() {
        if (currentPosition < letters.length - 1) {
            currentPosition++;
        }
    }
</script>

<div>
    <div>
        {#each letters as letter, i}
            <Square {letter} {currentPosition} index={i} />
        {/each}
    </div>
    <br /><br /><br /><br /><br /><br />
    <div>
        <button on:click={moveLeft}>Left Arrow</button>
        <button on:click={moveRight}>Right Arrow</button>
    </div>
</div>
