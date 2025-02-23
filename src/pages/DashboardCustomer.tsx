import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/features/hooks";
import { logout } from "../redux/features/auth/authSlice";

const DashboardCustomer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100 ">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Dashboard</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <button
                className="w-full text-left px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
                onClick={() => navigate("/customer-dashboard/orders")}
              >
                My Orders
              </button>
            </li>
            <li>
              <button
                className="w-full text-left px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
                onClick={() => navigate("/customer-dashboard/profile")}
              >
                Profile
              </button>
            </li>
            <li>
              <button
                className="w-full text-left px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome, {user?.email}!
        </h1>
        <p className="text-gray-600 mt-2">Here’s your latest activity.</p>

        {/* Orders Overview */}
        <div className="mt-6 bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700">Recent Orders</h2>
          <div className="mt-4">
            <p className="text-gray-500">No recent orders found.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardCustomer;
