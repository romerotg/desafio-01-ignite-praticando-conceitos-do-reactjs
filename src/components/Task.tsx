import { Trash } from '@phosphor-icons/react';
import styles from './Task.module.css';

export interface TaskType {
  completed: boolean;
  content: string;
}

interface TaskProps {
  task: TaskType;
  onDeleteTask: (content: string) => void;
}

export function Task({ task, onDeleteTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(task.content);
  }

  return (
    <div className={styles.container}>
      <div className={styles.taskInfo}>
        <input type="checkbox"/>
        <p className={task.completed ? styles.taskTextChecked : styles.taskTextUnchecked}>
          {task.content}
        </p>
      </div>
      <button onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  );
}