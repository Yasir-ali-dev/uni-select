import { Card, CardMedia } from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom';


const images=["iba.jfif","logo.png","muet_logo.png"];
const links=["https://www.muet.edu.pk/","https://www.iba-suk.edu.pk/","https://uok.edu.pk/"]
const Pro = () => {
  return (
    <>
        {["Sukkur IBA University","University of karachi","Mehran University of Engineering and Technology"].map((_,index)=>{
          return(
            <Card sx={{ maxWidth: 290 }}>
            <img src={`${images[index]}`} width={"250px"} height={"150px"} alt="" />
            <a href={`${links[index]}`} target="_blank" alt="#_">{_}</a>
          </Card>
          )
         })}
      
    </>
  )
}

export default Pro
