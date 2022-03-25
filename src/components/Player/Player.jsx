import styles from './Player.module.scss'
import shadow from '../../assets/shadow.svg'

function Player({ title, children, status, position }) {
  return (
    <div className={`${styles.player} ${status} ${position}`}>
      <h2 className={styles.playerTitle}>{title}</h2>
      <div className={styles.playerElement}>
        <img className={styles.playerElementShadow} src={shadow} alt='shadow' />
        {children}
      </div>
    </div>
  )
}

export default Player
