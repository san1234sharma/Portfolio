import React from 'react'
import "./About.css"
import { Typography } from '@mui/material'
import myimage from "../Images/myimage2.jpg"
const About = () => {
  return (
    <div className='about'>
        <div className="aboutcontainer">
            <Typography>Software Engineering Intern at Boeing</Typography>
        </div>
        <div className="aboutcontainer2">
            <div>
                <img src={myimage} alt='sanchit' className='aboutavatar'/>
                <Typography variant="h4" style={{margin: "1vmax 0",color: "black"}}>
                    Sanchit Sharma
                    </Typography>
                <Typography>Full Stack Developer</Typography>
                <Typography style={{margin: "1vmax 0"}}>I am a Student</Typography>
            </div>
            <div>
                <Typography style={{
                    wordSpacing : "5px",
                    lineHeight: "50px",
                    letterSpacing: "5px",
                    textAlign: "right",
                }}>
                    Being a Full-Stack Developer, i like to make websites that
                    would provide good user experience and design.
                    I like to play sports, where some of favourites include cricket,
                    badminton,table-tennis.
                </Typography>
            </div>
        </div>
    </div>
  )
}

export default About