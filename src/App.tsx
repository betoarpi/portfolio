import React, { ReactElement } from "react";
import GlobalFonts from "./theme/globalStyles";
import { Routes, Route } from "react-router-dom";
import { AppContainer, InnerContainer, Wrapper } from "./theme/theme";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const App = (): ReactElement => {
  return (
    <AppContainer>
      <GlobalFonts />
      <Wrapper>
        <Header />

        <InnerContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </InnerContainer>
      </Wrapper>
    </AppContainer>
  );
};

export default App;
