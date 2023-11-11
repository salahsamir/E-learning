import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home/Home.jsx";
import { createBrowserRouter } from "react-router-dom";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";
import ConfirmCode from "../pages/Forget_password/ConfirmCode/ConfirmCode";
import UpdatePasswordForm from "../pages/Forget_password/UpdatePasswordForm/UpdatePasswordForm";
import SendEmail from "../pages/Forget_password/SendEmail/SendEmail.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";
import { Navigate } from "react-router-dom";
import CoursesPage from "../pages/Courses/CoursesPage.jsx";
import Video from "../pages/Videos/Video.jsx";
let ProtectedRouter = (props) => {
  if (localStorage.getItem("token") == null) {
    return <Navigate to="/signin" />;
  } else {
    return props.children;
  }
};
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
      {path:"course/:value",element:<CoursesPage/>},
      {path:"video",element:<Video/>},
      { path: "*", element: <NotFound /> },
    ],
  },
]);
export default router;
