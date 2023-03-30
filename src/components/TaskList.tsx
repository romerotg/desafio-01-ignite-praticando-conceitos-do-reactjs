import { EmptyTaskList } from './EmptyTaskList';
import { FilledTaskList } from './FilledTaskList';
import { TaskType } from './Task';

import styles from './TaskList.module.css';

interface TaskListProps {
  tasks: TaskType[];
  onDeleteTask: (content: string) => void;
}

export function TaskList({ tasks, onDeleteTask }: TaskListProps) {
  return (
    <div className={styles.taskList}>
      <div className={styles.info}>
        <div className={styles.infoChild}>
          <span className={styles.createdTasksText}>Tarefas criadas</span>
          <span className={styles.counterContainer}>0</span>
        </div>

        <div className={styles.infoChild}>
          <span className={styles.doneTasksText}>Concluídas</span>
          <span className={styles.counterContainer}>0</span>
        </div>
      </div>

      { tasks.length === 0 ? <EmptyTaskList /> : <FilledTaskList tasks={tasks} onDeleteTask={onDeleteTask} /> }
    </div>
  );
}