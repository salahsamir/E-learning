import { Suspense, lazy } from "react";
import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home/Home.jsx";
import { createBrowserRouter } from "react-router-dom";

/* salah's routes*/
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";
import ConfirmCode from "../pages/Forget_password/ConfirmCode/ConfirmCode";
import UpdatePasswordForm from "../pages/Forget_password/UpdatePasswordForm/UpdatePasswordForm";
import SendEmail from "../pages/Forget_password/SendEmail/SendEmail.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";
import CoursesPage from "../pages/SubCategory/CoursesPage.jsx";
import Video from "../pages/Videos/Video.jsx";
import Chapter from "../Components/Chapters/Chapter.jsx";
import Assignment from "../pages/Assignment/Assignment.jsx";
// import Profile from "../page/Profile/Profile.jsx";
import Profile from "../pages/Profile/Profile.jsx";
import Loading from "../pages/Loading/Loading.jsx";
import InstructorLayout from "../pages/Instructor/Layout.jsx";
import Setting from "../pages/Setting/Setting.jsx";
import CourseDetails from "../pages/CourseDetails/CourseDetails.jsx";

// instructor routes
import MyCourses from "../pages/UserCourses/MyCourses.jsx";
import Parts from "../Components/Parts/Parts.jsx";
const InstructorDashboard = lazy(() =>
  import("../pages/Instructor/Dashboard/index.jsx")
);
const InstructorCourses = lazy(() =>
  import("../pages/Instructor/Courses/index.jsx")
);
const InstructorEditCourseInfo = lazy(() =>
  import("../pages/Instructor/Courses/EditCourseInfo/EditCourseInfo.jsx")
);
const InstructorChapters = lazy(() =>
  import("../pages/Instructor/Chapters/index.jsx")
);
const InstructorTopics = lazy(() =>
  import("../pages/Instructor/Topics/index.jsx")
);
const IntructorArticle = lazy(() =>
  import("../pages/Instructor/Article/index.jsx")
);
const InstructorVideo = lazy(() =>
  import("../pages/Instructor/Video/index.jsx")
);
const InstructorQuiz = lazy(() => import("../pages/Instructor/Quiz/index.jsx"));
const InstructorWorkshops = lazy(() =>
  import("../pages/Instructor/Workshops/index.jsx")
);
const Error404 = lazy(() => import("../pages/Instructor/Error/Error404.jsx"));
const LiveSessions = lazy(() =>
  import("../pages/Instructor/LiveSession/index.jsx")
);
const InstructorEditWorkshopInfo = lazy(() =>
  import("../pages/Instructor/Workshops/EditWorkshopInfo/EditWorkshopInfo.jsx")
);
const InstructorSessions = lazy(() =>
  import("../pages/Instructor/Sessions/index.jsx")
);
const InstructorRevenue = lazy(() =>
  import("../pages/Instructor/Revenue/index.jsx")
);

// student routes
const StudentLayout = lazy(() => import("../pages/Student/Layout.jsx"));
const StudentHome = lazy(() => import("../pages/Student/Home/Home.jsx"));
const UserSettings = lazy(() => import("../pages/Student/Settings/index.jsx"));
const StudentWorkshops = lazy(() =>
  import("../pages/Student/Workshops/index.jsx")
);
const StudentBilling = lazy(() => import("../pages/Student/Billing/index.jsx"));

