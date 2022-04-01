import { useDispatch } from 'react-redux'
import {
  setActiveElement,
  getRandomElement,
  getWinner,
  updateScore,
  setResultAnimation,
  setPlayersAnimation,
  setElementsListAnimation,
  setGameFieldAnimation,
} from '../../store/gameSlice'
import styles from './Element.module.scss'

function Element({ element }) {
  const dispatch = useDispatch()

  function startGame() {
    dispatch(setElementsListAnimation({ animation: 'fadeOut' }))
    setTimeout(() => {
      dispatch(setActiveElement({ name: element.name }))
      dispatch(setGameFieldAnimation({ animation: 'fadeIn' }))
    }, 1000)
    setTimeout(() => {
      dispatch(getRandomElement())
      dispatch(getWinner())
      dispatch(updateScore())
      dispatch(setPlayersAnimation({ animation: 'shortSlideToLeft' }))
      dispatch(setResultAnimation({ animation: 'fadeIn' }))
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
