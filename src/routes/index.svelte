<script>
  import Card from "../components/TalkCard.svelte";
  import {AppBar, Button, Icon, MaterialApp} from 'svelte-materialify';
  import {mdiMenu} from '@mdi/js';

  let selectedCard;

  let theme = 'dark';
  let courses = [
    {
      slug: "javascript1",
      title: "Javascript Bootcamp - Part 1",
      summary: `
      در این جلسه صحبت می‌کنیم که چرا به این زبان نیاز داریم و چه جاهایی استفاده می‌کنیم. در مورد ویژگی‌های کلی زبان. می‌گیم کجا و چطور می‌تونیم دستورات زبان رو وارد کنیم و خروجی رو مشاهده کنیم. قدم‌های ابتدایی استفاده از کنسول در براوزر و دولوپرز تولز رو بر می‌داریم.
      `,
      link: "https://youtu.be/Pf4tdS9Sm6s",
      keywords: ["key1", "key2", "key3"]
    },
    {
      title: "Javascript Bootcamp - Part 2",
      summary: "",
      link: "https://youtu.be/huaWgAbdQRI",
      keywords: ["key1", "key2", "key3"]
    },
    {
      title: "Javascript Bootcamp - Part 3",
      summary: "",
      link: "https://youtu.be/huaWgAbdQRI",
      keywords: ["key1", "key2", "key3"]
    },
    {
      title: "Javascript Bootcamp - Part 4",
      summary: "",
      link: "https://youtu.be/huaWgAbdQRI",
      keywords: ["key1", "key2", "key3"]
    },
    {
      title: "Javascript Bootcamp - Part 5",
      summary: "",
      link: "https://youtu.be/huaWgAbdQRI",
      keywords: ["key1", "key2", "key3"]
    }
  ]
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
    <div class="talk-cards">

      {#each courses as course}
        <Card {course} bind:selected={selectedCard}></Card>
      {/each}
    </div>

    {#if selectedCard}
      <div>
        {selectedCard.title}
      </div>
    {/if}
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
    }
  }

  .talk-cards {
    display: flex;
    flex-flow: row;
    justify-content: space-around;
  }
</style>
