import { Jumbotron,Container } from "react-bootstrap";
import "./header.css";


export default function Header() {
  return (
    <Jumbotron fluid className="jumbotron">
      <Container fluid>
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      
    </div>
    </Container>
    </Jumbotron>
  );
}