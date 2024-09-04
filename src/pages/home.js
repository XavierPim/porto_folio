import "../css/home.css";
import Sidebar from "../components/sidebar";
import ContentBigScreen from "../components/content-big-screen";
import tabs from "../content/text content/nav-tabs";

function Home() {
	return (
		<div className="home-container">
			<Sidebar />
			<div className="home-content-container">
				<ContentBigScreen tab_name={tabs.home}>
				
				</ContentBigScreen>
			</div>
		</div>
	);
}

export default Home;
