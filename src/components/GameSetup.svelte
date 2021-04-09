<script>
  import {game, user} from "./store"

  function newGame() {
    game.newGame($user.jwt)
  }

  let gameCode = null;

  function joinGame() {
    game.joinGame($user.jwt, gameCode)
  }
</script>

<div class="form">
  {#if !$game}
    <div>
      <h3>Click here to create a new game</h3>
      <input type="button" value="New Game" on:click={newGame}/>
    </div>
    <div>
      <h3>Please fill the code if you already have one</h3>
      <input type="text" bind:value="{gameCode}"/>
      <input type="button" value="Join Game" on:click={joinGame}>
    </div>
  {/if}
  {#if $game}
    Your game code is {$game.code}, feel free to share with anyone you want to play with.
  {/if}
</div>

<style>
  .form {
    background-color: #ffffff;
    padding: 20px;
  }
</style>
