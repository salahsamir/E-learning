import { Link } from "@mui/material";
import CustomTable from "../../../../../shared/ui/CustomTable/CustomTable";
import CourseMenu from "../CourseMenu/CourseMenu";

const CourseName = ({ name, url }) => {
  return (
    <Link to={url} sx={{ fontWeight: "600" }}>
      {name}
    </Link>
  );
};
const headCells = [
  {
    id: "courseName",
    disablePadding: false,
    label: "Course Name",
  },
  {
    id: "videoCount",
    disablePadding: false,
    label: "Total Content",
  },
  {
    id: "studentCount",
    disablePadding: false,
    label: "Student Count",
  },
  {
    id: "courseRating",
    disablePadding: false,
    label: "Rating",
  },
  {
    id: "courseStatus",
    disablePadding: false,
    label: "Status",
  },
  {
    id: "settings",
    disablePadding: false,
    label: "",
    disableSorting: true,
  },
];
function CoursesList({
  coursesList,
  loadingCoursesList,
  errorCoursesList,
  setCoursesList,
}) {
  function createData(
    id,
    courseName,
    videoCount,
    studentCount,
    courseRating,
    courseStatus
  ) {
    return {
      id,
      courseName: (
        <CourseName name={courseName} url={`/instructor/courses/${id}`} />
      ),
      videoCount,
      studentCount,
      courseRating,
      courseStatus,
      settings: <CourseMenu key={id} id={id} setCoursesList={setCoursesList} />,
    };
  }
  const rows = coursesList?.map((_, index, arr) => {
    const item = arr[arr.length - index - 1];
    return createData(
      item._id,
      item.title,
      item.videoCount || 0,
      item.numberOfStudents || 0,
      (+item.rating).toFixed(1) || 0,
      item.status || "Draft"
    );
  });
  return (
    <CustomTable
      title={"Courses List"}
      rows={rows || []}
      headCells={headCells}
      showCheckbox={false}
      loading={loadingCoursesList}
      error={errorCoursesList}
    />
  );
}

export default CoursesList;