// let ProtectedRouter = (props) => {
//   if (localStorage.getItem("token") == null) {
//     return <Navigate to="/signin" />;
//   } else {
//     return props.children;
//   }
// };
const SuspenseWrapper = (props) => {
  return <Suspense fallback={<Loading />}>{props.children}</Suspense>;
};
const router = createBrowserRouter([
  // public routes
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
      { path: "part/:id/:chapter", element: <Parts /> },
      { path: "assignment", element: <Assignment /> },
      { path: "Chapter/:id", element: <Chapter /> },
      { path: "profile", element: <Profile /> },
      { path: "setting", element: <Setting /> },
      { path: "courseDetails/:id", element: <CourseDetails /> },
      { path: "myCourse", element: <MyCourses /> },
      { path: "video/:id/:chapter/:curriculum", element: <Video /> },

      { path: "*", element: <NotFound /> },
    ],
  },

  // instructor routes
  {
    path: "/instructor",
    element: <InstructorLayout />,
    children: [
      {
        index: true,
        element: (
          <SuspenseWrapper>
            <InstructorDashboard />
          </SuspenseWrapper>
        ),
      },
      {
        path: "*",
        element: (
          <SuspenseWrapper>
            <Error404 redirectTo={"/instructor"} />
          </SuspenseWrapper>
        ),
      },
      {
        path: "courses",
        children: [
          {
            index: true,
            element: (
              <SuspenseWrapper>
                <InstructorCourses />{" "}
              </SuspenseWrapper>
            ),
          },
          {
            path: ":courseId",
            children: [
              {
                index: true,
                element: (
                  <SuspenseWrapper>
                    <InstructorChapters />{" "}
                  </SuspenseWrapper>
                ),
              },
              {
                path: "edit",
                element: (
                  <SuspenseWrapper>
                    <InstructorEditCourseInfo />
                  </SuspenseWrapper>
                ),
              },
            ],
          },
          {
            path: ":courseId/:chapterId",
            children: [
              {
                index: true,
                element: (
                  <SuspenseWrapper>
                    <InstructorTopics />
                  </SuspenseWrapper>
                ),
              },
              {
                path: "article/new",
                element: (
                  <SuspenseWrapper>
                    <IntructorArticle />
                  </SuspenseWrapper>
                ),
              },
              {
                path: "article/:articleId",
                element: (
                  <SuspenseWrapper>
                    <IntructorArticle />
                  </SuspenseWrapper>
                ),
              },
              {
                path: "video/:videoId",
                element: (
                  <SuspenseWrapper>
                    <InstructorVideo />
                  </SuspenseWrapper>
                ),
              },
              {
                path: "quiz/:quizId",
                element: (
                  <SuspenseWrapper>
                    <InstructorQuiz />
                  </SuspenseWrapper>
                ),
              },
            ],
          },
        ],
      },
      {
        path: "workshops",
        children: [
          {
            index: true,
            element: (
              <SuspenseWrapper>
                <InstructorWorkshops />
              </SuspenseWrapper>
            ),
          },
          {
            path: ":workshopId",
            children: [
              {
                index: true,
                element: (
                  <SuspenseWrapper>
                    <InstructorSessions />
                  </SuspenseWrapper>
                ),
              },
              {
                path: "edit",
                element: (
                  <SuspenseWrapper>
                    <InstructorEditWorkshopInfo />
                  </SuspenseWrapper>
                ),
              },
            ],
          },
          {
            path: ":workshopId/live/:sessionId",
            children: [
              {
                index: true,
                element: (
                  <SuspenseWrapper>
                    <LiveSessions />
                  </SuspenseWrapper>
                ),
              },
            ],
          },
          {
            path: ":workshopId/recoarded",
            children: [
              {
                index: true,
                element: (
                  <SuspenseWrapper>
                    <LiveSessions />
                  </SuspenseWrapper>
                ),
              },
            ],
          },
        ],
      },
      {
        path: "settings",
        element: (
          <SuspenseWrapper>
            <UserSettings />
          </SuspenseWrapper>
        ),
      },
      {
        path: "revenue",
        element: (
          <SuspenseWrapper>
            <InstructorRevenue />
          </SuspenseWrapper>
        ),
      },
    ],
  },

  // student routes
  {
    path: "/student",
    element: (
      <SuspenseWrapper>
        <StudentLayout />{" "}
      </SuspenseWrapper>
    ),
    children: [
      {
        index: true,
        element: (
          <SuspenseWrapper>
            <StudentHome />
          </SuspenseWrapper>
        ),
      },
      {
        path: "*",
        element: (
          <SuspenseWrapper>
            <Error404 redirectTo={"/student"} />
          </SuspenseWrapper>
        ),
      },
      {
        path: "courses",
        element: (
          <SuspenseWrapper>
            <MyCourses />
          </SuspenseWrapper>
        ),
      },
      {
        path: "workshops",
        element: (
          <SuspenseWrapper>
            <StudentWorkshops />
          </SuspenseWrapper>
        ),
      },
      {
        path: "billing",
        element: (
          <SuspenseWrapper>
            <StudentBilling />
          </SuspenseWrapper>
        ),
      },
      {
        path: "settings",
        element: (
          <SuspenseWrapper>
            <UserSettings />
          </SuspenseWrapper>
        ),
      },
    ],
  },
]);
export default router;
