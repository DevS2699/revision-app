import React from 'react'
import { RiVipCrownLine } from "react-icons/ri";
import SectionHead from './SectionHead';
import { FaDumbbell } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { MdSportsGymnastics } from "react-icons/md";
import { GrYoga } from "react-icons/gr";
import Card from '../UI/Card'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";


const programs = [
    {
        id: 1,
        icon: <FaDumbbell />,
        title: "Program One",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <GiWeightLiftingUp />,
        title: "Program Two",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <MdSportsGymnastics />,
        title: "Program Three",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <GrYoga />,
        title: "Program Four",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/444"
    }
]


const Programs = () => {
  return (
    <>
    <section className="programs">
        <div className="container programs_container">
            <SectionHead icon={<RiVipCrownLine />} title={'Programs'} />
        <div className="programs_wrapper">
            {
                programs.map(({id, icon, title, info, path})=>{
                    return (
                       <Card className={'programs_program'} key={id}>
                        <span>{icon}</span>
                        <h4>{title}</h4>
                        <small>{info}</small>
                        <Link to={path} className="btn sm">Learn More {<IoIosArrowForward />}</Link>
                       </Card>
                    )
                })
            }
        </div>
        </div>
    </section>
    </>
  )
}

export default Programs