import "../css/experience.css";
import Sidebar from "../components/sidebar";
import ContentBigScreen from "../components/content-big-screen";
import tabs from "../content/text content/nav-tabs";
import experienceContent from "../content/text content/experience-text";
import ContentSmallScreen from "../components/content-small-screen";
function Experience() {
	return (
		<div className="experience-container">
			<Sidebar />
			<div className="content-container">
				<ContentBigScreen tab_name={tabs.experience}>
				{experienceContent.map((section, index) => (
						<ContentSmallScreen key={index} section={section} />
					))}
				</ContentBigScreen>
			</div>
		</div>
	);
}
export default Experience;
