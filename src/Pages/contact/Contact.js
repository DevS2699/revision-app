import React from 'react'
import './Contact.css'
import Header from '../../Components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import { MdMail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";


const Contact = () => {
  return (
    <>
    <Header title='Get In Touch' image={HeaderImage}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore incidunt, itaque veritatis 
      iste corporis nihil rem optio sed eveniet perferendis?
    </Header>
    <section className="contact">
      <div className="container contact_container">
        <div className="contact_wrapper">
          <a href="mailto:devsharma2699@gmail.com" target='_blank' rel='noreferrer noopener'><MdMail /></a>
          <a href="http://m.me/" target='_blank' rel='noreferrer noopener'><FaFacebookMessenger /></a>
          <a href="https://wa.me/+919650363885" target='_blank' rel='noreferrer noopener'><RiWhatsappFill /></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact