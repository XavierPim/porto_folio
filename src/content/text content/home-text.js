import coder from "../../ascii art/coder";
import crane from "../../ascii art/crane";
import hiker from "../../ascii art/hiker";
const gitStats  = "https://github-readme-stats.vercel.app/api/top-langs/?username=XavierPim&layout=compact&theme=dark";
const leet  = "https://leetcard.jacoblin.cool/XavierP?theme=dark";
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
		window: "growth/",
		title: "-GROWTH-",
		subtitle: ["I like building things:"],
		info: "",
		ascii:"",
		image: leet,
		text: ["Software","Web Applications","Teams","Current LeetCode Progress:"], 
		link: "",
	},
	{
		window: "coding/",
		title: "-CODING-",
		subtitle: ["- A full-stack developer in multiple languages."," - Recent grad with 5 medium-sized projects"],
		info: "",
		ascii:"",
		image: gitStats,
		text: "Current Github stats", 
		link: "",
	},
	{
		window: "collaborator/",
		title: "-COLLABORATOR-",
		subtitle: ["-Hike organizer for friends and colleagues,", "-focusing on creating opportunities for new experiences."],
		info: "",
		ascii:hiker,
		image: "",
		text: "A mindset that extends to my work with development teams, where I consistently encourage innovation in our projects.", 
		link: "",
	}
];
export default HomeContent;
