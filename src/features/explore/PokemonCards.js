/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import tw from "twin.macro"
import PokemonCard from "./PokemonCard"

import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import {
  fetchPokemonNameUrl,
  NUMBER_OF_POKEMON,
  selectorPokemon,
} from "./pokemonCardsSlice"

const PokemonCards = () => {
  const dispatch = useDispatch()
  const pokemonList = useSelector(selectorPokemon)

  useEffect(() => {
    if (pokemonList.length !== NUMBER_OF_POKEMON) {
      return dispatch(fetchPokemonNameUrl())
    }
  }, [dispatch, pokemonList])

  return (
    <div tw="p-2">
      Pokemon Cards
      <section tw="grid grid-cols-1 gap-2">
        <ul>
          {pokemonList.map(poke => (
            <PokemonCard
              key={`key-${poke.id}`}
              pokemonId={poke.id}
              pokemonName={poke.name}
              pokemonType={poke.type}
              pokemonHeight={poke.height}
              pokemonWeight={poke.weight}
              pokemonBaseExperience={poke.baseExperience}
              pokemonSprite={poke.sprites}
            />
          ))}
        </ul>
      </section>
    </div>
  )
}

export default PokemonCards
