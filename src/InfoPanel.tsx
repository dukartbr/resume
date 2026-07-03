import type { PanelItem } from './App'

function calculatePanelOpen(position: number, id: number, count: number) {
  const activeId = Math.max(
    0,
    Math.min(
      count - 1,
      Math.floor((position + 140) / 20)
    )
  );

  return id === activeId;
}

export default function InfoPanel({title, position, items,  panelHandler}: {title: string, position: number, items: PanelItem[], panelHandler: (val: number) => void}) {

	return (
		<div className="infoContainer">
			<h2 className="infoTitle">{title}</h2>
			{items.map(s => {
				return (
					<div key={s.id} className="infoDropDownHeader" onClick={() => panelHandler(s.id * 40 - 140)}>
						<div style={{display: 'flex', justifyContent: 'space-between'}}>
							{s.icon ? (
								<div style={{ display: 'flex', width: '70%', gap: '1rem'}}>{s.icon} {s.title}</div>
							): (
								<span>{s.icon} {s.title}</span>
							)}
							{s.years && (
								<span>{s.years} years</span>
							)}
							{s.range && (
								<span>{s.range[0]}-{s.range[1]}</span>
							)}
							{s.grad && (
								<span>Graduated {s.grad}</span>
							)}
						</div>
						{calculatePanelOpen(position, s.id, items.length) && (
							<div className="infoDropDownDescription">
								{s.description && (
								<p>{s.description}</p>
								)}
								{s.list && (
									<div className="infoDropDownDescriptionList">
										{s.list.map(item => {
										if (item.link) {
											return (
												<a href={item.link} target="_blank" key={item.text}>
													{item.text}
												</a>
											)
										}
										return (
											<span>{item.text}</span>
										)
										})}
									</div>
								)}
							</div>
						)}
					</div>
				)
			})}
		</div>
	)
}
