import { useSelector } from 'react-redux'
import styles from './Roulette.module.scss'

import mix from '../../assets/mix.gif'

function Roulette() {
  const isCompleted = useSelector((state) => state.game.roulette.isCompleted)
  const randomElement = useSelector(
    (state) => state.game.roulette.randomElement.image
  )

  return (
    <>
      {isCompleted ? (
        <img src={randomElement} alt='roulette' width={292}></img>
      ) : (
        <img src={mix} alt='roulette'></img>
      )}
    </>
  )
}

export default Roulette
