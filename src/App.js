import React from "react";

// Components
import Header from "./components/Layout/Header";
import AccountCard from "./components/Card/AccountCard";
import Container from "./components/UI/Container";

// Assets
import GoogleImage from "./assets/google.svg";
import TelegramImage from "./assets/telegram.svg";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Container>
          <AccountCard
            image={GoogleImage}
            name="Gmail"
            href="mailto:asiatakh25@gmail.com"
          />
          <AccountCard
            image={TelegramImage}
            name="Telegram"
            href="https://t.me/lutfi_khoir"
          />
        </Container>
      </main>
    </React.Fragment>
  );
};

export default App;
