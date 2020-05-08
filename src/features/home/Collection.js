/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import tw from "twin.macro"

import React, { useState } from "react"

import { useSelector, useDispatch } from "react-redux"
import { create } from "./collectionSlice"

const Collection = () => {
  const [collectionName, setCollectionName] = useState("")
  const dispatch = useDispatch()
  const collection = useSelector(state => state.collection)

  const handleCollectionCreation = e => {
    e.preventDefault()
    dispatch(create(collectionName))
    setCollectionName("")
  }

  return (
    <section tw="flex flex-1 flex-col h-screen py-2 px-2 bg-red-500">
      <div>
        <h3 tw="text-lg"> Your Collection </h3>
        <form onSubmit={handleCollectionCreation}>
          Add collection
          <input
            value={collectionName}
            onChange={e => setCollectionName(e.target.value)}
          />
          <button tw="bg-purple-500 rounded p-2" type="submit">
            add collection
          </button>
        </form>
      </div>
      <div tw="bg-pink-500">
        {collection.map(col => (
          <p key={col.id}> {col.collectionName} </p>
        ))}
      </div>
    </section>
  )
}

export default Collection
