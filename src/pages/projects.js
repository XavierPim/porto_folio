import "../css/projects.css"
import Sidebar from "../components/sidebar";
import ContentBigScreen from "../components/content-big-screen";
import tabs from "../components/text content/nav-tabs";
function Projects(){
    return(
<div className="projects-container">
<Sidebar/>
<div className="content-container">
<ContentBigScreen tab_name={tabs.projects}>

</ContentBigScreen>
</div>
</div>
    );
}
export default Projects;