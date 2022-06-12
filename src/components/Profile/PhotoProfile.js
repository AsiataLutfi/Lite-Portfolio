import React from "react";

// Assets
import PhotoImage from "../../assets/photo-profile.jpg";

const PhotoProfile = () => {
  return (
    <div className="my-5 h-25 w-25 rounded-full border-2 border-neutral-50 p-[7px] lg:h-30 lg:w-30">
      <img
        src={PhotoImage}
        alt="User Profile"
        className="rounded-full object-cover"
      />
    </div>
  );
};

export default PhotoProfile;
