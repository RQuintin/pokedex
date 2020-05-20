/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from "@emotion/core"
import tw from "twin.macro"
import "tailwindcss/dist/base.css"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom"

import React, { Fragment, Component } from "react"
import { useSelector } from "react-redux"

import Navbar from "./components/Navbar"
import Landing from "./features/landing/Landing"
import Home from "./features/home/Home"
import Explore from "./features/explore/Explore"

import { selectorAuth } from "./authSlice"

const PrivateRoute = ({ component: Component, authState, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authState.isUserLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

const App = () => {
  const authState = useSelector(selectorAuth)
  return (
    <Router>
      <div tw="flex flex-col bg-green-100 min-h-screen">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <PrivateRoute path="/home" component={Home} authState={authState} />
          <PrivateRoute
            path="/explore"
            component={Explore}
            authState={authState}
          />
        </Switch>
      </div>
    </Router>
  )
}

export default App
