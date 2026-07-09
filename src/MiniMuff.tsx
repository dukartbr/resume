import { FaArrowTurnUp } from "react-icons/fa6";

import Dial from './Dial'
import type { Pedal } from './App'

export default function MiniMuff({
	skillsDial,
	experienceDial,
	extrasDial,
	setSkillsDial,
	setExperienceDial,
	setExtrasDial,
	expSelected,
	setExpSelected,
	mobileClickHandler
}: Pedal) {
	return (
		<div id="miniMuffBody">
			<div id="miniMuff">
				{mobileClickHandler ? (
					<div className="dialsContainer" style={{padding: '32px 0px 0px'}}>
						<Dial title="About" position={extrasDial} setPosition={setExtrasDial} cb={() => mobileClickHandler('about')} />
						<Dial title="Education/Experience" position={experienceDial} setPosition={setExperienceDial} cb={() => mobileClickHandler('ed')} />
						<Dial title="Skills" position={skillsDial} setPosition={setSkillsDial} cb={() => mobileClickHandler('skills')} />
					</div>
				) : (
					<div className="dialsContainer" style={{padding: '32px 0px 0px'}}>
						<Dial title="About" position={extrasDial} setPosition={setExtrasDial}  />
						<Dial title="Education/Experience" position={experienceDial} setPosition={setExperienceDial} cb={() => !expSelected ? setExpSelected(true) : null} />
						<Dial title="Skills" position={skillsDial} setPosition={setSkillsDial} cb={() => expSelected ? setExpSelected(false) : null} />
					</div>
				)}
				{!mobileClickHandler && (
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
								<p>Technical Skills</p>
								<div className="light" style={{ backgroundColor: expSelected ? '' : '#ff0000'}}></div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
