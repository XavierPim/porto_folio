import coder from "../../ascii art/coder";
import crane from "../../ascii art/crane";
import logos from "../../content/logos.png";
import hiker from "../../ascii art/hiker";
const HomeContent = [
	{
		window: "greeting/",
		title: "Hi I’m Xavier, a software developer",
		subtitle: "",
		info: "",
		ascii:coder,
		image: "",
		text: [], 
		link: "",
	},
	{
		window: "passion/",
		title: "-PASSION-",
		subtitle: ["I like building things:"],
		info: "",
		ascii:crane,
		image: "",
		text: ["software","web applications","teams"], 
		link: "",
	},
	{
		window: "coding/",
		title: "-CODING-",
		subtitle: ["A full-stack developer in multiple languages."],
		info: "",
		ascii:"",
		image: logos,
		text: "Recent graduate but already have done 5 medium-sized projects.", 
		link: "",
	},
	{
		window: "charisma/",
		title: "-CHARISMA-",
		subtitle: ["Hike organizer for friends and colleagues, focusing on creating opportunities for new experiences."],
		info: "",
		ascii:hiker,
		image: "",
		text: "A mindset that extends to my work with development teams, where I consistently encourage innovation in our projects.", 
		link: "",
	}
];
export default HomeContent;
