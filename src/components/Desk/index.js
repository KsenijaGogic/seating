import React from 'react'
import './Desk.css'

import Person from '../Person'

const Desk = (props) => {
  const classes = [
    'Desk',
    `Desk--${props.facing}`
  ]

  const style = {
    top: `${props.positionY}px`,
    left: `${props.positionX}px`
  }

  return (
    <div
      style={style}
      className={classes.join(' ')}
    >
      I'm a desk with a person
      <Person person={props.person} />
    </div>
  )
}

export default Desk
