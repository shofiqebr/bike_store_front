import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div className="max-w-[1920px]">
      
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Main;
