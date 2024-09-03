import "../css/home.css";
import Sidebar from "../components/sidebar";
import ContentBigScreen from "../components/content-big-screen";
import tabs from "../components/text content/nav-tabs";

function Home() {
    return (
        <div className="home-container">
            <Sidebar />
            <div className="home-content-container">
                <ContentBigScreen tab_name={tabs.home}>
                    {/* Content for the home tab goes here */}
                </ContentBigScreen>
            </div>
        </div>
    );
}

export default Home;
