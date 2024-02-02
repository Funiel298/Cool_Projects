import { useState } from 'react';
import { CiCircleRemove } from 'react-icons/ci';

interface TodoListProps {
  todos: string[];
  onDelete: (index: number) => void;
  onToggleComplete: (index: number) => void;
}

export default function TodoList({ todos, onDelete, onToggleComplete }: TodoListProps) {
  const [selectedTasks, setSelectedTasks] = useState<number[]>([]);

  const handleCheckboxChange = (index: number) => {
    if (selectedTasks.includes(index)) {
      setSelectedTasks(selectedTasks.filter((taskIndex) => taskIndex !== index));
    } else {
      setSelectedTasks([...selectedTasks, index]);
    }
  };

  const handleDeleteSelected = () => {
    selectedTasks.forEach((index) => onDelete(index));
    setSelectedTasks([]);
  };

  return (
    <div className="mt-4">
      <ul className='max-h-40 overflow-y-auto w-full'>
        {todos.map((todo, index) => (
          <li key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              checked={selectedTasks.includes(index)}
              onChange={() => handleCheckboxChange(index)}
            />
            <label className={`flex-grow ms-2 text-sm font-medium text-[#fafafa] dark:text-gray-300 ${selectedTasks.includes(index) ? 'line-through' : ''}`}>{todo}</label>
            <button className="text-red-500" onClick={() => onDelete(index)}>
                <CiCircleRemove size={20} /> 
            </button>
          </li>
        ))}
      </ul>
      {(selectedTasks.length > 0 && todos.length > 0) && (
        <button className="mt-2 bg-red-500 text-white px-3 py-1 rounded" onClick={handleDeleteSelected}>
          Delete Selected
        </button>
      )}
    </div>
  );
}
