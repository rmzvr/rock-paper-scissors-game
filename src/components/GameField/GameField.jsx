import { useSelector } from 'react-redux'
import styles from './GameField.module.scss'
import Player from '../Player'
import Roulette from '../Roulette/Roulette'

function GameField() {
  const visible = useSelector((state) => state.game.gameField.state)

  return (
    <div className={`${styles.gameField} ${visible}`}>
      <Player title='YOU PICKED' />
      <Player title='THE HOUSE PICKED'>
        <Roulette />
      </Player>
    </div>
  )
}

export default GameField
