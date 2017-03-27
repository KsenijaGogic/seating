import React from 'react'
import { find } from 'lodash'

import Desk from '../Desk'

const Floorplan = (props) => {
  // const DIM_X = 2464
  // const DIM_Y = 2100

  return (
    <div>
      {
        props.desks.map((desk, index) => {
          /* Hydrate user through associated ID */
          desk.person = find(props.people, (person) => (
            person.id === desk.person
          ))
          return (
            <Desk key={index} {...desk} />
          )
        })
      }
    </div>
  )
}

export default Floorplan
