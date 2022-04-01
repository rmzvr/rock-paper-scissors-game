import { useDispatch, useSelector } from 'react-redux'
import {
  setResultAnimation,
  setPlayersAnimation,
  resetPlayers,
  setElementsListAnimation,
} from '../../store/gameSlice'
import styles from './Result.module.scss'

function Result() {
  const dispatch = useDispatch()

  function resetGame() {
    dispatch(setResultAnimation({ animation: 'slideToBottom' }))
    dispatch(setPlayersAnimation({ animation: 'longSlideToLeft' }))
    setTimeout(() => {
      dispatch(setResultAnimation({ animation: '' }))
      dispatch(setElementsListAnimation({ animation: '' }))
      dispatch(setPlayersAnimation({ animation: '' }))
      dispatch(setElementsListAnimation({ animation: 'fadeIn' }))
      dispatch(resetPlayers())
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
