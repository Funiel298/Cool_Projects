import { CiCircleChevLeft,CiUndo } from 'react-icons/ci' 
import TodoList from './ToDo'
import Playlist from './Playlist'


interface props {
  pomodoroTimer: number 
  breakTimer: number 
  mode: string 
  isMenuVisible: boolean 
  setIsMenuVisible: boolean
  handleChangeMode: () => void 
  isTimerRunning: boolean
  toggleLeftBar: () => void 
  handleRestart: () => void 
  handleTabClick: (selectedMode: 'Pomodoro' | 'Break') => void
  pomodoroCounter: number 
  breakCounter: number 
  todos: string[]
  addTodo: (todo: string) => void
  onDeleteTodo: (index: number) => void
  onToggleComplete: (index: number) => void
  playlist: string[];
}

export default function LeftBar({pomodoroTimer,breakTimer,mode,isMenuVisible,handleRestart,todos,addTodo,isTimerRunning,handleTabClick,handleChangeMode,toggleLeftBar,pomodoroCounter,breakCounter,onDeleteTodo,onToggleComplete,playlist}:props){
  const sessions = Array.from({ length: 5 }, (_, index) => index + 1) 
  


  return (
    <div className={`bg-gray-800 z-10 absolute text-white w-1/4 h-full p-4 ${isMenuVisible ? '' : 'hidden'}`}>

      <button className="text-white absolute left-[85%]" onClick={toggleLeftBar}>
        <CiCircleChevLeft size={30} />
      </button>

      <h2 className="text-2xl font-bold mb-4">Pomodoro Timer</h2>

      <div className='flex justify-around w-full mb-2 font-light'>
        <button
            className={`${
              mode === 'Pomodoro' ? 'border-b-2' : ''
            } text-white px-3 py-1`}
            onClick={() => handleTabClick('Pomodoro')}
          >
            Pomodoro
          </button>
          <button
            className={`${
              mode === 'Break' ? 'border-b-2' : ''
            } text-white px-3 py-1 `}
            onClick={() => handleTabClick('Break')}
          >
            Break
          </button>
      </div>

      <div className="flex flex-row items-center justify-between w-full ">

        <h5 className="font-medium text-4xl">
          {Math.floor(mode === 'Pomodoro' ? pomodoroTimer / 60 : breakTimer / 60)}:
          {Math.ceil(mode === 'Pomodoro' ? pomodoroTimer % 60 : breakTimer % 60).toString().padStart(2, '0')}
        </h5>

        <div className="flex flex-row space-x-4 text-lg">

          <button className="border-2 border-[#fafafa] px-7 py-1 rounded-xl font-light"  onClick={handleChangeMode}>
            {isTimerRunning? 'Stop' : 'Start'}
          </button>
          
          <button className="" onClick={handleRestart}>
            <CiUndo size={30}/>
          </button>
        </div>

      </div>
      
      <div className="flex my-2">
        {sessions.map((session) => (
          <span
            key={session}
            className={`text-xl mx-1 ${session <= (mode === 'Pomodoro' ? pomodoroCounter : breakCounter) ? '' : 'opacity-50'}`}
          >
            🔥
          </span>
        ))}
      </div>
          
      
      <div className="flex flex-col">
        <h3 className="text-lg font-medium mb-2">Add Tasks</h3>
        <input
          type="text"
          placeholder="Add a ToDo"
          className="px-3 py-1 rounded border-[#fafafa] mb-2 text-[#272727] outline-none"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              const todo = (e.target as HTMLInputElement).value;
              if (todo.length >= 3) {
                addTodo(todo);
                (e.target as HTMLInputElement).value = '';
              } else {
                alert('Todo must be at least 3 characters long');
              }
            }
          }}
        />
      <TodoList todos={todos} onDelete={(index)=>onDeleteTodo(index)} onToggleComplete={(index)=>onToggleComplete(index)} />
      </div>
      {/* <Playlist songs={playlist} /> */}
    </div>
  )
}