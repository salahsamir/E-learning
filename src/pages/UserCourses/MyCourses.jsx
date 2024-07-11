import {
  Typography,
  Stack,
  Container,
  Button,
  Avatar,
  Box,
} from "@mui/material";
import React, { useContext, useEffect, useState, Fragment } from "react";
import { allContext } from "../../Context/Context.jsx";
import { useNavigate } from "react-router-dom";

export default function MyCourses() {
  let nav = useNavigate();
  let { course } = useContext(allContext);

  console.log(course);

  return (
    <Fragment>
      <div className="container py-2 mt-2">
        <Typography variant="h6" py={1} color={"primary"}>
          Recent Enrolled Course{" "}
        </Typography>
        {course?.length ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 py-3">
            {course?.map((ele) => (
              <div
                key={ele._id}
                onClick={() => nav(`/Chapter/${ele._id}`)}
                className=" rounded-lg shadow-md cursor-pointer hover:scale-105"
              >
                <img
                  src={ele.coverImageUrl}
                  alt={ele.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <div className="content px-2">
                  <p
                    className="text-gray-500 pt-1 "
                    style={{ fontSize: "14px" }}
                  >
                    A Course By john Deo{" "}
                  </p>
                  <p className=" " style={{ fontSize: "16px" }}>
                    {ele.title}{" "}
                  </p>
                  <div className="completed">
                    <div className="flex justify-between">
                      <p
                        className="text-gray-200  "
                        style={{ fontSize: "12px" }}
                      >
                        0%
                      </p>
                      <p
                        className="text-gray-200 "
                        style={{ fontSize: "12px" }}
                      >
                        0/200 lessons
                      </p>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className="bg-green-600 h-2.5 rounded-full"
                        style={{ width: "0%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          "No Course Found"
        )}
      </div>
    </Fragment>
  );
}
