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
      console.log(action.payload)
      const collectionListIndex = state.collectionList.findIndex(
        x => x.id === action.payload.id
      )

      console.log(collectionListIndex)
      if (collectionListIndex !== -1) {
        state.collectionList[collectionListIndex].pokemons.push(
          action.payload.pokemon
        )
      }
    },
  },
})

export const selectorCollection = state => state.collection.collectionList
export const { create, add } = collectionSlice.actions
export default collectionSlice.reducer
