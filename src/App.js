import React from "react";

// Components
import Header from "./components/Layout/Header";
import Container from "./components/UI/Container";
import AccountList from "./components/CardContent/AccountList";
import ProjectList from "./components/CardContent/ProjectList";
import Footer from "./components/Layout/Footer";

// Assets
import GoogleImage from "./assets/google.svg";
import TelegramImage from "./assets/telegram.svg";
import LinkedinImage from "./assets/linkedin.svg";
import DribbbleImage from "./assets/dribbble.svg";
import BehanceImage from "./assets/behance.svg";
import GithubImage from "./assets/github.svg";

const DUMMY_CONTACT = [
  {
    id: "swRSqtupTelyhWyGI",
    image: GoogleImage,
    name: "Gmail",
    link: "mailto:asiatakh25@gmail.com",
    username: "asiatakh25@gmail.com",
  },
  {
    id: "CVvHMDqNfyXAY",
    image: TelegramImage,
    name: "Telegram",
    link: "https://t.me/lutfi_khoir",
    username: "t.me/lutfi_khoir",
  },
];

const DUMMY_ACCOUNT = [
  {
    id: "ulVSUrROaFD",
    image: LinkedinImage,
    name: "LinkedIn",
    link: "",
    disabled: true,
    username: "",
  },
  {
    id: "QtiLmrLTAddgj",
    image: DribbbleImage,
    name: "Dribbble",
    link: "https://dribbble.com/lutfikhoir",
    disabled: true,
    username: "",
  },
  {
    id: "jeJRwJYzQheqIlGqHEKr",
    image: BehanceImage,
    name: "Behance",
    link: "https://www.behance.net/lutfikhoir/",
    disabled: true,
    username: "",
  },
  {
    id: "CwyzXKMgJcvFjnRP",
    image: GithubImage,
    name: "GitHub",
    link: "https://github.com/AsiataLutfi/",
    username: "github.com/AsiataLutfi",
  },
];

const DUMMY_PROJECTS = [
  {
    id: "viHeumOZK",
    title: "Lite-Web Portfolio",
    description:
      "I made a “lite web” for my personal portfolio. It’s made really fast from 0",
    technology: ["React", "Tailwind", "UX", "UI"],
    link: "wow.com",
  },
  {
    id: "naBsKjuKMtbGNjA",
    title: "Clone Instagram",
    description: "I'm trying to make an Instagram web interface or cloning",
    technology: ["React", "Bootstrap"],
    link: "wow.com",
  },
  {
    id: "qMZIF",
    title: "Revamp Theater Website",
    description: "Make a better user flow which is suitable to user need",
    technology: ["UX Research", "UX Design"],
    link: "wow.com",
  },
];

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="mb-32">
        <Container>
          <AccountList datas={DUMMY_CONTACT} />
          <AccountList datas={DUMMY_ACCOUNT} />
          <ProjectList datas={DUMMY_PROJECTS} />
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
