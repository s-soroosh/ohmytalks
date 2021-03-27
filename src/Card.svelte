<script>
  import { Button } from 'svelte-materialify';

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
  <Button>Card {name}</Button>
</main>



