/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import tw from "twin.macro"
import React, { useState } from "react"

import { useDispatch } from "react-redux"
import { remove, edit } from "../collectionSlice"

const CollectionCard = props => {
  const { collectionObj } = props
  const dispatch = useDispatch()
  const [collectionName, setCollectionName] = useState("")
  const [isEdit, setIsEdit] = useState("no")

  const handleRemoveCollection = collectionId => {
    dispatch(remove({ id: collectionId }))
  }

  const handleEditToggle = () => {
    if (isEdit === "no") {
      setIsEdit("yes")
      setCollectionName(collectionObj.name)
    } else {
      setIsEdit("no")
      setCollectionName(collectionObj.name)
    }
  }

  const handleSave = collectionId => {
    dispatch(
      edit({
        id: collectionId,
        editedName: collectionName,
      })
    )
    setIsEdit("no")
  }

  const handleCollectionNameChange = e => {
    setCollectionName(e.target.value)
  }

  return (
    <div tw="flex flex-col bg-blue-800 h-full shadow-lg text-white rounded overflow-auto m-1">
      {isEdit === "no" ? (
        <section>
          <div tw="flex flex-row justify-end py-1 px-2">
            <button onClick={handleEditToggle} tw="mx-1 p-1 rounded">
              edit
            </button>
            <button
              onClick={() => handleRemoveCollection(collectionObj.id)}
              tw="mx-1 p-1 rounded"
            >
              delete
            </button>
          </div>
          <div tw="flex flex-row justify-around pt-4 pb-8 px-2">
            <div tw="my-auto text-xl md:text-lg">
              <h3 tw="bg-purple-600 whitespace-pre-line rounded px-1 py-4 md:p-2 text-center font-bold text-lg sm:text-xl md:text-lg">
                {collectionObj.name}
              </h3>
            </div>
            <div tw="w-2/3 my-auto text-center sm:text-lg md:text-base">
              {collectionObj.pokemons.map(poke => (
                <p
                  key={poke}
                  tw="text-gray-900 font-semibold bg-gray-100 p-1 rounded m-1"
                >
                  {poke}
                </p>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <div>
          <section>
            <div tw="flex flex-row justify-between py-1 px-2">
              <button onClick={handleEditToggle} tw="mx-1 p-1 rounded">
                cancel
              </button>
              <button
                onClick={() => handleSave(collectionObj.id)}
                tw="mx-1 p-1 rounded"
              >
                save
              </button>
            </div>
            <div tw="flex flex-row justify-around pt-4 pb-8 px-2">
              <div tw="my-auto text-xl md:text-lg">
                <input
                  value={collectionName}
                  onChange={handleCollectionNameChange}
                  tw="bg-purple-600 whitespace-pre-line rounded px-1 py-4 md:p-2 text-center font-bold text-lg sm:text-xl md:text-lg"
                />
              </div>
              <div tw="w-2/3 my-auto text-center sm:text-lg md:text-base">
                {collectionObj.pokemons.map(poke => (
                  <p
                    key={poke}
                    tw="text-gray-900 font-semibold bg-gray-100 p-1 rounded m-1"
                  >
                    {poke}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

export default CollectionCard
