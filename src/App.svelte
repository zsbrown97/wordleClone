<script>
  import {fade} from "svelte/transition";
  
  import '../public/global.css';
  import { gameOver } from "./store";

  import Board from "./components/Board.svelte";
  import GameOver from './components/GameOver.svelte';
  import Keyboard from "./components/Keyboard.svelte";
  
</script>

<main>
  <nav>Wordle Clone</nav>


  {#if $gameOver}
    <div>
      <GameOver />
    </div>
  {:else}
    <div in:fade={{duration: 800}}>
      <Board />
      <Keyboard />
    </div>
  {/if}
  
</main>

<style>
  nav {
    background-color: var(--bg);
    color: white;
    font-size: 2em;
    font-weight: bold;
    padding: 1rem;
    text-align: center;
  }
</style>