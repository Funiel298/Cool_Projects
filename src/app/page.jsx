'use client'
import Clock from "../Components/Clock" 
import BottomPanel from '../Components/BottomPanel'

export default function Home() {
  return (
    <div className="relative h-screen bg-cover flex justify-center bg-center bg-no-repeat" style={{ backgroundImage: "url(https://i.redd.it/g7rnhyvmrhf71.jpg)" }}>
      <div className="flex flex-col h-screen justify-between p-8 text-white">
        <Clock />
        <BottomPanel/>
      </div>
    </div>
  ) 
}
