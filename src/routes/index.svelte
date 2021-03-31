<script>
  import Card from "../components/TalkCard.svelte";
  import {AppBar, Button, Icon, MaterialApp} from 'svelte-materialify';
  import courses from "../data/courses.js"
  // import {mdiMenu} from '@mdi/js';

  let theme = 'dark';

</script>


<main>
  <MaterialApp theme="{theme}">
    <AppBar>
      <!--      <div slot="icon">-->
      <!--        <Button fab depressed>-->
      <!--          <Icon path={mdiMenu}/>-->

      <!--        </Button>-->
      <!--      </div>-->
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
    <div class="talk-cards">

      {#each courses as course}
        <Card {course}></Card>
      {/each}
    </div>
  </MaterialApp>
</main>

<style>

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
      direction: rtl;
    }
  }

  .talk-cards {
    display: flex;
    flex-flow: row;
    justify-content: space-around;
  }
</style>
