import React from "react";

// Assets
import PhotoImage from "../../assets/photo-profile.jpg";

const PhotoProfile = () => {
  return (
    <div className="my-5 h-[100px] w-[100px] rounded-full border-2 border-neutral-50 p-[7px]">
      <img
        src={PhotoImage}
        alt="User Profile"
        className="rounded-full object-cover"
      />
    </div>
  );
};

export default PhotoProfile;
