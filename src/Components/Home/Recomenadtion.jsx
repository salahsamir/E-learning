import { Button, Rating, Typography } from "@mui/material";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BaseApi } from "util/BaseApi";
import Slider from "react-slick";

export default function Recomandtions() {
  let nav = useNavigate();
  let [courses, setCourses] = useState([]);
  let [key, setKey] = useState("Recommended For You");
  const [headers, setHeaders] = useState({
    token: localStorage.getItem("token"),
  });

  let getCourses = async () => {
    let res = await axios
      .get(`${BaseApi}/recommendation/recommendedForYou`, { headers })
      .catch((err) => console.log(err));
    if (res.data.message === "Done") {
      setCourses(res.data.recommendations);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <Fragment>
      {/* {courses.length > 0 ?
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
              key={ele.course._id}
              className="group relative cursor-pointer"
              onClick={() => {
                nav(`/courseDetails/${ele.course._id}`);
              }}
            >
              <div className="p-4 flex flex-col">
                {/* <img
                  src="https://cdn.pixabay.com/photo/2016/06/01/06/26/open-book-1428428_640.jpg"
                  alt={ele.course.title}
                  className="h-40 w-full object-cover object-center rounded-lg"
                />
                <span className="pt-1 :hover:text-green-500" style={{ fontSize: "15px" }}>
                  {ele.course.title}
                </span> */}
                {/* <span className="py-1  text-gray-400 " style={{ fontSize: "13px" }}>
                  Dr:John Doe
                </span>
                <span className="py-1" style={{ fontSize: "13px" }}>
                  {ele.course.price} EGP
                </span>
                <div className=" flex">
                  <p style={{ fontSize: "12px", paddingRight: "10px" }}>{ele.course.rating}</p>{" "}
                  <Rating size="small" color="secondary" name="read-only" value={ele.course.rating} readOnly />
                </div>
             
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>:"No courses found"} */}
    </Fragment>
  );
}
