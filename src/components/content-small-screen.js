import React from "react";
import "./content-small-screen.css";

function ContentSmallScreen({ section }) {
	const textArray = Array.isArray(section.text) ? section.text : [section.text];
	const subtitlesArray = Array.isArray(section.subtitle) ? section.subtitle : [];
	return (
		<div className="small-container">
			<div className="small-screen">
				<div className="topbar-small">
					<div>{section.window}</div>
				</div>
				<div className="small_title">{section.title}</div>

				{/* Render subtitles dynamically */}
				<ul className="small_sub_title">
					{subtitlesArray.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>

				<div className="small_info">{section.info}</div>

				<ul className="small_text">
					{textArray.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
				
				{/* Conditionally render multiple images if section.image is an array */}
				{Array.isArray(section.image) ? (
					section.image.map((imgSrc, index) => (
						<img key={index} src={imgSrc} alt={`section visual ${index + 1}`} className="small_img" />
					))
				) : (
					section.image && <img src={section.image} alt="section visual" className="small_img" />
				)}


				{/* Conditionally render the video */}
				{section.video && (
					<video width="560" height="315" controls>
						<source src={section.video} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				)}

				{/* Render link only if valid */}
				{section.link && (
					<a href={section.link} target="_blank" rel="noopener noreferrer" className="box-link">
						Link
					</a>
				)}

				<pre className="small_ascii">{section.ascii}</pre>
			</div>
			<div className="spacers">⌄</div>
			<div className="spacers">⌄</div>
			<div className="spacers">⌄</div>
		</div>
	);
}

export default ContentSmallScreen;
