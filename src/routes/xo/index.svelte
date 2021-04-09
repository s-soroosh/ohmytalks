<script>
  import Login from "../../components/Login.svelte";
  import {user, game} from "../../components/store"
  import GameSetup from "../../components/GameSetup.svelte";
  import GameBoard from "../../components/GameBoard.svelte";

</script>

<div class="content">
  {#if !$user}
    <Login/>
  {/if}
  {#if $user && !$game}
    <GameSetup/>
  {/if}
  {#if $user && $game}
    <GameBoard/>
  {/if}
</div>


<style>
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #999999;
  }
</style>
