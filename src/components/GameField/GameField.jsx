import { useSelector } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit'
import styles from './GameField.module.scss'
import Player from '../Player'

const players = createSelector(
  (state) => {
    return {
      player: {
        ...state.game.players.player,
        animation: state.game.animations.player,
      },
      computer: {
        ...state.game.players.computer,
        animation: state.game.animations.computer,
      },
      animation: state.game.animations.gameField,
    }
  },
  (players) => players
)

function GameField() {
  const { player, computer, animation } = useSelector(players)

  return (
    <div className={styles.gameField} data-animation={animation}>
      <Player title='YOU PICKED' player={player} />
      <Player title='THE HOUSE PICKED' player={computer} />
    </div>
  )
}

export default GameField
