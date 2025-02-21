import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Main = () => {
    return (
        <div className="max-w-[1920px]">
            <Navbar/>
            <Outlet/>
            </div>
    );
};

export default Main;