import React from "react";

// Components
import PhotoProfile from "./PhotoProfile";
import ProfileDetails from "./ProfileDetails";

const Profile = () => {
  return (
    <div className="my-5 flex flex-col items-center lg:flex-row lg:justify-center">
      <PhotoProfile />
      <ProfileDetails />
    </div>
  );
};

export default Profile;
