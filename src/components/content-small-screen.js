import "./content-small-screen.css";

function ContentSmallScreen({ section }) {
   const textArray = Array.isArray(section.text) ? section.text : [section.text];
   const subtitlesArray = Array.isArray(section.subtitle) ? section.subtitle : [];

   return (
      <div className="small-container">
         <div className="small-screen">
            {/* Conditionally render window title if it exists */}
            {section.window && (
               <div className="topbar-small">
                  <div>{section.window}</div>
               </div>
            )}

            {/* Conditionally render the main title */}
            {section.title && (
               <div className="small_title">{section.title}</div>
            )}

            {/* Conditionally render subtitles only if they exist */}
            {subtitlesArray.length > 0 && (
               <ul className="small_sub_title">
                  {subtitlesArray.map((item, index) => (
                     <li key={index}>{item}</li>
                  ))}
               </ul>
            )}

            {/* Conditionally render the info block */}
            {section.info && (
               <div className="small_info">{section.info}</div>
            )}

            {/* Conditionally render the text list if it has content */}
            {textArray.length > 0 && (
               <ul className="small_text">
                  {textArray.map((item, index) => (
                     <li key={index}>{item}</li>
                  ))}
               </ul>
            )}

            {/* Conditionally render the image */}
            {section.image && (
               <img src={section.image} alt="ascii art" className="small_img" />
            )}

            {/* Conditionally render the video if it exists */}
            {section.video && (
               <video width="560" height="315" controls className="small_vid">
                  <source src={section.video} type="video/mp4" />
                  Your browser does not support the video tag.
               </video>
            )}

            {/* Conditionally render the link */}
            {section.link && (
               <a href={section.link} target="_blank" rel="noopener noreferrer" className="box-link">
                  Link
               </a>
            )}

            {/* Conditionally render the ASCII art */}
            {section.ascii && (
               <pre className="small_ascii">{section.ascii}</pre>
            )}
         </div>

         {/* Optional spacers, can remove or conditionally render these if needed */}
         <div className="spacers">⋆</div>
         <div className="spacers">⋆</div>
         <div className="spacers">⋆</div>
      </div>
   );
}

export default ContentSmallScreen;
