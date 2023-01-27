import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Blog from './Blog';

const Blogs = () => {
  const [blogs,setBlogs] = useState();

  const sendRequest =async()=>{
    const res = await axios.get("https://blog-backend-sigma.vercel.app/api/blog/").catch((err)=>console.log(err))
    const data = await res.data;
    return data;
  }

  useEffect(() => {
     sendRequest().then((data)=>setBlogs(data.blogs))
    }, [])


  return (
    <div>
      {blogs && blogs.map((item,index)=>(
      <Blog 
      isUser={localStorage.getItem("userId") === item.user._id}
      key={item._id} {...item}/>
      ))}
      </div>
  )
}

export default Blogs;