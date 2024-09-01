import React from 'react'
import './Trainers.css'
import Header from '../../Components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import {trainers} from '../../data'
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Trainer from '../../Components/Trainer';


const Trainers = () => {
  return (
    <>
    <Header title='Our Trainers' image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ullam reiciendis quod dolorem illum fuga recusandae eligendi eum aliquid laboriosam!
    </Header>
    <section className="trainers">
      <div className="container trainers_container">
        {
          trainers.map(({id, image, name, job, socials})=>{
            return(
              <Trainer key={id} image={image} name={name} job={job} socials={
                [
                  {icon: <BiLogoInstagramAlt />, link: socials[0]},
                  {icon: <FaTwitter />, link: socials[1]},
                  {icon: <FaFacebookSquare />, link: socials[2]},
                  {icon: <FaLinkedin />, link: socials[3]},
                ]
              }/>
            )
          })
        }
      </div>
    </section>
    </>
  )
}

export default Trainers