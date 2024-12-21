import React, { useState, useEffect } from "react";
import "./content-small-screen.css";

function ContentSmallScreen({ section }) {
	const textArray = Array.isArray(section.text) ? section.text : [section.text];
	const subtitlesArray = Array.isArray(section.subtitle) ? section.subtitle : [];
	const [imageSrc, setImageSrc] = useState(section.image); // Initialize with the default image

	useEffect(() => {
		// Check if the image loads successfully
		const img = new Image();
		img.src = section.image;
		img.onload = () => setImageSrc(section.image); // If successful, keep the API image
		img.onerror = () => setImageSrc(section.fallbackImage); // Use fallback if API fails
	}, [section.image, section.fallbackImage]);

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

				{/* Conditionally render the image */}
				{imageSrc && <img src={imageSrc} alt="section visual" className="small_img" />}

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
