import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaJs, FaReact, FaHtml5, FaPython, FaPhone, FaRegLightbulb } from "react-icons/fa6";
import { AiOutlineDotNet } from "react-icons/ai";
import { DiMysql } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";
import { FaMusic, FaRegSmile, FaRegFile } from "react-icons/fa";
// import { GiGuitarBassHead } from "react-icons/gi";

import './App.css'
import { useWindowResize } from './utils'

import Dial from './Dial'
import InfoPanel from './InfoPanel'
import Contact from './Contact'
import BigMuff from './BigMuff'
import MiniMuff from './MiniMuff'
// import TubeScreamer from './TubeScreamer'

export interface Dial {
  title: string,
  position: number
}

export interface Pedal {
	skillsDial: number,
	experienceDial: number,
	extrasDial: number,
	setSkillsDial: (val: number) => void
	setExperienceDial: (val: number) => void
	setExtrasDial: (val: number) => void
	expSelected: boolean
	setExpSelected: (val: boolean) => void
	setHireModalOpen: (val: boolean) => void
	mobileClickHandler?: (val: string) => void
}

export interface PanelItem {
	title: string,
	description?: string
	years?: number,
	range?: string[],
	icon?: React.ReactNode,
	list?: {
		text: string,
		link?: string,
	}[],
	grad?:number,
	id: number
}

const technicalSkills: PanelItem[] = [
	{
		id: 0,
		title: 'Javascript/Typescript',
		description: `JavaScript and TypeScript are the languages I know best and use most often. From writing my first "Hello, World!" program to building full-stack applications, JavaScript has been at the center of my development career. During my time at Bushel, I expanded that foundation with TypeScript and quickly came to appreciate the safety, maintainability, and developer experience it brings to large applications. When tackling a new problem, JavaScript is almost always my first choice thanks to its versatility, simplicity, and powerful ecosystem.`,
		years: 8,
		icon: <FaJs />
	},
	{
		id: 1,
		title: 'React & Vue',
		description: `React and Vue are the front-end frameworks I have the most professional experience with. During my four years at Bushel, I helped design, build, and maintain a large proprietary React application using TypeScript and Chakra UI. Over the past two and a half years at Razor Tracking, I've worked extensively with Vue while also contributing to the company's transition toward a modern React-based architecture. These experiences have given me a strong understanding of both frameworks and the ability to quickly adapt to evolving front-end technologies.`,
		years: 7,
		icon: <FaReact />
	},
	{
		id: 2,
		title: 'C#/ASP.NET',
		description: `At Razor Tracking, I worked extensively with ASP.NET and ASP.NET Core in an MVC architecture. My primary responsibilities included designing and implementing REST API endpoints, developing backend business logic, and transforming data for consumption by the front-end application. This experience has strengthened my understanding of scalable backend architecture and full-stack application development.`,
		years: 3,
		icon: <AiOutlineDotNet />
	},
	{
		id: 3,
		title: 'SQL',
		description: `SQL has become one of my favorite technologies to work with. I enjoy designing efficient queries and continually looking for opportunities to improve performance and readability. At Razor Tracking, I used SQL daily for debugging, reporting, and data analysis, while also creating and modifying database tables, schemas, and stored data as new features require.`,
		years: 3,
		icon: <DiMysql />
	},
	{
		id: 4,
		title: 'HTML/CSS',
		description: `HTML and CSS were my introduction to web development and continue to be foundational tools in my workflow. While studying multimedia in college, I learned the fundamentals of web design using Adobe Dreamweaver before eventually moving to modern development tools like Visual Studio Code. Although I'm comfortable working within today's major front-end frameworks, I still enjoy building smaller projects with vanilla HTML and CSS, appreciating just how capable they are on their own.`,
		years: 9,
		icon: <FaHtml5 />
	},
	{
		id: 5,
		title: 'Python',
		description: `Python is a language I'm actively learning and looking for more opportunities to use professionally. In my personal projects, I've built terminal applications that consume REST APIs, process data, and persist information to local text files and NoSQL databases. I'm excited to continue expanding my experience with Python across both automation and backend development.`,
		years: 1,
		icon: <FaPython />
	},
	{
		id: 6,
		title: 'GraphQL',
		description: `I've completed introductory coursework in GraphQL and enjoyed its intuitive approach to working with APIs. While my professional experience with it is still growing, I'm eager to apply it in production environments. As someone who enjoys learning new technologies and continuously improving my skill set, I'm excited to deepen my understanding of GraphQL and modern API design.`,
		years: 0.5,
		icon: <GrGraphQl />
	},
]

