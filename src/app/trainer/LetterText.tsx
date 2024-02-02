// components/LetterDisplay.tsx
import React from 'react' 

interface LetterDisplayProps {
  text: string 
}

const LetterDisplay: React.FC<LetterDisplayProps> = ({ text }) => {
  return <div className="text-xl font-medium mb-6">{text}</div> 
} 

export default LetterDisplay 
