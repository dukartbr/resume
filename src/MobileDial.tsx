import { useState } from 'react';

export default function Dial({
	title,
	position,
	setPosition,
	cb
}: {
	title: string,
	position: number,
	setPosition: (position: number) => void,
	cb?: () => void
}) {
	const MIN_POS = -160;
	const MAX_POS = 160;
	const STEP = 80;

	const [reversing, setReversing] = useState(false)

	function handlePointerClick(e: any) {
		e.preventDefault();
		let isReversing = reversing;

		if (!isReversing && position >= MAX_POS - STEP) {
      isReversing = true;
      setReversing(true);
    } else if (isReversing && position <= MIN_POS + STEP) {
      isReversing = false;
      setReversing(false);
    }

		const nextPos = position + (isReversing ? -STEP : STEP);
		setPosition(Math.max(MIN_POS, Math.min(MAX_POS, nextPos)))
		if (cb != null) {
			cb();
		}
	}

	return (
		<div className="dialContainer">
			<div className="dial" style={{
				transform: `rotate(${position}deg)`,
				height: '80px',
				width: '80px'
			}} onClick={handlePointerClick}>
					<div
						className="dialLead"
						style={{
							right:'35px',
							height:'35px',
							width: '5px',
						}}
					></div>
			</div>
			<div className="dialTitle" >{title}</div>
		</div>
	)
}