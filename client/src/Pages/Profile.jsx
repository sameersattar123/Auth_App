import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from "../redux/slice/userSlice";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser)
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const dispatch = useDispatch();
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(
        `http://localhost:3000/api/user/update/${currentUser._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(updateUserFailure(data));
      }
      dispatch(updateUserSuccess(data));
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };
  const handleDeleteAccount = () => {};
  const handleSignOut = () => {};
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center text-3xl my-7 font-semibold">Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <img
          src={currentUser.profilePicture}
          className="object-cover rounded-full cursor-pointer h-24 w-24 self-center"
          alt=""
        />
        <input
          type="text"
          id="username"
          className="bg-slate-100 p-3 rounded-lg"
          placeholder="Username"
          onChange={handleChange}
          defaultValue={currentUser.username}
        />
        <input
          type="email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          placeholder="Email"
          onChange={handleChange}
          defaultValue={currentUser.email}
        />
        <input
          type="password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          placeholder="Password"
          onChange={handleChange}
          defaultValue={currentUser.password}
        />
        <button className="p-3 text-white bg-slate-700 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          {/* {loading ? "Loading..." : "Update"} */} Update
        </button>
      </form>
      <div className="flex justify-between mt5">
        <span
          onClick={handleDeleteAccount}
          className="text-red-700 cursor-pointer"
        >
          Delete Account
        </span>
        <span onClick={handleSignOut} className="text-red-700 cursor-pointer">
          Sign out
        </span>
      </div>
      <p className="text-red-700 mt-5">
        {/* {error && "Something went wrong!"} */}
      </p>
      <p className="text-green-700 mt-5">
        {/* {updateSuccess && "User is updated successfully!"} */}
      </p>
    </div>
  );
};

export default Profile;
