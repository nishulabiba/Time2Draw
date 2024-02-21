import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>

        },
        
        {
          path: "/login",
          element: <Login/>

        },
        {
          path: "/sign-up",
          element: <Register/>
        }
      ]
    },
  ]);

  export default router;