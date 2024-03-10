import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const IndexWelcome = () => {
  return (
    <Row style={{ marginTop: "150px", marginRight: "50px" }}>
      <Col>
        <img
          src="/jonas.nygaard.jpg"
          alt="profile-img"
          style={{
            height: "400px",
            width: "400px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </Col>

      <Col style={{ marginTop: "60px", marginLeft: "80px" }}>
        <h1 style={{ color: "#270d2e" }}>Welcome</h1>
        <h1 style={{ color: "#270d2e" }}>to my</h1>
        <h1 style={{ color: "#270d2e" }}>portfolio page</h1>
        <Button
          href="https://github.com/JonnyNewfarm"
          style={{ background: "#270d2e", width: "150px", marginTop: "10px" }}
        >
          Link to my github
        </Button>
      </Col>
    </Row>
  );
};
