/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import tw from "twin.macro"

import React from "react"

const SearchPokemon = () => {
  return (
    <div tw="flex flex-row bg-blue-800 py-8 px-2 md:py-10 md:px-4">
      <section tw="text-lg md:text-xl">
        <h3 tw="text-white"> Search Pokemon </h3>
        <form>
          <input tw="rounded" />
          <button
            tw="bg-purple-500 hover:bg-purple-600 text-gray-200 hover:text-white rounded p-2 m-1"
            type="submit"
          >
            search
          </button>
        </form>
      </section>
    </div>
  )
}

export default SearchPokemon
