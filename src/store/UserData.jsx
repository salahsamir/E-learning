import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from 'jwt-decode';

const initialState={Data:""}

let userData=createSlice({
    name:"userData",
    initialState,
    reducers:{
        changeDate:(state)=>{
            state.Data=''
            console.log(state.Data);
        },
        savaData:(state)=>{
            state.Data=jwtDecode(localStorage.getItem('token'))

        }
    }
})
export let userReducer=userData.reducer
export let {savaData,changeDate}=userData.actions