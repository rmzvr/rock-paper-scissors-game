import { useDispatch } from 'react-redux'
import {
  setActiveElement,
  getRandomElement,
  getWinner,
  updateScore,
  showResultAnimation,
  showPlayersAnimation,
  showElementsListAnimation,
  showGameFieldAnimation,
} from '../../store/gameSlice'
import styles from './Element.module.scss'

function Element({ element }) {
  const dispatch = useDispatch()

  function startGame() {
    dispatch(showElementsListAnimation({ animation: 'fadeOut' }))
    setTimeout(() => {
      dispatch(setActiveElement({ name: element.name }))
      dispatch(showGameFieldAnimation())
    }, 1000)
    setTimeout(() => {
      dispatch(getRandomElement())
      dispatch(getWinner())
      dispatch(updateScore())
      dispatch(showPlayersAnimation({ animation: 'shortSlideToLeft' }))
      dispatch(showResultAnimation({ animation: 'fadeOut' }))
    }, 4000)
  }

  return (
    <img
      className={styles.item}
      id={element.name}
      data-visible={element.visible}
      src={element.image}
      alt={element.name}
      onClick={startGame}
    />
  )
}

export default Element
