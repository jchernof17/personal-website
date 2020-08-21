import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav, Card, Button as b, Jumbotron, Row as r } from 'react-bootstrap';
import { Menu, Header, Container, Button, Icon, GridRow as Row, Grid, Card as NewCard, Image, Tab } from 'semantic-ui-react';
import { Tabs, Tab as OldTab } from 'react-bootstrap-tabs';
import ReactGA from 'react-ga';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FRSCard, HNCard, Proj_170, EthSmartContractCard, IIJSiteCard, FlasketballCard, HackathonCard, FortniteCard, MYOPCard, MerkleProofCard } from './Cards';

/*
Outline: 

-Navbar (from react-bootstrap)
--Home (top of page)
--About (on page)
--Resume (link)
--Projects (on page)
--Contact (on page)

-Body
--About
--Projects
--Contact

-Footer (copyright)


Components needed:

- Navbar from react-bootstrap
- Project (custom) -- should just be a bootstrap card
  - Image
  - Github link
  - (optional) deployment link
- About ?
- Contact ?

About section:
My name is Jordan Chernof. I am a sophomore at UC Berkeley studying Computer Science and minoring in Public Policy.
I was born and raised in the Washington, DC area, where I earned several prestigious honors such as 2nd place in a chess competition the summer before 3rd grade.
In high school, I was pretty sure I wanted to go to college for political science. I took a gap year to work fulltime at a political nonprofit and discovered how much programming could help improve the quality and efficiency of my work.
I decided to study computer science because I think programming is a way of thinking that can help both in many industries and in one's personal life.
In my first year of college, I accepted a number of freelance web design and development opportunities for local Berkeley startups and campus-affiliated organizations.
I also spent some time doing web development for structured teams, such as being the Online Manager for the Daily Californian, our school newspaper, this past summer.
In March, I spent a weekend hacking together a website for LifeWork, a startup helping Freelancers build a sustainable career. I and one teammate hacked our way to 2nd place in the LAUNCH Hackathon -- and a nice $500. Since then, I've helped LifeWork and am thrilled to see them win a $5000 grant and be accepted as a Berkeley SkyDeck accelerator team.
This past summer, I focused on my software engineering internship at Consensys, a blockchain company that leads the Ethereum development community. I worked with an amazing team called Treum, which had something exciting to announce (albeit usually internally) just about eveyr single day. I met brilliant people and worked with positive personalities and role models, which was all I could have asked for.
Each opportunity has been a phenomenal practical and mental learning experience for me. Whether it's picking up a new framework, learning how to get through DevOps nightmares, or simply dealing with time management while being a fulltime student, I am grateful each time for the opportunity to work hard and contribute to team success.
Of course, this is a career-focused website, so I may seem a little serious. But I'm not definitely not all work! I like to play basketball, go hiking, and make breakfast foods. Other times, I like to read and drink homemade tea. And my roommate and I make some very good coffee.

A few projects are public on my Github profile, but some of the interesting work I've done is private. I'm happy to speak more about those if you're interested.

Contact section:
For internship or freelance inquiries, you can reach out to the email on my resume. Adding me on LinkedIn works as well.
You can also reach out for references.
*/

/* initialize GA */
function initializeReactGA() {
  ReactGA.initialize('UA-149256621-1');
  ReactGA.pageview('/homepage');
}
initializeReactGA()




const resume_link = "https://1drv.ms/w/s!AuHCf7OLnxVrh4duuQ3FvhLUntLw7w"
const github_link = "https://github.com/jchernof17"
const linkedin_link = "https://www.linkedin.com/in/jordan-chernof-086607173/"
const contact_me = `For internship or freelance inquiries, you can reach out to the email on my resume. Adding me on LinkedIn works as well.
You can also reach out for references.`


const bio1 = `My name is Jordan Chernof. I am a sophomore at UC Berkeley studying Computer Science and minoring in Public Policy.`
const bio2 = `I was born and raised in the Washington, DC area.`
const bio3 = `In high school, I was pretty sure I wanted to go to college for political science. I took a gap year to work fulltime at a political nonprofit and discovered how much programming could help improve the quality and efficiency of my work.
So I decided to study computer science instead.`
const bio4 = `In my first year of college, I accepted a number of freelance web design and development opportunities for local Berkeley startups and campus-affiliated organizations.
I also spent some time doing web development for structured teams, such as being the Online Manager for the Daily Californian, our school newspaper, this past summer.`
const lifework_bio = `In March, I spent a weekend hacking together a website for LifeWork, a startup helping Freelancers build a sustainable career. I and one teammate hacked our way to 2nd place and $500 in the LAUNCH Hackathon. Since then, I've helped LifeWork and am thrilled to see them win a $5000 grant and be accepted as a Berkeley SkyDeck accelerator team.`
const consensys_bio = `This past summer, I focused on my software engineering internship at Consensys, a blockchain company that leads the Ethereum development community. I worked with an amazing team called Treum, which had something exciting going on just about every single day. I met and worked with a constructive, highly focused, and inspiring team of blockchain developers.`
const conclusion = `Each opportunity has been a phenomenal practical and mental learning experience for me. Whether it's picking up a new framework, learning how to get through DevOps nightmares, or simply dealing with time management while being a fulltime student, I am grateful each time for the opportunity to work hard and contribute to team success.`
const lighthearted = `Of course, this is a career-focused website, so I may seem a little serious. But I'm not all work! I like to play basketball, go hiking, and make breakfast food.`

