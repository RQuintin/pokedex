/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import tw from "twin.macro"

import axios from "axios"
import React, { useState, useEffect } from "react"

const URL = "https://pokeapi.co/api/v2/pokemon?limit=150"

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

  return <section tw="p-2">Pokemon Cards</section>
}

export default PokemonCards
