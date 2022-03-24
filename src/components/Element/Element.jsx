import { useDispatch } from 'react-redux'
import {
  setActiveElement,
  showGameField,
  hideTriangle,
  getRandomElement,
  compareWinner,
} from '../../store/gameSlice'
import styles from './Element.module.scss'

function Element({ element }) {
  const dispatch = useDispatch()

  function startGame() {
    dispatch(setActiveElement({ name: element.name }))
    dispatch(hideTriangle())
    dispatch(showGameField())
    setTimeout(() => {
      dispatch(getRandomElement())
      dispatch(compareWinner())
    }, 5400)
  }

  return (
    <img
      className={`${styles.item} ${element.state}`}
      id={element.id}
      src={element.image}
      alt={element.name}
      onClick={startGame}
    ></img>
  )
}

export default Element
