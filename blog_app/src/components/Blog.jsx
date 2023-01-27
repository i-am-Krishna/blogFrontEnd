import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios';
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
const Blog = ({_id,title,description,image,user,isUser}) => {
  const navigate = useNavigate();

  const handleEdit=()=>{
    navigate(`/myBlogs/${_id}`)
  }
  const deleteRequest=async()=>{
    const res =await axios.delete(`https://blog-backend-sigma.vercel.app/api/blog/${_id}`).catch((err)=>console.log(err))
    const data = await res.data;
    console.log(data)
    return data;
  }

  const handleDelete=()=>{
    deleteRequest().then((res)=>navigate('/'))
  }

  
  return (
    <div><Card sx={{ width:"40%",margin:"auto",mt:5,padding:2,boxShadow:"5px 5px 10px #ccc" , ":hover:":{boxShadow: "10px 10px 20px #ccc"}, }}>
   <Box display={'flex'} justifyContent={'space-between'}>     <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "black"}} aria-label="recipe">
          {user.name ? user.name[0]:"A"}
        </Avatar>
      } 
      title={title}
      subheader={`Created by ${user?.name ? user.name : "Me"}`}
    />
    {isUser && (
    <Box display='flex'>
      <IconButton onClick={handleEdit} sx={{marginLeft:"auto"}}><EditIcon/></IconButton>
      <IconButton onClick={handleDelete}><DeleteIcon/></IconButton>

    </Box>
   )}
   </Box>
    <CardMedia
      component="img"
      height="194"
      image={image}
      alt="Paella dish"
    />
    <CardContent>
      <hr/>
      <br/> 
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
     
  </Card>
</div>
  )
}

export default Blog














 