const experienceItems: PanelItem[] = [
		{
		id: 0,
		title: 'Razor Tracking',
		description: `As a Full Stack Software Engineer at Razor Tracking, I contributed to the development and maintenance of the company's proprietary fleet management platform. My work spanned the entire technology stack, including ASP.NET, C#, Vue, React, SQL, and JavaScript. I was responsible for delivering features from initial design through production deployment, implementing both frontend and backend functionality, and contributing to the evolution of the underlying database architecture.`,
		range: ['Nov 2023', 'July 2026']
	},
	{
		id: 1,
		title: 'Bushel',
		description: `As a Software Engineer II at Bushel, I spent four years building and maintaining a large-scale React and TypeScript application used daily by thousands of customers across the agriculture industry. During my time there, I developed numerous customer-facing features, collaborated closely with product and design teams, and significantly strengthened my expertise in modern front-end engineering.`,
		range: ['Dec 2019', 'Nov 2023']
	},
	{
		id: 2,
		title: 'Perficient',
		description: `At Perficient, I worked with enterprise technologies including Salesforce and Sitecore to deliver web solutions for clients in the manufacturing industry. This experience exposed me to large-scale enterprise development, client collaboration, and implementing customized solutions across complex technology ecosystems.`,
		range: ['May 2018', 'Dec 2019']
	},
		{
		id: 3,
		title: 'Absolute Marketing Group',
		description: `I began my software engineering career at Absolute Marketing Group, where I developed websites and web applications for a diverse range of clients. Working across WordPress, React, HTML, CSS, and the company's in-house PHP framework gave me broad exposure to web development and helped establish the strong technical foundation I continue to build upon today.`,
		range: ['Aug 2017', 'May 2018']
	},
	{
		id: 4,
		title: 'Minnesota State Tech',
		description: `After graduating from MSUM, I continued my education by earning a certificate in Web Design. In addition to strengthening my JavaScript skills, I expanded my knowledge of the Adobe Creative Suite, user interface design, and content management systems, providing a well-rounded foundation in both design and development.`,
		grad: 2017
	},
	{
		id: 5,
		title: 'Minnesota State University',
		description: `I earned a Bachelor of Arts in Marketing from Minnesota State University Moorhead. During my time there, I served as Technology Chair on the Student Council, where I combined my passion for technology with leadership and organizational responsibilities.`,
		grad: 2016
	},

]
const passionItems: PanelItem[] = [
	{
		id: 0,
		title: 'What Makes Me The Best Candidate?',
		description: `I have more than eight years of professional software engineering experience building modern web applications across the full technology stack. I approach every project with the end user in mind, believing that great software should be intuitive, reliable, and accessible to everyone. I also believe that successful products begin with thoughtful design, clear requirements, and strong communication between engineering, product, and design teams.`,
		icon: <FaRegLightbulb />
	},
	{
		id: 1,
		title: 'About Me',
		description: `I grew up in a small town in North Dakota (oh yeah, you bet'chya) before attending college in Fargo. A year ago, my wife, our two dogs, and I relocated to Chicago. Outside of software development, I enjoy making music, collecting comic books, and exploring the city by bike.`,
		icon: <FaRegSmile />
	},
	{
		id: 2,
		title: 'Lets Talk Music!',
		description: `I've been in local bands since I was fourteen and have always felt at home in local music scenes since. I've been in multiple bands of different genres while always making music of my own. I play guitar, bass, piano, a little drums, and am getting very into desktop synths currently.`,
		icon: <FaMusic />
	},
	{
		id: 3,
		title: 'Resume & References',
		list: [
			{
				text: 'Resume',
				link: './BradyDukart_Resume.pdf'
			},
			{
				text: 'Letter of Recommendation',
				link: './LetterOfRecommendation.pdf'
			}
		],
		icon: <FaRegFile />
	},
	{
		id: 4,
		title: 'Contact',
		description: `I'm always happy to connect and can be reached through any of the following methods:`,
		list: [
			{
				text: '701-729-3582',
				link: 'tel:701-729-3582'
			},
			{
				text: 'dukartbrady@gmail.com',
				link: 'mailto:dukartbrady@gmail.com'
			}
		],
		icon: <FaPhone />
	},
]

