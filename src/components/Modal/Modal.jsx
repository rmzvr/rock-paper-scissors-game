import React from 'react'
import styles from './Modal.module.scss'
import rules from '../../assets/image-rules.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setModalAnimation } from '../../store/gameSlice'

function Modal() {
  const dispatch = useDispatch()

  const animation = useSelector((state) => state.game.animations.modal)

  function hideModal() {
    dispatch(setModalAnimation({ animation: 'fadeOut' }))
  }

  return (
    <div className={styles.modal} data-animation={animation}>
      <div className={styles.content}>
        <header className={styles.contentHeader}>
          <h2 className={styles.title}>RULES</h2>
          <button type='button' onClick={hideModal}>
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20'>
              <path
                fill='#3B4262'
                fillRule='evenodd'
                d='M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z'
                opacity='.25'
              />
            </svg>
          </button>
        </header>
        <div className={styles.contentBody}>
          <img src={rules} alt='rules' />
        </div>
      </div>
    </div>
  )
}

export default Modal
