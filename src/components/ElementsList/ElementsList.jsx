import { useSelector } from 'react-redux'
import styles from './ElementsList.module.scss'
import Element from '../Element'
import Triangle from '../Triangle'

function ElementsList() {
  const elements = useSelector((state) => state.game.elements)

  return (
    <div className={styles.items}>
      <Triangle />
      {elements.map((element) => (
        <Element key={element.id} element={element} />
      ))}
    </div>
  )
}

export default ElementsList
