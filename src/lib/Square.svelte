<script>
    export let letter;
    export let currentPosition;
    export let index;

    let translateY = 0;

    $: {
        if (index < currentPosition) {
            translateY = -50;
        } else if (index > currentPosition) {
            translateY = 50;
        } else {
            translateY = 0;
        }
    }
</script>

<div class="square" style="transform: translateY({translateY}px);">
    {letter}
</div>

<style>
    .square {
        width: 50px;
        height: 50px;
        border: 1px solid black;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        transition: transform 0.7s ease;
    }
</style>
