// c++ images
import abstract from "../project-cplus/abstract-factory.png"
import auctioneer from "../project-cplus/auctioneer-observer.png"
import google from "../project-cplus/google-ranking.png"
import calculator from "../project-cplus/calculator.png"
import genetic from "../project-cplus/genetic.png"
import poly from "../project-cplus/inheritance-polymorph.png"
import course from "../project-cplus/course-conflict.png"
import library from "../project-cplus/library.png"
import chatserver from "../project-c/multiclient.png"
import ncruses from "../project-c/ncruses.png"


// javascript images/videos
import umbrella from "../project-js/umbrella.png";
import serenity from '../project-js/serenity.mp4';
import free from "../project-js/free.png"

//flutter video
import mint from "../project-dart/mint.png"
import mintDemo from "../project-dart/mint-small.mp4"

//links
const cplus_link = "https://github.com/XavierPim/c_plusplus.git";
const ncurse_link = "https://github.com/XavierPim/Multi_user-Ncurses-IPV-4_6.git";
const shell_link = "https://github.com/XavierPim/RemoteShell_IPV4.git";
const umbrella_link = "https://umbrellabby15.web.app/";

export const cplusplusText = [
	{
		window: "genetic-algo-TSP/",
		title: "Genetic Algorithm for Travelling Salesman Problem",
		subtitle:
			"Description: Developed an algorithm to solve the Travelling Salesman Problem using genetic algorithms, optimizing the shortest possible route across multiple cities",
		subtitle1: "",
		subtitle2: "",
		subtitle3: "",
		info: "Features Recursive approach used for crossover and the following: ",
		ascii: "",
		image: genetic,
		text: ["selection", 
			"crossover", "mutation"],
		link: cplus_link,
	},
	{
		window: "google-search-makrov/",
		title: "Google Search Ranking using Markov Process",
		subtitle:
			"Description: Implemented a Markov Process to simulate Google's PageRank algorithm, calculating page importance based on link structure and transitioning probabilities.",
		subtitle1: "",
		subtitle2: "",
		subtitle3: "",
		info: "The project involved constructing:",
		ascii: "",
		image: google,
		text: [
			"connectivity",
			"importance",
			"teleportation",
			"compute and rank the importance of web pages",
		],
		link: cplus_link,
	},
	{
		window: "rpn-calculator/",
		title: "Reverse Polish Notation Calculator",
		subtitle:
			"Description: Demonstrates the use of abstract classes and a stack to handle different mathematical operations",
		subtitle1: "",
		subtitle2: "",
		subtitle3: "",
		info: "Current Functionality",
		ascii: "",
		image: calculator,
		text: [
			"addition",
			"subtraction",
			"division",
			"multiplication"
		],
		link: cplus_link,
	},
	{
		window: "auctioneer-observer/",
		title: "Auctioneer program to demonstrate observer pattern",
		subtitle:
			"Description: Implemented an auction system where the Auctioneer notifies bidders of the highest bid, allowing them to place new bids based on their budgets and bidding strategies.",
		subtitle1: "",
		subtitle2: "",
		subtitle3: "",
		info: "The system manages the bidding process by updating bids and identifying the highest bidder through iterative notifications.",
		ascii: "",
		image: auctioneer,
		text: [],
		link: cplus_link,
	},
	{
		window: "inheritance-polymorphism/",
		title: "Inheritance and Polymorphism",
		subtitle:
			"Description: Created a simulation that showcases inheritance and polymorphism through a hierarchy of animals. Different types of animals exhibit unique behaviours such as movement, eating, and sleeping. ",
		subtitle2: "",
		subtitle3: "",
		info: "",
		ascii: "",
		image: poly,
		text: [],
		link: cplus_link,
	},
	{
		window: "library-generator/",
		title: "Library Management System with Generator Pattern",
		subtitle:
			"Description: Implemented a library management system utilizing the Generator pattern to streamline the creation of different types of library items. ",
		subtitle1: "",
		subtitle2: "",
		subtitle3: "",
		info: "Features:",
		ascii: "",
		image: library,
		text: [
			"Inventory Management",
			"Search Items",
			"Remove Items",
			"Delete Items"
		],
		link: cplus_link,
	},
	{
		window: "course-conflict/",
		title: "Course Scheduling and Conflict Resolution",
		subtitle:
			"Description: Implemented a course scheduling system that sorts courses by day and time, and identifies scheduling conflicts. It demonstrates efficient organization and conflict detection in managing course schedules. ",
		subtitle1: "",
		subtitle2: "",
		subtitle3: "",
		info: "Involves:",
		ascii: "",
		image: course,
		text: ["Text file parsing", "Dynamic conflict resolution"],
		link: cplus_link,
	},
	{
		window: "abstract-factory pattern",
		title: "Maze Creation with Abstract Classes/Factory Pattern",
		subtitle:
			"Description: This implementation demonstrates the use of the factory pattern combined with abstract classes to generate themed mazes.",
		subtitle1: "The Maze class serves as an abstract base class, defining a common interface for adding rooms.",
		subtitle2: "",
		subtitle3: "",
		info: "Derived classes like FairyMaze and DystopianMaze implement this interface to add rooms to their respective mazes.",
		ascii: "",
		image: abstract,
		text: [],
		link: cplus_link,
	},
];

