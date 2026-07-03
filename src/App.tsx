import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaJs, FaReact, FaHtml5, FaPython, FaPhone, FaRegLightbulb } from "react-icons/fa6";
import { AiOutlineDotNet } from "react-icons/ai";
import { DiMysql } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";
import { FaMusic, FaRegSmile, FaRegFile } from "react-icons/fa";
import { GiGuitarBassHead } from "react-icons/gi";

import './App.css'
import { useWindowResize } from './utils'

import Dial from './Dial'
import InfoPanel from './InfoPanel'
import Contact from './Contact'
import BigMuff from './BigMuff'
import TubeScreamer from './TubeScreamer'

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
		description: `Javascript & Typescript are the languages I have the most experience with. From writing my first 'hello-world' script to creating full stack applications, I've loved every moment of working with JavaScript. I gained experience working with Typescript during my time at Bushel where I really learned to appreciate its value for rapidly buidling and debugging.  Almost always, I reach for JavaScript first as an initial solution when problem solving in code; it's combinitation of simplicity and power made it a perfect first programming language for me to master.`,
		years: 8,
		icon: <FaJs />
	},
	{
		id: 1,
		title: 'React & Vue',
		description: `React & Vue are the two main front-end frameworks I have extensive experience with. During my four years at Bushel, I was involved in planning, desigining, building, and maintaing a proprietary React application that utilized the Chakra UI framework. During the past two and half years however, I've been working on Razor Tracking's Vue based application that uses a mix of front-end libraries as well as helping to transition the application from Vue to the latest version of React.`,
		years: 7,
		icon: <FaReact />
	},
	{
		id: 2,
		title: 'C#/ASP.NET',
		description: `During my time at Razor Tracking, I've gained experience with different versions of ASP.NET as ASP.NET Core, working in an MVC architecture. I've primarily been responsibile for creating new endpoints for our front end application to request from, and writing any necessary backend logic for data transformation.`,
		years: 3,
		icon: <AiOutlineDotNet />
	},
	{
		id: 3,
		title: 'SQL',
		description: `SQL is currently my favorite language to work with. Like most engineers, I find joy in seeing how well I can optimize a query. Like .NET & C#, I've gained most of my knowledge and experience with SQL at Razor Tracking where I use it every day, mostly for debugging and data gathering but occassionally creating and updating tables and schemas.`,
		years: 3,
		icon: <DiMysql />
	},
	{
		id: 4,
		title: 'HTML/CSS',
		description: `HTML & CSS are where I started with basic web development. While at college, I took a multi-media course that taught me the basics of all the Adobe products, including Dreamweaver (Thank goodness those days are behind me and I use VS Code like the rest of the world). While I'm comfortable building applications with almost any library or framework, when building small applications I utilize bare-bones HTML and CSS as they are much more powerful than most would believe.`,
		years: 9,
		icon: <FaHtml5 />
	},
	{
		id: 5,
		title: 'Python',
		description: `Python is a language I'm currently learning in my free time and looking for any opportunity to use it more. I've built some personal terminal apps that get data an API request and update local .txt or SQL files.`,
		years: 1,
		icon: <FaPython />
	},
	{
		id: 6,
		title: 'GraphQL',
		description: `I've taken a short GraphQL course and really enjoyed how it felt more modern and understandable than SQL. I am, admittedly, more limited in my experience in this but as a fast learner and engineer who's passionate about not only creating a successful and secure product, but also improving the lives of musicians, I look forward to dedicating my time to mastering this tool.`,
		years: 0.5,
		icon: <GrGraphQl />
	},
]

