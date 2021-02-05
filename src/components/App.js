import React from 'react'
import { Route, Switch } from 'react-router-dom'
import loadable from '@loadable/component'

const Home = loadable(() => import(/* webpackChunkName: "Home" */ 'pages/Home'))
const Detail = loadable(() => import(/* webpackChunkName: "Detail" */ 'pages/Detail'))
const About = loadable(() => import(/* webpackChunkName: "About" */ 'pages/About'))

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/detail" component={Detail} />
      <Route path="/about" component={About} />
    </Switch>
  )
}

export default App
