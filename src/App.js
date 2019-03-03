import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import React, { Component } from 'react';
import carousel1 from './images/Banner01.jpg';
import carousel2 from './images/DSC_7609.jpg';
import carousel3 from './images/Banner5.jpg';
import carousel4 from './images/Banner4.jpg';
import gyti from './images/seminar/gyti.jpg';
import ceer from './images/ceer.jpg';
import logo from './images/logo.png';
import logodesc from './images/logodesc1.jpg';
import babloo from './images/seminar/babloo.jpg';
import './App.css';
import './modern-business.css';
import {Container,Col,Row,Nav,Navbar,NavDropdown,Button,Media,Carousel,CarouselItem,Card,Breadcrumb} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      
        <NavbarFixedTop/>
        <header style={{marginTop:'50px'}}>
          <Container>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/events" component={Event}></Route>
            <Route path="/workshop" component={Workshop}></Route>
            <Route path="/guest-lecture" component={Guest_lecture}></Route>
            <Route path="/team" component={Team}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/magazine" component={Magazine}></Route>
            <Route path="/gallery" component={Gallery}></Route>
          </Container>
          
        </header>
        <footer className="py-5 bg-dark" style={{marginTop:'50px'}}>
          <Container>
          
            <p className="m-0 text-center text-white">Copyright © ACE, IIT Patna 2019</p>
          </Container>
        </footer>
          {/* <Row>
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
          </Row> */}
        </div> 
        </Router> )
    }
}

export default App;
class Home extends Component{
  render(){
    return(
      <div>
    <CenteredCourousel />
    <h1 className="my-4">Welcome to Association of Civil Engineers, IIT Patna</h1>
    <div className="arya"> We at ACE build a healthy environment for faculty-student interaction, our vitality ranges from ‘Neev’, the freshers’ welcome to Civil Cricket League; From celebrating Teachers’ Day to bidding a farewell to seniors and much more. With an active involvement of Faculty members we here at ACE are achieving all that we need to be in the growing stage of the department and yet we strive for more.  <br/><br/>
    <div className="cal">ACE's Activity Calendar <blink>NEW</blink></div>
    <div className="card-footer" id="calendar">
        <a href="images/calendar1.pdf" target ="_blank" class="btn btn-primary">Click Here</a>
    </div></div>
    <h2>Announcements</h2>
    <Row>
    <Col lg={4} mb={4}>
    <Card className="h-100">
      <Card.Header>Farewell '18 Cricket Match Result</Card.Header>
      <Card.Body>
        <Card.Text>We saw some outstanding individual performances from both the sides  but in the end one team had to lose and it was the passing out batch of UGs. The team of FACULTY AND PGs WON with an over and a half to spare.
        </Card.Text>
      </Card.Body>
      <Card.Footer><Button variant="primary">Click Here</Button></Card.Footer>
      </Card>
    </Col>
    <Col lg={4} mb={4}>
    <Card className="h-100">
    <Card.Header>The 2nd Chapter of SITE VISIT</Card.Header>
    <Card.Body>
      <Card.Text>"Knowledge without application is like a book that is never read." Association of Civil Engineering organised the Site visit to the new Boys Hostel under construction."</Card.Text>
    </Card.Body>
    <Card.Footer><Button variant="primary">Click Here</Button></Card.Footer>
    </Card>
    </Col>
    <Col lg={4} mb={4}>
    <Card className="h-100">
    <Card.Header>ACE Launches its website</Card.Header>
    <Card.Body>
      <Card.Text>After a dedicated work for a duration of 6 months, the complete teamwork of ACE is here! We now officially launch the website on the ocassion of new year 2018, to bring to you all the happenings of Department of Civil and Environmental Engineering.</Card.Text>
      </Card.Body>
    <Card.Footer><Button variant="primary">Click Here</Button></Card.Footer>
    </Card>
    </Col></Row>
    <h2>News and Headlines</h2>
    <Row>
    <Col lg={4} mb={4}>
    <Card className="h-100">
      <Card.Img variant="top" src={gyti} />
      <Card.Body>
        <Card.Title>GYTI Award 2018</Card.Title>
        <Card.Text>The work of Mr. Mahipal, M.Tech student and Mr. Hasan Ahmed Faisal, B.Tech student (pass-out) on 'Cerium impregnated activated carbon composite as a filtering material for fluoride removal from groundwater' has been selected for Gandhian Young Technological Innovation (GYTI) award/appreciation 2018".
        </Card.Text>
      </Card.Body>
      </Card>
    </Col>
    <Col lg={4} mb={4}>
    <Card className="h-100">
    <Card.Img variant="top" src={ceer} />
    <Card.Body>
      <Card.Title>Centre for Earthquake Engineering Research (CEER)</Card.Title>
      <Card.Text>Centre for Earthquake Engineering Research (CEER), IIT Patna is going to organize a Short Course on Earthquake Resistant Design Based on Recently Revised Seismic Codes during 5th-7th April 2018. Details on the course and registration are available at following link:<br/><a href="https://sites.google.com/view/iitp-ceer-2018/home">https://sites.google.com/view/iitp-ceer-2018/home</a></Card.Text>
    </Card.Body>
    </Card>
    </Col>
    <Col lg={4} mb={4}>
    <Card className="h-100">
    <Card.Img variant="top" src={babloo} />
    <Card.Body>
      <Card.Title>Dr. Babloo Chaudhary visits IIT Patna</Card.Title>
      <Card.Text>Dr. Babloo Chaudhary (Ph.D., Kyushu University Japan) came to speak on the topic "Resilient Foundation Model against Earthquake and Tsunami".</Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </div>
    )
  }
}
class About extends Component{
  render(){
    return(
      <div>
      <h1 className="mt-4 mb-3">About ACE</h1>
      <Breadcrumbdup name="About" />
      <Row>
        <Col lg={6}>
        <img className="img-fluid rounded mb-4" src={logodesc} />
        </Col>
        <Col lg={6}>
        <h2 style={{textAlign:'left'}}>About Association of Civil Engineers</h2>
        <p>ABOUT THE CLUB:</p>
        <p className="justify">The club was established by students and faculty members of Civil engineering department IIT Patna in the initial days of setting up of the branch. The club aims for the overall progress  of students and help them to excel in all fields and also to improve and increase Student-Faculty interaction.</p>
          <p>OBJECTIVE:</p>
          <ul><li><p class="justify">The vision is to develop into a strong platform promoting student-faculty interaction outside of the world of regular academics.</p></li> 
			<li><p class="justify">A forum where people accumulate and share their knowledge, a forum that passes on the baton through the years so that it provides a head start to students entering the department to maximize their time by taking forward successes and learning from mistakes.</p></li></ul>
        </Col>
      </Row>
      </div>)
  }
}
class Breadcrumbdup extends Component{
  render(){
    return(
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>{this.props.name}</Breadcrumb.Item>
      </Breadcrumb>
    )}
}
class Event extends Component{
  render(){
    return(
      <React.Fragment>
      <Breadcrumbdup name="Event"/>
<div>This is an Event Page.</div>
</React.Fragment>
    )
  }
}
class Workshop extends Component{
  render(){
    return(
      <React.Fragment>
        <Breadcrumbdup name="Workshop"/>
      <div>This ia a Workshop Page.</div>
      </React.Fragment>
    )
  }
}
class Guest_lecture extends Component{
  render(){
    return(
      <React.Fragment>
        <Breadcrumbdup name="Guest Lecture"/>
      <div>This is a Guest Lecture Page.</div>
      </React.Fragment>
    )
  }
}
class Team extends Component{
  render(){
    return(
      <React.Fragment>
        <Breadcrumbdup name="Team"/>
      <div>This is a Team Page.</div>
      </React.Fragment>
    )
  }
}
class Contact extends Component{
  render(){
    return(
      <React.Fragment>
        <Breadcrumbdup name="Contact"/>
    <div>This is an Contact Us page.</div>
    </React.Fragment>
    )
  }
}
class Magazine extends Component{
  render(){
    return(
      <React.Fragment>
        <Breadcrumbdup name="Magazine"/>
      <div>This is a magazine page.</div>
      </React.Fragment>
    )
  }
}

