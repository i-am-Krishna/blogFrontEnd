import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import AddBlog from './AddBlog'
import BlogDetail from './BlogDetail'
import Blogs from './Blogs'
import Auth from './Auth'
import UserBlog from './UserBlog'
import {useDispatch, useSelector} from 'react-redux'
import {authAction} from '../store/index';
const MainRoute = () => {
  const dispatch = useDispatch();
    const loggedIn = useSelector((state)=>state.isLoggedIn);
    useEffect(()=>{
      if(localStorage.getItem("userId")){
        dispatch(authAction.login());
      }
    },[dispatch]);
  return (
    <Routes>
        <Route path='/' element={<Blogs/>}/>
        <Route path='/auth' element={<Auth/>}/>
        {
          loggedIn ? <>
        <Route path='/blogs/add' element={<AddBlog/>}/>
        <Route path='/myblogs' element={<UserBlog/>}/>
        <Route path='/myblogs/:id' element={<BlogDetail/>}/>
          </> : 
        <Route path='/' element={<Blogs/>}/>
        }
    </Routes>
  )
}

export default MainRoute