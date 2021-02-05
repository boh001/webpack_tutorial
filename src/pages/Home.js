import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
<div>
  <Link to="/">home</Link>
  <Link to="/detail">detail</Link>
  <Link to="/about">about</Link>
  </div>
)

export default Home