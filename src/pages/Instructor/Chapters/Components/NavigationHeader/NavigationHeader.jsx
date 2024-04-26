import React from "react";
import CustomBreadcrumbs from "shared/ui/CustomBreadcrumbs/CustomBreadcrumbs";

const NavigationHeader = ({ data }) => {
  const list = [
    { name: "Home", link: "/instructor" },
    { name: "Courses", link: "/instructor/courses" },
    {
      name: data ? data.course.title : "course name",
      link: `/instructor/courses/${data?.course?._id}`,
    },
  ];
  return <CustomBreadcrumbs sx={{ mt: "-8px", mb: "16px" }} list={list} />;
};

export default NavigationHeader;
