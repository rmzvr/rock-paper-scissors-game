import { useSelector } from 'react-redux'
import styles from './ElementsList.module.scss'
import Element from '../Element'
import Triangle from '../Triangle'

function ElementsList() {
  const { elements, animation } = useSelector((state) => {
    return {
      elements: state.game.elements,
      animation: state.game.animations.elementsList,
    }
  })

  return (
    <div className={styles.items} data-animation={animation}>
      <Triangle />
      {elements.map((element) => (
        <Element key={element.name} element={element} />
      ))}
    </div>
  )
}

export default ElementsList
