'use client'

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [currentValue, setCurrentValue] = useState('');
  const [operator, setOperator] = useState('');
  const [history, setHistory] = useState([]);

  const handleDigitClick = (digit) => {
    if (displayValue === '0') {
      setDisplayValue(digit.toString());
    } else {
      setDisplayValue((prevDisplay) => prevDisplay + digit.toString());
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
        setHistory((history) => [...history, `${num1} + ${num2} = ${num1 + num2}`]);
        return (num1 + num2).toString();
      case '-':
        setHistory((history) => [...history, `${num1} - ${num2} = ${num1 - num2}`]);
        return (num1 - num2).toString();
      case '*':
        setHistory((history) => [...history, `${num1} * ${num2} = ${num1 * num2}`]);
        return (num1 * num2).toString();
      case '/':
        setHistory((history) => [...history, `${num1} / ${num2} = ${num1 / num2}`]);
        return (num1 / num2).toString();
      case '√':
        setHistory((history) => [...history, `√${num1} = ${Math.sqrt(num1)}`]);
        return Math.sqrt(num1).toString();
      case 'Tan':
        setHistory((history) => [...history, `Tan(${num1}) = ${Math.tan((num1 * Math.PI) / 180)}`]);
        return Math.tan((num1 * Math.PI) / 180).toString();
      case 'Cos':
        setHistory((history) => [...history, `Cos(${num1}) = ${Math.cos((num1 * Math.PI) / 180)}`]);
        return Math.cos((num1 * Math.PI) / 180).toString();
      case 'Sin':
        setHistory((history) => [...history, `Sin(${num1}) = ${Math.sin((num1 * Math.PI) / 180)}`]);
        return Math.sin((num1 * Math.PI) / 180).toString();
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

  const deleteHistory = () => {
    setHistory([]);
    setIsHistoryVisible(false);
  };

  return (
    <div className='flex flex-row'>
      <div className='w-1/2 p-10'>
        <button onClick={deleteHistory} className='text-cyan-600'>
          Clear History
        </button>
        <motion.div
          className='flex flex-col'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {history?.map((entry, index) => (
            <motion.div
              key={index}
              className='w-full rounded-3xl p-5 mt-3 shadow-xl text-cyan-600'
              initial={{ opacity: 0, y: 30 }}
              animate={isHistoryVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
            >
              {entry}
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className='text-white w-1/2 flex justify-center items-center flex-col bg-no-repeat p-10'>
        <div className='bg-gray-900 w-full p-5 rounded-3xl text-cyan-600 text-light font-light text-5xl'>
          {displayValue}
        </div>
        <div className='flex flex-row justify-between w-full'>
          <div className='w-1/2 flex flex-col text-2xl items-center'>
            {Array.from({ length: 4 }, (_, row) => (
              <div key={row} className='mt-5 mb-5 flex flex-row'>
                {Array.from({ length: 3 }, (_, col) => {
                  const digit = row * 3 + col + 1;
                  const buttonText =
                    digit === 10 ? 'C' : digit === 11 ? '0' : digit === 12 ? '=' : digit.toString();
                  const onClickHandler =
                    digit === 10 ? cleaner : digit === 12 ? equalizer : () => handleDigitClick(digit);

                  return (
                    <button
                      key={col}
                      className={`p-8 ml-5 rounded-2xl text-5xl bg-cyan-600 text-light font-light`}
                      onClick={onClickHandler}
                    >
                      {buttonText}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
          <div className='grid grid-cols-2 gap-x-3 text-2xl'>
            {['+', '-', '*', '/', '√', 'Tan', 'Cos', 'Sin'].map((sign) => (
              <button
                key={sign}
                className='p-8 rounded-2xl mt-5 mb-5 text-5xl bg-cyan-900 text-light font-light'
                onClick={() => getOperator(sign)}
              >
                {sign}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
