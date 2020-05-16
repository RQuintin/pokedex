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
  const [pokemonList, setPokemonList] = useState(collectionObj.pokemons)

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
      setPokemonList(collectionObj.pokemons)
    }
  }

  const handleSave = collectionId => {
    dispatch(
      edit({
        id: collectionId,
        editedName: collectionName,
        editedPokemonList: pokemonList,
      })
    )
    setIsEdit("no")
  }

  const handleRemovePokemon = pokeName => {
    const newPokemonList = pokemonList.filter(poke => poke !== pokeName)
    setPokemonList(newPokemonList)
    console.log(pokeName)
    console.log(pokemonList)
    console.log(newPokemonList)
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
              <ul>
                {collectionObj.pokemons.map(poke => (
                  <li
                    key={poke}
                    tw="text-gray-900 font-semibold bg-gray-100 p-1 rounded m-1"
                  >
                    {poke}
                  </li>
                ))}
              </ul>
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
                <ul>
                  {pokemonList.map(poke => (
                    <li
                      key={poke}
                      tw="flex flex-row justify-between items-center text-gray-900 mx-4 font-semibold bg-gray-100 p-1 my-1 rounded"
                    >
                      <p>{poke}</p>
                      <button
                        onClick={() => handleRemovePokemon(poke)}
                        tw="font-semibold bg-red-700 p-1 rounded text-gray-100"
                      >
                        x
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

export default CollectionCard