export const javascriptText = [
	{
		window: "freegame/",
		title: "Freegame - peer to peer coaching app",
		subtitle: "Developed a peer-to-peer video coaching web app. ",
		subtitle1: "Role: Lead Back-end Developer",
		subtitle2: "Framework: REACT",
		subtitle3: "",
		info: "Created seamless functionality for user interaction by integrating 3 cloud based databases:",
		ascii: "",
		image: free,
		text: [
			"Firestore - Authentication",
			"MongoDB - User text based data",
			"Cloudinary - User video and image data",
		],
		link: "",
	},
	{
		window: "umbrella/",
		title: "Umbrella - Night-out Party Tracker",
		subtitle:
			"Developed a web app for organizing night-out events with features like sending multiple invites and enabling temporary proximity tracking. The app alerts the organizer if any user exceeds the set proximity threshold during the event.",
		subtitle1: "Role: Project Lead and Systems Integrator",
		subtitle2: "Framework: REACT",
		subtitle3: "",
		info: "",
		ascii: "",
		image: umbrella,
		text: [],
		link: umbrella_link,
	},
	{
		window: "serenity/",
		title: "Serenity - Memory and Meditation for Seniors",
		subtitle:
			"Developed a multi-application platform web app to enable games and application in one web-application. The Serenity is developed to help senior citizens improve cognitive health with memory games and meditation activities",
		subtitle1: "Role: Lead Front-end and UI|UX Developer",
		subtitle2: "",
		subtitle3: "",
		info: "",
		ascii: "",
		image: "",
		video: serenity,
		text: [],
		link: "",
	},
];

export const dartText = [
	{
		window: "mint/",
		title: "Map Interface with Natural Text (MINT)",
		subtitle:
			"Led the development of an application that enables control of the SARTOPO map application's native functions through plain English text prompts. The application leverages OpenAI to parse user prompts into a sequence of function calls for the SARTOPO API",
		subtitle1: "Role: Project Lead",
		subtitle2: "",
		subtitle3: "",
		info: "Framework: Flutter",
		ascii: "",
		image: mint,
		video: mintDemo,
		text: [
			"Firestore - Authentication",
			"OpenAi API - English language parsing model",
		],
		link: "",
	},
];

export const cText = [
    {
		window: "ncurses_game_server_UDP",
		title: "UDP based ncurses live broadcasting",
		subtitle:
			"Description: a UDP server using shell that can accept multiple users and show a UI of each player rendered in ncurses.",
		subtitle1: "",
		subtitle2: "",
		subtitle3: "",
		info: "Features:",
		ascii: "",
		image: ncruses,
		text: [
			"Self start server activation",
			"Global UI updates showing each player positions",
			"Users can control avatar via arrow keys",
			"Multi-OS support: Ubuntu, MacOS, Fedora",
		],
		link: ncurse_link,
	},
	{
		window: "multi_client_chat_server_IPV_4|6/",
		title: "Multi-client shell-based chat server in IPv 4|6",
		subtitle:
			"Description: a server that could accept multiple clients based in shell. The server could be started and stopped via another admin server.",
		subtitle1: "",
		subtitle2: "",
		subtitle3: "",
		info: "Features:",
		ascii: "",
		image: chatserver,
		text: [
			"Self start server activation",
			"Remote start server activation",
			"Remote control with password authentication(custom)",
			"Multi-client chatlog updates",
			"Users features like change name, whisper, and leave",
			"Multi-OS support: Ubuntu, MacOS, Fedora",
		],
		link: "",
	},
	{
		window: "remote_shell_IPv_4",
		title: "Linux based remote shell in IPv4",
		subtitle:
			"Description: Server and client program to run as a remote shell. Server listens for incoming clients and once connected can run native Linux shell commands",
		subtitle1: "",
		subtitle2: "",
		subtitle3: "",
		info: "Features:",
		ascii: "",
		image: "",
		text: [
			"Users can run most Unix-based commands that call execv()",
			"Multi-OS support: Ubuntu, MacOS, Fedora",
            "Can accept clients and be sent commands via the local network"
		],
		link: shell_link,
	},

	{
		window: "linux_shell/",
		title: "Linux shell for local machine",
		subtitle:
			"Description: Server and client program to run local shell commands.",
		subtitle1: "",
		subtitle2: "",
		subtitle3: "",
		info: "Features:",
		ascii: "",
		image: "",
        text: [
			"Self start server activation",
			"Users can run most Unix-based commands that call execv()",
			"Multi-OS support: Ubuntu, MacOS, Fedora",
		],
		link: "",
	},
];

export const wipText = [
	{
		window: "redoUmbrella/",
		title: "Redeveloping Umbrella",
		subtitle: "Night-out Party Tracker in ASP.NET Server",
		subtitle1: "Originally made in JavaScript and raw HTML/CSS",
		subtitle2: "",
		subtitle3: "",
		info: "Recreating project with the following features:",
		ascii: "",
		image: "",
		text: [
			"Client:React/React-Native",
			"Server:ASP.NET",
			"Datebase: MySQL",
		],
		link: "https://github.com/XavierPim/Umbrella_Server.git",
	},
];
