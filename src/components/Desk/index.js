import React from 'react'
import './Desk.css'

import Person from '../Person'

const Desk = (props) => {
  const classes = [
    'Desk',
    `Desk--${props.facing}`,
    props.half ? 'Desk--half' : null
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
      <div className='Desk-personWrapper'>
        {
          props.person &&
            <Person person={props.person} />
        }
        {
          !props.person &&
            <span>{props.id}</span>
        }
      </div>
    </div>
  )
}

export default Desk
