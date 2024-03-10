import React from "react";
import Row from "react-bootstrap/Row";
import FirstProjectCard from "../components/FirstProjectCard";
import SecondProjectCard from "../components/SecondProjectCard";
import { ThirdProjectCard } from "../components/ThirdProjectCard";
import { NavbarComp } from "../components/Navbar";
import { IndexWelcome } from "../components/IndexWelcome";

export const HomePage = () => {
  return (
    <>
      <NavbarComp></NavbarComp>

      <IndexWelcome />
      <Row style={{ marginTop: "100px" }}>
        <hr />
        <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
          My projects
        </h1>
        <FirstProjectCard />
        <SecondProjectCard />
        <ThirdProjectCard />
      </Row>
    </>
  );
};
