import {jwtDecode} from "jwt-decode";
import { IUser } from "../redux/features/auth/authSlice";
 // Make sure to import IUser interface

export const verifyToken = (token: string): IUser => {
  // Decode the token and cast it to IUser
  const decodedToken = jwtDecode<IUser>(token);
  return decodedToken;
};
