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
        collectionName: action.payload,
      })
      collectionId++
    },
  },
})

export const selectorCollection = state => state.collection.collectionList
export const { create } = collectionSlice.actions
export default collectionSlice.reducer
