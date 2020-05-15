/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import tw from "twin.macro"
import PokemonCard from "./components/PokemonCard"

import { useState, useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import {
  fetchPokemonNameUrl,
  selectorFilteredPokemon,
  selectorPokemon,
} from "./pokemonCardsSlice"

const PokemonCards = () => {
  const dispatch = useDispatch()
  const pokemonList = useSelector(selectorPokemon)
  const filteredPokemonList = useSelector(selectorFilteredPokemon)

  useEffect(() => {
    dispatch(fetchPokemonNameUrl())
  }, [dispatch])

  return (
    <div tw="p-2 md:p-4">
      <ul>
        <div tw="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
          {filteredPokemonList[0] === "xxx"
            ? "No Pokemon found."
            : filteredPokemonList.length === 0
            ? pokemonList.map(poke => (
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
              ))
            : filteredPokemonList.map(poke => (
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
        </div>
      </ul>
    </div>
  )
}

export default PokemonCards
