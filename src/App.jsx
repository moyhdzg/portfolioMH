import React from "react"
import Header from './components/Header'
import Footer from './components/Footer'
import './components/styles.module.css'
import './App.css'
import {Container,Col,Row} from 'react-bootstrap'
import moyPic from './imgs/moyPic.png'

function App() {

  return (
    
    <div className="custom-bg">
      <header><Header/></header>
        <Container>
          <Row>
            <Col className="descHome">
              <p>
              Ing. Electrómecánico trabajando en la industria Maquiladora Fronteriza de México! Tengo alrededor de 20 años de experiencia en esa industria!. Ahora con mis deseos de aprender y conocer otras áreas y desarrollar un poco de aire creativo decidí empezar un nuevo camino para aprender a programar y conocer el mundo de la tecnólogía FullStack Development! 
              </p>          
            </Col>
            <Col>
              <img className="moyPic" src={moyPic} />
            </Col>
          </Row>
        </Container>
        
      <Footer/>
    </div>

    )
}

export default App
