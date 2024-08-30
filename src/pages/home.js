import "../css/home.css"
import home_icon from "../components/icons/Home.png"
import expertise_icon from "../components/icons/Wrench.png"
import experience_icon from "../components/icons/Clock.png"
import projects_icon from "../components/icons/Star.png"
import contact_icon from "../components/icons/Phone.png"
function Home(){
    return(
<div className="home-container">
<div className="sidebar">
    <div className="name-plate">Xavier_Pimentel</div>
    <ul>
        <li><img src={home_icon} alt="home_icon"/>Home</li>
        <li><img src={expertise_icon} alt="expertise_icon"/>Expertise</li>
        <li><img src={experience_icon} alt="experience_icon"/>Experience</li>
        <li><img src={projects_icon} alt="projects_icon"/>Projects</li>
        <li><img src={contact_icon} alt="contact_icon"/>Contact</li>
    </ul>
</div>
<div className="content-container"></div>
</div>
    );
}
export default Home;