import styles from './FilledTaskList.module.css';
import { Task } from './Task';

export function FilledTaskList() {
  return (
    <div className={styles.container}>
      <Task checked={false}/>
      <Task checked={true}/>
    </div>
  );
}