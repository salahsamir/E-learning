import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { BaseApi } from "../util/BaseApi.js";
import toast from "react-hot-toast";

export const allContext = createContext();

export const AllProvider = ({ children }) => {
  const [headers, setHeaders] = useState({
    token: localStorage.getItem("token"),
  });
  useEffect(() => {
    setHeaders({
      token: localStorage.getItem("token"),
    });
  }, [localStorage.getItem("token")]);


  
  let [category, setCategory] = useState([]);
  let getAllCategory = async () => {
    let response = await axios.get(`${BaseApi}/category`).catch((err) => {
      console.log(err);
    });
    setCategory(response.data.category);
<<<<<<< HEAD
    
=======
    // console.log(category);
>>>>>>> 9f6edc7748097ca6798d5703e8178498a7fe8757
  };

  //////////////////////User//////////////
  let [image, setImage] = useState("");
  let [userdata, setUserdata] = useState([]);
  let [course, setCourse] = useState([]);

  async function getUser() {
<<<<<<< HEAD
    
=======
>>>>>>> 9f6edc7748097ca6798d5703e8178498a7fe8757
    return await axios
      .get(`${BaseApi}/user/profile`, { headers })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
  let getUserData = async () => {
    try {
      let res = await getUser();
<<<<<<< HEAD
      
=======
>>>>>>> 9f6edc7748097ca6798d5703e8178498a7fe8757
      if (res?.message == "Done") {
        setUserdata(res.newUser);
        setImage(res.newUser.profilePic?.url);
      }
      return res;
    } catch (error) {
      return null;
    }
  };
  let getCoursesBought = async () => {
    return await axios
      .get(`${BaseApi}/user/BoughtCourses?view=course`, { headers })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };
  let CourseBought = async () => {
    try {
      let res = await getCoursesBought();
      if (res?.message == "Done") {
        setCourse(res.courses);
      }
      return res;
    } catch (error) {
      return null;
    }
  };
  /////////////////wishlist/**************** */
  let [wishlist, setWishlist] = useState(0);
  let [wishlistdata, setWishlistdata] = useState([]);

  async function getAllWishlist() {
    try {
      const response = await axios.get(`${BaseApi}/user/wishlist`, { headers });
      return response.data; // Return only the data part of the response
    } catch (error) {
      console.error("Error fetching wishlist:", error);
      return null;
    }
  }
  let getWishlist = async () => {
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
    } catch (error) {
      console.error("Error fetching wishlist:", error);
      // Handle error as needed
      return null;
    }
  };

  async function AddToWishlist(id) {
    try {
      await axios.patch(`${BaseApi}/user/wishlist/${id}`, {}, { headers });
      toast.success("Successfully added to wishlist!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#1B0A26",
          color: "#F2C791",
        },
      });
      getWishlist();
    } catch (error) {
      console.error("Error adding to wishlist:", error);
      toast.error("Failed to add to wishlist. Please try again later.", {
        style: {
          borderRadius: "10px",
          background: "#1B0A26",
          color: "#F2C791",
        },
      });
    }
  }

  async function RemoveFromWishlist(id) {
    try {
      await axios.patch(
        `${BaseApi}/user/wishlist/${id}/remove`,
        {},
        { headers }
      );
      toast.success("Successfully removed from wishlist!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#1B0A26",
          color: "#F2C791",
        },
      });
      getWishlist();
    } catch (error) {
      console.error("Error removing from wishlist:", error);
      toast.error("Failed to remove from wishlist. Please try again later.", {
        style: {
          borderRadius: "10px",
          background: "#1B0A26",
          color: "#F2C791",
        },
      });
    }
  }
  /*************************************cart */
  let [cart, setcart] = useState(0);
  let [cartdata, setcartdata] = useState([]);

  async function getAllCart() {
    return await axios
      .get(`${BaseApi}/cart`, { headers })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
  let getCart = async () => {
    try {
      let res = await getAllCart();

      if (res?.message === "Done") {
        setcart(res.courses.length);
        setcartdata(res.courses);
      } else {
        setcart(0);
        setcartdata([]);
      }
      return res;
    } catch (error) {
      console.error("Error fetching cart:", error);
      // Handle error as needed
      return null;
    }
  };
  async function AddToCart(id) {
    try {
      await axios.patch(`${BaseApi}/cart/add/${id}`, {}, { headers });

      toast.success("Successfully added to Cart!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#1B0A26",
          color: "#F2C791",
        },
      });
      getCart();
    } catch (error) {
      toast.error(error.response.data.message, {
        style: {
          borderRadius: "10px",
          background: "#1B0A26",
          color: "#F2C791",
        },
      });
    }
  }
  async function RemoveFromCart(id) {
<<<<<<< HEAD
    
=======
    console.log(id);
>>>>>>> 9f6edc7748097ca6798d5703e8178498a7fe8757
    try {
      await axios.patch(`${BaseApi}/cart/remove/${id}`, {}, { headers });
      toast.success("Successfully  removed", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#1B0A26",
          color: "#F2C791",
        },
      });

      getCart();
    } catch (error) {
      toast.error(error.response.data.message, {
        style: {
          borderRadius: "10px",
          background: "#1B0A26",
          color: "#F2C791",
        },
      });
    }
  }
  ////////////////////order*////////////////////
  const createOrder = async () => {
    try {
      const response = await axios.post(`${BaseApi}/order`, {}, { headers });

      window.location.href = response.data.result;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
<<<<<<< HEAD
    console.log(headers.token);
=======
>>>>>>> 9f6edc7748097ca6798d5703e8178498a7fe8757
    if (headers.token) {
      getUserData();
      CourseBought();
      getWishlist();
      getCart();
    }
  }, [headers.token]);
  return (
    <allContext.Provider
      value={{
        category,
        image,
        course,
        setImage,
        getUserData,
        userdata,
        AddToWishlist,
        RemoveFromWishlist,
        wishlist,
        setWishlist,
        wishlistdata,
        getWishlist,
        AddToCart,
        RemoveFromCart,
        cart,
        setcart,
        cartdata,
        createOrder,
        getAllCategory
      }}
    >
      {children}
    </allContext.Provider>
  );
};
