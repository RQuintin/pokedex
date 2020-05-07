/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import tw from "twin.macro"

import React from "react"

const Navbar = () => {
  return (
    <div>
      <nav tw="text-center bg-yellow-500">
        <h3> POKEDEX</h3>
        <ul>
          <li>home</li>
          <li>user</li>
          <li>explore</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
