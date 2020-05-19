// This is the Navbar component. It is present on all webpages.

/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import tw from "twin.macro"

import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <nav tw="flex flex-row p-2 md:p-4 justify-between text-gray-200 bg-purple-700 sm:text-lg">
        <h3> POKEDEX</h3>
        <ul tw="flex flex-row">
          <li tw="mx-1 md:mx-2">
            <Link tw="hover:text-white hover:font-semibold" to="/">
              landing
            </Link>
          </li>
          <li tw="mx-1 md:mx-2">
            <Link tw="hover:text-white hover:font-semibold" to="/home">
              home
            </Link>
          </li>
          <li tw="mx-1 md:mx-2">
            <Link tw="hover:text-white hover:font-semibold" to="/explore">
              explore
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
