/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import tw from "twin.macro"

import axios from "axios"
import React, { useState, useEffect } from "react"

const URL = "https://pokeapi.co/api/v2/pokemon?limit=150"

const PokeCard = () => {
  return (
    <div tw="flex flex-row justify-around items-center bg-red-500 p-2">
      <div tw="">
        <img
          tw="bg-cover"
          alt="pokemon"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        />
      </div>
      <div tw="">
        <p>name</p>
        <p>type</p>
        <p>stats</p>
      </div>
      <div tw="">
        <p> Button to add to list</p>
      </div>
    </div>
  )
}

const PokemonCards = () => {
  const [pokeData, setPokeData] = useState([])

  useEffect(() => {
    const fetchPokemon = async () => {
      const result = await axios.get(URL)
      console.log(result.data)
      setPokeData(result.data)
    }
    fetchPokemon()
  }, [])

  return (
    <div tw="p-2">
      Pokemon Cards
      <section tw="grid grid-cols-1 gap-2">
        <PokeCard />
        <PokeCard />
      </section>
    </div>
  )
}

export default PokemonCards
