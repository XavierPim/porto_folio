import "./content-small-screen.css";

function ContentSmallScreen({ section }) {
   const textArray = Array.isArray(section.text) ? section.text : [section.text];

   return (
      <div className="small-container">
         <div className="small-screen">
            <div className="topbar-small">
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
               <img src={section.image} alt="ascii art" className="small_img" />
            )}

            {/* Conditionally render the video if section.video is valid */}
            {section.video && (
               <video width="560" height="315" controls>
                  <source src={section.video} type="video/mp4" />
                  Your browser does not support the video tag.
               </video>
            )}

            <ul className="small_text">
               {textArray.map((item, index) => (
                  <li key={index}>{item}</li>
               ))}
            </ul>
            
            {/* Render link only if valid */}
            {section.link && (
                  <a href={section.link} target="_blank" rel="noopener noreferrer" className="box-link">
                  Link </a>
            )}
         </div>
         <div className="spacers">⌄</div>
         <div className="spacers">⌄</div>
         <div className="spacers">⌄</div>
         <div className="spacers">⌄</div>
         <div className="spacers">⌄</div>
      </div>
   );
}

export default ContentSmallScreen;
