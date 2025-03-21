import { ReactNode } from "react";
import { useAppSelector } from "../redux/features/hooks";
// import { useCurrentToken } from "../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";


const ProtectedRout = ({children}: {children: ReactNode}) => {
   
    const token = useAppSelector((state) => state.auth.token);
    // console.log(token)
    // const token = userInLocal?.token
    if(!token){
        return <Navigate to='/login' replace={true}/>
    }
    return children
};

export default ProtectedRout;