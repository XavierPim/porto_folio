import "./content-small-screen.css";

function ContentSmallScreen({ section }) {
    const textArray = Array.isArray(section.text) ? section.text : [section.text];

    return (
        <div className="small-container">
        <div className="small-screen">
            <div className="topbar">
                <div>{section.window}</div>
            </div>
            <div className="small_title">{section.title}</div>
            <div className="small_sub_title">{section.subtitle}</div>
            <div className="small_sub_title">{section.subtitle1}</div>
            <div className="small_sub_title">{section.subtitle2}</div>
            <div className="small_sub_title">{section.subtitle3}</div>
            <div className="small_sub_title">{section.info}</div>
            <pre className="small_ascii">{section.ascii}</pre>
            {section.image && (
                <img src={section.image} alt="ascii art" className="small_img"/>
            )}
            <ul className="small_text">
                {textArray.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
        <div className="spacers">*</div>
        <div className="spacers">*</div>
        <div className="spacers">*</div>
        <div className="spacers">*</div>
        <div className="spacers">*</div>
        </div>
        
    );
}

export default ContentSmallScreen;
