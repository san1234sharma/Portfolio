import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./Contact.css";
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { contactUs } from '../../actions/user';

const Contact = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    const dispatch = useDispatch();
    const alert = useAlert();
    const {loading,message:AlertMessage,error,} = useSelector((state) => state.user);
    const contactformhandler = (e) => {
        e.preventDefault();
        dispatch(contactUs(name,email,message));
    };
    useEffect(() => {
        if(error){
            alert.error(error);
            dispatch({type:"CLEAR_ERRORS"});
        }if(AlertMessage){
            alert.success(AlertMessage);
            dispatch({type: "CLEAR_MESSAGE"});
        }
    }, [alert,AlertMessage,error,dispatch]);
  return (
    <div className='contact'>
        <div className="contactrightbar"></div>
        <div className="contactcontainer">
            <form className="contactcontainerform" onSubmit={contactformhandler}>
                <Typography variant='h4'>Contact Us</Typography>
                <input type="text" placeholder='Name' 
                value={name} 
                required
                onChange={(e) => setName(e.target.value)}/>
                <input type="email"placeholder='Email' 
                value={email} 
                required
                onChange={(e) => setEmail(e.target.value)}/>
                <textarea placeholder='Message' cols="30" rows="10"
                value={message} 
                required
                onChange={(e) => setMessage(e.target.value)}></textarea>
                <Button variant='contained' type='submit' disabled={loading}>Send</Button> 
            </form>
        </div>
    </div>
  )
}

export default Contact