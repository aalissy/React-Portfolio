import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";

export default function Contact() {
  const style = {
    form: {
      marginTop: "30px",
    },
    row: {
      textAlign: "center",
    },
  };
  return (
    <div style={{ backgroundColor: "transparent" }}>
      <Container style={style.row}>
        <p class="links">
          <Row style={style.form}>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Reach out and get in contact with me!</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email here"
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="Enter your name here" required />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label></Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter your message here"
                  required
                />
              </Form.Group>
              <Button variant="outline-dark" type="submit">
                Submit
              </Button>
            </Form>
          </Row>
          <Row>
            <a href="https://www.linkedin.com/in/lissy-gantos-4b17a2154/">
              LinkedIn
            </a>
          </Row>
          <Row>
            <a href="mailto:lissygantos@gmail.com">
              Email
            </a>
          </Row>
          <Row>
            <a href="tel:+18476822449">
              Telephone
            </a>
          </Row>
        </p>
      </Container>
    </div>
  );
}
