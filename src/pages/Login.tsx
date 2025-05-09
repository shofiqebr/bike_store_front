/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import { useLoginMutation } from "../redux/api/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [login, { isLoading }] = useLoginMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    try {
      const res = await login(formData).unwrap();
      const user = verifyToken(res.data.token);

      dispatch(setUser({ user, token: res.data.token }));
      toast.success("Login successful! Redirecting...");

      setTimeout(() => navigate("/"), 2000);
    } catch (err: any) {
      toast.error(err?.data?.message || "Login failed. Please try again.");
    }
  };

  const fillDemoCredentials = async (type: "admin" | "user") => {
    const credentials =
      type === "admin"
        ? { email: "shofiqebr1@gmail.com", password: "12345" }
        : { email: "johndoe@example.com", password: "12345" };

    setFormData(credentials);
    // Wait a moment before submitting
    setTimeout(() => handleSubmit(), 400);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 rounded-lg font-semibold transition ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-primary text-white hover:bg-blue-700"
            }`}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-6">
          <p className="text-center text-gray-600 mb-2">Try a demo account:</p>
          <div className="flex justify-between gap-4">
            <button
              className="w-1/2 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
              onClick={() => fillDemoCredentials("admin")}
            >
              Demo Admin
            </button>
            <button
              className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
              onClick={() => fillDemoCredentials("user")}
            >
              Demo User
            </button>
          </div>
        </div>

        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <span
            className="text-blue-600 font-semibold cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
