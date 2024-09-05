import diploma from "../../ascii art/diploma";
import eagle from "../../ascii art/eagle-eye";
import soccer from "../../ascii art/soccer";
import plane from "../../ascii art/plane";
import senior from "../../ascii art/senior";
import pc from "../../ascii art/computer";
const experienceContent = [
    {
        window: "graduation/",
        title: "Computer Systems Technology(CST) - GRADUATION",
        subtitle: "APR 2024 | British Columbia Institute of Technology",
        info: "",
        ascii:diploma,
        image: "",
        text: [],
        link: ""
    },
    {
        window: "practicum_3/",
        title: "PRACTICUM 3 - Map Interface with Natural Text (MINT)",
        subtitle: "Eagle Eyes Search Inc",
        info: "May 2024 | Squamish",
        image: "",
        text: [
            "Developed a desktop/mobile app to parse English to control native commands in SARTOPO", 
            "Role: Project Lead/Support Developer in charge of start and hand-off of the project"],
        ascii: eagle,
        link: "to be added"
    },   
    {
        window: "practicum_2/",
        title: "PRACTICUM 2 - FreeGame App",
        subtitle: "ShowTime Digital Inc",
        info: "JAN - APR 2024 | Vancouver ",
        image: "",
        ascii: soccer,
        text: [
            "Developed a peer to peer video coaching web app.", 
            "Role: Created functionality between Firestore, MongoDB, and Cloudinary for user interaction.",],
        link: "to be added"
    }, 
    {
        window: "flight_operations/",
        title: "Flight Operations Agent(Casual) ",
        subtitle: "Samsic Assistance Canada | AF/KLM",
        info: "January - June 2023  | YVR, Richmond",
        image: "",
        ascii: plane,
        text: [
            "Process flight info for Ramp and Pax for smooth on/off loading", 
            "Role: Project Lead/Support Developer in charge of start and hand-off of the project",
            "Enhance ULD bag allocation for quicker off-loading in destination airport"],
        link: ""
    },
    {
        window: "praticum_1/",
        title: "PRACTICUM 1 - Serenity",
        subtitle: "Serenity Inc",
        info: "August 2022 | Burnaby",
        image: "",
        ascii: senior,
        text: [
            "Developed mental health web app for Seniors to improve cognition.", 
            "Role: Lead Developer in charge for foundation to allow integration and UI of all modules.",
            "Created the backbone in JS to allow simple modular integration of games and activities."],
        link: "to be added"
    },
    {
        window: "start/",
        title: "Computer Systems Technology(CST) - Entry",
        subtitle: "BCIT | British Columbia Institute of Technology",
        info: "JAN 2022 - APR 2024| Burnaby",
        image: "",
        ascii: pc,
        text: "",
        link: ""
        
    }, 
];

export default experienceContent;
