import React from 'react'
import './Desk.css'

import Person from '../Person'

const Desk = (props) => {
  const classes = [
    'Desk',
    `Desk--${props.facing}`
  ]

  const style = {
    top: `${props.top}%`,
    left: `${props.left}%`
  }

  return (
    <div
      id={`desk=${props.id}`}
      style={style}
      className={classes.join(' ')}
    >
      {
        props.name &&
          <p>{props.name}</p>
      }
    </div>
  )
}

export default Desk
