import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css";
import Aboutme from "./pages/aboutme";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";
import background from "./pages/images/background.webp";

function App() {
  const style = {
    name: {
      fontWeight: "700%",
      textAlign: "center",
    },
    footer: {
      justifyContent: "center",
      backgroundColor: "transparent",
    },
  };
  return (
    <div
      style={{
        fontFamily: "Esteban, sans-serif",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        overflow: "scroll",
      }}
    >
      <Router>
        <Container>
          <header>
            <Row>
              <h1 style={style.name}>Alyssa Gantos</h1>
            </Row>
            <Row>
              <Col style={style.name} sm={3}>
                <Link className="link" to="/React-Portfolio/aboutme">
                  About me
                </Link>
              </Col>
              <Col style={style.name} sm={3}>
                <Link className="link" to="/React-Portfolio/portfolio">
                  Portfolio
                </Link>
              </Col>
              <Col style={style.name} sm={3}>
                <Link className="link" to="/React-Portfolio/contact">
                  Contact
                </Link>
              </Col>
              <Col style={style.name} sm={3}>
                <Link className="link" to="/React-Portfolio/resume">
                  Resume
                </Link>
              </Col>
            </Row>
          </header>
          <div style={{ borderBottom: "5px solid black" }}></div>
        </Container>
        <Route exact path="/React-Portfolio">
          <Redirect to="/React-Portfolio/aboutme"></Redirect>
        </Route>
        <Route exact path="/React-Portfolio/aboutme">
          <Aboutme />
        </Route>
        <Route exact path="/React-Portfolio/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/React-Portfolio/contact">
          <Contact />
        </Route>
        <Route exact path="/React-Portfolio/resume">
          <Resume />
        </Route>
      </Router>
      <Container>
        <div style={{ borderTop: "5px solid black" }}></div>
        <footer>
          <Row>
            <Col style={{ textAlign: "center" }} sm={4}>
              <a className="link" href="https://github.com/aalissy" target="_blank" rel="noreferrer noopener">
                GitHub
              </a>
            </Col>
            <Col style={{ textAlign: "center" }} sm={4}>
              <a className="link" href="https://www.linkedin.com/in/lissy-gantos-4b17a2154/" target="_blank" rel="noreferrer noopener">
                Linkedin
              </a>
            </Col>
            <Col style={{ textAlign: "center" }} sm={4}>
              <a className="link" href="https://twitter.com/aalissy" target="_blank" rel="noreferrer noopener">
                Twitter
              </a>
            </Col>
          </Row>
          <Row style={style.footer}>
            React Portfolio for Alyssa Gantos
          </Row>
        </footer>
      </Container>
    </div>
  );
}

export default App;
