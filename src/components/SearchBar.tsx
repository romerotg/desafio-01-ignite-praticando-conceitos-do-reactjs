import { PlusCircle } from '@phosphor-icons/react';
import styles from './SearchBar.module.css';

export function SearchBar() {
  return (
    <form className={styles.searchBar}>
      <input className={styles.input} type="text" placeholder="Adicione uma tarefa" />
      <button className={styles.button} type="submit">
        <span>Criar</span>
        <PlusCircle size={16} />
      </button>
    </form>
  );
}