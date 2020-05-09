/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import tw from "twin.macro"

import axios from "axios"
import React, { useState, useEffect } from "react"

const URL = "https://pokeapi.co/api/v2/pokemon?limit=150"

const PokemonCards = () => {
  return <section tw="p-2">Pokemon Cards</section>
}

export default PokemonCards
