import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/features/hooks";
import { logout } from "../redux/features/auth/authSlice";
import { useGetUsersQuery } from "../redux/api/authApi";

const DashboardAdmin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation(); // Get current route
  const userInLocal = useAppSelector((state) => state.auth.user);
  
  const { data, error, isLoading } = useGetUsersQuery();
  const user = data?.data?.find((item) => item.email == userInLocal?.email);
  console.log(userInLocal)

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  // Check if Outlet has content (i.e., user is on a nested route)
  const isNestedRoute = location.pathname !== "/dashboardAdmin";

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Admin Dashboard</h2>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">{user?.email}</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <button
                className="w-full text-left px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
                onClick={() => navigate("/")}
              >
                Home
              </button>
            </li>

            {/* Product Management */}
            <li>
              <button
                className="w-full text-left px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
                onClick={() => navigate("/admin-dashboard/products")}
              >
                Products
              </button>
              <ul className="space-y-2 pl-4">
                <li>
                  <button
                    className="w-full text-left px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                    onClick={() => navigate("/admin-dashboard/products/create")}
                  >
                    Create Product
                  </button>
                </li>
                <li>
                  <button
                    className="w-full text-left px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                    onClick={() => navigate("/admin-dashboard/products/myOrders")}
                  >
                    View Products
                  </button>
                </li>
              </ul>
            </li>

            {/* Order Management */}
            <li>
              <button
                className="w-full text-left px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
                onClick={() => navigate("/dashboardAdmin/orders")}
              >
                Orders
              </button>
              <ul className="space-y-2 pl-4">
                <li>
                  <button
                    className="w-full text-left px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                    onClick={() => navigate("/dashboardAdmin/orders")}
                  >
                    View Orders
                  </button>
                </li>
                <li>
                  <button
                    className="w-full text-left px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                    onClick={() => navigate("/dashboardAdmin/orders/manage")}
                  >
                    Manage Orders
                  </button>
                </li>
              </ul>
            </li>

            {/* User Management */}
            <li>
              <button
                className="w-full text-left px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
                onClick={() => navigate("/dashboardAdmin/users")}
              >
                Users
              </button>
              <ul className="space-y-2 pl-4">
                <li>
                  <button
                    className="w-full text-left px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                    onClick={() => navigate("/dashboardAdmin/users")}
                  >
                    View Users
                  </button>
                </li>
                <li>
                  <button
                    className="w-full text-left px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                    onClick={() => navigate("/dashboardAdmin/users/deactivate")}
                  >
                    Deactivate User
                  </button>
                </li>
              </ul>
            </li>

            <li>
              <button
                className="w-full text-left px-4 py-2 rounded-lg bg-accent text-white hover:bg-red-600 transition"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Show Welcome Message & User Details ONLY if it's NOT a nested route */}
          {isNestedRoute && (
            <>
              {/* Dashboard Header */}
              <h1 className="text-3xl font-bold text-gray-800">
                Welcome, {user?.name}!
              </h1>
              <p className="text-gray-600 mt-2">Here’s your latest activity.</p>

              {/* User Details Card */}
              <div className="mt-6 bg-white shadow-lg p-6 rounded-lg border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  User Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* User Info Section */}
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-gray-700 font-medium">
                      <span className="text-gray-500">Name:</span> {user?.name}
                    </p>
                    <p className="text-gray-700 font-medium mt-2">
                      <span className="text-gray-500">Email:</span> {user?.email}
                    </p>
                    <p className="text-gray-700 font-medium mt-2">
                      <span className="text-gray-500">Role:</span> {user?.role}
                    </p>
                  </div>

                  {/* Additional Info */}
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-gray-700 font-medium">
                      <span className="text-gray-500">Phone:</span>{" "}
                      {user?.phone || "N/A"}
                    </p>
                    <p className="text-gray-700 font-medium mt-2">
                      <span className="text-gray-500">Address:</span>{" "}
                      {user?.address || "N/A"}
                    </p>
                    <p className="text-gray-700 font-medium mt-2">
                      <span className="text-gray-500">City:</span>{" "}
                      {user?.city || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Dynamic Content */}

          
          <div className="mt-8">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardAdmin;
