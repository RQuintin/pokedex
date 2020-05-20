// This is the Navbar component. It is present on all webpages.

/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import tw from "twin.macro"

import React from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectorAuth, logout } from "../authSlice"

const Navbar = () => {
  const authState = useSelector(selectorAuth)
  const dispatch = useDispatch()

  const handleLogOut = e => {
    dispatch(logout())
  }

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
            <li tw="mx-1 md:mx-2">
              <button
                onClick={handleLogOut}
                tw="p-1 rounded bg-gray-200 text-gray-900 hover:bg-gray-800 hover:text-white hover:font-semibold"
              >
                logout
              </button>
            </li>
          </ul>
        )}
      </nav>
    </div>
  )
}

export default Navbar
