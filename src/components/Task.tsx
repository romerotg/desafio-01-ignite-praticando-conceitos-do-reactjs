import { Trash } from '@phosphor-icons/react';
import styles from './Task.module.css';

interface TaskProps {
  checked: boolean;
}

export function Task({ checked }: TaskProps) {
  return (
    <div className={styles.container}>
      <div className={styles.taskInfo}>
        <input type="checkbox"/>
        <p className={checked ? styles.taskTextChecked : styles.taskTextUnchecked}>
          Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
        </p>
      </div>
      <button>
        <Trash size={24} />
      </button>
    </div>
  );
}