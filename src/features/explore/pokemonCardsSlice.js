import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const NUMBER_OF_POKEMON = 10

const URL = `https://pokeapi.co/api/v2/pokemon?limit=${NUMBER_OF_POKEMON}`

const initialState = {
  pokemonList: [],
}

const pokemonExists = (arr, val) => {
  return arr.some(arrVal => val === arrVal)
}

export const pokemonCardsSlice = createSlice({
  name: "pokemonCards",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      const existingPokeIds = state.pokemonList.map(poke => poke.id)
      if (!pokemonExists(existingPokeIds, action.payload.id)) {
        state.pokemonList.push(action.payload)
      }
    },
  },
})

export const { add } = pokemonCardsSlice.actions

export const fetchPokemonNameUrl = () => {
  return async dispatch => {
    try {
      const response = await axios.get(URL)
      const data = response.data.results

      data.map(async poke => {
        const responseDetails = await axios.get(poke.url)

        let tempDetails = {
          id: responseDetails.data.id,
          name: responseDetails.data.species.name,
          baseExperience: responseDetails.data.base_experience,
          height: responseDetails.data.height,
          weight: responseDetails.data.weight,
          type: responseDetails.data.types[0].type.name,
          sprites: responseDetails.data.sprites.front_default,
        }

        dispatch(add(tempDetails))
      })
    } catch (e) {
      console.log("Could not fetch data.")
    }
  }
}

export const selectorPokemon = state => state.pokemon.pokemonList

export default pokemonCardsSlice.reducer
