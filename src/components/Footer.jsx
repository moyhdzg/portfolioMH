import React from 'react'
import fb from '../imgs/fb.png'
import gh from '../imgs/gh.png'
import gmail from '../imgs/gmail.png'
import ucamp from '../imgs/ucamp.png'
import Styles from './styles.module.css'

const Footer = () => {
  


  return (
    <footer>
        <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank">
              <img className="footerimg" src={fb} alt="Facebook" />
            </a>
            <a href="https://github.com" target="_blank">
              <img className="footerimg"src={gh} alt="GitHub" />
            </a>
            <a href="https://mail.google.com" target="_blank">
              <img className="footerimg" src={gmail} alt="footer-img" />
            </a>
            <a href="https://www.ucamp.com" target="_blank">
              <img className="footerimg" src={ucamp} alt="Ucamp" />
            </a>
        </div>
        <p>&copy; 2023 MH Portfolio. Todos los derechos reservados.</p>
  </footer>

  );
};

export default Footer