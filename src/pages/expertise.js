import "../css/expertise.css";
import Sidebar from "../components/sidebar";
import ContentBigScreen from "../components/content-big-screen";
import tabs from "../content/text content/nav-tabs";
function Expertise() {
	return (
		<div className="expertise-container">
			<Sidebar />
			<div className="content-container">
				<ContentBigScreen tab_name={tabs.expertise} id="expertise-scrollable">
					<div alt="UML" className="UML" />
				</ContentBigScreen>
			</div>
		</div>
	);
}
export default Expertise;
