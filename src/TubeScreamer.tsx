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
			<div className="dialsContainer" style={{ paddingTop: '2rem'}}>
				<Dial title="About" position={extrasDial} setPosition={setExtrasDial} />
				<Dial title="Skills" position={skillsDial} setPosition={setSkillsDial} cb={() => expSelected ? setExpSelected(false) : null}  />
			</div>
			<div className="dialsContainer">
				<Dial title="Education/Experience" position={experienceDial} setPosition={setExperienceDial} cb={() => !expSelected ? setExpSelected(true) : null} />
			</div>
			<div id="tubeScreamerStompContainer">
				<div id="tubeScreamerStomp">
					<div className="name">Brady Dukart</div>
					<div className="logo">Reverb's Best New Software Engineer</div>
				</div>
					<div className="hireTitle" onClick={() => setHireModalOpen(true)}>
						Stomp to Hire!
					</div>
			</div>
		</div>
	)
}
