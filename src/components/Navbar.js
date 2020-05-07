/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import tw from "twin.macro"

import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <nav tw="text-center bg-yellow-500">
        <h3> POKEDEX</h3>
        <ul>
          <li>
            <Link to="/"> home </Link>
          </li>
          <li>
            <Link to="/user"> user </Link>
          </li>
          <li>
            <Link to="/explore"> explore </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
