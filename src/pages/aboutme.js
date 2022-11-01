import React from "react";
import { Container } from "react-bootstrap";
import profile from "./images/Lissy.jpeg";

export default function Aboutme() {
  const style = {
    backgroundImage: {},
    aboutme: {
      textAlign: "center",
    },
    profile: {
      textAlign: "center",
    },
    image: {
      width: "25%",
      borderRadius: "20%",
      margin: "25px",
    },
  };
  return (
    <div style={{ backgroundColor: "transparent" }}>
      <Container style={style.profile}>
        <img
          style={style.image}
          src={profile}
          alt="Alyssa Gantos"
          class="profile-pic"
        />
      </Container>
      <Container style={style.aboutme}>
        <p class="p1">I am a recent graduate from Loyola University Chicago with a degree in Business with an emphasis in Marketing. I completed an internship at Matrix Home Solutions where I launched a new marketing campaign and redesigned their website. I continued my education by taking online coding courses.</p>
        <p class="p1">
        Currently, I am enrolled in a Coding Bootcamp at Vanderbilt University, Tennessee to expand on and grow my coding knowledge. 
        </p>
      </Container>
    </div>
  );
}
