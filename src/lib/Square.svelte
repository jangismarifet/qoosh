<script>
    import Horse from "/home/j/blockly_tests/ver0/src/media/runningHorse/horse01.svg";
    export let square;
</script>

<div class="square" propValue={square}>
    {#if square && square.occupied}
        <object data={Horse} width="30px" height="30px" aria-label="Running Horse"></object>
    {/if}
</div>

<style>
  .square {
    width: 60px;
    height: 60px;
    border: 1px solid black;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
</style>
