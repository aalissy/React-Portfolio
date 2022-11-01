import React from "react";
import { Container} from "react-bootstrap";
import myresume from "./images/Screen Shot 2022-11-01 at 5.15.39 PM.png";
import resumedownload from "./images/Business Resume.pdf";

export default function Resume() {
  const style = {
    text: {
      marginTop: "40px",
      marginBottom: "40px",
      textAlign: "center",
      justifyContent: "center",
    },
    myresume: {
      marginTop: "40px",
      marginBottom: "40px",
      justifyContent: "center",
      width: "75%",
    },
  };
  return (
    <div>
      <Container style={style.text} sm={3}>
        <h2>Downloadable PDF of my resume</h2>
        <a href={resumedownload}>
          <img style={style.myresume} src={myresume} alt="Alyssa's Resume" />
        </a>
      </Container>
    </div>
  );
}
