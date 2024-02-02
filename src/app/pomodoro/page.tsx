'use client'
import React, { useState, useEffect } from "react" 
import { motion } from "framer-motion" 
import LeftBar from "@/Components/PomodoroComponents/LeftSideBar" 
import { alarm } from "../../../public/ringtone.mp3" 
import { CiCircleChevRight } from 'react-icons/ci' 
import { MdRestartAlt } from "react-icons/md" 

export default function Pomodoro(){
  const [pomodoroTimer, setPomodoroTimer] = useState(1500) 
  const [breakTimer, setBreakTimer] = useState(300) 
  const [mode, setMode] = useState('Pomodoro') 
  const [pomodoroCounter, setPomodoroCounter] = useState(1) 
  const [breakCounter, setBreakCounter] = useState(1) 
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [isMenuVisible, setIsMenuVisible] = useState(true)
  const [todos, setTodos] = useState([]);

  const addTodo = (todo:string) => {
    setTodos([...todos, todo]);
  };

  const toggleLeftBar = () => {
    setIsMenuVisible(!isMenuVisible)
  } 

  useEffect(() => {
    let interval: any
    if (isTimerRunning) {
      interval = setInterval(() => {
        if (mode === 'Pomodoro') {
          setPomodoroTimer((prev) => {
            if (prev === 0) {
              handleTimerCompletion() 
              return prev 
            }
            return prev - 1
          }) 
        } else {
          setBreakTimer((prev) => {
            if (prev === 0) {
              handleTimerCompletion()
              return prev 
            }
            return prev - 1
          })
        }
      }, 1000)
    }

    return () => clearInterval(interval) // Clean up the interval on unmount
  }, [isTimerRunning, mode])

  

  
  function handleChangeMode() {
    setIsTimerRunning(!isTimerRunning)
  }

  function handleRestart(){
    setIsTimerRunning(false)
    setPomodoroTimer(1500) 
    setBreakTimer(300) 
  }

  const handleTabClick = (selectedMode: 'Pomodoro' | 'Break') => {
    if (selectedMode !== mode) {
      handleRestart()
      setMode(selectedMode);
    }
  };

  function handleTimerCompletion() {
    new Audio(alarm).play() 
    alert('Your time is ready') 
    setIsTimerRunning(false) 

    if (mode === 'Pomodoro') {
      setPomodoroCounter((prev) => prev + 1) 
      setPomodoroTimer(1500) 
      setMode('Break') 
    } else {
      setBreakCounter((prev) => prev + 1) 
      setBreakTimer(300) 
      setMode('Pomodoro') 
    }
  }

  const handleDeleteTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleToggleComplete = (index: number) => {
    const updatedTodos = [...todos];
    // Toggle the completion status for the selected task
    updatedTodos[index] = { ...updatedTodos[index], completed: !updatedTodos[index].completed };
    setTodos(updatedTodos);
  };

  return (
    <div className="flex h-screen">
      <button className="text-[#272727] bg-[#f0f0f0] p-3 rounded-full absolute m-5 " onClick={toggleLeftBar}>
        <CiCircleChevRight size={30}  />
      </button>
      <LeftBar
        pomodoroTimer={pomodoroTimer}
        breakTimer={breakTimer}
        mode={mode}
        isMenuVisible={isMenuVisible}
        setIsMenuVisible={setIsMenuVisible}
        isTimerRunning={isTimerRunning}
        handleChangeMode={handleChangeMode}
        handleRestart={handleRestart}
        handleTabClick={handleTabClick}
        toggleLeftBar={toggleLeftBar}
        pomodoroCounter={pomodoroCounter}
        breakCounter={breakCounter}
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleComplete={handleToggleComplete}
        addTodo={addTodo}
      />
      <div className="flex-1 overflow-hidden">
        <motion.div
          className="h-full bg-cover bg-center"
          style={{ backgroundImage: "url(https://wallpaperxyz.com/wp-content/uploads/Gif-Animated-Wallpaper-Background-Full-HD-Free-Download-for-PC-Macbook-261121-Wallpaperxyz.com-20.gif)" }}
        />
      </div>
    </div>
  )
}