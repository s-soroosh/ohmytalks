<script>
  import {game, user} from "./store"

  function newGame() {
    game.newGame($user.jwt)
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
      <input type="text" value=""/>
      <input type="btton" value="Join Game">
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
