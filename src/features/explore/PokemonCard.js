/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import tw from "twin.macro"

const PokemonCard = props => {
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
        <img tw="bg-cover" alt={pokemonName} src={pokemonSprite} />
      </div>
      <div tw="mx-1">
        <p>{pokemonName}</p>
        <p>{pokemonType}</p>
        <p>{pokemonHeight}</p>
        <p>{pokemonWeight}</p>
        <p>{pokemonBaseExperience}</p>
      </div>
      <div tw="mx-1">
        <button tw="bg-gray-300 p-1 rounded">Add to collection</button>
      </div>
    </div>
  )
}

export default PokemonCard
