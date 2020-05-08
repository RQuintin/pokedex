import { configureStore } from "@reduxjs/toolkit"
import collectionReducer from "../features/home/collectionSlice"

export default configureStore({
  reducer: {
    collection: collectionReducer,
  },
})
