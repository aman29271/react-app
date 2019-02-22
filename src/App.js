import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Container,Col,Row,Nav,Navbar,NavDropdown,Button,Form,FormControl,Media} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      
      <Container>
      <Navbar bg="light" expand="lg">
            <Navbar.Brand><Link to="/">Home</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link ><Link to="/about">About</Link></Nav.Link>
                <Nav.Link ><Link to="/link1">Link1</Link></Nav.Link>
                <Nav.Link ><Link to="/link2">Link2</Link></Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item><Link to="/action">Action 1</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/action1">Action 2</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/action2">Something</Link></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item><Link to="/action3">Separated link</Link></NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
          </Navbar.Collapse>
          </Navbar>
          <Row>
            <Col>
            <Route exact path="/" component={Home}></Route>
            <Route  path="/about" component={About}></Route>
            <Route path="/link1" component={Linkcode1}></Route>
            <Route path="/link2" component={Linkcode2}></Route>
            <Route exact path="/action" component={Action}></Route>
            <Route  path="/action1" component={Action1}></Route>
            <Route  path="/action2" component={Action2}></Route>
            <Route  path="/action3" component={Action3}></Route>
            </Col>
          </Row>
        </Container></div> 
        </Router> )
    }
}

export default App;
const Home = ()=>(
  <Col>
  <div><h2>This is a Home page created by me. It is totally based on react-js.</h2></div>
  {/* <Picture></Picture> */}
  </Col>
);
const About = ()=>(
  <div><h1>This is a About page</h1><br/><br/>
  <h6>

Started several mistake joy say painful removed reached end. State burst think end are its. Arrived off she elderly beloved him affixed noisier yet. An course regard to up he hardly. View four has said does men saw find dear shy. Talent men wicket add garden. 
  </h6>
  </div>
);
const Linkcode1 = () =>(
  <div>
  <div><h1>This is an link 1 page.</h1></div>
  <Picture src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"></Picture>
  </div>);
const Linkcode2 = () =>(
  <div>
  <div><h1>This is an link 2 page.</h1></div>
  <Picture src="https://images.pexels.com/photos/40784/drops-of-water-water-nature-liquid-40784.jpeg"></Picture></div>
);
const Action =()=>(
  <div><h1>This is an action page.</h1>
 <Picture src="https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg" />
  </div>
);
const Action1 =()=>(
  <div><h1>
    This is an action 1 page.
    </h1>  
    <Picture src="https://images.pexels.com/photos/66258/staniel-cay-swimming-pig-seagull-fish-66258.jpeg"/></div>
);
const Action2 =()=>(
  <div><h1>
    This is an action 2 page.
    </h1> 
    <Picture src="https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg"/></div>
);
const Action3 =()=>(
  <div><h1>
    This is an action 3 page.
    </h1>
    <Picture src="https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg"/></div>
)

class Picture extends Component{
  render(){
    return(
<Media>
<img
    width={200}
    height={200}
    className="mr-3"
    src={this.props.src}
    alt="Generic placeholder"
  />
  {/* <Imgsource src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" /> */}
  <Media.Body>
    <h5>Landscape Pictures</h5>
    <p>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
      Donec lacinia congue felis in faucibus.
    </p>
  </Media.Body>
</Media>
    )
  }
}
// class Imgsource extends Component{
// render(){
//   return(
// <img
//     width={200}
//     height={200}
//     className="mr-3"
//     src={this.props.src}
//     alt="Generic placeholder"
//   />
//   )
// }
// }
