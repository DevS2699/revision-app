import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container footer_container'>
        <article>
            <Link to='/' className='logo'>
                <img src={Logo} alt='logo' />
            </Link>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt perferendis, eligendi nisi veniam ut aspernatur?</p>
            <div className='footer_socials'>
                <a href="https://linkedin.com" target='_blank' rel='noreferrer noopener'><FaLinkedinIn /></a>
                <a href="https://facebook.com" target='_blank' rel='noreferrer noopener'><FaFacebookF /></a>
                <a href="https://twitter.com" target='_blank' rel='noreferrer noopener'><FaTwitter /></a>
                <a href="https://linkedin.com" target='_blank' rel='noreferrer noopener'><FaInstagram /></a>
            </div>
        </article>
        <article>
            <h4>Permalinks</h4>
            <Link to='/about'>About</Link>
            <Link to='/plans'>Plans</Link>
            <Link to='/trainers'>Trainers</Link>
            <Link to='/gallery'>Gallery</Link>
            <Link to='/contact'>Contact</Link>
        </article>
        <article>
            <h4>Permalinks</h4>
            <Link to='/about'>About</Link>
            <Link to='/plans'>Plans</Link>
            <Link to='/trainers'>Trainers</Link>
            <Link to='/gallery'>Gallery</Link>
            <Link to='/contact'>Contact</Link>
        </article>
        <article>
            <h4>Get in Touch</h4>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/s'>Support</Link>
        </article>
      </div>
      <div className="footer_copyright">
        <small>{new Date().getFullYear()} Fitness Gym &copy; All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer
