import "../css/home.css"
import Sidebar from "../components/sidebar";

import xIcon from "../components/icons/X.png" 
function Home(){
    return(
<div className="home-container">
<Sidebar/>
<div className="home-content-container">
    <div className="big-screen">
        <div className="topbar">
            <div>/home</div>
            <img src={xIcon} id="exit" alt="x-icon"/>
        </div>
    </div>
</div>
</div>
    );
}
export default Home;