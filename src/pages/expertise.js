import "../css/expertise.css";
import Sidebar from "../components/sidebar";
import ContentBigScreen from "../components/content-big-screen";
import tabs from "../components/text content/nav-tabs";
import UML from "../content/Expertise_UML.png"
function Expertise(){
    return(
<div className="expertise-container">
<Sidebar/>
<div className="content-container">
    <ContentBigScreen tab_name={tabs.expertise}>
<img src={UML} alt="UML" className="UML"/>
    </ContentBigScreen>
</div>
</div>
    );
}
export default Expertise;