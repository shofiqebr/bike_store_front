import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AllProducts from "../pages/AllProducts";
import About from "../pages/About";
import Contact from "../pages/Contact";
import DashboardCustomer from "../pages/DashboardCustomer";




export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path:'/',
          element: <Home/>
        },
        {
          path:'/login',
          element: <Login/>
        },
        {
          path:'/allProducts',
          element: <AllProducts/>
        },
        {
          path:'/about',
          element: <About/>
        },
        {
          path:'/contact',
          element: <Contact/>
        },
       
      ]
    },
    {
      path:'/dashboardCustomer',
      element: <DashboardCustomer/>
    },
  ]);