/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import tw from "twin.macro"
import "tailwindcss/dist/base.css"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import React from "react"
import Navbar from "./components/Navbar"
import Home from "./features/home/Home"
import User from "./features/user/User"
import Explore from "./features/explore/Explore"

const App = () => {
  return (
    <Router>
      <div tw="flex flex-col bg-green-100 min-h-screen">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user" component={User} />
          <Route exact path="/explore" component={Explore} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
