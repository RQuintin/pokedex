import { createSlice } from "@reduxjs/toolkit"

let collectionId = 1

const initialState = {
  collectionList: [],
}

export const collectionSlice = createSlice({
  name: "collection",
  initialState: initialState,
  reducers: {
    create: (state, action) => {
      state.collectionList.push({
        id: collectionId,
        name: action.payload,
        pokemons: [],
      })
      collectionId++
    },
    add: (state, action) => {
      const collectionListIndex = state.collectionList.findIndex(
        x => x.id === action.payload.id
      )
      if (collectionListIndex !== -1) {
        state.collectionList[collectionListIndex].pokemons.push(
          action.payload.pokemon
        )
      }
    },
  },
})

export const selectorCollection = state => state.collection.collectionList
export const { create } = collectionSlice.actions
export default collectionSlice.reducer
