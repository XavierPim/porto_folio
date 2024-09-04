import "../css/experience.css";
import Sidebar from "../components/sidebar";
import ContentBigScreen from "../components/content-big-screen";
import tabs from "../content/text content/nav-tabs";
import ExperienceContent from "../content/text content/experience-text";
import ContentSmallScreen from "../components/content-small-screen";

function Experience() {
	const title = "-Experience-";
	const date = "Current Date:";
	let currDate = new Date().toLocaleDateString();
	return (
		<div className="experience-container">
			<Sidebar />
			<div className="content-container">
				<ContentBigScreen tab_name={tabs.experience}>
					<div className="header">
						<div className="page_title">{title} </div>
						<div className="page_title">
							{date} {currDate}
						</div>
					</div>
					{ExperienceContent.map((section, index) => (
						<ContentSmallScreen key={index} section={section} />
					))}
				</ContentBigScreen>
			</div>
		</div>
	);
}
export default Experience;
