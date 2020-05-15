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
    remove: (state, action) => {
      const collectionIdToRemove = action.payload.id

      const CollectionIdRemoveIndex = state.collectionList.findIndex(
        col => col.id === collectionIdToRemove
      )

      if (CollectionIdRemoveIndex !== -1) {
        state.collectionList.splice(CollectionIdRemoveIndex, 1)
      }
    },
  },
})

export const selectorCollection = state => state.collection.collectionList
export const { create, add, remove } = collectionSlice.actions
export default collectionSlice.reducer
