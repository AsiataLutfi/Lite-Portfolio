import React from "react";

// Components
import AnchorButton from "../UI/AnchorButton";
import Container from "../UI/Container";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 border-t border-t-neutral-50 bg-base shadow-[0_-10px_20px_-20px_rgba(0,0,0,1)]">
      <Container>
        <div className="my-6 grid grid-cols-5 gap-[10px]">
          <AnchorButton
            anchor="#project_list"
            type="default"
            className="col-span-4"
          >
            Projects
          </AnchorButton>
          <AnchorButton anchor="#header" type="outlined">
            Up
          </AnchorButton>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
