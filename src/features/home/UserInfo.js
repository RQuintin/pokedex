/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import tw from "twin.macro"

import React from "react"

const UserInfo = () => {
  return (
    <div tw="bg-green-500 py-10 px-2">
      <h3 tw="text-lg text-center"> Hello User!</h3>
      <p tw="text-center"> Your balance is = XXX</p>
    </div>
  )
}

export default UserInfo
