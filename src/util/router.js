import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home/Home.jsx";
import { createBrowserRouter } from "react-router-dom";

import { Navigate } from "react-router-dom";


/* salah's routes*/
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";
import ConfirmCode from "../pages/Forget_password/ConfirmCode/ConfirmCode";
import UpdatePasswordForm from "../pages/Forget_password/UpdatePasswordForm/UpdatePasswordForm";
import SendEmail from "../pages/Forget_password/SendEmail/SendEmail.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";
import CoursesPage from "../pages/Courses/CoursesPage.jsx";
import Video from "../pages/Videos/Video.jsx";
import Chapter from "../Components/Chapters/Chapter.jsx";
import Assignment from "../pages/Assignment/Assignment.jsx";
import Profile from "../pages/Profile/Profile.jsx";
/**************************************** */
import InstructorLayout from "../pages/Instructor/Layout.jsx";
import InstructorDashboard from "../pages/Instructor/Dashboard/Dashboard.jsx";
import InstructorCourses from "../pages/Instructor/Courses/Courses.jsx";
import InstructorEditCourseInfo from "../pages/Instructor/Courses/EditCourseInfo/EditCourseInfo.jsx";
import InstructorChapters from "../pages/Instructor/Courses/Chapters/Chapters.jsx";
import InstructorTopics from "../pages/Instructor/Courses/Chapters/Topics/Topics.jsx";
import IntructorArticle from "../pages/Instructor/Courses/Chapters/Topics/Article/Article.jsx";
import InstructorVideo from "../pages/Instructor/Courses/Chapters/Topics/Video/Video.jsx";
import InstructorWorkshops from "../pages/Instructor/Workshops/Workshops.jsx";
import Error404 from "../pages/Instructor/Error/Error404.jsx";
import LiveSessions from "../pages/Instructor/Workshops/Sessions/LiveSessions/LiveSessions.jsx";
import InstructorEditWorkshopInfo from "../pages/Instructor/Workshops/EditWorkshopInfo/EditWorkshopInfo.jsx";



// let ProtectedRouter = (props) => {
//   if (localStorage.getItem("token") == null) {
//     return <Navigate to="/signin" />;
//   } else {
//     return props.children;
//   }
// };
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "signin", element: <Signin /> },
      { path: "signup", element: <Signup /> },
      { path: "sendEmail", element: <SendEmail /> },
      { path: "sendCode", element: <ConfirmCode /> },
      { path: "updatePassword", element: <UpdatePasswordForm /> },
      { path: "course/:id", element: <CoursesPage /> },
      { path: "video", element: <Video /> },
      { path: "assignment", element: <Assignment /> },
      { path: "Chapter/:id", element: <Chapter /> },
      {path:"profile",element:<Profile/>},
      { path: "*", element: <NotFound /> },
    ],
  },

  {
    path: "/instructor",
    element: <InstructorLayout />,
    children: [
      {
        index: true,
        element: <InstructorDashboard />,
      },
      {
        path: "*",
        element: <Error404 redirectTo={"/instructor"} />,
      },
      {
        path: "courses",
        children: [
          { index: true, element: <InstructorCourses /> },
          {
            path: ":courseId",
            children: [
              {
                index: true,
                element: <InstructorChapters />,
              },
              {
                path: "edit",
                element: <InstructorEditCourseInfo />,
              },
            ],
          },
          {
            path: ":courseId/:chapterId",
            children: [
              {
                index: true,
                element: <InstructorTopics />,
              },
              {
                path: "article/new",
                element: <IntructorArticle />,
              },
              {
                path: "article/:articleId",
                element: <IntructorArticle />,
              },
              { path: "video/:videoId", element: <InstructorVideo /> },
            ],
          },
        ],
      },
      {
        path: "workshops",
        children: [
          {
            index: true,
            element: <InstructorWorkshops />,
          },
          {
            path: ":workshopId",
            children: [
              {
                index: true,
                element: <InstructorChapters />,
              },
              {
                path: "edit",
                element: <InstructorEditWorkshopInfo />,
              },
            ],
          },
          {
            path: ":workshopId/live",
            children: [
              {
                index: true,
                element: <LiveSessions />,
              },
            ],
          },
          {
            path: ":workshopId/recoarded",
            children: [
              {
                index: true,
                element: <LiveSessions />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
export default router;
