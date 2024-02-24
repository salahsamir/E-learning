import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { BaseApi } from "../util/BaseApi.js";
import toast from "react-hot-toast";


export const allContext=createContext()



export const AllProvider=({children})=>{
    let headers={
        token:localStorage.getItem('token')
    }
    
    //////////////////////User//////////////
    let [image,setImage]=useState('')
    let [userdata,setUserdata]=useState([])

function getUser(){
    return axios.get(`${BaseApi}/user`,{headers}).then(res=>res.data).catch(err=>console.log(err))
}
let getUserData=async()=>{
    let res=await getUser()
    if(res?.message=="Done"){
        setUserdata(res.newUser)
        setImage(res.newUser.profilePic?.url)
    }
    return res
}






    /////////////////wishlist/**************** */
    let [wishlist,setWishlist]=useState(0)
    let [wishlistdata,setWishlistdata]=useState(0)
    
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
      setWishlistdata(res.wishlist)
      // console.log(wishlistdata);
      return res
  }
   async function AddToWishlist(id){
        try {
            await axios.patch(`${BaseApi}/user/wishlist/${id}`, null, { headers });
            toast.success('Successfully added to wishlist!', {
              icon: '👏',
              style: {
                borderRadius: '10px',
                background: '#1B0A26',
                color: '#F2C791',
              },
            });
           getWishlist()
          } catch (error) {
            toast.error(error.response.data.message, {
              style: {
                borderRadius: '10px',
                background: '#1B0A26',
                color: '#F2C791',
              },
            });
           
          }
    }
    async function RemoveFromWishlist(id){
        try {
            await axios.patch(`${BaseApi}/user/wishlist/${id}/remove`, null, { headers });
            toast.success('Successfully  removed', {
              icon: '👏',
              style: {
                borderRadius: '10px',
                background: '#1B0A26',
                color: '#F2C791',
              },
            });
            // setWishlist(wishlist-1)
            getWishlist()

          } catch (error) {
            toast.error(error.response.data.message, {
              style: {
                borderRadius: '10px',
                background: '#1B0A26',
                color: '#F2C791',
              },
            });
           
          }
    }
    
    useEffect(()=>{
        getUserData()
        getWishlist()
    },[headers.token!==''])
    return <allContext.Provider value={{image ,setImage,getUserData,userdata,AddToWishlist,RemoveFromWishlist,wishlist,setWishlist,wishlistdata}}>{children}</allContext.Provider>
}