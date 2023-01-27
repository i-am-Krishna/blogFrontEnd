import { Button, InputLabel, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }
const AddBlog = () => {
  const navigate = useNavigate();
  const [data,setData] = useState({
    title:"",
    description:"",
    image:""
  });

  const handleChange=(e)=>{
    const {name,value} = e.target;
    setData({
      ...data,
      [name]:value
    })
  }

  const sendRequest= async()=>{
    const res = await axios.post("https://blog-backend-sigma.vercel.app/api/blog/add",{
      title:data.title,
      description:data.description,
      image:data.image,
      user:localStorage.getItem("userId")
    }).catch((err)=>console.log(err))
    const dat = await res.data;
    console.log(dat)
    return dat;
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(data)
    sendRequest().then((data)=>console.log(data)).then((res)=> navigate("/"))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box border={3} borderColor="#1c2938" borderRadius={10} boxShadow="10px 10px 20px #ccc" padding={3} margin={"auto"} mt="3rem" display="flex" flexDirection={'column'} width='80%' > 
        <Typography fontWeight={'bold'} padding={3} color={'#266e73'} variant="h2" textAlign={"center"} >Post Your Blog</Typography>

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

export default AddBlog;




















 