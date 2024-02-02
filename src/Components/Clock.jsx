import { useEffect, useState } from "react" 

export default function Clock() {
  const [currentTime, setCurrentTime] = useState("") 
  const [currentDay, setCurrentDay] = useState("") 
  const [currentMonth, setCurrentMonth] = useState("") 

  useEffect(() => {
    const updateTime = () => {
      const now = new Date() 
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })) 
      setCurrentDay(now.toLocaleDateString('en-US', { weekday: 'short' })) 
      setCurrentMonth(now.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })) 
    } 

    updateTime() 

    const interval = setInterval(updateTime, 10000) 

    return () => clearInterval(interval) 
  }, []) 

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-6xl font-thin">{currentTime}</h1>
      <p className="text-lg font-thin">{`${currentDay}, ${currentMonth}`}</p>
    </div>
  ) 
}
