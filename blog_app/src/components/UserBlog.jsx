import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Blog from './Blog';

const UserBlog = () => {
  const [blogs,setBlogs] = useState();
  const id = localStorage.getItem("userId")

  const sendRequest=async()=>{
    const res = await axios.get(`https://blog-backend-sigma.vercel.app/api/blog/user/${id}`).catch((err)=>console.log(err));
    const data = await res.data;
    return data;
  }
  useEffect(() => {
  sendRequest().then((data)=>setBlogs(data.user.blogs))
  }, [])
  
  


  return (
    <div>
      {blogs && blogs.map((item)=>( 
      <Blog isUser={true} key={item._id} {...item}/>
      ))}
      </div>
  )
}

export default UserBlog