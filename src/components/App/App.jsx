import styles from './App.module.scss'
import logo from '../../assets/logo.svg'
import Score from '../Score'
import GameField from '../GameField'
import ElementList from '../ElementsList'
import Result from '../Result/Result'
import { useSelector } from 'react-redux'

function App() {
  const isGameStarted = useSelector(
    (state) => state.game.players.player.isElementSelected
  )

  return (
    <>
      <header className={styles.header}>
        <a href='/'>
          <img src={logo} alt='logo' />
        </a>
        <Score />
      </header>
      <main className={styles.main}>
        {isGameStarted ? (
          <>
            <GameField />
            <Result />
          </>
        ) : (
          <ElementList />
        )}
      </main>
      <footer className={styles.footer}>
        <button className={styles.rules} type='button'>
          Rules
        </button>
      </footer>
    </>
  )
}

export default App
