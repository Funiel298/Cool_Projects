'use client'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LeftBar from "@/Components/PomodoroComponents/LeftSideBar";
import { alarm } from '../../../public/ringtone.mp3';

const Pomodoro = () => {
  const [pomodoroTimer, setPomodoroTimer] = useState(1500); // 25 minutes in seconds
  const [breakTimer, setBreakTimer] = useState(300); // 5 minutes in seconds
  const [mode, setMode] = useState('Pomodoro');
  const [pomodoroCounter, setPomodoroCounter] = useState(1);
  const [breakCounter, setBreakCounter] = useState(1);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    let interval : any;
    if (isTimerRunning) {
      interval = setInterval(() => {
        if (mode === 'Pomodoro') {
          setPomodoroTimer((prev) => {
            if (prev === 0) {
              handleTimerCompletion();
              return prev;
            }
            return prev - 1;
          });
        } else {
          setBreakTimer((prev) => {
            if (prev === 0) {
              handleTimerCompletion();
              return prev;
            }
            return prev - 1;
          });
        }
      }, 1000);
    }

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [isTimerRunning, mode]);

  function handleStart() {
    setIsTimerRunning(true);
  }

  function handleStop() {
    setIsTimerRunning(false);
  }

  function handleTimerCompletion() {
    new Audio(alarm).play();
    alert('Your time is ready');
    setIsTimerRunning(false);

    if (mode === 'Pomodoro') {
      setPomodoroCounter((prev) => prev + 1);
      setPomodoroTimer(1500);
      setMode('Break');
    } else {
      setBreakCounter((prev) => prev + 1);
      setBreakTimer(300);
      setMode('Pomodoro');
    }
  }

  return (
    <div className="flex h-screen">
      <LeftBar
        pomodoroTimer={pomodoroTimer}
        breakTimer={breakTimer}
        mode={mode}
        isMenuVisible={isMenuVisible}
        handleStart={handleStart}
        handleStop={handleStop}
      />
      <div className="flex-1 overflow-hidden">
        <motion.div
          className="h-full bg-cover bg-center"
          style={{ backgroundImage: "url(https://wallpaperxyz.com/wp-content/uploads/Gif-Animated-Wallpaper-Background-Full-HD-Free-Download-for-PC-Macbook-261121-Wallpaperxyz.com-20.gif)" }}
        />
      </div>
    </div>
  );
};

export default Pomodoro;
