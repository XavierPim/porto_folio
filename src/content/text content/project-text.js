// c++ images
import abstract from "../abstract-factory.png"
import auctioneer from "../auctioneer-observer.png"
import google from "../google-ranking.png"
import calculator from "../calculator.png"
import genetic from "../genetic.png"
import poly from "../inheritance-polymorph.png"
import course from "../course-conflict.png"
import library from "../library.png"

// javascript images/videos
import umbrella from "../umbrella.png";
import serenity from '../serenity.mp4';
import free from "../free.png"

//flutter video
import mint from "../mint.png"
import mintDemo from "../mint-small.mp4"


export const cplusplusText = [
	{
		window: "genetic-algo-TSP/",
		title: "Genetic Algorithm for Travelling Salesman Problem",
		subtitle:
			"Description: Developed an algorithm to solve the Travelling Salesman Problem using genetic algorithms, optimizing the shortest possible route across multiple cities through techniques like selection, crossover, and mutation.",
		subtitle1: "",
		subtitle2: "",
		subtitle3: "",
		info: "Recursive approach used for crossover",
		ascii: "",
		image: genetic,
		text: "",
		link: "Github",
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
			" teleportation",
			"transition matrices to iteratively",
			"compute and rank the importance of web pages",
		],
		link: "Github",
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
		link: "Github",
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
		text: "",
		link: "Github",
	},
	{
		window: "inheritance-polymorphism/",
		title: "Inheritance and Polymorphism",
		subtitle:
			"Description: Created a simulation that showcases inheritance and polymorphism through a hierarchy of animals. Different types of animals exhibit unique behaviours such as movement, eating, and sleeping. The simulation includes various animal types interacting dynamically, with each class demonstrating its own specialized behavior.",
		subtitle1: "",
		subtitle2: "",
		subtitle3: "",
		info: "",
		ascii: "",
		image: poly,
		text: "",
		link: "Github",
	},
	{
		window: "library-generator/",
		title: "Library Management System with Generator Pattern",
		subtitle:
			"Description: Implemented a library management system utilizing the Generator pattern to streamline the creation of different types of library items. The system supports various item types, such as books, DVDs, and journals, through a flexible item generation mechanism.",
		subtitle1: "",
		subtitle2: "",
		subtitle3: "",
		info: "Features:",
		ascii: "",
		image: library,
		text: [
			"Inventory Management",
			"Search Item",
		],
		link: "Github",
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
		link: "Github",
	},
	{
		window: "abstract-factory pattern",
		title: "Maze Creation with Abstract Classes/Factory Pattern",
		subtitle:
			"Description: This implementation demonstrates the use of the factory pattern combined with abstract classes to generate themed mazes, such as fairy and dystopian mazes.",
		subtitle1: "The Maze class serves as an abstract base class, defining a common interface for adding rooms.",
		subtitle2: "",
		subtitle3: "",
		info: "Derived classes like FairyMaze and DystopianMaze implement this interface to add rooms to their respective mazes.",
		ascii: "",
		image: abstract,
		text: "",
		link: "Github",
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
		link: "",
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
		info: "",
		ascii: "",
		image: mint,
		video: mintDemo,
		text: [
			"Firestore - Authentication",
			"MongoDB - User text based data",
			"Cloudinary - User video and image data",
		],
		link: "",
	},
];

export const cText = [
    {
		window: "ncurses_game_server_IPV_4|6/",
		title: "Online multiplayer ncurses based game.",
		subtitle:
			"Description: a server using shell that can accept multiple users and show a UI of each player rendered in ncurses.",
		subtitle1: "",
		subtitle2: "",
		subtitle3: "",
		info: "Features:",
		ascii: "",
		image: "",
		text: [
			"Self start server activation",
			"Global UI updates showing each player positions",
			"Users can control avatar via arrow keys",
			"Multi-OS support: Ubuntu, MacOS, Fedora",
		],
		link: "",
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
		image: "",
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
		title: "Linux based remote shell in IPv 4",
		subtitle:
			"Description: Server and client program to run as a remote shell. Server listens for incoming clients and once connected can run native Linux shell commands",
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
            "Can accept clients and be sent commands via the local network"
		],
		link: "",
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

export const leetText = [
	{
		window: "work in progress/",
		title: "WORK IN PROGRESS",
		subtitle: "",
		subtitle1: "",
		subtitle2: "",
		subtitle3: "",
		info: "",
		ascii: "",
		image: "",
		text: "",
		link: "",
	},
];
