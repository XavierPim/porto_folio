import { NavLink } from 'react-router-dom';
import home_icon from "../components/icons/Home.png";
import expertise_icon from "../components/icons/Wrench.png";
import experience_icon from "../components/icons/Clock.png";
import projects_icon from "../components/icons/Star.png";
import contact_icon from "../components/icons/Phone.png";
import "./sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <h1 className="name-plate">Xavier_Pimentel</h1>
            <ul className='navbar_ul'>
                <li>
                    <NavLink to="/home" activeClassName="active"><img src={home_icon} alt="home_icon" />About</NavLink>
                </li>
                <li>
                    <NavLink to="/expertise" activeClassName="active"><img src={expertise_icon} alt="expertise_icon" />Expertise</NavLink>
                </li>
                <li>
                    <NavLink to="/experience" activeClassName="active"><img src={experience_icon} alt="experience_icon" />Experience</NavLink>
                </li>
                <li>
                    <NavLink to="/projects" activeClassName="active"><img src={projects_icon} alt="projects_icon" />Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active"><img src={contact_icon} alt="contact_icon" />Contact</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
