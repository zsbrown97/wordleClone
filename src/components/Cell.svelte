<script>
  import { board, colors } from "../store";

  export let x;
  export let y;
  
  $: color = $colors[y][x];
  $: letter = $board[y][x];
</script>

<div class={`cell ${color}`}>
  {letter}
</div>

<style>
  .cell {
    align-items: center;
    background-color: var(--bg);
    border-radius: 1rem;
    color: white;
    display: flex;
    font-size: 4rem;
    height: 5rem; width: 5rem;
    justify-content: center;
    margin: .25rem;
    transition: background-color .7s;
  }

  .close {
    background-color: var(--orange);
  }
  .correct {
    background-color: var(--green);
  }
  .incorrect {
    background-color: var(--dark);
  }
</style>