import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AllProducts from "../pages/AllProducts";
import About from "../pages/About";
import Contact from "../pages/Contact";
import DashboardCustomer from "../pages/DashboardCustomer";
import Profile from "../components/Profile";
import Signup from "../pages/Signup";
import MyOrders from "../pages/MyOrders";
import DashboardAdmin from "../pages/DashboardAdmin";
import CreateProduct from "../components/CreateProduct";




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
          path:'/signup',
          element: <Signup/>
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
      element: <DashboardCustomer/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path:'dashboardCustomer',
          element: <DashboardCustomer/>
        },
        {
          path:'profile',
          element: <Profile/>
        },
        {
          path:'myOrders',
          element: <MyOrders/>
        },
]
    },
    {
      path:'/admin-dashboard',
      element: <DashboardAdmin/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path:'admin-dashboard',
          element: <DashboardAdmin/>
        },
        {
          path:'products/create',
          element: <CreateProduct/>
        },
        {
          path:'products/myOrders',
          element: <MyOrders/>
        },
]
    },
  ]);