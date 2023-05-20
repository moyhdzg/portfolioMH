import React from 'react'
import Styles from './styles.module.css'
import fb from '../imgs/fb.png'
import gh from '../imgs/gh.png'
import gmail from '../imgs/gmail.png'
import ucamp from '../imgs/ucamp.png'


const Footer = () => {
  


  return (
    <footer>
        <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank">
              <img className='footer-img' src={fb} alt="Facebook" />
            </a>
            <a href="https://github.com" target="_blank">
              <img className='footer-img'src={gh} alt="GitHub" />
            </a>
            <a href="https://mail.google.com" target="_blank">
              <img className='footer-img' src={gmail} alt="Gmail" />
            </a>
            <a href="https://www.ucamp.com" target="_blank">
              <img className='footer-img' src={ucamp} alt="Ucamp" />
            </a>
        </div>
        <p>&copy; 2023 MH Portfolio. Todos los derechos reservados.</p>
  </footer>

  );
};

export default Footer