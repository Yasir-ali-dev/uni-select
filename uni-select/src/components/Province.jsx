import { Card, CardMedia } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const images = ["sindh.png","punjab.png","Balochistan.png","kpk.png"]
const Province = () => {
  return (
    <>
      {["Sindh","Punjab","KPK","Balochistan"].map((_,index)=>{
          return(
            <Card sx={{ maxWidth: 290 ,}}>
              <Link to={`/province`}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="270"
              sx={{"objectFit":"cover"}}
              image={`${images[index]}`}
              />
            <h5 style={{textAlign:"center",paddingTop:".5em"}}>{_}</h5>
            </Link>
          </Card>
          )
         })}
    </>
  )
}

export default Province;