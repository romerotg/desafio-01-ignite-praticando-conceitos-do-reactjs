import { useState } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { TaskList } from './components/TaskList';
import { TaskType } from './components/Task';

import styles from './App.module.css';

import './global.css'



export function App() {
  const [tasks, setTasks] = useState([] as TaskType[]);

  function addTask(content: string) {
    if (tasks.filter(task => task.content === content).length === 0) {
      setTasks((state) => {
        return [...state, { completed: false, content}];
      });
    }
  }

  function toggleTaskStatus(content: string, completed: boolean) {
    setTasks((state) => {
      return state.map(task => {
        if (task.content === content)
          return { ...task, completed };
        else
          return task
      });
    });
  }

  function deleteTask(content: string) {
    setTasks((state) => {
      return state.filter(task => task.content !== content);
    });
  }

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <SearchBar onAddTask={addTask} />
        <TaskList
          tasks={tasks}
          onDeleteTask={deleteTask}
          onToggleTaskStatus={toggleTaskStatus}
        />
      </div>
    </>
  )
}
