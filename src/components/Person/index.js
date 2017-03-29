import React from 'react'
import './Person.css'
import placeholder from './assets/placeholder.png'

const Person = (props) => {
  return (
    <div>
      {
        props.person &&
          <div className='Person'>
            <div className='Person-Avatar'>
              <img
                className='Avatar'
                src={props.person.avatar || placeholder}
                alt={`${props.person.name}'s profile picture.`}
              />
            </div>
            <div className='Person-Name'>{props.person.name}</div>
          </div>
      }
    </div>
  )
}

export default Person
