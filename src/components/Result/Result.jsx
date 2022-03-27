import { useDispatch, useSelector } from 'react-redux'
import {
  showResultAnimation,
  showPlayersAnimation,
  resetElementsListAnimation,
  resetPlayersAnimation,
  resetResultAnimation,
  resetPlayers,
  showElementsListAnimation,
} from '../../store/gameSlice'
import styles from './Result.module.scss'

function Result() {
  const dispatch = useDispatch()

  function resetGame() {
    dispatch(showResultAnimation({ animation: 'slideToBottom' }))
    dispatch(showPlayersAnimation({ animation: 'longSlideToLeft' }))
    setTimeout(() => {
      dispatch(resetResultAnimation())
      dispatch(resetPlayersAnimation())
      dispatch(resetElementsListAnimation())
      dispatch(resetPlayers())
      dispatch(showElementsListAnimation({ animation: 'fadeIn' }))
    }, 1000)
  }

  const { status, animation } = useSelector((state) => {
    return {
      status: state.game.result.status,
      animation: state.game.animations.resultHUD,
    }
  })

  return (
    <div className={styles.result} data-animation={animation}>
      <span className={styles.title}>{status}</span>
      <button className={styles.button} type='button' onClick={resetGame}>
        PLAY AGAIN
      </button>
    </div>
  )
}

export default Result
