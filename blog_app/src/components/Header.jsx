import React from 'react'
import {AppBar, Button, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authAction } from '../store';
const Header = () => {
    const dispatch = useDispatch();
    const [value, setvalue] = useState();
    const loggedIn = useSelector((state)=>state.isLoggedIn)

  return (
    <AppBar style={{backgroundColor:"#19191d",position:"sticky"}}>
        <Toolbar>
            <Typography variant='h4'>Pod Capsule</Typography>
            {loggedIn &&  <Box display='flex' marginLeft={'auto'} marginRight='auto' >
                <Tabs textColor='inherit' value={value} onChange={(e,val)=>setvalue(val)}>
                <Tab style={{color:"white"}} label="All Blogs" LinkComponent={Link} to='/'/>
                
                <Tab style={{color:"white"}} label="My Blogs" LinkComponent={Link} to='/myblogs'/>
                
                <Tab style={{color:"white"}} label="Add Blogs" LinkComponent={Link} to='/blogs/add'/>
                </Tabs>
            </Box> }
            <Box display="flex" marginLeft="auto">
              {!loggedIn && <><Button sx={{margin:1,borderRadius:10}} variant="contained" stcolor='warning'  LinkComponent={Link} to='/auth'>Login</Button>
                <Button sx={{margin:1,borderRadius:10}} variant="contained" stcolor='warning'  LinkComponent={Link} to='/auth'>Signup</Button> </>}
                { loggedIn &&
                <Button onClick={()=>dispatch(authAction.logout())} sx={{margin:1,borderRadius:10}} variant="contained" stcolor='warning'  LinkComponent={Link}  to='/auth'>Logout</Button>}
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header