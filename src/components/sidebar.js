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
                        <NavLink 
                            to="/home" 
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            <img src={home_icon} alt="home_icon" className='sidebar-image'/>
                            <span className='sidebar-text'>About</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/expertise" 
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            <img src={expertise_icon} alt="expertise_icon" className='sidebar-image'/>
                            <span className='sidebar-text'>Expertise</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/experience" 
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            <img src={experience_icon} alt="experience_icon" className='sidebar-image'/>
                            <span className='sidebar-text'>Experience</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/projects" 
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            <img src={projects_icon} alt="projects_icon" className='sidebar-image'/>
                            <span className='sidebar-text'>Projects</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/contact" 
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            <img src={contact_icon} alt="contact_icon" className='sidebar-image'/>
                            <span className='sidebar-text'>Contact</span>
                        </NavLink>
                    </li>
                </ul>
                <div className="sidebar-footer">
                    <div>
                        <a className="box-link" href="https://www.linkedin.com/in/xavier-p-0a5b48132" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a className="box-link" href="/resume.html"  target="_blank" rel="noopener noreferrer">Résumé</a>
                    </div>
                    <a href="https://store.steampowered.com/app/1812820/Bitburner/"  className="sidebar-footer-link" target="_blank" rel="noopener noreferrer">Design inspired by BitBurner</a>
                </div>
            </div>
    );
}

export default Sidebar;
