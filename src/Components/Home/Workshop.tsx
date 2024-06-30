import { Button, Rating, Typography } from "@mui/material";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BaseApi } from "util/BaseApi";
import Slider from "react-slick";

export default function Recomandtions() {
  let nav = useNavigate();
  let [courses, setCourses] = useState([]);
  let [key, setKey] = useState("Workshop");
  const [headers, setHeaders] = useState({
    token: localStorage.getItem("token"),
  });

  let getCourses = async () => {
    let res = await axios
      .get(`${BaseApi}/recommendation/best-sell?view=workshop`, { headers })
      .catch((err) => console.log(err));
     
    if (res.data.message === "Done") {
      setCourses(res.data.workshops);
      
    }
  };

  useEffect(() => {
    getCourses();
  }, []);
  console.log(courses);

  return (
    <Fragment>
    {courses.length ?
      <div className="container py-5">
      <Typography
        color="primary"
        variant="h4"
        className="text-2xl font-bold tracking-tight sm:text-1xl"
      >
        {key}
      </Typography>

      <div className="course py-4">
        <Slider
          infinite={true}
          speed={500}
          slidesToShow={3} // Default to 3 slides
          slidesToScroll={1}
          responsive={[
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          {courses?.map((ele) => (
            <div
              key={ele._id}
              className="group relative cursor-pointer"
              onClick={() => {
                nav(`/courseDetails/${ele._id}`);
              }}
            >
              <div className="p-4 flex flex-col">
       <img
                  src={ele.promotionImage.url}
                  alt={ele.title}
                  className="h-56 w-full object-cover object-center rounded-lg"
                />
                <span className="pt-2 text-3xl text-green-500 font-bold" style={{ fontSize: "15px" }}>
                  {ele.title}
                </span>
                <div className="flex justify-between">
                <span className="py-1" style={{ fontSize: "15px" }}>
                  {ele.tags}
                </span>
                <span className="py-1" style={{ fontSize: "15px" }}>
                  {ele.price} EGP
                </span>
                </div>
               
               
             
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>:"Loading..........."} 
    </Fragment>
  );
}
