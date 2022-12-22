import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddBlog from './AddBlog'
import BlogDetail from './BlogDetail'
import Blogs from './Blogs'
import Auth from './Auth'
import UserBlog from './UserBlog'
import {useSelector} from 'react-redux'

const MainRoute = () => {
    const loggedIn = useSelector((state)=>state.isLoggedIn)
    console.log(loggedIn)
  return (
    <Routes>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/blogs/:id' element={<AddBlog/>}/>
        <Route path='/myblogs' element={<UserBlog/>}/>
        <Route path='/myblogs/:id' element={<BlogDetail/>}/>

    </Routes>
  )
}

export default MainRoute