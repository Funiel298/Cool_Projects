import { link } from "fs"
import Link from "next/link"
export default function Home() {

  const greatArr = [
    {
      image: 'https://img.icons8.com/?size=512&id=ujRmpOIupIsv&format=png',
      title: 'Calculator',
      link: '/calculator',
    },
    {
      image: 'https://img.icons8.com/?size=512&id=2897&format=png',
      title: 'Weather',
      link: '/weather',
    },
    {
      image: 'https://img.icons8.com/?size=512&id=8WP2o41VRo2f&format=png',
      title: 'Pomodoro',
      link: '/pomodoro',
    },
    {
      image: 'https://img.icons8.com/?size=512&id=61245&format=png',
      title: 'Blog',
      link: '/blog',
    },
  ]

  return (
    <div className="flex flex-row font-bold">

      {greatArr.map((card)=>(
        <Link href={card.link}>
        <div className="flex flex-col justify-center items-center m-10">
          <img width={100} src={card.image} alt="" />
          <h1>{card.title}</h1>
        </div>
      </Link>
      ))}
      
      
      
      
    </div>
  )
}
