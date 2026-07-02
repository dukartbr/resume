import { useRef } from 'react';

export default function Dial({title, position, setPosition, cb}: {title: string, position: number, setPosition: (position: number) => void, cb?: () => void}) {
  const startY = useRef(0);
	const startX = useRef(0);
  const startValue = useRef(0);

	function handlePointerDown(e: any) {
		e.preventDefault();
		startY.current = e.clientY
		startX.current = e.clientX
		startValue.current = position;

		function handlePointerMove(mover: any) {
			const deltaY = startY.current - mover.clientY;
			const deltaX = -(startX.current - mover.clientX);
			const nextValue = startValue.current + deltaY + deltaX;
			const clamped = Math.max(-140, Math.min(140, nextValue));
			setPosition(clamped)
			if (cb) {
				cb()
			}
		}

		const handlePointerUp = () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };

 		window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
	}

	return (
		<div className="dialContainer">
			<div className="dial" style={{
				transform: `rotate(${position}deg)`
			}} onPointerDown={handlePointerDown}>
					<div className="dialLead"></div>
			</div>
			<div className="dialTitle">{title}</div>
		</div>
	)
}
