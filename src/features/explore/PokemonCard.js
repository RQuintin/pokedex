/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import tw from "twin.macro"

const PokemonCard = props => {
  const { pokemonName } = props

  return (
    <div tw="flex flex-row justify-around items-center bg-red-500 p-2">
      <div tw="">
        <img
          tw="bg-cover"
          alt="pokemon"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        />
      </div>
      <div tw="mx-1">
        <p>{pokemonName}</p>
      </div>
      <div tw="mx-1">
        <button tw="bg-gray-300 p-1 rounded">Add to collection</button>
      </div>
    </div>
  )
}

export default PokemonCard
