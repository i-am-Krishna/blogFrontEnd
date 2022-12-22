import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Blog from './Blog'
const Blogs = () => {
  const [blog,setBlog] = useState()

  const sendRequest= async()=>{
    const res = await axios.get("https://blogbackend-production-fbc4.up.railway.app/api/blog").catch(err=>console.log(err))
      const data = await res.data;
      return data;
    }
    useEffect(()=>{
      sendRequest().then((data)=>setBlog(data.blogs))
  },[])
  
  return (
<div>
  {blog && blog.map((item)=>(
<Blog {...item} key={item._id} />
  ))}
</div>
  )
}

export default Blogs