import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home/Home.jsx";
import Forget from "../Components/Auth/Forget/Forget.jsx";
import SendCod2 from "../Components/Auth/SendCod2/SendCod2.jsx";
import UpdatePassword3 from "../Components/Auth/UpdatePassword3/UpdatePassword3.jsx";
import { createBrowserRouter } from "react-router-dom";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";
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
      { path: "forget", element: <Forget /> },
      { path: "send", element: <SendCod2 /> },
      { path: "Update", element: <UpdatePassword3 /> },
    ],
  },
]);
export default router;
