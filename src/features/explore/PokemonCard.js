/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import tw from "twin.macro"

import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { add, selectorCollection } from "../home/collectionSlice"

const PokemonCard = props => {
  const collection = useSelector(selectorCollection)
  const dispatch = useDispatch()

  const [pokemonCollectionInput, setPokemonCollectionInput] = useState({
    id: "",
    pokemon: "",
  })

  const handlePokemonToCollection = e => {
    console.log(e.target.value)
    setPokemonCollectionInput({
      ...pokemonCollectionInput,
      id: e.target.value,
      pokemon: pokemonId,
    })
  }

  const addPokemonToCollection = e => {
    e.preventDefault()
    console.log("addPokemonToCollection: ", pokemonCollectionInput)
    setPokemonCollectionInput({
      ...pokemonCollectionInput,
      id: "",
      pokemon: "",
    })
  }

  const {
    pokemonId,
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
        <form onSubmit={addPokemonToCollection}>
          <label>
            Select Collection <br />
            <select
              value={pokemonCollectionInput.id}
              onChange={handlePokemonToCollection}
            >
              <option value={-1}>Select pokemon</option>
              {collection.map(clctn => (
                <option key={`${clctn.id}-${pokemonId}`} value={clctn.id}>
                  {clctn.name}
                </option>
              ))}
            </select>
          </label>
          <button type="submit" tw="rounded bg-gray-300 p-1 m-1">
            add
          </button>
        </form>
      </div>
    </div>
  )
}

export default PokemonCard
