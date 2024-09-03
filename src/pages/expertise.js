import "../css/expertise.css";
import Sidebar from "../components/sidebar";
import ContentBigScreen from "../components/content-big-screen";
import tabs from "../components/text content/nav-tabs";
function Expertise(){
    return(
<div className="expertise-container">
<Sidebar/>
<div className="content-container">
    <ContentBigScreen tab_name={tabs.expertise}>

    </ContentBigScreen>
</div>
</div>
    );
}
export default Expertise;