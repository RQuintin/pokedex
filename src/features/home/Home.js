import React from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import tw from "twin.macro"

const Home = () => {
  return (
    <section tw="flex flex-1 flex-col h-screen bg-red-500">
      <section tw="bg-green-500 py-10 px-2">
        <h3> Hello User!</h3>
        <p> Your balance is = XXX</p>
      </section>
      <section tw="py-2 px-2">
        <h3> Your Collection </h3>
        <p> Collection 1 </p>
        <p> Collection 2 </p>
      </section>
    </section>
  )
}

export default Home
