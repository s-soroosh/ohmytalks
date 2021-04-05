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
    <a href="/xo">Play XO</a>
    <div class="content">
      <h1 style="direction: ltr;">Oh my talks!</h1>
      <h3>
        ویدئوهای آموزش برنامه‌ نویسی
      </h3>
      <div class="talk-cards">

        {#each courses as course}
          <div class="card">
            <Card {course}></Card>
          </div>
        {/each}
      </div>
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

  .content {
    direction: rtl;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  .talk-cards {
    display: flex;
    flex-wrap: wrap;
    /*flex-flow: row;*/
    justify-content: space-around;
  }

  .card {
    margin: 10px;
    flex: 0 1 calc(25% - 1em);
  }
</style>
