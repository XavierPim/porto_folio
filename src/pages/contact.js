import React from "react";
import "../css/contact.css";
import Sidebar from "../components/sidebar";
import ContentBigScreen from "../components/content-big-screen";
import tabs from "../content/text content/nav-tabs";
import LinkedInart from "../ascii art/linkedin";
import emailart from "../ascii art/email";
function Contact() {
	const email = "royxavierp@gmail.com";
	const linked = "https://www.linkedin.com/in/xavier-pimentel-0a5b48132/";
	const phone = "+1 (123) 456-7890"; // Example phone number

	// Function to copy email to clipboard
	const copyToClipboard = () => {
		navigator.clipboard.writeText(email);
		alert("Email copied to clipboard!");
	};

	return (
		<div className="contact-container">
			<Sidebar />
			<div className="content-container" id="contact-big-parent">
				<ContentBigScreen tab_name={tabs.contact} >
					<div className="email">
						
						<a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
							target="_blank"
							rel="noopener noreferrer"
							className="contact-link">
							<pre>{emailart}</pre>
							Email me: {email}
						</a>
						
					<div className="copy-email">
						<button onClick={copyToClipboard} className="copy-button">
							Copy
						</button>
					</div>
					</div>

					<div className="linkedin">
					
						<a
							href={linked}
							target="_blank"
							rel="noopener noreferrer"
							className="contact-link"
						>
							<pre>{LinkedInart}</pre>
							Connect with me on LinkedIn
						</a>
					</div>

					<div className="phone">
						<p>
							For phone number requests, please{" "}
							<a
								href={`mailto:${email}?subject=Request%20for%20phone%20number`}
								className="contact-link"
							>
								email me
							</a>{" "}
							or reach out through{" "}
							<a
								href={linked}
								target="_blank"
								rel="noopener noreferrer"
								className="contact-link"
							>
								LinkedIn
							</a>
							.
						</p>
					</div>

				</ContentBigScreen>
			</div>
		</div>
	);
}

export default Contact;
