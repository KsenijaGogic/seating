import React from 'react'
import { find } from 'lodash'
import desks from './desks'
import floorplan from './assets/Floorplan.png'
import './Floorplan.css'

import Desk from '../Desk'

const Floorplan = (props) => {
  return (
    <div className='Floorplan'>
      <img className='Floorplan-img' src={floorplan} />
      {
        props.desks.map((desk, index) => {
          /* Hydrate user through associated ID */
          desk.person = find(props.people, (person) => (
            parseInt(person.desk) === desk.id
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
