import {writable} from "svelte/store";

export function createGrid() {
  const grid = [];

  for (let i = 0; i < 6; i++) {
    grid.push([]);
    for (let x = 0; x < 5; x++) grid[i][x] = '';
  }

  return grid;
}

export const board = writable(createGrid());
export const colors = writable(createGrid());
export const gameInfo = writable({
  attempt: 0,
  char: 0,
})
export const gameOver = writable(false);
export const GAME_WORD = writable("HELLO");
export const guess = writable("");

export const wordsList = ['COLOR', 'GREET', 'GRUMP', 'YIELD', 'BREAK', 'TRUST',
      'GREAT', 'QUEST', 'FOCUS', 'DELTA', 'CAUSE', 'REACT', 'TREAT', 'FIRST',
      'TESLA', 'PARSE'];
      