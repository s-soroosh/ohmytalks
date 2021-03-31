<script context="module">
  import {AppBar, Chip, MaterialApp} from 'svelte-materialify';
  import courses from "../../data/courses.js"

  let selectedCourse;
  let theme = 'dark';

  export async function preload({params}) {
    const filteredCourse = courses.filter(c => c.slug == params.slug)
    selectedCourse = filteredCourse ? filteredCourse[0] : {}
    console.log(selectedCourse)
  }
</script>

<main>
  <MaterialApp theme="{theme}">
    <AppBar>
      <!--      <div slot="icon">-->
      <!--        <Button fab depressed>-->
      <!--          <Icon path={mdiMenu}/>-->

      <!--        </Button>-->
      <!--      </div>-->
      <span slot="title"><a href="/" class="home-link"> OH MY TALKS</a></span>

    </AppBar>
    <div class="content">

      <iframe style="margin-top: 50px;" width="560" height="315" src="{selectedCourse.link}"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
      <h1>
        {selectedCourse.title}
      </h1>

      <p>
        {@html selectedCourse.description}
      </p>

      <div style="flex-grow: 1">
        {#each selectedCourse.keywords as keyword}
          <Chip class="ma-2 green white-text">{keyword}</Chip>
        {/each}
      </div>
    </div>
  </MaterialApp>
</main>

<style>

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  h1 {
    margin: 50px;
  }

  .content {
    direction: rtl;
  }

  .home-link {
    color: inherit;
    text-decoration: none;
  }

</style>
