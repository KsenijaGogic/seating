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
      draggable={ true }
      onDragEnd={(evt) => props.onMoveDesk(props.id, evt.clientX, evt.clientY)}
      style={style}
      className={classes.join(' ')}
    >
      <div className='Desk-person'>
        <Person person={props.person} />
      </div>
    </div>
  )
}

export default Desk
