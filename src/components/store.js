import {writable} from "svelte/store";
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
const userStore = writable(tempUser)

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

const gameStore = writable(undefined)

export const game = {
  subscribe: gameStore.subscribe,
  newGame: (jwtToken) => {
    axios.post("https://xo-backend-soroosh.fandogh.cloud/games",
        {size: 3},
        {headers: {"Authorization": `Bearer ${jwtToken}`}})
    .then(response => gameStore.set(response.data))
  },
  joinGame: (jwtToken) => {
  }
}



