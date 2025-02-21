import React from "react";
import ContentSmallScreen from "../components/content-small-screen";

function ProjectTabs({ tabsData, activeTab, setActiveTab, getBackgroundForTab }) {
    const renderContent = () => {
        const content = tabsData[activeTab]?.content || [];
        return content.map((section, index) => (
            <ContentSmallScreen key={index} section={section} />
        ));
    };

    return (
        <div className="language-container">
            {/* Tabs */}
            <div className="lang-tabs">
                {Object.keys(tabsData).map((tab) => (
                    <div
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={activeTab === tab ? "active-tab" : ""}
                    >
                        {tab}/
                    </div>
                ))}
            </div>

            {/* Content Area with Background */}
            <div
                className="lang-content"
                style={{
                    backgroundImage: `url(${getBackgroundForTab(activeTab)})`,
                    backgroundSize: '40%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                }}
            >
                {renderContent()}
            </div>
        </div>
    );
}

export default ProjectTabs;
