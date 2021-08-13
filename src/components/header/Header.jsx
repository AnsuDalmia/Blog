import { Jumbotron, Container} from 'react-bootstrap';
import "./header.css";

export default function Header() {
  return (
    <Jumbotron fluid>
       <Container fluid>
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm"></span>
        <span className="headerTitleLg">Blog</span>
      </div>
    </div>
    </Container>
    </Jumbotron>

  );
}