import { useDispatch, useSelector } from 'react-redux'
import { resetGame } from '../../store/gameSlice'
import styles from './Result.module.scss'

function Result() {
  const resultPosition = useSelector((state) => state.game.resultTable.position)

  const dispatch = useDispatch()

  function reset() {
    dispatch(resetGame())
  }

  const result = useSelector((state) => state.game.result)
  const finished = useSelector((state) => state.game.gameField.state)

  return (
    <div className={`${styles.result} ${finished} ${resultPosition}`}>
      <span className={styles.title}>{result}</span>
      <button className={styles.button} type='button' onClick={reset}>
        PLAY AGAIN
      </button>
    </div>
  )
}

export default Result
