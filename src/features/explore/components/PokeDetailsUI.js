/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import tw from "twin.macro"

// A component to display the pokemon attributes.
const PokeDetailsUI = props => {
  const { keyAttribute, val } = props
  return (
    <p tw="my-2">
      <span tw="bg-gray-900 text-gray-100 p-1 mx-2 rounded">
        {keyAttribute}
      </span>
      <span tw="bg-gray-100 text-gray-900 p-1 rounded">{val}</span>
    </p>
  )
}

export default PokeDetailsUI
