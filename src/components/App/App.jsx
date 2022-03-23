import styles from './App.module.scss'
import logo from '../../assets/logo.svg'
import paper from '../../assets/paper.svg'
import scissors from '../../assets/scissors.svg'
import rock from '../../assets/rock.svg'
import Triangle from '../UI/Triangle'

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <a href='/'>
          <img src={logo} alt='logo' />
        </a>
        <div className={styles.score}>
          <h2 className={styles.scoreTitle}>Score</h2>
          <span className={styles.scoreCounter}>00</span>
        </div>
      </header>
      <main className={styles.main}>
        <Triangle />
        <img className={styles.item} id='paper' src={paper}></img>
        <img className={styles.item} id='scissors' src={scissors}></img>
        <img className={styles.item} id='rock' src={rock}></img>
      </main>
    </div>
  )
}

export default App
