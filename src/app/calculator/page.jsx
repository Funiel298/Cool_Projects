'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion} from "framer-motion"


export default function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [currentValue, setCurrentValue] = useState('');
  const [operator, setOperator] = useState('');
  const [history, setHistory] = useState([]);

  const handleDigitClick = (digit) => {
    if (displayValue === '0') {
      setDisplayValue(digit.toString());
    } else {
      setDisplayValue(displayValue + digit.toString());
    }
  };

  const getOperator = (op) => {
    if (currentValue !== '') {
      const result = evaluateExpression();
      setCurrentValue(result);
      setDisplayValue(result);
    } else {
      setCurrentValue(displayValue);
    }
    setOperator(op);
    setDisplayValue('0');
  };

  const evaluateExpression = () => {
    const num1 = parseFloat(currentValue);
    const num2 = parseFloat(displayValue);

    switch (operator) {
      case '+':
        setHistory(history=>[...history, (num1 + ' + ' + num2 + ' = ' + (num1+num2)).toString()])
        return (num1 + num2).toString();
      case '-':
        setHistory(history=>[...history, (num1 + ' - ' + num2 + ' = ' + (num1-num2)).toString()])
        return (num1 - num2).toString();
      case '*':
        setHistory(history=>[...history, (num1 + ' * ' + num2 + ' = ' + (num1*num2)).toString()])
        return (num1 * num2).toString();
      case '/':
        setHistory(history=>[...history, (num1 + ' / ' + num2 + ' = ' + (num1/num2)).toString()])
        return (num1 / num2).toString();
      case '√':
        setHistory(history=>[...history, ('√'+ num1 + ' = ' + Math.sqrt(num1) ).toString()])
        return (Math.sqrt(num1)).toString();
      case 'Tan':
        setHistory(history=>[...history, ('Tan('+ num1+')' + ' = ' + Math.tan(num1 * Math.PI / 180)).toString()])
        return (Math.tan(num1 * Math.PI / 180)).toString();
      case 'Cos':
        setHistory(history=>[...history, ('Cos('+ num1+')' + ' = ' + Math.cos(num1 * Math.PI / 180)).toString()])
        return (Math.cos(num1 * Math.PI / 180)).toString();
      case 'Sin':
        setHistory(history=>[...history, ('Sin('+ num1+')' + ' = ' + Math.sin(num1 * Math.PI / 180)).toString()])
        return (Math.sin(num1 * Math.PI/180)).toString();
      default:
        return displayValue;
    }
  };



  const equalizer = () => {
    const result = evaluateExpression();
    setCurrentValue('');
    setOperator('');
    setDisplayValue(result);
  };

  const cleaner = () => {
    setDisplayValue('0');
    setCurrentValue('');
    setOperator('');
  };

  

  const [isHistoryVisible, setIsHistoryVisible] = useState(false);

  useEffect(() => {
    if (history.length > 0) {
      setIsHistoryVisible(true);
    }
  }, [history]);

  const deleteHistory = () =>{
    setHistory([])
    setIsHistoryVisible(false)
  }

  return (
    <div className='flex flex-row'>
      <div className='w-1/2 p-10'>
          <button onClick={deleteHistory}>Clear History</button>
          <motion.div className='flex flex-col'          
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}>
            {history?.map((kek,index)=>(
                <motion.div key={index}
                  className='w-full rounded-3xl p-10 mt-3 shadow-xl'
                  initial={{ opacity: 0, y: 30 }}
                  animate={isHistoryVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.3 }}
                  >
                  {kek}
                </motion.div>
            ))}
          </motion.div>
      </div>
      <div className="text-white w-1/2 flex justify-center items-center flex-col bg-no-repeat p-10">
        <div className="bg-gray-900 w-full p-5 rounded-3xl text-cyan-600 text-bold text-5xl">{displayValue}</div>
        <div className=' flex flex-row  justify-between w-full '>
          
          <div className="w-1/2 flex flex-col text-2xl items-center">
            <div className='mt-5 mb-5 justify-between flex flex-row '>
              <button className='p-10 rounded-2xl text-5xl  bg-cyan-600' onClick={() => handleDigitClick(1)}>1</button>
              <button className='p-10 ml-5 rounded-2xl text-5xl  bg-cyan-600' onClick={() => handleDigitClick(2)}>2</button>
              <button className='p-10 ml-5 rounded-2xl text-5xl  bg-cyan-600' onClick={() => handleDigitClick(3)}>3</button>
            </div>

            <div className='mt-5 mb-5 flex flex-row '>
              <button className='p-10 rounded-2xl text-5xl  bg-cyan-600' onClick={() => handleDigitClick(4)}>4</button>
              <button className='p-10 ml-5 rounded-2xl text-5xl  bg-cyan-600' onClick={() => handleDigitClick(5)}>5</button>
              <button className='p-10 ml-5 rounded-2xl text-5xl  bg-cyan-600' onClick={() => handleDigitClick(6)}>6</button>
            </div>
            
            <div className=' mt-5 mb-5 flex flex-row '>
              <button className='p-10 rounded-2xl text-5xl  bg-cyan-600' onClick={() => handleDigitClick(7)}>7</button>
              <button className='p-10 ml-5 rounded-2xl text-5xl  bg-cyan-600' onClick={() => handleDigitClick(8)}>8</button>
              <button className='p-10 ml-5 rounded-2xl text-5xl  bg-cyan-600' onClick={() => handleDigitClick(9)}>9</button>
            </div>
            
            <div className='mt-5 mb-5 flex flex-row '>
              <button className='p-10 rounded-2xl text-5xl  bg-cyan-600' onClick={() => cleaner()}>C</button>
              <button className='p-10 ml-5 rounded-2xl text-5xl  bg-cyan-600' onClick={() => handleDigitClick(0)}>0</button>
              <button className='p-10 ml-5 rounded-2xl text-5xl  bg-cyan-600' onClick={() => equalizer()}>=</button>
            </div>
          </div>
          <div className='flex flex-col text-2xl'>
            <button className='p-10 rounded-2xl mt-5 mb-5 text-5xl  bg-cyan-900' onClick={() => getOperator('+')}>+</button>
            <button className='p-10 rounded-2xl mt-5 mb-5 text-5xl  bg-cyan-900' onClick={() => getOperator('-')}>-</button>
            <button className='p-10 rounded-2xl mt-5 mb-5 text-5xl  bg-cyan-900' onClick={() => getOperator('*')}>*</button>
            <button className='p-10 rounded-2xl mt-5 mb-5 text-5xl  bg-cyan-900' onClick={() => getOperator('/')}>/</button>
          </div>
          <div className='flex flex-col text-2xl'>
            <button className='p-10 rounded-2xl mt-5 mb-5 text-5xl  bg-cyan-900' onClick={() => getOperator('√')}>√</button>
            <button className='p-10 rounded-2xl mt-5 mb-5 text-5xl  bg-cyan-900' onClick={() => getOperator('Tan')}>Tan</button>
            <button className='p-10 rounded-2xl mt-5 mb-5 text-5xl  bg-cyan-900' onClick={() => getOperator('Cos')}>Cos</button>
            <button className='p-10 rounded-2xl mt-5 mb-5 text-5xl  bg-cyan-900' onClick={() => getOperator('Sin')}>Sin</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
