import { useState } from "react";
import { useAppSelector } from "../redux/features/hooks";

const Profile = () => {
  const user = useAppSelector((state) => state.auth.user);
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  const handleUpdate = () => {
    // Call API to update profile
    console.log("Profile Updated:", { name, email });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-700">Profile</h2>

      <div className="mt-4">
        <label className="block text-gray-600">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 mt-1"
        />

        <label className="block text-gray-600 mt-4">Email:</label>
        <input
          type="email"
          value={email}
          disabled
          className="w-full border border-gray-300 rounded-lg p-2 mt-1 bg-gray-100"
        />

        <button
          onClick={handleUpdate}
          className="mt-4 px-4 py-2 bg-primary text-white rounded-lg"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
