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
    <div tw="p-2">
      <section>
        <h3 tw="text-lg"> Your Collection </h3>
        <form onSubmit={handleCollectionCreation}>
          <input
            value={collectionName}
            onChange={e => setCollectionName(e.target.value)}
          />
          <button tw="bg-purple-500 rounded p-1 m-1" type="submit">
            add collection
          </button>
        </form>
      </section>
      <section>
        {collection.map(col => (
          <p tw="bg-gray-300 p-8 rounded my-2" key={col.id}>
            {col.collectionName}
          </p>
        ))}
      </section>
    </div>
  )
}

export default Collection
