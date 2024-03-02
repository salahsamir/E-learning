import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { BaseApi } from "../util/BaseApi.js";
import toast from "react-hot-toast";


export const allContext=createContext()



export const AllProvider=({children})=>{
    let headers={
        token:localStorage.getItem('token')
    }
    ///////////////////////////Category/************ */
    let [category,setCategory]=useState([])
    let getAllCategory=async()=>{
      let response=await axios.get(`${BaseApi}/category`)
      .catch((err)=>{
        console.log(err)
      })
      setCategory(response.data.category)
      // console.log(category);
    }
    
    //////////////////////User//////////////
    let [image,setImage]=useState('')
    let [userdata,setUserdata]=useState([])
    let [course,setCourse]=useState([])


async function getUser(){
    return await axios.get(`${BaseApi}/user`,{headers}).then(res=>res.data).catch(err=>console.log(err))
}
let getUserData=async()=>{
    try {
      let res=await getUser()
    if(res?.message=="Done"){
         
        setUserdata(res.newUser)
        setImage(res.newUser.profilePic?.url)
        setCourse(res.newUser.coursesBought)
        console.log(course);
    }
    return res
    }catch (error) {
      return null
    }
}

    /////////////////wishlist/**************** */
    let [wishlist,setWishlist]=useState(0)
    let [wishlistdata,setWishlistdata]=useState([])
    
    async function getAllWishlist(){
        return await axios.get(`${BaseApi}/user/wishlist`,{headers}).then(res=>res.data).catch(err=>console.log(err) )
    }
    let getWishlist=async()=>{
      try {
        let res = await getAllWishlist();
        if (res?.message === "Done") {
          setWishlist(res.wishlist.length);
          setWishlistdata(res.wishlist);
        } else {
          setWishlist(0);
          setWishlistdata([]);
        }
        return res;
      }
      catch (error) {
        console.error("Error fetching wishlist:", error);
        // Handle error as needed
        return null;
      }
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
    
    /*************************************cart */
    let [cart,setcart]=useState(0)
    let [cartdata,setcartdata]=useState([])
    
    async function getAllCart(){
        return await axios.get(`${BaseApi}/cart`,{headers}).then(res=>res.data).catch(err=>console.log(err) )
    }
    let getCart=async()=>{
      try {
        let res = await getAllCart();
        if (res?.message === "Done") {
         
          setcart(res.cart.course.length);
          setcartdata(res.cart.course);
          // console.log(res,cart,cartdata);
        } else {
          setcart(0);
          setcartdata([]);
        }
        return res;
      }
      catch (error) {
        console.error("Error fetching cart:", error);
        // Handle error as needed
        return null;
      }
  }
   async function AddToCart(id){
        try {
            await axios.patch(`${BaseApi}/cart/add//${id}`, null, { headers });
            toast.success('Successfully added to Cart!', {
              icon: '👏',
              style: {
                borderRadius: '10px',
                background: '#1B0A26',
                color: '#F2C791',
              },
            });
           getCart()
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
    async function RemoveFromCart(id){
        try {
            await axios.patch(`${BaseApi}/cart/remove/${id}`, null, { headers });
            toast.success('Successfully  removed', {
              icon: '👏',
              style: {
                borderRadius: '10px',
                background: '#1B0A26',
                color: '#F2C791',
              },
            });
            
            getCart()

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
    ////////////////////order*////////////////////
    const createOrder=async()=>{
      try{
        const response=await axios.post(`${BaseApi}/order`,null,{headers})
      
       window.location.href=response.data.result
      }catch(error){
        console.log(error)
    }}
  

    useEffect(()=>{
      getAllCategory()
        getUserData()
        getWishlist()
        getCart()
    },[headers.token])
    return <allContext.Provider value={{category,image ,setImage,getUserData,userdata,AddToWishlist,RemoveFromWishlist,wishlist,setWishlist,wishlistdata,AddToCart,RemoveFromCart,cart,setcart,cartdata,createOrder}}>{children}</allContext.Provider>
}