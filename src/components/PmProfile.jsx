import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Styles from './styles.module.css'



const PmProfile = () => {
  return (
    <div className="custom-bg">
      <header><Header/></header>
      <div className="custom-bg">PmProfile</div>
      <Footer/>
    </div>
  )
}

export default PmProfile