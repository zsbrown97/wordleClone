<script>

  export let char;

  export let keyPress;

 const keyClass = (char == "ENTER" || char == "DEL") ? "key-special" : "key";
</script>

<div class={keyClass} on:click={() => keyPress(char.toUpperCase())}>
  {char.toUpperCase()}
</div>

<style>
  .key {
    background-color: var(--bg);
    border-radius: 0.25rem;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin: 0.25rem 0.2rem;
    padding: 1.25rem 1.125rem;
    transition: background-color .125s;
    width: 0.8rem;
 }

 .key-special {
    background-color: var(--bg);
    border-radius: 0.25rem;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin: 0.25rem 0.2rem;
    padding: 1.25rem 1.125rem;
    transition: background-color .125s;
    width: 2.6rem;
 }

 .key:hover {
   background-color: var(--orange);
 }

 .special {
   padding: 1.25rem 2.25rem;
 }
</style>