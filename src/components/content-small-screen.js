import "./content-small-screen.css";

function ContentSmallScreen({ section }) {
    // Ensure text is an array; if it's a string, convert it to an array with one item.
    const textArray = Array.isArray(section.text) ? section.text : [section.text];

    return (
        <div className="small-screen">
            <div className="topbar">
                <div>{section.window}</div>
            </div>
            <div className="small_title">{section.title}</div>
            <div className="small_sub_title">{section.subtitle}</div>
            <div className="small_sub_title">{section.info}</div>
            <img src={section.img} alt="ascii art"/>
            <ul className="small_text">
                {textArray.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ContentSmallScreen;
