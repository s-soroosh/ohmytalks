<script>
  import {Button, Card, CardActions, CardSubtitle, CardTitle} from 'svelte-materialify';
  import {createEventDispatcher} from 'svelte';

  export let name;
  export let selected;

  const dispatch = createEventDispatcher();

  function selectCard() {
    selected = name;
  }
</script>

<main on:click={selectCard}>
  <Card style="max-width:350px;">
    <img src="//picsum.photos/350" alt="background"/>
    <CardTitle>Card {name}</CardTitle>
    <CardSubtitle>1,000 miles of wonder</CardSubtitle>
    <CardActions>
      <Button text>Button</Button>
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



