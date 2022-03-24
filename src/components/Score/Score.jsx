import { useSelector } from 'react-redux'
import styles from './Score.module.scss'

function Score() {
  const score = useSelector((state) => state.game.score)

  return (
    <div className={styles.score}>
      <h2 className={styles.scoreTitle}>Score</h2>
      <span className={styles.scoreCounter}>{score}</span>
    </div>
  )
}

export default Score
