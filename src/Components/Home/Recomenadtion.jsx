import { Box, Button, Rating, Typography } from "@mui/material";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BaseApi } from "util/BaseApi";
import Slider from "react-slick";
import LoadingSpinner from "Components/LoadingSpinner";

export default function Recomandtions() {
  let nav = useNavigate();
  let [courses, setCourses] = useState([]);
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
      {courses.length > 0 ? (
        <div className="container py-5">
          <div className="flex justify-between items-center">
            <Typography
              color="text.primary"
              variant="h4"
              fontWeight="500"
              className="text-2xl font-bold tracking-tight sm:text-1xl"
            >
              Recommended Courses
            </Typography>
            <Button variant="outlined" LinkComponent={Link} to={"/course"}>
              View All
            </Button>
          </div>

          <Box
            sx={{
              "& .slick-slide": {
                pr: "16px",
              },
            }}
            className="course py-4"
          >
            <Slider
              infinite={false}
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
              {courses.slice(0, 6)?.map((ele) => (
                <div
                  key={ele.course._id}
                  className="group relative cursor-pointer"
                  onClick={() => {
                    nav(`/courseDetails/${ele.course._id}`);
                  }}
                >
                  <Box
                    sx={{ backgroundColor: "background.b1" }}
                    className="flex flex-col"
                  >
                    <img
                      src={ele.course.coverImageUrl}
                      alt={ele.course.title}
                      className="h-40 w-full object-cover object-center rounded-t-lg"
                    />
                    <div className="p-4 flex flex-col">
                      <span
                        className="pt-1 :hover:text-green-500"
                        style={{ fontSize: "15px" }}
                      >
                        {ele.course.title}
                      </span>
                      <span
                        className="py-1  text-gray-400 "
                        style={{ fontSize: "13px" }}
                      >
                        Dr:John Doe
                      </span>
                      <div className="flex justify-between items-center">
                        <div className=" flex">
                          <p style={{ fontSize: "12px", paddingRight: "10px" }}>
                            {ele.course.rating}
                          </p>{" "}
                          <Rating
                            size="small"
                            color="secondary"
                            name="read-only"
                            value={ele.course.rating}
                            readOnly
                          />
                        </div>
                        <span className="py-1 font-bold">
                          {ele.course.price} EGP
                        </span>
                      </div>
                    </div>
                  </Box>
                </div>
              ))}
            </Slider>
          </Box>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </Fragment>
  );
}
