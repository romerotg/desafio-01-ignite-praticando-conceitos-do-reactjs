import { ClipboardText } from '@phosphor-icons/react';
import styles from './EmptyTaskList.module.css';

export function EmptyTaskList() {
  return (
      <div className={styles.emptyTasks}>
      <ClipboardText size={56} />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}