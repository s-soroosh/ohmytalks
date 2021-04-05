<script>
  import Login from "../../components/Login.svelte";
  import {user} from "../../components/store"
  import GameSetup from "../../components/GameSetup.svelte";

</script>

<div class="content">
  {#if !$user}
    <Login/>
  {/if}
  {#if $user}
    <GameSetup />
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
