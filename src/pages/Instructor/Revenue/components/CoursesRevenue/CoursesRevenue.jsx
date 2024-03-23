import { Box } from "@mui/material";
import { useGetRevenue } from "api/instructor/revenue.tsx";
import React from "react";
import CustomTable from "shared/ui/CustomTable/CustomTable";

const headCells = [
  {
    id: "courseName",
    disablePadding: false,
    label: "Course Name",
  },
  {
    id: "totalSales",
    disablePadding: false,
    label: "Total Sales",
  },
  {
    id: "totalRevenue",
    disablePadding: false,
    label: "Total Revenue",
  },
  {
    id: "averagePrice",
    disablePadding: false,
    label: "Average Price",
  },
];
const CoursesRevenue = () => {
  const {
    data: revenue,
    isLoading: loadingCourses,
    isError: errorCourses,
  } = useGetRevenue();
  console.log(revenue?.courses);
  const rows = revenue?.courses?.map((course) => ({
    id: course.courseId,
    courseName: course.title,
    totalSales: course.numberOfStudents,
    totalRevenue: course.revenue,
    averagePrice: course.price,
  }));
  return (
    <Box>
      <CustomTable
        headCells={headCells}
        rows={rows || []}
        loading={loadingCourses}
        error={errorCourses}
      />
    </Box>
  );
};

export default CoursesRevenue;
