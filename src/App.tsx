import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { TaskList } from './components/TaskList';

import styles from './App.module.css';

import './global.css'
import { useState } from 'react';

const initialTasks = [
  {
    completed: false,
    content: 'Tarefia a fazer de número 1'
  },
  {
    completed: true,
    content: 'Tarefia a fazer de número 2'
  }
]

export function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function deleteTask(content: string) {
    setTasks((state) => {
      return state.filter(task => task.content !== content);
    });
  }

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <SearchBar />
        <TaskList tasks={tasks} onDeleteTask={deleteTask} />
      </div>
    </>
  )
}
