import { Divide } from '@phosphor-icons/react';
import styles from './FilledTaskList.module.css';
import { Task, TaskType } from './Task';

interface FilledTaskListProps {
  tasks: TaskType[];
  onDeleteTask: (content: string) => void;
  onToggleTaskStatus: (content: string, completed: boolean) => void;
}

export function FilledTaskList({ tasks, onDeleteTask, onToggleTaskStatus }: FilledTaskListProps) {
  return (
    <div className={styles.container}>
      {tasks.map((task) => {
        return (
          <Task
            key={task.content}
            task={task}
            onDeleteTask={onDeleteTask}
            onToggleTaskStatus={onToggleTaskStatus}
          />
        );
      })}
    </div>
  );
}