/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import tw from "twin.macro"
import mobile_phone_wallpaper from "./assets/images/pikachu_phone.jpg"
import desktop_wallpaper from "./assets/images/pikachu.jpg"

import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"

const ModalLogin = props => {
  const { loginModalBool, setLoginModalBool } = props

  return (
    <div tw="bg-gray-200 text-gray-900 rounded-lg shadow-lg p-20 md:p-32 lg:p-48">
      <div> Login Modal open. </div>
      <button onClick={() => setLoginModalBool(!loginModalBool)}>
        Close modal.
      </button>
    </div>
  )
}

const ModalSignup = props => {
  const { signupModalBool, setSignupModalBool } = props

  return (
    <div tw="bg-gray-200 text-gray-900 rounded-lg shadow-lg p-24 md:p-32 lg:p-48">
      <div> Signup Modal open. </div>
      <button onClick={() => setSignupModalBool(!signupModalBool)}>
        Close modal.
      </button>
    </div>
  )
}

const ButtonBase = styled.button(
  tw`hover:text-gray-900 hover:bg-gray-100 border border-white rounded font-semibold text-lg p-2 m-2 md:text-xl md:px-2 md:px-4 lg:text-2xl lg:py-4 lg:px-6`
)

const Landing = () => {
  const [loginModalBool, setLoginModalBool] = useState(false)
  const [signupModalBool, setSignupModalBool] = useState(false)

  const imageUrl =
    window.innerWidth >= 650 ? desktop_wallpaper : desktop_wallpaper

  return (
    <div
      css={[
        tw`flex flex-1 flex-col items-center justify-around h-screen w-full`,
        css`
          background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url(${imageUrl});
          ${tw`bg-auto bg-cover bg-center bg-no-repeat`}
        `,
      ]}
    >
      <div>
        <h1 tw="text-white text-4xl md:text-4xl lg:text-6xl font-bold">
          Pokedex
        </h1>
      </div>
      <div tw="flex flex-col text-white">
        {signupModalBool === true ? (
          <ModalSignup
            signupModalBool={signupModalBool}
            setSignupModalBool={setSignupModalBool}
          />
        ) : loginModalBool === true ? (
          <ModalLogin
            loginModalBool={loginModalBool}
            setLoginModalBool={setLoginModalBool}
          />
        ) : (
          <div>
            <ButtonBase onClick={() => setLoginModalBool(!loginModalBool)}>
              login
            </ButtonBase>
            <ButtonBase onClick={() => setSignupModalBool(!signupModalBool)}>
              sign up
            </ButtonBase>
          </div>
        )}
      </div>

      <div></div>
    </div>
  )
}

export default Landing
