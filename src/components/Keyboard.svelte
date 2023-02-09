<script>
  import Key from "./Key.svelte";

  import { board, colors, gameInfo, gameOver, GAME_WORD, guess} from "../store";

  const row1 = ['q','w','e','r','t','y','u','i','o','p'];
  const row2 = ['a','s','d','f','g','h','j','k','l',];
  const row3 = ['ENTER','z','x','c','v','b','n','m','DEL'];

  const handleDelete = () => {
    if ($gameInfo.char === 0) return;

    gameInfo.update((prev) => {
      return {
        char: prev.char - 1,
        attempt: prev.attempt
      }
    })

    board.update((prevBoard) => {
      const newBoard = prevBoard;
      newBoard[$gameInfo.attempt][$gameInfo.char] = "";
      return newBoard;
    })
  }

  const handleEnter = () => {
    let { attempt, char } = $gameInfo;

    if ($gameInfo.char !== 5) return;

    gameInfo.set({
      attempt: attempt + 1,
      char: 0
    })

    const previousAttempt = $gameInfo.attempt - 1;
    const newColorsBoard = $colors;

    const duplicateChars = new Set();

    for (let i = 0; i < 5; i++) {
      let char = $board[previousAttempt][i].toUpperCase();
      guess.update((prevChars) => prevChars + char);

      if ($GAME_WORD[i].toUpperCase() === char) newColorsBoard[previousAttempt][i] = "correct";

      else if ($GAME_WORD.toUpperCase().includes(char)) {
        newColorsBoard[previousAttempt][i] = "close";
        if (!duplicateChars.has(char)) {
          newColorsBoard[previousAttempt][i] = "close";
          duplicateChars.add(char);
        }
      } else newColorsBoard[previousAttempt][i] = "incorrect";
    }

    colors.set(newColorsBoard);

    // check game over
    if($guess == $GAME_WORD.toUpperCase() || previousAttempt == 5) gameOver.set(true);
    else guess.set("");
  }

  const keyPress = (key = "") => {
    if (key == "DEL") handleDelete();
    else if (key == "ENTER") handleEnter();

    else {
      let { attempt, char } = $gameInfo;
      if (char > 4) return;

      board.update((prevBoard) => {
        const newBoard = prevBoard;
        newBoard[attempt][char++] = key;
        return newBoard;
      })

      gameInfo.set({attempt, char})
    }
  }
</script>

<div class="keyboard">
  <div class="row">
    {#each row1 as char}
      <Key {char} {keyPress}/>
    {/each}
  </div>

  <div class="row">
    {#each row2 as char}
      <Key {char} {keyPress}/>
    {/each}
  </div>

  <div class="row">
    {#each row3 as char}
      <Key {char} {keyPress}/>
    {/each}
  </div>
</div>

<style>
  .keyboard {
    bottom: 1.25rem; left: 50%;
    position: fixed;
    transform: translate(-50%, 0%);
    width: fit-content;
  }

  .row {
    align-items: center;
    display: flex;
    justify-content: center;
  }
</style>