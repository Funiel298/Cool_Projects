import React from 'react';

export default function LeftBar ({ pomodoroTimer, breakTimer, mode, isMenuVisible, handleStart, handleStop }) {
  return(
    isMenuVisible && (
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
  )
  
  )
}


