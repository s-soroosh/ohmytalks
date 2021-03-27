<script>
  import Card from "./Card.svelte";

  export let name;
  let selectedCard;

  const onCardSelection = (x) => {
    console.log(x.detail.name);
    selectedCard = x.detail.name;
  }
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build
    Svelte apps.</p>

  <Card name="JS1" on:click={onCardSelection}></Card>
  <Card name="JS2" on:click={onCardSelection}></Card>
  <Card name="JS3" on:click={onCardSelection}></Card>

  {#if selectedCard}
    <div>
      {selectedCard}
    </div>
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
