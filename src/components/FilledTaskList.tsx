import { Divide } from '@phosphor-icons/react';
import styles from './FilledTaskList.module.css';
import { Task, TaskType } from './Task';

interface FilledTaskListProps {
  tasks: TaskType[];
  onDeleteTask: (content: string) => void;
}

export function FilledTaskList({ tasks, onDeleteTask }: FilledTaskListProps) {
  return (
    <div className={styles.container}>
      {tasks.map((task) => {
        return <Task key={task.content} task={task} onDeleteTask={onDeleteTask} />
      })}
    </div>
  );
}