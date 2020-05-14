/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import tw from "twin.macro"

import React, { useState } from "react"

import { useDispatch } from "react-redux"
import { search } from "./pokemonCardsSlice"

const SearchPokemon = () => {
  const dispatch = useDispatch()

  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchTermChange = e => {
    setSearchTerm(e.target.value)
    dispatch(search({ searchTerm: e.target.value }))
  }

  return (
    <div tw="flex flex-row bg-blue-800 py-8 px-2 md:py-10 md:px-4">
      <section tw="text-lg md:text-xl">
        <h3 tw="text-white"> Search Pokemon </h3>
        <form>
          <input
            tw="rounded"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
          {/* <button
            tw="bg-purple-700 hover:bg-purple-800 text-gray-200 hover:text-white rounded p-2 m-1"
            type="submit"
          >
            search
          </button> */}
        </form>
      </section>
    </div>
  )
}

export default SearchPokemon
