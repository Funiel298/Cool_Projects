import Link from "next/link" 
import { CiTimer } from "react-icons/ci" 
import { CiCloud } from "react-icons/ci" 
import { CiCalculator2 } from "react-icons/ci" 
import { CiSettings } from "react-icons/ci" 
import { FaSpotify } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";


const apps = [
    {
        name : '', 
        icon : <CiCalculator2 size={18}/>,
        link : '/calculator'
    },
    {
        name : '', 
        icon : <CiCloud size={18}/>,
        link : '/weather'
    },
    {
        name : '', 
        icon : <CiTimer size={18}/>,
        link : '/pomodoro'
    },
    {
        name : '', 
        icon : <CiSettings size={18}/>,
        link : ''
    },
    {
        name : '', 
        icon : <FaSpotify/>,
        link : 'https://spotly.vercel.app'
    },
    {
      name : '', 
      icon : <VscGithubAlt/>,
      link : '/github_readme'
  },
]



export default function BottomPanel() {
  return (
    <div className="flex justify-around flex-row w-full items-center ">
      {apps.map((app)=>(
        <Link key={app} href={`${app.link}`}>
            {app.icon}
        </Link>
      ))}
    </div>
  ) 
}
