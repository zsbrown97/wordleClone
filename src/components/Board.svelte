<script>
  import { board } from '../store';

  import Cell from "./Cell.svelte";
</script>

<div class="game-board">
  {#each $board as column, y}
    <div class="row">
      {#each column as row, x}
        <Cell {y} {x}/>
      {/each}
    </div>
  {/each}
</div>

<style>
  .game-board {
    margin: 3rem auto;
    width: fit-content;
  }

  .row {
    display: flex;
  }
</style>

