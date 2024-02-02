'use client'
// pages/index.tsx
import React, { useState } from 'react' 

const randomSentences = [
  "The quick brown fox jumps over the lazy dog.",
  "A journey of a thousand miles begins with a single step.",
  // Add more sentences
] 

export default function Home(){
  
    


  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <header className="text-2xl font-semibold p-4">Typing Practice</header>
      <div className="text-xl p-4">{}</div>
      <div className="p-4">
        <input
          className="border rounded p-2"
          type="text"
        />
      </div>
      <div className="text-xl p-4">
        <p>Accuracy: {}%</p>
        <p>Words Per Minute: {}</p>
      </div>
    </div>
  ) 
} 


