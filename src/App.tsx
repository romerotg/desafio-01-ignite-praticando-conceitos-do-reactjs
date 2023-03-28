import styles from './App.module.css';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';

import './global.css'

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <SearchBar />
        <SearchBar />
      </div>
    </>
  )
}
