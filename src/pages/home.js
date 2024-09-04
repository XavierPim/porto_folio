import "../css/home.css";
import Sidebar from "../components/sidebar";
import ContentBigScreen from "../components/content-big-screen";
import tabs from "../content/text content/nav-tabs";
import ContentSmallScreen from "../components/content-small-screen";
import HomeContent from "../content/text content/home-text";
function Home() {
	const title = "About me";
	const First = "Resume";
	return (
		<div className="home-container">
			<Sidebar />
			<div className="home-content-container">
				<ContentBigScreen tab_name={tabs.home}>
					<div className="header">
						<div className="page_title">{title} </div>
						<div className="page_title">
							{First}
						</div>
					</div>
					{HomeContent.map((section, index) => (
						<ContentSmallScreen key={index} section={section} />
					))}
				</ContentBigScreen>
			</div>
		</div>
	);
}

export default Home;