function App() {
  const [skillsDial, setSkillsDial] = useState(-140)
  const [experienceDial, setExperienceDial] = useState(-140)
  const [extrasDial, setExtrasDial] = useState(-140)
	const [expSelected, setExpSelected] = useState(true)
	const [hireModalOpen, setHireModalOpen] = useState(false);
	const [mobilePanel, setMobilePanel] = useState('about')
	// const [activePedal, setActivePedal] = useState(true);

	const windowSize = useWindowResize();
  return (
		<div>
			<div id="bodyContainer" onClick={() => hireModalOpen ? setHireModalOpen(false) : null}>
				<div id="header">
					<span>Brady Dukart</span>
					<span id="contactLink" onClick={() => !hireModalOpen ? setHireModalOpen(true) : null}>Contact</span>
				</div>
				{/* <div className="infoHeader">Dial the Knobs, Toggle the Switch, Stomp the Box, or Switch the Pedal!</div> */}
				{windowSize == 'full' && (
					<>
						<div className="infoHeader">Dial the Knobs, Toggle the Switch, or Stomp the Pedal!</div>
						<div id="main">
							<InfoPanel title="About" position={extrasDial} items={passionItems} panelHandler={(val) => setExtrasDial(val)} />
								<div id="pedalContainer">
									<BigMuff
											skillsDial={skillsDial}
											experienceDial={experienceDial}
											extrasDial={extrasDial}
											setSkillsDial={setSkillsDial}
											setExperienceDial={setExperienceDial}
											setExtrasDial={setExtrasDial}
											expSelected={expSelected}
											setExpSelected={setExpSelected}
											setHireModalOpen={setHireModalOpen}
										/>
									{/* <FaChevronLeft style={{cursor: 'pointer', fontSize: '1.5rem'}} onClick={() => setActivePedal(!activePedal) } />
									{activePedal ? (
										<BigMuff
											skillsDial={skillsDial}
											experienceDial={experienceDial}
											extrasDial={extrasDial}
											setSkillsDial={setSkillsDial}
											setExperienceDial={setExperienceDial}
											setExtrasDial={setExtrasDial}
											expSelected={expSelected}
											setExpSelected={setExpSelected}
											setHireModalOpen={setHireModalOpen}
										/>
									): (
										<TubeScreamer
											skillsDial={skillsDial}
											experienceDial={experienceDial}
											extrasDial={extrasDial}
											setSkillsDial={setSkillsDial}
											setExperienceDial={setExperienceDial}
											setExtrasDial={setExtrasDial}
											expSelected={expSelected}
											setExpSelected={setExpSelected}
											setHireModalOpen={setHireModalOpen}
										/>
									)}
								<FaChevronRight style={{cursor: 'pointer', fontSize: '1.5rem'}} onClick={() => setActivePedal(!activePedal)} /> */}
								</div>
							{expSelected ? (
								<InfoPanel title="Education & Experience" position={experienceDial} items={experienceItems} panelHandler={(val) => setExperienceDial(val)} />
							): (
								<InfoPanel title="Technical Skills" position={skillsDial} items={technicalSkills} panelHandler={(val) => setSkillsDial(val)}  />
							)}
						</div>
					</>
				)}
				{windowSize == 'md' && (
					<>
						<div className="infoHeader">Dial the Knobs or Stomp the Pedal!</div>
						<div style={{
							display: 'flex'
						}}>
							{mobilePanel == 'about' && (
								<InfoPanel title="About" position={extrasDial} items={passionItems} panelHandler={(val) => setExtrasDial(val)} />
							)}
							{mobilePanel == 'ed' && (
								<InfoPanel title="Education & Experience" position={experienceDial} items={experienceItems} panelHandler={(val) => setExperienceDial(val)} />
							)}
							{mobilePanel == 'skills' && (
								<InfoPanel title="Technical Skills" position={skillsDial} items={technicalSkills} panelHandler={(val) => setSkillsDial(val)}  />
							)}
							<BigMuff
									skillsDial={skillsDial}
									experienceDial={experienceDial}
									extrasDial={extrasDial}
									setSkillsDial={setSkillsDial}
									setExperienceDial={setExperienceDial}
									setExtrasDial={setExtrasDial}
									expSelected={expSelected}
									setExpSelected={setExpSelected}
									setHireModalOpen={setHireModalOpen}
									mobileClickHandler={setMobilePanel}
								/>
						</div>
					</>
				)}
				{windowSize == 'sm' && (
					<>
						<div className="infoHeader">Dial the Knobs!</div>
						<div style={{
							display: 'flex',
							flexDirection: 'column'
						}}>
							<MiniMuff
								skillsDial={skillsDial}
								experienceDial={experienceDial}
								extrasDial={extrasDial}
								setSkillsDial={setSkillsDial}
								setExperienceDial={setExperienceDial}
								setExtrasDial={setExtrasDial}
								expSelected={expSelected}
								setExpSelected={setExpSelected}
								setHireModalOpen={setHireModalOpen}
								mobileClickHandler={setMobilePanel}
							/>
							{mobilePanel == 'about' && (
								<InfoPanel title="About" position={extrasDial} items={passionItems} panelHandler={(val) => setExtrasDial(val)} />
							)}
							{mobilePanel == 'ed' && (
								<InfoPanel title="Education & Experience" position={experienceDial} items={experienceItems} panelHandler={(val) => setExperienceDial(val)} />
							)}
							{mobilePanel == 'skills' && (
								<InfoPanel title="Technical Skills" position={skillsDial} items={technicalSkills} panelHandler={(val) => setSkillsDial(val)}  />
							)}

						</div>
					</>
				)}
			</div>
			{hireModalOpen && <Contact />}
		</div>
  )
}

export default App
