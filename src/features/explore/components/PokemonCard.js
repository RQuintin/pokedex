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

  // const PokeTypeDiv = props => {
  //   const { pokeType } = props

  // const getColorObj = colourTypeMapping.find(poke => poke.type === pokeType)
  // const pColor = getColorObj.color

  //   const pElement = styled.p(
  //     tw`text-center text-white text-center whitespace-normal rounded p-1 m-1`
  //   )

  //   return
  // }

  const StyledPokeTypePTag = props => {
    const { pokeType } = props

    const colourTypeMapping = [
      { type: "normal", color: "bg-orange-700" },
      { type: "fighting", color: "bg-red-800" },
      { type: "flying", color: "bg-purple-600" },
      { type: "poison", color: "bg-pink-800" },
      { type: "ground", color: "bg-yellow-600" },
      { type: "rock", color: "bg-yellow-800" },
      { type: "bug", color: "bg-green-600" },
      { type: "ghost", color: "bg-purple-900" },
      { type: "steel", color: "bg-gray-600" },
      { type: "fire", color: "bg-orange-500" },
      { type: "water", color: "bg-blue-500" },
      { type: "grass", color: "bg-green-800" },
      { type: "electric", color: "bg-yellow-500" },
      { type: "psychic", color: "bg-pink-600" },
      { type: "ice", color: "bg-blue-300" },
      { type: "dragon", color: "bg-purple-400" },
      { type: "dark", color: "bg-orange-900" },
      { type: "fairy", color: "bg-pink-300" },
      { type: "unknown", color: "bg-gray-500" },
      { type: "shadow", color: "bg-gray-700" },
    ]

    const getColorObj = colourTypeMapping.find(poke => poke.type === pokeType)
    const pColor = getColorObj.color
    console.log(pColor)
    return (
      <p
        css={`
          ${tw`text-center text-white text-center whitespace-normal rounded p-1 m-1`}
          ${tw`${pColor}`}
        `}
      >
        {pokeType}
      </p>
    )
  }

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
    <div tw="flex flex-row justify-around items-center bg-blue-800 p-2 my-2 rounded overflow-x-auto">
      <div tw="flex flex-col flex-wrap w-1/3 m-1">
        <img
          tw="object-contain transform sm:scale-125"
          alt={pokemonName}
          src={pokemonSprite}
        />
        <p tw="bg-purple-500 font-bold text-white text-center whitespace-normal rounded p-1 m-1">
          {pokemonName}
        </p>
        <p tw="bg-purple-500 text-center text-white text-center whitespace-normal rounded p-1 m-1">
          {pokemonType}
        </p>
        {/* <StyledPokeTypePTag pokeType={pokemonType} /> */}
      </div>
      <div tw="flex flex-col items-center w-2/3">
        <div tw="text-white">
          <p>height: {pokemonHeight}</p>
          <p>weight: {pokemonWeight}</p>
          <p>exp: {pokemonBaseExperience}</p>
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
