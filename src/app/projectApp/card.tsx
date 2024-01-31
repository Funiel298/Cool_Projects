import Image from "next/image";
import { AiOutlineClockCircle, AiOutlineTag } from 'react-icons/ai';
import { useState } from 'react';

export default function Card(props: any) {
  const colors = ['blue-500', 'red-500', 'orange-500', 'yellow-500', 'green-500', 'purple-500', 'pink-500',];

  const [tasksCompleted, setTasksCompleted] = useState(props.tasksCompleted);

  const completionPercentage = (tasksCompleted / props.totalTasks) * 100;


  const getBackgroundColor = () => {
    switch (props.importance) {
      case 'High':
        return 'bg-red-500';
      case 'Important':
        return 'bg-red-700';
      case 'Medium':
        return 'bg-yellow-500';
      case 'Low':
        return 'bg-green-500';
      default:
        return '';
    }
  };
  


  return (
    <div className="flex flex-col items-center justify-center p-3 m-5 rounded-2xl w-72 h-auto bg-white shadow-2xl shadow-gray-500">
      <h1 className="font-bold text-2xl my-2">{props.name}</h1>
      {props.image ? <Image alt="image" src={props.image} width={300} height={200} className="rounded-xl object-cover" /> : null}
      <div>
        <span className={`rounded-xl p-2 text-sm font-semibold text-white  ${getBackgroundColor()}`}>{props.importance}</span>
        <div className="flex flex-row items-center my-2">
          <AiOutlineTag className='text-2xl' />
          <div className="flex flex-wrap flex-row ">
            {props.tags.map((tag: string, index: number) => {
              const colorIndex = index % colors.length;
              const bgColor = colors[colorIndex];

              const tagStyle = {
                backgroundColor: `var(--${bgColor})`,
              };

              return (
                <h1
                  key={tag}
                  className="font-semibold text-xs rounded-xl text-white p-3 ml-2 mt-1"
                  style={tagStyle}
                >
                  {tag}
                </h1>
              );
            })}
          </div>
        </div>

        <div className="flex flex-row text-gray-400 items-center text-sm my-2">
          <AiOutlineClockCircle />
          {props.deadline? <p className="ml-2">{props.deadline} days before deadlines</p>: null}
        </div>

        <div className="relative">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-500 ">
                {props.tasksCompleted}/{props.totalTasks} tasks completed
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-red-500">
                {completionPercentage.toFixed(0)}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-300">
            <div style={{ width: `${completionPercentage}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-red-900 justify-center bg-red-500"></div>
          </div>
        </div>


      </div>
    </div>
  );
}