const directions = `A few projects are public on my Github profile, but some of the interesting work I've done is private. I'm happy to speak more about those if you're interested.`



const allCards = [FRSCard, HNCard, Proj_170, EthSmartContractCard, IIJSiteCard, FlasketballCard, HackathonCard, FortniteCard, MYOPCard, MerkleProofCard]

class AboutTab extends Component {

  render() {
    let label = this.props.label;
    let text = this.props.text;
    return (
      <Tab.Pane>{text}</Tab.Pane>
    );
  }
}

let objectToPane = (object) => {
  return {
    menuItem: object.label,
    render: () => <Tab.Pane attached={false}>{object.description}</Tab.Pane>
  };
}
const paneObjects = [
  {
    label: "About Me",
    description: bio1,
  },
  {
    label: "Where I'm From",
    description: bio2,
  },
  {
    label: "In High School",
    description: bio3,
  },
  {
    label: "In College...",
    description: bio4,
  },
  {
    label: "Work with LifeWork",
    description: lifework_bio,
  },
  {
    label: "Internship with ConsenSys",
    description: consensys_bio,
  },
  {
    label: "Conclusion",
    description: conclusion,
  },
  {
    label: "Disclaimer",
    description: lighthearted,
  },
  {
    label: "Directions",
    description: directions,
  },
]
class About extends Component {
  render() {
    return (
      <Row width='10'>
        <h1 style={{ color: "white" }}>About Me</h1>
        <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={paneObjects.map(object => objectToPane(object))} id="bio-tabs" className="" style={{ width: '100%', marginTop: "40px", marginBottom: "40px" }}>
        </Tab>
      </Row>
    )
  }
}

class Project extends Component {

  render() {
    let body = this.props.body;
    let cardHeight = "310px";

    return (
      <NewCard width='4' style={{ minHeight: cardHeight, maxHeight: cardHeight }} className="grow">
        <NewCard.Content>
          <Image src={body.image} />
          <NewCard.Header>
            {body.title}
          </NewCard.Header>
          <NewCard.Meta>
            {body.subtitle}
          </NewCard.Meta>
          <NewCard.Description textAlign='left'>
            {body.text}
          </NewCard.Description>
        </NewCard.Content>
        <NewCard.Content extra>
          {/* <div className='ui two buttons'> */}
          <Button color='teal' href={body.code_link}>
            View Code
            </Button>
          <Button color='teal' href={body.project_link}>
            View Project
            </Button>
          {/* </div> */}
        </NewCard.Content>
      </NewCard>
    )
  }
}

const projects = allCards.map(card => <Project body={card} />);

class Portfolio extends Component {
  render() {
    return (
      <Row width='10' id="projects" centered>
        <NewCard.Group centered>
          {projects}
        </NewCard.Group>
      </Row>
    )
  }
}

class Contact extends Component {

  render() {
    return (
      <Grid id="contact" style={{ "marginTop": "20px" }}>
        <h1 style={{ color: "black" }}>Contact</h1>
        <div>
          <h2 style={{ color: "blue" }}>{contact_me}</h2>
        </div>
      </Grid>
    )
  }
}

class MyNavbar extends Component {

  render() {
    return (
      <Menu bg="light" variant="light">
        <Menu.Item color='pink' href="#home">Home</Menu.Item>
        <Menu.Item href="#about">About</Menu.Item>
        <Menu.Item href={resume_link}>Resume</Menu.Item>
        <Menu.Item href="#projects">Projects</Menu.Item>
        <Menu.Item href="#contact">Contact</Menu.Item>
        <Menu.Item href={github_link}>Github</Menu.Item>
        <Menu.Item href={linkedin_link}>LinkedIn</Menu.Item>
      </Menu>
    )
  }
}


function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Container divided='vertically'>
        <About />
        <Portfolio />
        <Contact />
      </Container>

    </div>
  );
}

export default App;
