import "../css/home.css"
import Sidebar from "../components/sidebar";
function Home(){
    return(
<div className="home-container">
<Sidebar/>
<div className="content-container"></div>
</div>
    );
}
export default Home;