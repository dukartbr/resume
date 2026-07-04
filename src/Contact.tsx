import { FaPhone, FaEnvelope, FaFile } from "react-icons/fa6";

export default function Contact() {
	return (
		<div id="modal">
				<span id="modalHeader">I'm so excited to connect with you!</span>
				<span>Feel free to reach out to me anytime!</span>
				<div id="modalContact">
					<a href="tel:701-729-3582">
						<FaPhone className="modalIcon" />
						<span className="modalIconTitle">701-729-3582</span>
					</a>
					<a href="mailto:dukartbrady@gmail.com">
						<FaEnvelope className="modalIcon" />
						<span className="modalIconTitle">dukartbrady@gmail.com</span>
					</a>
					<a href="./BradyDukartResume.pdf" target="_blank">
						<FaFile className="modalIcon" />
						<span className="modalIconTitle">Resume</span>
					</a>
				</div>
		</div>
	)
}
