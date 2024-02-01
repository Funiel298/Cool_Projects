'use client'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { alarm } from '../../../public/ringtone.mp3';

export default function Pomodoro() {
  const [pomodoroTimer, setPomodoroTimer] = useState(1500); // 25 minutes in seconds
  const [breakTimer, setBreakTimer] = useState(300); // 5 minutes in seconds
  const [mode, setMode] = useState('Pomodoro');
  const [pomodoroCounter, setPomodoroCounter] = useState(1);
  const [breakCounter, setBreakCounter] = useState(1);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  useEffect(() => {
    let interval:any;
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
      {isMenuVisible && (
        <div className="bg-gray-800 text-white w-1/4 h-full p-4">
          <h2 className="text-2xl font-bold mb-4">Pomodoro Timer</h2>
          <div className="flex flex-col items-center mb-4">
            <h1 className="font-bold text-4xl">
              {Math.floor(mode === 'Pomodoro' ? pomodoroTimer / 60 : breakTimer / 60)}:
              {Math.ceil(mode === 'Pomodoro' ? pomodoroTimer % 60 : breakTimer % 60)
                .toString()
                .padStart(2, '0')}
            </h1>
            <p>{mode === 'Pomodoro' ? 'Work Time' : 'Break Time'}</p>
          </div>
          <div className="flex flex-row space-x-4">
            <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={handleStart}>
              Start
            </button>
            <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={handleStop}>
              Stop
            </button>
          </div>
        </div>
      )}
      <div className="flex-1 overflow-hidden">
        <motion.div
          className="h-full bg-cover bg-center"
          style={{ backgroundImage: "url(https://wallpaperxyz.com/wp-content/uploads/Gif-Animated-Wallpaper-Background-Full-HD-Free-Download-for-PC-Macbook-261121-Wallpaperxyz.com-20.gif)" }}
        >
        </motion.div>
      </div>
    </div>
  );
}
