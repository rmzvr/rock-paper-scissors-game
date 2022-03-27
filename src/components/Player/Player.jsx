import styles from './Player.module.scss'
import shadow from '../../assets/shadow.svg'

function Player({ title, player }) {
  return (
    <div
      className={styles.player}
      data-winner={player.isWinner}
      data-animation={player.animation}
    >
      <h2 className={styles.playerTitle}>{title}</h2>
      <div className={styles.playerElement}>
        <img className={styles.playerElementShadow} src={shadow} alt='shadow' />
        <img src={player.element.image} alt={player.element.name} width={292} />
      </div>
    </div>
  )
}

export default Player
