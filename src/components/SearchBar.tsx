import { PlusCircle } from '@phosphor-icons/react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onAddTask: (content: string) => void;
}

export function SearchBar({ onAddTask }: SearchBarProps) {
  const [newTask, setNewTask] = useState('');

  function handleAddTask(event: FormEvent) {
    event.preventDefault();
    onAddTask(newTask);
    setNewTask('');
  }

  function handleNewTaskChanged(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    const content = event.target.value;
    setNewTask(content);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  return (
    <form className={styles.searchBar} onSubmit={handleAddTask}>
      <input
        className={styles.input}
        type="text"
        placeholder="Adicione uma tarefa"
        value={newTask}
        onChange={handleNewTaskChanged}
        onInvalid={handleNewTaskInvalid}
        required
      />
      <button className={styles.button} type="submit">
        <span>Criar</span>
        <PlusCircle size={16} />
      </button>
    </form>
  );
}