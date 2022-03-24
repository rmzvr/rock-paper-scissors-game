import styles from './App.module.scss'
import logo from '../../assets/logo.svg'
import Score from '../Score'
import GameField from '../GameField'
import ElementList from '../ElementsList'
import Result from '../Result/Result'

function App() {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <a href='/'>
            <img src={logo} alt='logo' />
          </a>
          <Score />
        </header>
        <main className={styles.main}>
          <ElementList />
          <GameField />
        </main>
        <footer className={styles.footer}>
          <button className={styles.rules} type='button'>
            Rules
          </button>
        </footer>
      </div>
    </>
  )
}

export default App
