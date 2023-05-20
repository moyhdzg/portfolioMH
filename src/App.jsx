import React from "react"
import Header from './components/Header'
import Footer from './components/Footer'
import './components/styles.module.css'
import './App.css'


function App() {

  return (
    
    <div className="custom-bg">
      <header><Header/></header>
      <div>Home</div>
      <Footer/>
    </div>
    
    )
}

export default App
