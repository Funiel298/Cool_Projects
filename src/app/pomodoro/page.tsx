'use client'

import React, { useEffect, useState } from "react";

export default function Pomodoro() {
  const [pomodoroTimer, setPomodoroTimer] = useState(1500); // 25 minutes in seconds
  const [breakTimer, setBreakTimer] = useState(300); // 5 minutes in seconds
  const [mode, setMode] = useState('Pomodoro');
  const [pomodoroCounter, setPomodoroCounter] = useState(1);
  const [breakCounter, setBreakCounter] = useState(1);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

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
    <div className={`flex flex-col justify-center items-center ${mode === 'Pomodoro' ? 'bg-[#ED254E]' : 'bg-[#219ebc]'} w-full h-screen duration-1000`}>
      <div className="text-xl">
        <button className={mode === 'Pomodoro' ? 'font-bold bg-red-700 p-3 rounded-xl' : 'font-medium p-3  rounded-xl'} onClick={() => setMode('Pomodoro')}>Pomodoro</button>
        <button className={mode === 'Break' ? 'font-bold bg-sky-700 p-3 rounded-xl ml-1' : 'font-medium p-3 rounded-xl ml-1'} onClick={() => setMode('Break')}>Break</button>
      </div>
      <div className="bg-white p-10 m-3 rounded-2xl flex flex-col  items-center">
        <h1 className="font-bold text-9xl"> {Math.floor(mode === 'Pomodoro' ? pomodoroTimer / 60 : breakTimer / 60) > 10 ? Math.floor(mode === 'Pomodoro' ? pomodoroTimer / 60 : breakTimer / 60) : '0' + (Math.floor(mode === 'Pomodoro' ? pomodoroTimer / 60 : breakTimer / 60))} : {Math.ceil(mode === 'Pomodoro' ? pomodoroTimer % 60 : breakTimer % 60) > 10 ? Math.ceil(mode === 'Pomodoro' ? pomodoroTimer % 60 : breakTimer % 60) : '0' + (mode === 'Pomodoro' ? pomodoroTimer % 60 : breakTimer % 60)} </h1>
        <div className="flex flex-row ">
          <button className="bg-gray-200 rounded-xl p-3 font-medium text-xl" onClick={handleStart}>Start</button>
          <button className={isTimerRunning ? 'visible`bg-gray-200 rounded-xl p-3 font-medium text-xl' : 'hidden' + 'bg-gray-200 rounded-xl p-3 font-medium text-xl'} onClick={handleStop}>Stop</button>
          <img src="https://img.icons8.com/?size=512&id=11676&format=png" width={50} alt=" restart" onClick={()=>{setBreakTimer(300); setPomodoroTimer(1500); handleStop()}} className="bg-gray-200 rounded-xl p-3 font-medium text-xl cursor-pointer" />
        </div>
        <h6 className="mt-2 text-center font-medium">{mode === 'Pomodoro' ? pomodoroCounter : breakCounter} {pomodoroCounter > 1 && mode === 'Pomodoro' ? 'Sets' : 'Set'}</h6>
        {mode === 'Pomodoro' ? <span>Let's Focus</span> : <span>Take a Break</span>}
      </div>
    </div>
  );
}
