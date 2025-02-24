import React, { useState, useEffect } from "react";
import "../css/projects.css";
import Sidebar from "../components/sidebar";
import ContentBigScreen from "../components/content-big-screen";
import tabs from "../content/text content/nav-tabs";
import { cplusplusText, javascriptText, dartText, cText, wipText } from "../content/text content/project-text";
import cplusBG from "../content/project-cplus/cplus.png";
import cBG from "../content/project-c/c.png";
import jsBG from "../content/project-js/js.png";
import wipBG from "../content/project-WIP/WIP.png";
import dartBG from "../content/project-dart/dart.png";
import ProjectTabs from "../components/projectsTabs";


function Projects() {
    const title = "-Projects-";
    const countTitle = "Count:";
    const [activeTab, setActiveTab] = useState("webapps");
    const [projectCount, setProjectCount] = useState(0);
    const [viewMode, setViewMode] = useState("type");

    // Backgrounds mapping
    const backgrounds = {
        "c++": cplusBG,
        "javascript": jsBG,
        "dart": dartBG,
        "c": cBG,
        "workInProgress": wipBG
    };

    // Combine all projects
    const allProjects = [
        ...cplusplusText,
        ...javascriptText,
        ...dartText,
        ...cText,
        ...wipText
    ];

    // Language-based project mapping
    const languageTabs = {
        "c++": { content: cplusplusText },
        "javascript": { content: javascriptText },
        "dart": { content: dartText },
        "c": { content: cText },
        "wip": { content: wipText }
    };

    // Type-based project mapping
    const typeTabs = {
        "webapps": { content: allProjects.filter(p => p.type === "webapps") },
        "embedded": { content: allProjects.filter(p => p.type === "embedded") },
        "opensrc": { content: allProjects.filter(p => p.type === "opensrc") },
        "ds|algo": { content: allProjects.filter(p => p.type === "ds|algo") },
    };
    
    const tabsData = viewMode === "language" ? languageTabs : typeTabs;

    useEffect(() => {
        setProjectCount(tabsData[activeTab]?.content.length || 0);
    }, [activeTab, tabsData]);

    const getBackgroundForTab = (tab) => backgrounds[tab] || "";

    var tab_name = `${tabs.projects}${activeTab}`;

    return (
        <div className="projects-container">
            <Sidebar />
            <div className="content-container">
                <ContentBigScreen tab_name={tab_name}>
                    <div className="header">
                        <div className="page_title">{title}</div>
                        <div className="page_title">
                            {countTitle} {projectCount}
                        </div>
                        <button
                            onClick={() => {
                                const newViewMode = viewMode === "language" ? "type" : "language";
                                setViewMode(newViewMode);

                                // Reset active tab based on the new view mode
                                setActiveTab(newViewMode === "type" ? "webapps" : "c++");
                            }}
                        >
                            {viewMode === "language" ? "Type" : "Lang"} View
                        </button>

                    </div>
                    <ProjectTabs
                        tabsData={tabsData}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        getBackgroundForTab={getBackgroundForTab}
                    />
                </ContentBigScreen>
            </div>
        </div>
    );
}

export default Projects;
