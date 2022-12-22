import React from 'react'

import { Avatar, Card, CardContent, CardHeader, CardMedia,  Typography } from '@mui/material'
const Blog = ({title,description,image,user}) => {
  console.log(user.name)
  
    return (
    <div>
            <Card sx={{ width: "40%",margin:"auto",mt:2,p:2,boxShadow:"5px 5px 10px #ccc",":hover":{
                boxShadow:"10px 10px 20px #ccc"
            }}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
            {user.name}
          </Avatar>
        }
         
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            {description}
        </Typography>
      </CardContent>
           </Card>
    </div>
  )
}

export default Blog