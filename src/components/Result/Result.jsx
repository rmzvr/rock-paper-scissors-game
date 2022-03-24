import { useSelector } from 'react-redux'
import styles from './Result.module.scss'

function Result() {
  const result = useSelector((state) => state.game.result)

  return (
    <div className={styles.result}>
      <span className={styles.title}>{result}</span>
      <button className={styles.button} type='button'>PLAY AGAIN</button>
    </div>
  )
}

export default Result
