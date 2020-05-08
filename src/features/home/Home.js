/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import tw from "twin.macro"

import React from "react"

import UserInfo from "./UserInfo"
import Collection from "./Collection"

const Home = () => {
  return (
    <section tw="flex flex-1 flex-col h-screen bg-red-500">
      <UserInfo />
      <Collection />
    </section>
  )
}

export default Home
