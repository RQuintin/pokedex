/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import tw from "twin.macro"
import styled from "@emotion/styled/macro"

import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { add, selectorCollection } from "../../home/collectionSlice"

const PokemonCard = props => {
  const collection = useSelector(selectorCollection)
  const dispatch = useDispatch()

  const {
    pokemonId,
    pokemonName,
    pokemonType,
    pokemonHeight,
    pokemonWeight,
    pokemonBaseExperience,
    pokemonSprite,
  } = props

  // generating colours like this because twin.macro doesn't
  // support passing colours as strings
  const generatePokeTypeColor = color => {
    switch (color) {
      case "normal":
        return tw`bg-orange-700`
      case "fighting":
        return tw`bg-red-800`
      case "flying":
        return tw`bg-purple-600`
      case "poison":
        return tw`bg-pink-800`
      case "ground":
        return tw`bg-yellow-600`
      case "rock":
        return tw`bg-yellow-800`
      case "bug":
        return tw`bg-green-600`
      case "ghost":
        return tw`bg-purple-900`
      case "steel":
        return tw`bg-gray-600`
      case "fire":
        return tw`bg-orange-500`
      case "water":
        return tw`bg-blue-500`
      case "grass":
        return tw`bg-green-800`
      case "electric":
        return tw`bg-yellow-500`
      case "psychic":
        return tw`bg-pink-600`
      case "ice":
        return tw`bg-blue-300`
      case "dragon":
        return tw`bg-purple-400`
      case "dark":
        return tw`bg-orange-900`
      case "fairy":
        return tw`bg-pink-300`
      case "unknown":
        return tw`bg-gray-500`
      case "shadow":
        return tw`bg-gray-700`
      default:
        return tw`bg-white`
    }
  }

  const PokeTypeColorElement = styled.p`
    ${({ color }) => generatePokeTypeColor(color)}
  `

  const [pokemonCollectionInput, setPokemonCollectionInput] = useState({
    id: "",
    pokemon: "",
  })

  const handlePokemonToCollection = e => {
    setPokemonCollectionInput({
      ...pokemonCollectionInput,
      id: Number(e.target.value),
      pokemon: pokemonName,
    })
  }

  const addPokemonToCollection = e => {
    e.preventDefault()
    setPokemonCollectionInput({
      ...pokemonCollectionInput,
      id: "",
      pokemon: "",
    })
    dispatch(add(pokemonCollectionInput))
  }

  return (
    <div tw="flex flex-row justify-around items-center bg-blue-800 p-2 rounded overflow-x-auto">
      <div tw="flex flex-col flex-wrap w-1/3 m-1">
        <img
          tw="object-contain transform sm:scale-125"
          alt={pokemonName}
          src={pokemonSprite}
        />
        <p tw="bg-gray-100 text-gray-900 font-extrabold text-center whitespace-normal rounded p-1 m-1">
          {pokemonName}
        </p>

        <PokeTypeColorElement
          tw="text-center text-white font-semibold text-center whitespace-normal rounded p-1 m-1"
          color={pokemonType}
        >
          {pokemonType}
        </PokeTypeColorElement>
      </div>
      <div tw="flex flex-col items-center w-2/3">
        <div>
          <p tw="my-2">
            <span tw="bg-gray-900 text-gray-100 p-1 mx-2 rounded">height</span>
            <span tw="bg-gray-100 text-gray-900 p-1 rounded">
              {pokemonHeight}
            </span>
          </p>
          <p tw="my-2">
            <span tw="bg-gray-900 text-gray-100 p-1 mx-2 rounded">weight</span>
            <span tw="bg-gray-100 text-gray-900 p-1 rounded">
              {pokemonWeight}
            </span>
          </p>
          <p tw="my-2">
            <span tw="bg-gray-900 text-gray-100 p-1 mx-2 rounded">
              base-exp
            </span>
            <span tw="bg-gray-100 text-gray-900 p-1 rounded">
              {pokemonBaseExperience}
            </span>
          </p>
        </div>
        <div tw="">
          <form onSubmit={addPokemonToCollection}>
            <label>
              <select
                value={pokemonCollectionInput.id}
                onChange={handlePokemonToCollection}
              >
                <option value={-1}>...</option>
                {collection.map(clctn => (
                  <option
                    key={`${clctn.id}-${pokemonId}`}
                    value={Number(clctn.id)}
                  >
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
    </div>
  )
}

export default PokemonCard
