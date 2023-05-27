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
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const FullstackProfile = () => {
  return (
    <div class="custom-bg">
      <header><Header/></header>
      <Container>
      <Row>
        <h1>Projectos!</h1> 
      </Row>
      <Row className='proyectos'>
        <Col>
          <Card bg='black' text='antiquewhite' style={{width: '10rem', height:'230px' }}>
            <Card.Body>
              <Card.Title>Landing Page</Card.Title>
              <Button variant="black"><a href="https://github.com/moyhdzg/LandingPage.io.git">Landing Page Repo</a></Button>
              <Button variant="black" text='antiquewhite'><a href="https://fanciful-twilight-52e421.netlify.app">Landing Page Deploy</a></Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg='black' text='antiquewhite' style={{width: '10rem', height:'230px' }}>
            <Card.Body>
              <Card.Title>CRUD</Card.Title>
              <Button variant="black"><a href="https://github.com/moyhdzg/CRUD">CRUD Repo</a></Button>
              <Button variant="black" text='antiquewhite'><a href="https://moyhdzg.github.io/">CRUD Deploy</a></Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg='black' text='antiquewhite' style={{width: '10rem', height:'230px' }}>
            <Card.Body>
              <Card.Title>Dashboard</Card.Title>
              <Button variant="black"><a href="https://github.com/moyhdzg/Proyecto3Equipo6">Dashboard Repo</a></Button>
              <Button variant="black" text='antiquewhite'><a href="https://aesthetic-buttercream-14a564.netlify.app/">Dashboard Deploy</a></Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg='black' text='antiquewhite' style={{width: '10rem', height:'230px' }}>
            <Card.Body>
              <Card.Title>RestaurantApp</Card.Title>
              <Button variant="black"><a href="https://github.com/moyhdzg/RestaurantApp">RestaurantApp Repo</a></Button>
              <Button variant="black" text='antiquewhite'><a href="https://dazzling-flan-c3dd8d.netlify.app/">RestaurantApp Deploy</a></Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg='black' text='antiquewhite' style={{width: '10rem', height:'230px' }}>
            <Card.Body>
              <Card.Title>eCommerce</Card.Title>
              <Button variant="black"><a href="https://github.com/moyhdzg/front-eCommerce">eCommerce Front Repo</a></Button>
              <Button variant="black"><a href="https://github.com/moyhdzg/back-eCommerce">eCommerce Back Repo</a></Button>
              <Button variant="black" text='antiquewhite'><a href="https://front-e-commerce.vercel.app/">eCommerce Deploy</a></Button>
            </Card.Body>
          </Card>
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