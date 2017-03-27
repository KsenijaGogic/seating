import React from 'react'

const Person = (props) => {
  return (
    <div>
      {
        props.person.name &&
          <div>{props.person.name}</div>
      }
    </div>
  )
}

export default Person
