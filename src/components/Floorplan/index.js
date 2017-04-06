import React from 'react'
import { find } from 'lodash'
import desks from './desks'
import floorplan from './assets/Floorplan.png'
import './Floorplan.css'

import Desk from '../Desk'

const Floorplan = (props) => {
  return (
    <div className='Floorplan'>
      <img src={floorplan} />
      {
        props.people.map((person, index) => {
          console.log(person)
          /* Hydrate user through associated ID */
          const desk = find(desks, (desk) => (
            desk.id === parseInt(person.desk)
          ))
          return (
            <Desk key={index} {...person} {...desk} />
          )
        })
      }
    </div>
  )
}

export default Floorplan



