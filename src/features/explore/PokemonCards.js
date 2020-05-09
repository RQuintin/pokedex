/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import tw from "twin.macro"
import PokemonCard from "./PokemonCard"

import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { fetchData, selectorPokemon } from "./pokemonCardsSlice"

const PokemonCards = () => {
  const dispatch = useDispatch()
  const pokemonList = useSelector(selectorPokemon)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  return (
    <div tw="p-2">
      Pokemon Cards
      <section tw="grid grid-cols-1 gap-2">
        <ul>
          {pokemonList.map(poke => (
            <li key={poke.name}>
              <PokemonCard pokemonName={poke.name} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default PokemonCards
