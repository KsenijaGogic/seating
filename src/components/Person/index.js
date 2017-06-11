import React from 'react'
import './Person.css'

const Person = ({ person }) => {
  return (
    <div className='Person'>
      {
        person.name &&
          <div className='Person-wrapper'>
            <img className='Person-img' src='http://via.placeholder.com/50x50' />
            <p className='Person-name'>{person.name}</p>
          </div>
      }
    </div>
  )
}

export default Person
