import { Trash } from '@phosphor-icons/react';
import { ChangeEvent, useState } from 'react';
import styles from './Task.module.css';

export interface TaskType {
  completed: boolean;
  content: string;
}

interface TaskProps {
  task: TaskType;
  onDeleteTask: (content: string) => void;
  onToggleTaskStatus: (content: string, completed: boolean) => void;
}

export function Task({ task, onDeleteTask, onToggleTaskStatus }: TaskProps) {
  function handleToggleTaskStatus(event: ChangeEvent<HTMLInputElement>) {
    onToggleTaskStatus(task.content, event.target.checked);
  }

  function handleDeleteTask() {
    onDeleteTask(task.content);
  }

  return (
    <div className={styles.container}>
      <div className={styles.taskInfo}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleTaskStatus}
        />
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