import React, { Component } from 'react'
import './App.css'
import NavBar from './components/layout/NavBar'
import ProductPage from './components/content/ProductPage'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ProductPage />
      </div>
    )
  }
}

export default App
