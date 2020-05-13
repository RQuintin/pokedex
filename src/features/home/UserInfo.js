/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import tw from "twin.macro"

import React from "react"

const UserInfo = () => {
  const dateTime = new Date()
  const currentDate = dateTime.toDateString()

  return (
    <div tw="flex flex-row justify-around items-center bg-blue-800 py-8 px-2 md:py-10 md:px-4">
      <section tw="w-1/3 text-center bg-gray-200 rounded p-4 mr-1">
        <h3 tw="text-xl md:text-2xl lg:text-3xl"> Hello User!</h3>
        <p> {currentDate} </p>
      </section>
      <section tw="w-2/3 text-left text-white p-4 rounded ml-1 sm:text-lg md:text-xl lg:text-2xl md:flex md:flex-row md:justify-center">
        <p tw="m-1 p-2">
          <span tw="bg-yellow-400 text-gray-900 p-2 m-1 rounded">XXX</span>
          coins
        </p>
        <p tw="m-1 p-2">
          <span tw="bg-yellow-400 text-gray-900 p-2 m-1 rounded">YYY</span>
          collections
        </p>
      </section>
    </div>
  )
}

export default UserInfo
