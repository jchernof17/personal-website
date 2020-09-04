import React, { Component } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import {
	Navbar,
	Nav,
	Card,
	Button as b,
	Jumbotron,
	Row as r,
} from "react-bootstrap";
import {
	Menu,
	Header,
	Container,
	Button,
	Icon,
	GridRow as Row,
	Grid,
	Card as NewCard,
	Image,
	Tab,
} from "semantic-ui-react";
import { Tabs, Tab as OldTab } from "react-bootstrap-tabs";
import ReactGA from "react-ga";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	FRSCard,
	HNCard,
	Proj_170,
	EthSmartContractCard,
	IIJSiteCard,
	FlasketballCard,
	HackathonCard,
	FortniteCard,
	MYOPCard,
	MerkleProofCard,
} from "./Cards";

const isDarkMode = false;

/* initialize GA */
function initializeReactGA() {
	ReactGA.initialize("UA-149256621-1");
	ReactGA.pageview("/homepage");
}
initializeReactGA();

const resume_link = "https://1drv.ms/b/s!AuHCf7OLnxVrirguD8zgeqRUdg9Y9g";
const github_link = "https://github.com/jchernof17";
const linkedin_link = "https://www.linkedin.com/in/jordan-chernof";
const contact_me = `For internship or freelance inquiries, you can reach out to the email on my resume. Adding me on LinkedIn works as well.`;
const extra_text = `
You can also reach out for references.
My name is Jordan Chernof. I am a junior at UC Berkeley studying Computer Science and Public Policy.

I was born and raised in Maryland.

My passion is using technology to help people achieve their goals.

I am a freelance developer in college, having designed webapps for several startups, nonprofwebappsits, and campus-affiliated organizations.

I most recently interned at Microsoft, where I built a recommendation engine for the PowerBI product. I used LP/Optimization principles to inform my work.

Previously, I interned at the blockchain company ConsenSys, researching and designing Ethereum smart contracts on the Treum team.

On campus, I help teach Public Policy 198 (Policy Review @ Berkeley), work with my freelance clients, and play IM basketball.

`;

const bio1 = `My name is Jordan Chernof. I am a junior at UC Berkeley studying Computer Science and minoring in Public Policy.`;
const bio2 = `I was born and raised in Maryland.`;
const bio3 = `My passion is using technology to help people achieve their goals.`;
const bio4 = `I am a freelance developer in college, having designed webapps for several startups, nonprofits, and campus-affiliated organizations.`;
const consensys_bio = `Previously, I interned at the blockchain company ConsenSys, researching and designing Ethereum smart contracts on the Treum team.`;
const microsoft_bio =
	"I most recently interned at Microsoft, where I built a recommendation engine for Power BI. I used LP/Optimization principles to inform my work.";
const hackathons = `I have completed three hackathons, wherein I built a startup MVP, a React club-matching app, and a clothing-design marketplace.`;
const conclusion = `On campus, I help teach Public Policy 198 (Policy Review @ Berkeley), work with my freelance clients, and play IM basketball.`;
const lighthearted = `Of course, this is a career-focused website, so I may seem a little serious. But I'm not all work! I like to read, go hiking, and make breakfast food.`;
const directions = `A few projects are public on my Github profile, but some of the interesting work I've done is private. I'm happy to speak more about those if you're interested.`;

const allCards = [
	FRSCard,
	HNCard,
	Proj_170,
	EthSmartContractCard,
	IIJSiteCard,
	FlasketballCard,
	HackathonCard,
	FortniteCard,
	MYOPCard,
	MerkleProofCard,
];

class AboutTab extends Component {
	render() {
		let label = this.props.label;
		let text = this.props.text;
		return <Tab.Pane style={{ "vertical-align": "center" }}>{text}</Tab.Pane>;
	}
}

