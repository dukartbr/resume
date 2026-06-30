import { FaArrowTurnUp } from "react-icons/fa6";

import Dial from './Dial'
import type { Pedal } from './App'

export default function TubeScreamer({
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
		<div id="tubeScreamerBody">
				{/* <div className="toggleContainer" onClick={() => setExpSelected(!expSelected)}>
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
				</div> */}
			<div className="dialsContainer" style={{ paddingTop: '2rem'}}>
				<Dial title="Skills" position={skillsDial} setPosition={setSkillsDial} />
				<Dial title="Education/Experience" position={experienceDial} setPosition={setExperienceDial} cb={() => !expSelected ? setExpSelected(true) : null} />
			</div>
			<div className="dialsContainer">
				<Dial title="About" position={extrasDial} setPosition={setExtrasDial} cb={() => expSelected ? setExpSelected(false) : null} />
			</div>
			<div id="tubeScreamerStompContainer">
				<div id="tubeScreamerStomp">
					<div className="name">Brady Dukart</div>
					<div className="logo">Reverb's Best New Software Engineer</div>
					{/* <div id="activateButton" onClick={() => setHireModalOpen(true)}>
						<div id="activateButtonSwitch">
						</div>
					</div> */}
					{/* <div id="hireTitle" onClick={() => setHireModalOpen(true)}>
						Stomp to Hire! <FaArrowTurnUp />
					</div> */}
				</div>
			</div>
		</div>
	)
}
