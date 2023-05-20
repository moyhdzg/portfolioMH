import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Styles from './styles.module.css'



const FullstackProfile = () => {
  return (
    <div class="custom-bg">
     <header> <Header/></header>
      <div>FullstackProfile</div>
      <Footer/>
    </div>
  )
}

export default FullstackProfile