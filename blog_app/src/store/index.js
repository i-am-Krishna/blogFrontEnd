import {configureStore, createSlice} from '@reduxjs/toolkit';

const authentication = createSlice({
    name:"auth",
    initialState:{isLoggedIn:false},
    reducers:{
        login(state){
            state.isLoggedIn=true
        },
        logout(state){
            state.isLoggedIn=false
        }
    }
})

export const authAction = authentication.actions;

export const store = configureStore({
    reducer:authentication.reducer
})