import React from "react";
import { Footer, HeaderLinks, SearchInput } from "../../components";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <HeaderLinks />
      </div>
      <div className="home__main">
        <img src="/images/google-logo.png" alt="logo" />
        <div className="home__inputContainer">
          <SearchInput />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
