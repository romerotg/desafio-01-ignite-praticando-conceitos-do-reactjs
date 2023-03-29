import { EmptyTaskList } from './EmptyTaskList';
import { FilledTaskList } from './FilledTaskList';
import styles from './TaskList.module.css';

export function TaskList() {
  const empty = false;
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

      { empty ? <EmptyTaskList /> : <FilledTaskList /> }
    </div>
  );
}