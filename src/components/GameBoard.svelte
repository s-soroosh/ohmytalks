<script>
  import {board, user} from "./store";
  import axios from "axios";

  function getOpponent(b) {
    if (!b) {
      return null
    }
    const currentUserId = $user.user.id
    return b.player1.id == currentUserId ? b.player2 : b.player1
  }

  function createTable(b) {
    console.log({b})
    if (!b) {
      return []
    }
    let moves = b.moves
    const table = []
    for (let i = 0; i < b.size; i++) {
      const row = []
      for (let j = 0; j < b.size; j++) {
        const filteredMoves = moves.filter(m => m.x == i && m.y == j)
        if (filteredMoves.length > 0) {
          const move = filteredMoves[0]
          if (move.player == $user.user.id) {
            row.push({x: i, y: j, marker: "X"})
          } else {
            row.push({x: i, y: j, marker: "O"})
          }
        } else {
          row.push({x: i, y: j, marker: ""})
        }
      }
      table.push(row)
    }
    return table
  }

  let manualBoard = undefined
  const unsubscribeBoard = board.subscribe((value) => {
    manualBoard = value
  })
  $: opponent = getOpponent(manualBoard)

  $: table = createTable(manualBoard)

  function clickCell(cell) {
    axios.post(`https://xo-backend-soroosh.fandogh.cloud/moves`, {
          ...cell,
          game: manualBoard.code
        },
        {headers: {"Authorization": `Bearer ${$user.jwt}`}}
    )
  }
</script>
<div>
  {#if manualBoard}
    <div>
      The game code is {manualBoard.code}
    </div>
    <div>
      {#if opponent}
        Your opponent is {opponent.email}
      {:else}
        Waiting for another player... please share the code with one of your friends
      {/if}
    </div>
  {/if}
  {#if manualBoard && manualBoard.winner}
    {unsubscribeBoard() || ""}
    {manualBoard.winner.username} won the game :tada:
  {:else}
    <table>
      {#each table as row}
        <tr class="row">
          {#each row as cell}
            <td class="cell" on:click={() => clickCell(cell)}>
              {cell.marker}
            </td>
          {/each}
        </tr>
      {/each}
    </table>
  {/if}
</div>

<style>
  div {
    background-color: #ffffff;
  }

  table {
    width: 500px;
    height: 500px;
    margin: 50px;
    border-collapse: collapse;
    border-style: hidden;
  }

  .cell {
    border: 2px solid #223344;
    width: 160px;
    height: 160px;
    font-size: 50px;
    text-align: center;
  }
</style>
