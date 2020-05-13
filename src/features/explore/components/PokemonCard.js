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

  //   const getColorObj = colourTypeMapping.find(poke => poke.type === pokeType)
  //   const pColor = getColorObj.color

  //   const pElement = styled.p(
  //     tw`text-center text-white text-center whitespace-normal rounded p-1 m-1`
  //   )

  //   return
  // }

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
      <div tw="flex flex-col flex-wrap w-2/5 m-1">
        <img
          tw="object-contain transform sm:scale-125"
          alt={pokemonName}
          src={pokemonSprite}
        />
        <p tw="bg-purple-500 font-bold text-white text-center whitespace-normal rounded p-1 m-1">
          {pokemonName}
        </p>
        {/* <p tw="bg-purple-500 text-center text-white text-center whitespace-normal rounded p-1 m-1">
          {pokemonType}
        </p> */}
      </div>
      <div tw="w-2/5 m-1 p-2 text-center text-white">
        <p>height: {pokemonHeight}</p>
        <p>weight: {pokemonWeight}</p>
        <p>exp: {pokemonBaseExperience}</p>
      </div>
      <div tw="w-1/5 m-1 text-center">
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
  )
}

export default PokemonCard
