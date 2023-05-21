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
        <Col>
          <p>Projectos!</p> 
        </Col>
        <Col>
          <Row><Col>Landing Page</Col><Col><Row>Repo</Row><Row>Deploy</Row></Col></Row>
          <Row><Col>CRUD</Col><Col><Row>Repo</Row><Row>Deploy</Row></Col></Row>
          <Row><Col>Dashboard</Col><Col><Row>Repo</Row><Row>Deploy</Row></Col></Row>
          <Row><Col>RestaurantApp</Col><Col><Row>Repo</Row><Row>Deploy</Row></Col></Row>
          <Row><Col>eCommerce</Col><Col><Row>Repo</Row><Row>Deploy</Row></Col></Row>
          <Row><Col>Portfolio</Col><Col>Es la página donde te encuentras!</Col></Row>
        </Col>        
      </Row>
      <Row>
        <Row>
          <p>Habilidades adquiridas y en proceso de mejora!</p>
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