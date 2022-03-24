import { useSelector } from 'react-redux'
import styles from './Triangle.module.scss'

function Triangle() {
  const visible = useSelector((state) => state.game.triangle.state)

  return (
    <svg
      className={`${styles.triangle} ${visible}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 305 277'
      shapeRendering='geometricPrecision'
      textRendering='geometricPrecision'
    >
      <defs>
        <linearGradient
          id='bg-triangle-2-el0huysfwoh3-fill'
          x1='0'
          y1='0.5'
          x2='1'
          y2='0.5'
          spreadMethod='pad'
          gradientUnits='objectBoundingBox'
          gradientTransform='translate(0 0)'
        >
          <stop
            id='bg-triangle-2-el0huysfwoh3-fill-0'
            offset='0%'
            stopColor='rgba(86,113,245,0)'
          />
          <stop
            id='bg-triangle-2-el0huysfwoh3-fill-1'
            offset='50%'
            stopColor='#4865f4'
          />
          <stop
            id='bg-triangle-2-el0huysfwoh3-fill-2'
            offset='100%'
            stopColor='rgba(86,113,245,0)'
          />
        </linearGradient>
        <linearGradient
          id='bg-triangle-2-el0huysfwoh4-fill'
          x1='0'
          y1='0.5'
          x2='1'
          y2='0.5'
          spreadMethod='pad'
          gradientUnits='objectBoundingBox'
          gradientTransform='translate(0 0)'
        >
          <stop
            id='bg-triangle-2-el0huysfwoh4-fill-0'
            offset='0%'
            stopColor='rgba(236,169,34,0)'
          />
          <stop
            id='bg-triangle-2-el0huysfwoh4-fill-1'
            offset='51%'
            stopColor='#ec9e0e'
          />
          <stop
            id='bg-triangle-2-el0huysfwoh4-fill-2'
            offset='100%'
            stopColor='rgba(236,169,34,0)'
          />
        </linearGradient>
        <linearGradient
          id='bg-triangle-2-el0huysfwoh5-fill'
          x1='0'
          y1='0.5'
          x2='1'
          y2='0.5'
          spreadMethod='pad'
          gradientUnits='objectBoundingBox'
          gradientTransform='translate(0 0)'
        >
          <stop
            id='bg-triangle-2-el0huysfwoh5-fill-0'
            offset='0%'
            stopColor='rgba(221,64,93,0)'
          />
          <stop
            id='bg-triangle-2-el0huysfwoh5-fill-1'
            offset='50%'
            stopColor='#dc2e4e'
          />
          <stop
            id='bg-triangle-2-el0huysfwoh5-fill-2'
            offset='100%'
            stopColor='rgba(221,64,93,0)'
          />
        </linearGradient>
      </defs>
      <path
        id='bg-triangle-2-path1'
        d='M291.5,7.5h-286.926c3.119,0,1.954177.000015,147.892,254L291.5,7.5Z'
        opacity='0.2'
        fill='none'
        stroke='#000'
        strokeWidth='15'
      />
      <g className={styles.topSegment} transform='translate(-73,0)'>
        <rect
          id='bg-triangle-2-el0huysfwoh3'
          width='111.414'
          height='15.2133'
          rx='0'
          ry='0'
          transform='scale(1.301453,0.985981) translate(0,0)'
          fill='url(#bg-triangle-2-el0huysfwoh3-fill)'
          strokeWidth='0'
          strokeLinecap='square'
        />
      </g>
      <g
        className={styles.rightSegment}
        transform='translate(291.499982,7.500003)'
      >
        <rect
          id='bg-triangle-2-el0huysfwoh4'
          width='145'
          height='15'
          rx='0'
          ry='0'
          transform='rotate(-61.375918) translate(-72.499996,-7.499985)'
          fill='url(#bg-triangle-2-el0huysfwoh4-fill)'
          strokeWidth='0'
        />
      </g>
      <g
        className={styles.leftSegment}
        transform='translate(125.456528,199.08522)'
      >
        <rect
          id='bg-triangle-2-el0huysfwoh5'
          width='145'
          height='15'
          rx='0'
          ry='0'
          transform='rotate(60.507889) scale(1.000001,1.000001) translate(0,0)'
          fill='url(#bg-triangle-2-el0huysfwoh5-fill)'
          strokeWidth='0'
        />
      </g>
    </svg>
  )
}

export default Triangle
