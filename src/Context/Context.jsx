import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { BaseApi } from "../util/BaseApi.js";


export const allContext=createContext()



export const AllProvider=({children})=>{
    let headers={
        token:localStorage.getItem('token')
    }
    let [wishlist,setWishlist]=useState(0)
    function AddToWishlist(id){
        return axios.patch(`${BaseApi}/user/wishlist/${id}`,null,{headers}).then(res=>res.data).catch(err=>console.log(err))
    }
    function getAllWishlist(){
        return axios.get(`${BaseApi}/user/wishlist`,{headers}).then(res=>res.data).catch(err=>console.log(err))
    }
    let getWishlist=async()=>{
        let res=await getAllWishlist()
        if(res?.message=="Done"){
           
            setWishlist(res.wishlist.length)
        }else{
            setWishlist(0)
        }
      console.log(res);
        // return res
    }
    useEffect(()=>{
        getWishlist()
    },[headers.token!==''])
    return <allContext.Provider value={{AddToWishlist,wishlist,setWishlist}}>{children}</allContext.Provider>
}