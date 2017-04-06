import React from 'react'

const Person = (props) => {
  return (
    <div>
      {
        props.name &&
          <div>{props.name}</div>
      }
    </div>
  )
}

export default Person
