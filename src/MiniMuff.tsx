import Dial from './Dial'
import type { Pedal } from './App'

export default function MiniMuff({
	skillsDial,
	experienceDial,
	extrasDial,
	setSkillsDial,
	setExperienceDial,
	setExtrasDial,
	// expSelected,
	// setExpSelected,
	mobileClickHandler
}: Pedal) {
	return (
		<div id="miniMuffBody">
			<div id="miniMuff">
				{mobileClickHandler && (
					<div className="dialsContainer" style={{padding: '32px 0px 0px'}}>
						<Dial title="About" size="sm" position={extrasDial} setPosition={setExtrasDial} cb={() => mobileClickHandler('about')} />
						<Dial title="Experience"  size="sm" position={experienceDial} setPosition={setExperienceDial} cb={() => mobileClickHandler('ed')} />
						<Dial title="Skills" size="sm" position={skillsDial} setPosition={setSkillsDial} cb={() => mobileClickHandler('skills')} />
					</div>
				)}
			</div>
		</div>
	)
}
