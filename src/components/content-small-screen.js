import "./content-small-screen.css";

function ContentSmallScreen({ section }) {
    const textArray = Array.isArray(section.text) ? section.text : [section.text];

    return (
        <div className="small-screen">
            <div className="topbar">
                <div>{section.window}</div>
            </div>
            <div className="small_title">{section.title}</div>
            <div className="small_sub_title">{section.subtitle}</div>
            <div className="small_sub_title">{section.subtitle1}</div>
            <div className="small_sub_title">{section.subtitle2}</div>
            <div className="small_sub_title">{section.subtitle3}</div>
            <pre className="small_ascii">{section.ascii}</pre>
            <div className="small_sub_title">{section.info}</div>
            {section.image && (
                <img src={section.image} alt="ascii art" />
            )}
            <ul className="small_text">
                {textArray
                    .filter(item => item && item.trim() !== "") // Filter out empty or whitespace-only items
                    .map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
            </ul>
        </div>
    );
}

export default ContentSmallScreen;
