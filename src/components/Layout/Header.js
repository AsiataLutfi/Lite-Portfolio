import React from "react";

// Components
import Profile from "../Profile/Profile";
import Container from "../UI/Container";
import SocialButton from "../UI/SocialButton";

// Assets
import InstagramIcon from "../../assets/instagram.svg";
import TiktokIcon from "../../assets/tiktok.svg";
import YoutubeIcon from "../../assets/youtube.svg";

const Header = () => {
  return (
    <header className="mb-16" id="header">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <Profile />
          <div className="lg:justify-right flex justify-center">
            <SocialButton
              href="https://www.instagram.com/lutfi.khoirudin/"
              name="instagram"
              image={InstagramIcon}
            />
            <SocialButton
              href="https://www.tiktok.com/@lutfi.khoirudin"
              name="tiktok"
              image={TiktokIcon}
              disabled
            />
            <SocialButton
              href="https://www.youtube.com/channel/UCbFmL3dkWyv2ER6bEzL-Nxg"
              name="youtube"
              image={YoutubeIcon}
              disabled
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
