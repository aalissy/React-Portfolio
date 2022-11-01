import React from "react";
import { Container, Button, Row } from "react-bootstrap";
import homework1 from "./images/first.png";
import project1 from "./images/Screen Shot 2022-07-28 at 9.20.23 PM.png";
import project2 from "./images/Screen Shot 2022-09-26 at 9.23.51 PM.png";
import homework2 from "./images/second.png";
import homework3 from "./images/third.png";
import homework4 from "./images/fourth.png";

export default function Portfolio() {
  const style = {
    row: {
      marginTop: "20px",
      marginBottom: "20px",
    },
  };
  return (
    <div style={{ backgroundColor: "transparent" }}>
      <Container style={{ textAlign: "center" }}>
        <Row style={style.row}>
          <a href="https://github.com/aalissy">
          </a>
        </Row>
        <div style={{ borderTop: "5px solid black" }}></div>
        <Row style={style.row}>
          <h1>First Homework: HTML & CSS Editing</h1>
          <a
            href="https://aalissy.github.io/First-Homework/"
          >
            <img src={homework1} alt="First Homework site" />
          </a>
          <Button
            href="https://github.com/aalissy/First-Homework"
            style={{ width: "50%", margin: "auto", padding: "auto" }}
            variant="outline-dark"
          >
            Github repo
          </Button>
        </Row>
        <div style={{ borderTop: "5px solid black" }}></div>
        <Row style={style.row}>
          <h1>First Project: Random Movie Generator</h1>
          <a href="https://daniel-pega.github.io/project-movie-night/">
            <img style={{ width: "50%" }} src={project1} alt="Random Movie Generator" />
          </a>
          <Button
            href="https://github.com/Daniel-PeGa/project-movie-night"
            style={{ width: "50%", margin: "auto", padding: "auto" }}
            variant="outline-dark"
          >
            Github repo
          </Button>
        </Row>
        <div style={{ borderTop: "5px solid black" }}></div>
        <Row style={style.row}>
          <h1>Second Project: DnD Character Generator</h1>
          <a href="https://dnd-github.herokuapp.com/" >
            <img style={{ width: "50%" }} src={project2} alt="Character Gen" />
          </a>
          <Button
            href="https://github.com/aalissy/DnD-Project"
            style={{ width: "50%", margin: "auto", padding: "auto" }}
            variant="outline-dark"
          >
            Github repo
          </Button>
        </Row>
        <div style={{ borderTop: "5px solid black" }}></div>
        <Row style={style.row}>
          <h1>Second Homework: Original Portfolio with only HTML and CSS</h1>
          <a
            href="https://aalissy.github.io/Portfolio/"
          >
            <img
              style={{ width: "50%" }}
              src={homework2}
              alt="Original Portfolio"
            />
          </a>
          <Button
            href="https://github.com/aalissy/Portfolio"
            style={{ width: "50%", margin: "auto", padding: "auto" }}
            variant="outline-dark"
          >
            Github repo
          </Button>
        </Row>
        <div style={{ borderTop: "5px solid black" }}></div>
        <Row style={style.row}>
          <h1>Third Homework: Password Generator</h1>
          <a
            href="https://aalissy.github.io/Password-Generator/"
          >
            <img
              style={{ width: "50%" }}
              src={homework3}
              alt="Password generator"
            />
          </a>
          <Button
            href="https://github.com/aalissy/Password-Generator"
            style={{ width: "50%", margin: "auto", padding: "auto" }}
            variant="outline-dark"
          >
            Github repo
          </Button>
        </Row>
        <div style={{ borderTop: "5px solid black" }}></div>
        <Row style={style.row}>
          <h1>Fourth Homework: Coding Quiz</h1>
          <a
            href="https://aalissy.github.io/Code-Quiz/"
          >
            <img
              style={{ width: "50%" }}
              src={homework4}
              alt="Coding quiz"
            />
          </a>
          <Button
            href="https://github.com/aalissy/Code-Quiz"
            style={{ width: "50%", margin: "auto", padding: "auto" }}
            variant="outline-dark"
          >
            Github repo
          </Button>
        </Row>
      </Container>
    </div>
  );
}
