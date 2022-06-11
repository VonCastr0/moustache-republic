import React, { Component } from 'react'
import './App.css'
import NavBar from './components/layout/NavBar'
import ProductPage from './components/content/ProductPage'

class App extends Component {

  componentDidMount() {
    // Simple GET request using fetch
    fetch('https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product')
        .then(response => response.json())
        .then(data => this.setState({ totalReactPackages: data.total }));
}

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
