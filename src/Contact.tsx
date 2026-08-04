import { FaPhone, FaEnvelope, FaFile, FaGithub } from "react-icons/fa6";

export default function Contact() {
	return (
		<div id="modal">
				<span id="modalHeader">Feel free to reach out to me anytime!</span>
				<div id="modalContact">
					<a href="tel:701-729-3582">
						<FaPhone className="modalIcon" />
						<span className="modalIconTitle">701-729-3582</span>
					</a>
					<a href="mailto:dukartbrady@gmail.com">
						<FaEnvelope className="modalIcon" />
						<span className="modalIconTitle">dukartbrady@gmail.com</span>
					</a>
					<a href="./BradyDukart_Resume.pdf" target="_blank">
						<FaFile className="modalIcon" />
						<span className="modalIconTitle">Resume</span>
					</a>
					<a href="https://github.com/dukartbr" target="_blank">
						<FaGithub className="modalIcon" />
						<span className="modalIconTitle">Github</span>
					</a>
				</div>
		</div>
	)
}
