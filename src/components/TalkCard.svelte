<script>
  import {Button, Card, CardActions, CardSubtitle, CardTitle} from 'svelte-materialify';

  export let course;
  export let selected;

  let href = `/session-details/${course.slug}`

</script>

<main>
  <Card style="max-width: 350px">
    <img src="{course.image}" style="max-width: 350px" alt="background"/>
    <CardTitle>{course.title}</CardTitle>
    <div>{course.summary}</div>
    <CardActions>
      <a {href} text>جزئیات بیشتر</a>
      <!--      <Button text fab size="small" class="ml-auto" on:click={toggle}>-->
      <!--        <Icon path={mdiChevronDown} rotate={active ? 180 : 0}/>-->
      <!--      </Button>-->
    </CardActions>
    <!--{#if active}-->
    <!--  <div transition:slide>-->
    <!--    <Divider/>-->
    <!--    <div class="pl-4 pr-4 pt-2 pb-2">-->
    <!--      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita autem,-->
    <!--      asperiores dolores, doloremque ea atque suscipit dolore, ut adipisci amet-->
    <!--      possimus dicta at voluptas consequatur!-->
    <!--    </div>-->
    <!--  </div>-->
    <!--{/if}-->
  </Card>
</main>