const experienceItems: PanelItem[] = [
		{
		id: 0,
		title: 'Razor Tracking',
		description: `As a Full Stack Engineer, I primarily contribute to and maintain our proprietary Fleet Tracking software with a wide ranging stack of technologies including ASP.NET, C#, Vue, React, SQL, and JavaScript. I'm responsible for implementing new features from conception to release in both the frontend and backend logic, as well as contributing to database tables and schemas.`,
		range: ['Nov 2023', 'Present']
	},
	{
		id: 1,
		title: 'Bushel',
		description: `I was a Software Engineer 2 at Bushel for four years. During that time I mastered my React and Tyescript skills and was responsible for many features in the proprietary web UI that is used by thousands in the agriculture industry each day.`,
		range: ['Dec 2019', 'Nov 2023']
	},
	{
		id: 2,
		title: 'Perficient',
		description: `At Perficient, I worked with a variety of larger web technologies like Salesforce and Sitecore to help implement solutions for clients in the manufacturing industry.`,
		range: ['May 2018', 'Dec 2019']
	},
		{
		id: 3,
		title: 'Absolute Marketing Group',
		description: `I started my engineering career at Absolute Marketing Group building simple websites for the smaller clients on various technologies from Wordpress, React, basic HTML&CSS and even our own homegrown PHP library.`,
		range: ['Aug 2017', 'May 2018']
	},
	{
		id: 4,
		title: 'Minnesota State Tech',
		description: `After graduating from MSUM, I continued my education to get a certificate in Web Design. In addition to learning JavaScript, I gained further education in the Adobe Suite and various CMS technologies.`,
		grad: 2017
	},
	{
		id: 5,
		title: 'Minnesota State University',
		description: `I graduated from Minnesota State University Moorehead with a BA in Marketing. During my time in college I served as the technology chair on the student council.`,
		grad: 2016
	},

]
const passionItems: PanelItem[] = [
	{
		id: 0,
		title: 'What Makes Me The Best Candidate?',
		description: `You'll never find someone more passionate about getting quality gear into the hands of musicians as quickly as possible, than me. The world needs more people making music, and Reverb is the best way for those musicians to get the gear they need to perfect their art, it would be an honor to be able to help in such an endevour. As a current Reverb buyer and seller, and certified gear and software addict, I will bring an unparalleled level of passion and care to the each line of code with a user focused mentality.`,
		icon: <FaRegLightbulb />
	},
	{
		id: 1,
		title: 'Lets Talk Music!',
		description: `I've been in local bands since I was fourteen and have always felt at home in local music scenes since. I've been in multiple bands of different genres while always making music of my own. I play guitar, bass, piano, a little drums, and am getting very into desktop synths currently.`,
		icon: <FaMusic />
	},
	{
		id: 2,
		title: 'Lets Talk Gear!',
		description: `I'm a total gear nut. I love collecting pedals, synths, guitars, amps, and pretty much anything that can help me make noise. While my focus at Reverb will always be on writing code and creating the best possible product, I'll admit I'm excited to hopefully nerd out with fellow gear dorks.`,
		icon: <GiGuitarBassHead />
	},
	{
		id: 3,
		title: 'About Me',
		description: `I'm from a small town in North Dakota, (oh yeah, you bet'chya), and went to college in Fargo. I moved to Chicago a year ago with my wife and our two dogs. When I'm not coding or making music, I enjoy collecting comic books and bike riding.`,
		icon: <FaRegSmile />
	},
	{
		id: 4,
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
		id: 5,
		title: 'Contact',
		description: `I'm available at any time at either of the following:`,
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
	// const [activePedal, setActivePedal] = useState(true);

	const windowSize = useWindowResize();

	console.log('windowSize', windowSize)

  return (
		<div>
			<div id="bodyContainer" onClick={() => hireModalOpen ? setHireModalOpen(false) : null}>
				<div id="header">
					<span>Brady Dukart</span>
					<span id="contactLink" onClick={() => !hireModalOpen ? setHireModalOpen(true) : null}>Contact</span>
				</div>
				{/* <div id="infoHeader">Dial the Knobs, Toggle the Switch, Stomp the Box, or Switch the Pedal!</div> */}
				<div id="infoHeader">Dial the Knobs, Toggle the Switch, or Stomp the Box!</div>
				{true && (
					<div id="main">
						<InfoPanel title="About" position={extrasDial} items={passionItems} panelHandler={(val) => setExtrasDial(val)} />
							<div id="pedalContainer">
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
							</div>
						{expSelected ? (
							<InfoPanel title="Education & Experience" position={experienceDial} items={experienceItems} panelHandler={(val) => setExperienceDial(val)} />
						): (
							<InfoPanel title="Technical Skills" position={skillsDial} items={technicalSkills} panelHandler={(val) => setSkillsDial(val)}  />
						)}
					</div>
				)}
			</div>
			{hireModalOpen && <Contact />}
		</div>
  )
}

export default App
