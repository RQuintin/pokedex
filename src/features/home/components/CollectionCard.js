/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import tw from "twin.macro"
import React from "react"

const CollectionCard = props => {
  const { collection } = props

  return (
    <section tw="flex flex-row bg-blue-800 h-full shadow-lg text-white rounded p-8 my-2 overflow-auto">
      <div tw=" mx-1 my-auto text-xl md:text-lg">
        <h3 tw="bg-purple-600 whitespace-pre-line rounded px-1 py-4 md:p-2 text-center font-bold text-lg sm:text-xl md:text-lg">
          {collection.name}
        </h3>
      </div>
      <div tw="w-2/3 mx-1 my-auto text-center sm:text-lg md:text-base">
        {collection.pokemons.map(poke => (
          <p tw="text-gray-900 font-semibold bg-gray-100 p-1 rounded m-1">
            {poke}
          </p>
        ))}
      </div>
    </section>
  )
}

export default CollectionCard
