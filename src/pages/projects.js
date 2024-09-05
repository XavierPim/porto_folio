import React, { useState, useEffect } from "react";
import "../css/projects.css";
import Sidebar from "../components/sidebar";
import ContentBigScreen from "../components/content-big-screen";
import tabs from "../content/text content/nav-tabs";
import { cplusplusText, javascriptText, dartText, cText, leetText } from "../content/text content/project-text";
import ContentSmallScreen from "../components/content-small-screen";

function Projects() {
	const title = "-Projects-";
	const countTitle = "Count:";
	const [activeTab, setActiveTab] = useState("c++");
	const [projectCount, setProjectCount] = useState(0);

	const getContentForTab = (tab) => {
		switch (tab) {
			case "c++":
				return cplusplusText;
			case "javascript":
				return javascriptText;
			case "dart":
				return dartText;
			case "c":
				return cText;
			case "leet":
				return leetText;
			default:
				return [];
		}
	};

	useEffect(() => {
		const content = getContentForTab(activeTab);
		setProjectCount(content.length); 
	}, [activeTab]); 

	const renderContent = () => {
		const content = getContentForTab(activeTab);
		return content.map((section, index) => (
			<ContentSmallScreen key={index} section={section} />
		));
	};

	return (
		<div className="projects-container">
			<Sidebar />
			<div className="content-container">
				<ContentBigScreen tab_name={tabs.projects}>
					<div className="header">
						<div className="page_title">{title}</div>
						<div className="page_title">
							{countTitle} {projectCount}
						</div>
					</div>
					<div className="language-container">
						<div className="lang-tabs">
							<div
								onClick={() => setActiveTab("c++")}
								className={activeTab === "c++" ? "active-tab" : ""}
							>
								c++/
							</div>
							<div
								onClick={() => setActiveTab("javascript")}
								className={activeTab === "javascript" ? "active-tab" : ""}
							>
								javascript/
							</div>
							<div
								onClick={() => setActiveTab("dart")}
								className={activeTab === "dart" ? "active-tab" : ""}
							>
								dart/
							</div>
							<div
								onClick={() => setActiveTab("c")}
								className={activeTab === "c" ? "active-tab" : ""}
							>
								c/
							</div>
							<div
								onClick={() => setActiveTab("leet")}
								className={activeTab === "leet" ? "active-tab" : ""}
							>
								leet/
							</div>
						</div>
						<div className="lang-content">{renderContent()}</div>
					</div>
				</ContentBigScreen>
			</div>
		</div>
	);
}

export default Projects;
