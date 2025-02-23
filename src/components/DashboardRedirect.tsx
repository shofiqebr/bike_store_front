import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/features/hooks";
import { RootState } from "../redux/features/store";

const DashboardRedirect = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (!user) {
      navigate("/login"); // Redirect to login if no user
    } else if (user?.role === "customer") {
      navigate("/customer-dashboard");
    } else if (user?.role === "admin") {
      navigate("/admin-dashboard");
    } else {
      navigate("/"); // Default fallback (home page)
    }
  }, [user, navigate]);

  return <p>Redirecting...</p>; // Loading text before redirect
};

export default DashboardRedirect;
