import React from "react";
import CustomBreadcrumbs from "shared/ui/CustomBreadcrumbs/CustomBreadcrumbs";

const NavigationHeader = ({ data }) => {
  const list = [
    { name: "Home", link: "/instructor" },
    { name: "Courses", link: "/instructor/courses" },
    {
      name: data ? data.course.title : "course name",
      link: data ? `/instructor/courses/${data.course._id}` : "",
    },
    {
      name: data ? data.chapter.title : "chapter name",
      link: data
        ? `/instructor/courses/${data.course._id}/${data.chapter._id}`
        : "",
    },
    {
      name: data ? data.title : "article name",
      link: data
        ? `/instructor/courses/${data.course._id}/${data.chapter._id}/${data._id}`
        : "",
    },
  ];
  return <CustomBreadcrumbs sx={{ mt: "-8px", mb: "16px" }} list={list} />;
};

export default NavigationHeader;
