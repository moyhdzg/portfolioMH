import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Styles from './styles.module.css'
import {Container, Row,Col} from 'react-bootstrap'
import reactPic from '../imgs/reactPic.png'
import mdb from '../imgs/mdb.png'
import expressjs from '../imgs/expressjs.png'
import js from '../imgs/js.png'
import nodejs from '../imgs/nodejs.svg'

const FullstackProfile = () => {
  return (
    <div class="custom-bg">
      <header><Header/></header>
      <Container>
      <Row>
        <h1>Projectos!</h1> 
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>Landing Page</Col>
            <Col>
              <Row><a href="https://github.com/moyhdzg/LandingPage.io.git">Landing Page Repo</a></Row>
              <Row><a href="https://www.example.com">Landing Page Deploy</a></Row>
            </Col>
          </Row>
          <Row>
            <Col>CRUD</Col>
            <Col>
              <Row><a href="https://github.com/moyhdzg/moyhdzg.github.io">CRUD Repo</a></Row>
              <Row><a href="https://www.example.com">CRUD Deploy</a></Row>
            </Col>
          </Row>
          <Row>
            <Col>RestaurantApp</Col>
            <Col>
              <Row><a href="https://github.com/moyhdzg/RestaurantApp">RestaurantApp Repo</a></Row>
              <Row><a href="https://dazzling-flan-c3dd8d.netlify.app/">RestaurantApp Deploy</a></Row>
            </Col>
          </Row>
          <Row>
            <Col>Tabla De Datos "Dashboard"</Col>
            <Col>
              <Row><a href="https://github.com/moyhdzg/Proyecto3Equipo6">Dashboard Repo</a></Row>
              <Row><a href="https://aesthetic-buttercream-14a564.netlify.app/">Dashboard Deploy</a></Row>
            </Col>
          </Row>
          <Row>
            <Col>eCommerce</Col>
            <Col>
              <Row> 
                <Row>
                  <a href="https://github.com/moyhdzg/front-eCommerce">eCommerce Front Repo</a>
                </Row>
                <Row>
                  <a href="https://github.com/moyhdzg/back-eCommerce">eCommerce Back Repo</a>
                </Row>
               </Row>
              <Row><a href="https://front-e-commerce.vercel.app/">eCommerce Deploy</a></Row>
            </Col>
          </Row>
          <Row>
            <Col>Portfolio</Col>
            <Col>Es la página donde te encuentras!</Col>
          </Row>
        </Col>        
      </Row>
      <Row>
        <Row>
          <h1>Habilidades adquiridas y en proceso de mejora!</h1>
        </Row>
        <Row>
          <Col>
            <img className="skill mdb" src={mdb} />
          </Col>
          <Col>
            <img className="skill js" src={js} />
          </Col>
          <Col>
            <img className="skill nodejs" src={nodejs} />
          </Col>
          <Col>
            <img className="skill expressjs" src={expressjs} />
          </Col>
          <Col>
            <img className="skill reactPic" src={reactPic} />
          </Col>
        </Row>
      </Row>
      </Container>
      <Footer/>
    </div>
  )
}

export default FullstackProfile