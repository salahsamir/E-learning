import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home/Home.jsx";
import { createBrowserRouter } from "react-router-dom";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "signin", index: true, element: <Signin /> },
      { path: "signup", element: <Signup /> },
      { path: "forget-password", element: <ForgetPassword /> },
    ],
  },
]);
export default router;
