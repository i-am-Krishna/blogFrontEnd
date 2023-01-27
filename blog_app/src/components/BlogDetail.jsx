import { Button, InputLabel, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }

const BlogDetail = () => {
  const  [blog, setBlog] = useState()
  const navigate = useNavigate();
  const {id} = useParams();
  const [data,setData] = useState({});
  const blogDetails =async()=>{
    const res = await axios.get(`https://blog-backend-sigma.vercel.app/api/blog/${id}`).catch((err)=>console.log(err))
    const data = await res.data;
    return data
  }

useEffect(()=>{
  blogDetails().then((res)=>{setBlog(res.blog)
  setData({title:res.blog.title,description:res.blog.description,image:res.blog.image})
  })
},[id])
// console.log(blog._id)



const sendRequest= async()=>{
  const res = await axios.put(`https://blog-backend-sigma.vercel.app/api/blog/update/${id}`,{
    title:data.title,
    description:data.description,
    image:data.image,
    user:localStorage.getItem("userId")
  }).catch((err)=>console.log(err))
  const resData = await res.data;
  console.log(resData)
  return resData;
}
const handleChange=(e)=>{
  const {name,value} = e.target;
  setData({
    ...data,
    [name]:value
  })
}

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(data)
  sendRequest().then((data)=>console.log(data)).then((res)=> navigate("/"))
}




  return (
    <div><form onSubmit={handleSubmit}>
    <Box border={3} borderColor="#1c2938" borderRadius={10} boxShadow="10px 10px 20px #ccc" padding={3} margin={"auto"} mt="3rem" display="flex" flexDirection={'column'} width='80%' > 
    <Typography fontWeight={'bold'} padding={3} color={'#266e73'} variant="h2" textAlign={"center"} >Edit Your Blog</Typography>

    <InputLabel sx={labelStyles}>Title</InputLabel>
    <TextField  onChange={handleChange}  value={data.title} name="title" margin='auto' variant="outlined"/>
    <InputLabel sx={labelStyles}>Description</InputLabel>
    <TextField onChange={handleChange}  value={data.description} name="description"  margin='auto' variant="outlined"/>
    <InputLabel sx={labelStyles}>Image URL</InputLabel>
    <TextField  onChange={handleChange} value={data.image} name="image"  margin='auto' variant="outlined"/>
  <Button sx={{ mt: 2, borderRadius: 4 }}
        variant="contained" stcolor="warning" type="submit">Submit </Button>
    </Box>
  </form>
</div>
  )
}

export default BlogDetail