import React from 'react'
import Header from '../../Components/Header'
import HeaderBg1 from '../../images/header_bg_1.jpg'
import Story from '../../images/about1.jpg'
import Vision from '../../images/about2.jpg'
import Mission from '../../images/about3.jpg'
import './About.css'

const About = () => {
  return(
    <>
    <Header title='About Us' image={HeaderBg1}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quam numquam facere exercitationem. Nobis, ducimus expedita placeat ratione ipsam quo.
    </Header>

    <section className="about_story">
      <div className="container about_story-container">
        <div className="about_section-image">
          <img src={Story} alt="Our Story" />
        </div>
        <div className="about_section-content">
          <h1>Our Story</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quis illo vero? Culpa voluptates,
             maiores doloribus optio sapiente voluptatem deleniti repellendus aut ipsa, qui ex recusandae! 
             Optio nisi minima explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta repellendus 
            explicabo neque maiores repudiandae nemo quo obcaecati voluptate quod nobis dolore 
            atque perferendis, ab asperiores?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti magnam autem perferendis 
            adipisci in magni aperiam neque dolorem.
          </p>
        </div>
      </div>
    </section>

    <section className="about_vision">
      <div className="container about_vision-container">
        <div className="about_section-content">
          <h1>Our Vision</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quis illo vero? Culpa voluptates,
             maiores doloribus optio sapiente voluptatem deleniti repellendus aut ipsa, qui ex recusandae! 
             Optio nisi minima explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta repellendus 
            explicabo neque maiores repudiandae nemo quo obcaecati voluptate quod nobis dolore 
            atque perferendis, ab asperiores?
          </p>
        </div>
        <div className="about_section-image">
          <img src={Vision} alt="Our Vision" />
        </div>
      </div>
    </section>

    <section className="about_mission">
      <div className="container about_mission-container">
        <div className="about_section-image">
          <img src={Mission} alt="Our Mission" />
        </div>
        <div className="about_section-content">
          <h1>Our Mission</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quis illo vero? Culpa voluptates,
             maiores doloribus optio sapiente voluptatem deleniti repellendus aut ipsa, qui ex recusandae! 
             Optio nisi minima explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta repellendus 
            explicabo neque maiores repudiandae nemo quo obcaecati voluptate quod nobis dolore 
            atque perferendis, ab asperiores?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti magnam autem perferendis 
            adipisci in magni aperiam neque dolorem.
          </p>
        </div>
      </div>
    </section>

  </>
  )
}

export default About