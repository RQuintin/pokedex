import { createSlice } from "@reduxjs/toolkit"

let collectionId = 1

export const collectionSlice = createSlice({
  name: "collection",
  initialState: [],
  reducers: {
    create: (state, action) => {
      state.push({
        id: collectionId,
        collectionName: action.payload,
      })
      collectionId++
    },
  },
})

export const { create } = collectionSlice.actions
export default collectionSlice.reducer
