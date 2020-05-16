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

      const collectionIdRemoveIndex = state.collectionList.findIndex(
        col => col.id === collectionIdToRemove
      )

      if (collectionIdRemoveIndex !== -1) {
        state.collectionList.splice(collectionIdRemoveIndex, 1)
      }
    },
    edit: (state, action) => {
      const collectionIdToEdit = action.payload.id
      const editedName = action.payload.editedName

      const collectionIdEditIndex = state.collectionList.findIndex(
        col => col.id === collectionIdToEdit
      )

      if (collectionIdEditIndex !== -1) {
        state.collectionList[collectionIdEditIndex].name = editedName
      }
    },
  },
})

export const selectorCollection = state => state.collection.collectionList
export const { create, add, remove, edit } = collectionSlice.actions
export default collectionSlice.reducer
