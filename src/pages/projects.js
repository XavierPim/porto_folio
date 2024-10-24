import React, { useState, useEffect } from "react";
import "../css/projects.css";
import Sidebar from "../components/sidebar";
import ContentBigScreen from "../components/content-big-screen";
import tabs from "../content/text content/nav-tabs";
import { cplusplusText, javascriptText, dartText, cText, wipText } from "../content/text content/project-text";
import ContentSmallScreen from "../components/content-small-screen";
import cplusBG from "../content/project-cplus/cplus.png";
import cBG from "../content/project-c/c.png";
import jsBG from "../content/project-js/js.png";
import wipBG from "../content/project-WIP/WIP.png";
import dartBG from "../content/project-dart/dart.png";

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
            case "workInProgress":
                return wipText;
            default:
                return [];
        }
    };

    const getBackgroundForTab = () => {
        switch (activeTab) {
            case "c++":
                return cplusBG;
            case "javascript":
                return jsBG;
            case "dart":
                return dartBG;
            case "c":
                return cBG;
            case "WIP":
                return wipBG;
            default:
                return ""; 
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

    var tab_name = tabs.projects + activeTab;

    return (
        <div className="projects-container">
            <Sidebar />
            <div
                className="content-container">
                <ContentBigScreen tab_name={tab_name}>
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
                                onClick={() => setActiveTab("workInProgress")}
                                className={activeTab === "workInProgress" ? "active-tab" : ""}
                            >
                                wip/
                            </div>
                        </div>
                        <div className="lang-content"
						  style={{
							backgroundImage: `url(${getBackgroundForTab()})`,
							backgroundSize:'40%',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							backgroundAttachment: 'fixed',
						}}>{renderContent()}</div>
                    </div>
                </ContentBigScreen>
            </div>
        </div>
    );
}

export default Projects;