class Gallery extends Component{
  render(){
    return(
      <React.Fragment>
        <Breadcrumbdup name="Gallery"/>
      <div>This is a gellry page.</div>
      </React.Fragment>
    )
  }
}
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
class NavbarFixedTop extends Component{
  render(){
    return(
    <Navbar fixed="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Link to="/">
        <img src={logo} height="50" width="50" alt="" /> Association of Civil Engineers, IIT Patna
        </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="ml-auto">
          <Nav.Link><Link to="/about">About</Link></Nav.Link>
          <NavDropdown title="Activities" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/events">Events</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/workshop">Workshops</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/guest-lecture">Guest Lectures</Link></NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Peole" id="basic-nav-dropdown">
            <NavDropdown.Item><Link to="https://www.iitp.ac.in/~singhal/">Faculty In-Charge</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/team">Team</Link></NavDropdown.Item>
          </NavDropdown>
          <Nav.Link><Link to="/magazine">Magazine</Link></Nav.Link>
          <Nav.Link><Link to="/gallery">Gallery</Link></Nav.Link>
          <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>)
  }
}
class CenteredCourousel extends Component{
  render(){
    return(
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>ACE Website Launch!</h3>
            <p>We bring to you a collection of ACE's perennial activities.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel2}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Farewell 2018</h3>
            <p>ACE bidded fairwell to the batch of 2018.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Farewell 2017</h3>
            <p>ACE bidded fairwell to the batch of 2017.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel4}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Department of Civil & Environmental Engineering</h3>
            <p>The DCEE family in a sigle frame.</p>
          </Carousel.Caption>
        </Carousel.Item>
</Carousel>
    )
  }
}