let objectToPane = (object) => {
	return {
		menuItem: object.label,
		render: () => (
			<Tab.Pane
				attached={false}
				style={{ "font-size": "xx-large", "line-height": "normal" }}
				className={{ background: "black" }}
			>
				{object.description}
			</Tab.Pane>
		),
	};
};
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
		label: "Who I am",
		description: bio3,
	},
	{
		label: "Internship with Microsoft",
		description: microsoft_bio,
	},
	{
		label: "Internship with ConsenSys",
		description: consensys_bio,
	},
	{
		label: "Me at UC Berkeley",
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
];
class About extends Component {
	render() {
		return (
			<Row width="10">
				<h1 style={{ color: "white" }}>About Me</h1>
				<Tab
					menu={{ fluid: true, vertical: true, tabular: true }}
					panes={paneObjects.map((object) => objectToPane(object))}
					id="bio-tabs"
					className="primary-background content-box"
					style={{ width: "100%", marginTop: "40px", marginBottom: "40px" }}
				></Tab>
			</Row>
		);
	}
}

class NewAbout extends Component {
	render() {
		return (
			<Row width="10">
				<Tab
					menu={{ fluid: true, vertical: true, tabular: true }}
					panes={paneObjects.map((object) => objectToPane(object))}
					id="bio-tabs"
					style={{ width: "100%", marginTop: "40px", marginBottom: "40px" }}
				></Tab>
			</Row>
		);
	}
}

class Project extends Component {
	render() {
		let body = this.props.body;
		let cardHeight = "310px";

		return (
			<NewCard
				width="4"
				style={{ minHeight: cardHeight, maxHeight: cardHeight }}
				className="content-box"
			>
				<NewCard.Content>
					<Image src={body.image} />
					<NewCard.Header>
						{body.title}
					</NewCard.Header>
					<NewCard.Meta>
						{body.subtitle}
					</NewCard.Meta>
					<NewCard.Description
						textAlign="left"
					>
						{body.text}
					</NewCard.Description>
				</NewCard.Content>
				<NewCard.Content extra
				style={{ "text-align": "center" }}>
					{/* <div className='ui two buttons'> */}
					<Button color="teal" href={body.code_link}>
						View Code
					</Button>
					<Button color="teal" href={body.project_link}>
						View Project
					</Button>
					{/* </div> */}
				</NewCard.Content>
			</NewCard>
		);
	}
}

const projects = allCards.map((card) => <Project body={card} />);

class Portfolio extends Component {
	render() {
		return (
			<Row width="10" id="projects" centered>
				<NewCard.Group centered>{projects}</NewCard.Group>
			</Row>
		);
	}
}

class Contact extends Component {
	render() {
		return (
			<Grid id="contact" style={{ marginTop: "80px" }}>
				<Row>
					<Header as="h2" style={{ color: "black" }}>
						Contact
					</Header>
				{/* </Row> */}
				<div style={{ textAlign: "center" }}>
        <br></br><br></br>
					<p style={{ color: "black" }}>
						{contact_me}
					</p>
				</div>
        </Row>
			</Grid>
		);
	}
}

class MyNavbar extends Component {
	render() {
		return (
			<Menu
				bg="light"
				variant="light"
			>
				<Menu.Item color="pink" href="#home">
					Home
				</Menu.Item>
				<Menu.Item href="#about">About</Menu.Item>
				<Menu.Item href={resume_link}>Resume</Menu.Item>
				<Menu.Item href="#projects">Projects</Menu.Item>
				<Menu.Item href="#contact">Contact</Menu.Item>
				<Menu.Item href={github_link}>Github</Menu.Item>
				<Menu.Item href={linkedin_link}>LinkedIn</Menu.Item>
			</Menu>
		);
	}
}

function App() {
	return (
		<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<>
			<GlobalStyles />
			<div>
				<MyNavbar />
				<Container divided="vertically">
					{/* <About /> */}
					<NewAbout />
					<Portfolio />
					<Contact />
				</Container>
			</div>
			</>
		</ThemeProvider>
	);
}

export default App;
