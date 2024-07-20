import React from 'react';
import "./BoeingCard.css";
import { Title } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { FaTrash } from 'react-icons/fa';
import {Button} from "@mui/material";
import { useDispatch } from 'react-redux';
import { deleteYoutube, getUser } from '../../actions/user';

const BoeingCard = ({
    url = "https://github.com/san1234sharma",
    title = "Title here",
    image,
    isAdmin = false,
    id,
}) => {
  const dispatch = useDispatch();
  const deleteHandler = async (id) => {
    await dispatch(deleteYoutube(id));
    dispatch(getUser());
};

  return (
    <div className="boeingcard">
       <a href={url} target="blank">
        <img src={image} alt="video"/>
       </a>
       {isAdmin && (
        <Button
        style={{
          margin: "auto",
          display : "block",
          color : "rgba(40,40,40,0.7)",
        }}>
          onClick = {() => deleteHandler(id)}
          <FaTrash/>
        </Button>
       )}
    </div>
  );
};

export default BoeingCard;