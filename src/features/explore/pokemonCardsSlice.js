import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const URL = "https://pokeapi.co/api/v2/pokemon?limit=10"

const initialState = {
  pokemonList: [],
}

export const pokemonCardsSlice = createSlice({
  name: "pokemonCards",
  initialState: initialState,
  reducers: {
    getData: (state, action) => {
      state.pokemonList = action.payload
    },
  },
})

export const { getData } = pokemonCardsSlice.actions

export const fetchData = () => {
  return async dispatch => {
    try {
      const response = await axios.get(URL)
      const data = response.data.results
      dispatch(getData(data))
    } catch (e) {
      console.log("Could not fetch data.")
    }
  }
}

export const selectorPokemon = state => state.pokemon.pokemonList

export default pokemonCardsSlice.reducer
