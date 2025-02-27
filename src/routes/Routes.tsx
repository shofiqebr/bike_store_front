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
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import ProtectedRout from "../Layout/ProtectedRoute";
import PaymentVerify from "../pages/PaymentVerify";




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
          path:'/product/:id',
          element: <ProductDetails/>
        },
        {
          path:'/checkout/:id',
          element:<ProtectedRout><Checkout/></ProtectedRout> 
        },
        {
          path:'/about',
          element: <About/>
        },
        {
          path:'/contact',
          element: <Contact/>
        },
        {
          path:'paymentVerify',
          element: <PaymentVerify/>
        },
       
      ]
    },
    {
      path:'/dashboardCustomer',
      element: <ProtectedRout><DashboardCustomer/></ProtectedRout> ,
      errorElement: <ErrorPage/>,
      children: [
        {
          path:'dashboardCustomer',
          element: <ProtectedRout><DashboardCustomer/></ProtectedRout>
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
      element: <ProtectedRout><DashboardAdmin/></ProtectedRout>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path:'admin-dashboard',
          element:<ProtectedRout><DashboardAdmin/></ProtectedRout>
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