import coder from "../../ascii art/coder";
import hiking from "../hiking.jpg";
import leetcurr from "../leetcurr.png"; // Import the fallback image

const gitStats = "https://github-readme-stats.vercel.app/api/top-langs/?username=XavierPim&layout=compact&theme=dark&hide=shell,cmake";
const gitCal = "https://github-readme-streak-stats.herokuapp.com/?user=XavierPim&theme=dark";
const leet = "https://leetcard.jacoblin.cool/XavierP?theme=dark";

const HomeContent = [
	{
		window: "greeting/",
		title: "Hi I’m Xavier, a software developer",
		subtitle: "",
		info: "",
		ascii: coder,
		image: "",
		text: [],
		link: "",
	},
	{
		window: "growth/",
		title: "-GROWTH-",
		subtitle: ["I like building things:"],
		info: "",
		ascii: "",
		image: leet, 
		fallbackImage: leetcurr, 
		text: ["Software", "Web Applications", "Teams", "Current LeetCode Progress:"],
		link: "",
	},
	{
		window: "coding/",
		title: "-CODING-",
		subtitle: ["A full-stack developer in multiple languages.", "Recent grad with 5 medium-sized projects"],
		info: "",
		ascii: "",
		image: [gitStats, gitCal],
		text: "Current Github stats",
		link: "",
	},
	{
		window: "collaborator/",
		title: "-COLLABORATOR-",
		subtitle: ["Hike organizer for friends and colleagues,", "where I enjoy bringing people around me to higher places"],
		info: "",
		ascii: "",
		image: hiking,
		text: "A mindset that extends to my work with development teams, where I consistently encourage innovation in our projects.",
		link: "",
	},
];
export default HomeContent;
