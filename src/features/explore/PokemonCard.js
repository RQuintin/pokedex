/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import tw from "twin.macro"

import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { add, selectorCollection } from "../home/collectionSlice"

const PokemonCard = props => {
  const collection = useSelector(selectorCollection)
  const dispatch = useDispatch()

  const [collectionInput, setCollectionInput] = useState("")

  const addPokemonToList = e => {
    e.preventDefault()
    console.log(collectionInput)
  }

  const {
    pokemonName,
    pokemonType,
    pokemonHeight,
    pokemonWeight,
    pokemonBaseExperience,
    pokemonSprite,
  } = props

  return (
    <div tw="flex flex-row justify-around items-center bg-red-500 p-2 my-2 rounded">
      <div tw="">
        <img tw="bg-cover bg-center" alt={pokemonName} src={pokemonSprite} />
      </div>
      <div tw="mx-1">
        <p>{pokemonName}</p>
        <p>{pokemonType}</p>
        <p>{pokemonHeight}</p>
        <p>{pokemonWeight}</p>
        <p>{pokemonBaseExperience}</p>
      </div>
      <div tw="mx-1">
        <form onSubmit={addPokemonToList}>
          {/* <label>
            Add Pokemon to collection <br />
            <select
              value={collectionInput}
              onChange={e => setCollectionInput(e.target.value)}
            >
              {collection.map(col => (
                <option key={collection.name} value={col.name}>
                  {col.name}
                </option>
              ))}
            </select>
          </label> */}
          <button type="submit" tw="bg-gray-300 p-1 rounded">
            add
          </button>
        </form>
      </div>
    </div>
  )
}

export default PokemonCard
