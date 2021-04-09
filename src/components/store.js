import {derived, get, writable} from "svelte/store";
import axios from "axios";

const tempUser = {
  "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjE3NjM3NTEyLCJleHAiOjE2MjAyMjk1MTJ9.6WtVirDqnY9xqi1fCbwRSFkusDgFGlx3Yv8Tni1k1lM",
  "user": {
    "id": 4,
    "username": "hi@gmail.com",
    "email": "hi@gmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": null,
    "role": {
      "id": 1,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated"
    },
    "created_at": "2021-04-05T15:33:29.877Z",
    "updated_at": "2021-04-05T15:33:29.891Z"
  }
}
const userStore = writable(undefined)

export const user = {
  subscribe: userStore.subscribe,
  login: (userInput) => {
    const responsePromise = axios.post(
        "https://xo-backend-soroosh.fandogh.cloud/auth/local", {
          identifier: userInput.email,
          password: userInput.password
        }
    ).then(response => userStore.set(response.data))
    return responsePromise
  },
  register: (userInput) => {
    const responsePromise = axios.post(
        "https://xo-backend-soroosh.fandogh.cloud/auth/local/register",
        {
          ...userInput,
          username: userInput.email
        }
    )
    .then(response => userStore.set(response.data))

    return responsePromise
  }
}

const tempGame = {
  "id": 15,
  "code": "rOZQ",
  "player1": {
    "id": 4,
    "username": "hi2@gmail.com",
    "email": "hi2@gmail.com",
    "provider": "local",
    "password": "$2a$10$TpqMCddlkXTGBS6yd4yvsu1FfL8/uxgAi8P1Ldw57q1vEafiEKjx2",
    "resetPasswordToken": null,
    "confirmationToken": null,
    "confirmed": true,
    "blocked": null,
    "role": 1,
    "created_by": null,
    "updated_by": null,
    "created_at": "2021-04-08T13:18:40.467Z",
    "updated_at": "2021-04-08T13:18:40.473Z"
  },
  "player2": null,
  "turn": null,
  "size": 3,
  "winner": null,
  "published_at": "2021-04-09T15:13:22.122Z",
  "created_by": null,
  "updated_by": null,
  "created_at": "2021-04-09T15:13:22.123Z",
  "updated_at": "2021-04-09T15:13:22.140Z",
  "moves": []
}
const gameStore = writable(undefined)

export const game = {
  subscribe: gameStore.subscribe,
  newGame: (jwtToken) => {
    return axios.post("https://xo-backend-soroosh.fandogh.cloud/games",
        {size: 3},
        {headers: {"Authorization": `Bearer ${jwtToken}`}})
    .then(response => gameStore.set(response.data))
  },
  joinGame: (jwtToken, gameCode) => {
    return axios.post(
        `https://xo-backend-soroosh.fandogh.cloud/games/${gameCode}/join`, {},
        {headers: {"Authorization": `Bearer ${jwtToken}`}}
    )
    .then(response => gameStore.set(response.data))
  }
}

export const board = derived([userStore, gameStore], ([$user, $game], set) => {
  if ($user && $game) {
    const interval = setInterval(() => {
      axios.get(`https://xo-backend-soroosh.fandogh.cloud/games/${$game.code}`,
          {headers: {"Authorization": `Bearer ${$user.jwt}`}})
      .then(response => set(response.data))
    }, 1_000)

    return () => {
      clearInterval(interval)
    }

  }
}, undefined);

