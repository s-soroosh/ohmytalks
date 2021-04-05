<script>
  import {user} from "./store"

  let userInput = {
    email: "",
    password: ""
  }

  let error = undefined

  function login() {
    user.login(userInput)
    .catch(err => {
      error = err.response
      console.log(error)
    })
  }

  function register() {
    user.register(userInput)
    .catch(err => error = err.response)
  }

</script>

<div class="form">
  <h3>Please login or register to play XO</h3>
  <div>
    <input type="text" bind:value="{userInput.email}" placeholder="Email">
    <input type="password" bind:value="{userInput.password}" placeholder="Password">
  </div>
  {#if error}
    <div class="error">
      {error.data.message[0].messages[0].message}
    </div>
  {/if}
  <div>
    <input type="button" value="Login" on:click={login}>
    <input type="button" value="Register" on:click={register}>
  </div>
</div>

<style>

  .form {
    background-color: #ffffff;
    padding: 20px;

  }

  .error {
    color: tomato;
  }
</style>
