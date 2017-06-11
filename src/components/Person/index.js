import React from 'react'
import './Person.css'

const placeholder = 'http://via.placeholder.com/50x50'

const Person = ({ person }) => {
  const headshot = person.headshot ? person.headshot : placeholder

  const style = {
    backgroundImage: `url('${headshot}')`
  }

  return (
    <div className='Person'>
      {
        person.name &&
          <div className='Person-wrapper'>
            <div className='Person-img' style={style} />
            <p className='Person-name'>{person.name}</p>
          </div>
      }
    </div>
  )
}

export default Person
