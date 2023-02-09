<script>
  import { board, colors, createGrid, gameInfo, gameOver, GAME_WORD, guess } from "../store";

  const playAgain = () => {

    const wordsList = ['COLOR', 'GREET', 'GRUMP', 'YIELD', 'BREAK', 'TRUST',
      'GREAT', 'QUEST', 'FOCUS', 'DELTA', 'CAUSE', 'REACT', 'TREAT', 'FIRST',
      'TESLA', 'PARSE'];
    
    const word = wordsList[Math.floor(Math.random() * wordsList.length)];
    GAME_WORD.set(word);
    
    gameInfo.set({
      attempt: 0, char: 0
    })

    guess.set("");
    colors.set(createGrid());
    board.set(createGrid());
    gameOver.set(false);
  }
</script>

<div class="center">
  <h3>The correct word was: <strong>{$GAME_WORD}</strong></h3>
  <h3>You guessed: <strong>{$guess}</strong></h3>
</div>

<div class="center">
  <button on:click={playAgain}>Play Again?</button>
</div>

<style>
  button {
    background-color: var(--orange);
    border: none;
    color: white;
    cursor: pointer;
    margin-top: 1.25rem;
    padding: 1.25rem 3.125rem;
  }

  .center {
    margin: 1.25rem auto;
    text-align: center;
    width: fit-content;
  }

  h3 {
    font-size: 2em;
  }

  strong {
    font-weight: 900;
  }
</style>