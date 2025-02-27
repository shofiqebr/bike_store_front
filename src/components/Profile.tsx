import { useState } from "react";
import { useAppSelector } from "../redux/features/hooks";
import { useGetUsersQuery, useUpdateUserMutation } from "../redux/api/authApi";
import { useNavigate } from "react-router-dom";

const Profile = () => {
const userInLocal = useAppSelector((state) => state.auth.user); 
const navigate = useNavigate()
  const { data, refetch } = useGetUsersQuery();
  // console.log(data)
  const user =  data?.data?.find((item: { email: string | undefined; })=> item.email == userInLocal?.email)

  const [updateUser] = useUpdateUserMutation();

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    role: user?.role || "",
    phone: user?.phone || "",
    address: user?.address || "",
    city: user?.city || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await updateUser({ userId: user._id, updateData: formData }).unwrap();
      navigate('/dashboardCustomer')
      refetch();
    } catch (error) {
      console.error("Update Error:", error);
      alert("Failed to update profile");
    }
  };

  return (
    <div className=" mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 text-center">Profile Update</h2>

      <div className="mt-4">
        <label className="block text-gray-600 font-medium">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 mt-1"
        />

        <label className="block text-gray-600 font-medium mt-4">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          disabled
          className="w-full border border-gray-300 rounded-lg p-2 mt-1 bg-gray-100"
        />

        {/* <label className="block text-gray-600 font-medium mt-4">Role:</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 mt-1"
        >
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
        </select> */}

        <label className="block text-gray-600 font-medium mt-4">Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 mt-1"
        />

        <label className="block text-gray-600 font-medium mt-4">Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 mt-1"
        />

        <label className="block text-gray-600 font-medium mt-4">City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 mt-1"
        />

        <button
          onClick={handleUpdate}
          className="mt-6 w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-blue-600"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
