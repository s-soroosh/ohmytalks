<script>
  export let name;
  import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher();

  function sayHello() {
    dispatch('click', {
      name: name
    });
  }
</script>

<main on:click={sayHello}>
  <p>Card {name}</p>
</main>
