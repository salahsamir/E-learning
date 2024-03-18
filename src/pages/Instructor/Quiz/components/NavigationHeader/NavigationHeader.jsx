import React from "react";
import CustomBreadcrumbs from "shared/ui/CustomBreadcrumbs/CustomBreadcrumbs";

const NavigationHeader = ({ data }) => {
  console.log(data);
  const list = [
    { name: "Home", link: "/instructor" },
    { name: "Courses", link: "/instructor/courses" },
    {
      name: data.course?.title || "course name",
      link: data ? `/instructor/courses/${data.course._id}` : "",
    },
    {
      name: data.chapter?.title || "chapter name",
      link: data
        ? `/instructor/courses/${data.course._id}/${data.chapter._id}`
        : "",
    },
    {
      name: data.title || "quiz name",
      link: data
        ? `/instructor/courses/${data.course._id}/${data.chapter._id}/${data._id}`
        : "",
    },
  ];
  console.log(list);
  return <CustomBreadcrumbs sx={{ mt: "-8px", mb: "16px" }} list={list} />;
};

export default NavigationHeader;
