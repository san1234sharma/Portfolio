import React from 'react';
import "./Footer.css";
import { Typography } from '@mui/material';
import {Link} from 'react-router-dom';
import {BsGithub,BsInstagram,BsLinkedin} from "react-icons/bs";
const Footer = () => {
  return <div className="Footer">
    <div>
        <Typography variant='h5'>About Me</Typography>
        <Typography>
            Hey, My name is <b>sanchit sharma</b>.I am a Full-stack developer
            and Software Engineering Intern at Boeing.I am currently chairperson at
            IEEE Computer Society Bangalore Chapter.
        </Typography>
        <Link to="/contact" className='footercontactbtn'>
            <Typography>Contact Us</Typography>
        </Link>
    </div>
    <div>
        <Typography variant='h6'>Social Media</Typography>
        <a href='https://github.com/san1234sharma' target='black'>
            <BsGithub />
        </a>
        <a href='https://www.instagram.com/sanchit_8_2003/' target='black'>
            <BsInstagram />
        </a>
        <a href='https://www.linkedin.com/in/sanchit-sharma-433697280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='black'>
            <BsLinkedin />
        </a>
    </div>
  </div>
}

export default Footer