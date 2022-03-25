import { useSelector } from 'react-redux'
import styles from './GameField.module.scss'
import rock from '../../assets/rock.svg'
import Player from '../Player'
import Roulette from '../Roulette/Roulette'

function GameField() {
  const { visible, state } = useSelector((state) => state.game.gameField)
  const player = useSelector((state) => {
    if (state.game.compare?.[0]) {
      return state.game.compare[0]
    } else {
      return { name: 'rock', image: rock, status: 'tie' }
    }
  })

  const playerPosition = useSelector(
    (state) => state.game.players.player.position
  )

  const roulette = useSelector((state) => {
    if (state.game.compare?.[1]) {
      return state.game.compare[1]
    } else {
      return { name: 'rock', image: rock, status: 'tie' }
    }
  })

  const roulettePosition = useSelector(
    (state) => state.game.players.roulette.position
  )

  return (
    <div className={`${styles.gameField} ${visible} ${state}`}>
      <Player
        title='YOU PICKED'
        status={player.status}
        position={playerPosition}
      >
        <img src={player.image} alt={player.name} width={292} />
      </Player>
      <Player
        title='THE HOUSE PICKED'
        status={roulette.status}
        position={roulettePosition}
      >
        <Roulette />
      </Player>
    </div>
  )
}

export default GameField
