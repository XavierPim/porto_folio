import "../css/experience.css";
import Sidebar from "../components/sidebar";
import ContentBigScreen from "../components/content-big-screen";
import tabs from "../components/text content/nav-tabs";
function Experience(){
    return(
<div className="experience-container">
<Sidebar/>
<div className="content-container">
    <ContentBigScreen tab_name={tabs.experience}>
        
    </ContentBigScreen>
</div>
</div>
    );
}
export default Experience;