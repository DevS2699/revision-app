import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/main_header.png'

const MainHeader = () => {
  return (
    <>
      <header className="main_header">
        <div className="conatiner main_header-container">
          <div className="main_header-left">
            <h4>#100DaysOfWorkout</h4>
            <h1>Join <span style={{color:'#E22908'}}>the Legends</span> of the Fitness World</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel reiciendis quaerat eligendi tenetur. Non, fuga.</p>
            <Link to='/plans' className='btn lg'>Get Started</Link>
          </div>
          <div className="main_header-right">
            <div className="main_header-circle"></div>
            <div className="main_header-image">
              <img src={Image} alt="main_header_image" />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default MainHeader