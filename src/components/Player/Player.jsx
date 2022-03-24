import styles from './Player.module.scss'

function Player({ title,  children }) {
  return (
    <div className={styles.player}>
      <h2 className={styles.playerTitle}>{ title }</h2>
      {children}
    </div>
  )
}

export default Player
