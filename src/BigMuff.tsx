import { FaArrowTurnUp } from "react-icons/fa6";

import Dial from './Dial'
import type { Pedal } from './App'

export default function BigMuff({
	skillsDial,
	experienceDial,
	extrasDial,
	setSkillsDial,
	setExperienceDial,
	setExtrasDial,
	expSelected,
	setExpSelected,
	setHireModalOpen
}: Pedal) {
	return (
		<div id="bigMuffBody">
			<div id="bigMuff">
				<div className="dialsContainer" style={{padding: '32px 0px 0px'}}>
				<Dial title="Skills" position={skillsDial} setPosition={setSkillsDial} />
				<Dial title="Education/Experience" position={experienceDial} setPosition={setExperienceDial} cb={() => !expSelected ? setExpSelected(true) : null} />
				<Dial title="About" position={extrasDial} setPosition={setExtrasDial} cb={() => expSelected ? setExpSelected(false) : null} />
				</div>
				<div className="toggleContainer" onClick={() => setExpSelected(!expSelected)}>
					<div className="toggleSwitch">
						<div className="toggleSwitchContainer"></div>
						<div className="toggleSwitchKnob" style={{ top: expSelected ? '-15px': ''}}></div>
					</div>
					<div>
						<div style={{display: 'flex'}}>
							<p style={{borderBottom: '2px solid #000000'}}>Education/Experience</p>
							<div className="light" style={{ backgroundColor: expSelected ? '#ff0000' : ''}}></div>
							</div>
						<div style={{display: 'flex'}}>
							<p>About</p>
							<div className="light" style={{ backgroundColor: expSelected ? '' : '#ff0000'}}></div>
						</div>
					</div>
				</div>
				<div className="titleContainer">
					<div id="bigMuffTitle">
						<div className="name">Brady Dukart</div>
						<div className="logo">Reverb's Best New Software Engineer</div>
					</div>
				</div>
				<div id="bigMuffStomp">
					<div id="activateButton" onClick={() => setHireModalOpen(true)}>
						<div id="activateButtonSwitch">
						</div>
					</div>
					<div id="hireTitle" onClick={() => setHireModalOpen(true)}>
						Stomp to Hire! <FaArrowTurnUp />
					</div>
				</div>
			</div>
		</div>
	)
}
