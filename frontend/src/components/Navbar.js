// This is the Navbar component. It is present on all webpages.

/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import tw from "twin.macro"

import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectorAuth } from "../authSlice"

const Navbar = () => {
  const authState = useSelector(selectorAuth)

  return (
    <div>
      <nav tw="flex flex-row p-2 md:p-4 justify-between text-gray-200 bg-purple-700 sm:text-lg">
        <Link tw="hover:text-white hover:font-semibold" to="/">
          <h3> POKEDEX</h3>
        </Link>
        {authState.isUserLoggedIn && (
          <ul tw="flex flex-row">
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
        )}
      </nav>
    </div>
  )
}

export default Navbar
