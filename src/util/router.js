import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home/Home.jsx";
import { createBrowserRouter } from "react-router-dom";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";
import ConfirmCode from '../pages/Forget_password/ConfirmCode/ConfirmCode';
import UpdatePasswordForm from '../pages/Forget_password/UpdatePasswordForm/UpdatePasswordForm';
import SendEmail from "../pages/Forget_password/SendEmail/SendEmail.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home", element: <Home />,
      },
      { path: "signin", index: true, element: <Signin /> },
      { path: "signup", element: <Signup /> },
      { path: "sendEmail", element: <SendEmail /> },
      { path: "sendCode", element: <ConfirmCode /> },
      { path: "updatePassword", element: <UpdatePasswordForm /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
export default router;
