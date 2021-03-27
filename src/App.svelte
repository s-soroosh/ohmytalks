<script>
  import Card from "./Card.svelte";
  import {MaterialApp, AppBar, Button, Icon, Menu, ListItem} from 'svelte-materialify';
  import {mdiMenu, mdiDotsVertical} from '@mdi/js';

  let selectedCard;

  const onCardSelection = (x) => {
    console.log(x.detail.name);
    selectedCard = x.detail.name;
  }

  let theme = 'dark';
</script>


<main>
  <MaterialApp theme="{theme}">
    <AppBar>
      <div slot="icon">
        <Button fab depressed>
          <Icon path={mdiMenu}/>

        </Button>
      </div>
      <span slot="title">OH MY TALKS</span>
      <div style="flex-grow:1"/>
<!--      <Button>Item</Button>-->
<!--      <Menu right>-->
<!--        <div slot="activator">-->
<!--          <Button fab depressed>-->
<!--            <Icon path={mdiDotsVertical}/>-->
<!--          </Button>-->
<!--        </div>-->
<!--        <ListItem>Item 1</ListItem>-->
<!--        <ListItem>Item 2</ListItem>-->
<!--        <ListItem>Item 3</ListItem>-->
<!--      </Menu>-->
    </AppBar>
    <h1>Oh my talks!</h1>
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
  </MaterialApp>
</main>

<style>
  main {
    padding: 0;
    text-align: center;
    /*padding: 1em;*/
    max-width: 240px;
    /*margin: 0 auto*/
    height: 100%;

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
