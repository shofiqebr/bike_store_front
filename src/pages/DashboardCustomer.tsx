import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/features/hooks";
import { logout } from "../redux/features/auth/authSlice";
import { useGetUsersQuery } from "../redux/api/authApi";


const DashboardCustomer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const { data: users, error, isLoading } = useGetUsersQuery();
  const filteredUser = users?.data?.find((item) => item.email === user?.email);

  // console.log(filteredUser?.name);

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
                onClick={() => navigate("/")}
              >
                Home
              </button>
            </li>
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
                onClick={() => navigate("/dashboardCustomer/profile")}
              >
               Update Profile
              </button>
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
    {/* Dashboard Header */}
    <h1 className="text-3xl font-bold text-gray-800">
      Welcome, {filteredUser?.name}!
    </h1>
    <p className="text-gray-600 mt-2">Here’s your latest activity.</p>

    {/* User Details Card */}
    <div className="mt-6 bg-white shadow-lg p-6 rounded-lg border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">User Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* User Info Section */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="text-gray-700 font-medium">
            <span className="text-gray-500">Name:</span> {filteredUser?.name}
          </p>
          <p className="text-gray-700 font-medium mt-2">
            <span className="text-gray-500">Email:</span> {filteredUser?.email}
          </p>
          <p className="text-gray-700 font-medium mt-2">
            <span className="text-gray-500">Role:</span> {filteredUser?.role}
          </p>
        </div>

        {/* Additional Info (Customize as Needed) */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="text-gray-700 font-medium">
            <span className="text-gray-500">Phone:</span> {filteredUser?.phone || "N/A"}
          </p>
          <p className="text-gray-700 font-medium mt-2">
            <span className="text-gray-500">Address:</span> {filteredUser?.address || "N/A"}
          </p>
          <p className="text-gray-700 font-medium mt-2">
            <span className="text-gray-500">City:</span> {filteredUser?.city || "N/A"}
          </p>
        </div>
      </div>
    </div>

    {/* Dynamic Content */}
    <div className="mt-8">
      <Outlet />
    </div>
  </div>
</main>

    </div>
  );
};

export default DashboardCustomer;
