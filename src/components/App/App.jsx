import styles from './App.module.scss'
import logo from '../../assets/logo.svg'
import Score from '../Score'
import GameField from '../GameField'
import ElementList from '../ElementsList'
import Result from '../Result/Result'
import Modal from '../Modal/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { setModalAnimation } from '../../store/gameSlice'

function App() {
  const dispatch = useDispatch()

  const isGameStarted = useSelector(
    (state) => state.game.players.player.isElementSelected
  )

  function showModal() {
    dispatch(setModalAnimation({ animation: 'fadeIn' }))
  }

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
        <button className={styles.rules} type='button' onClick={showModal}>
          Rules
        </button>
      </footer>
      <Modal />
    </>
  )
}

export default App
