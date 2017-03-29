import React, { Component } from 'react'
import './App.css'
import firebase from 'firebase'
import { map } from 'lodash'

const config = {
  apiKey: 'AIzaSyB-cH8iWdvLHlWSR6GrgOBhYejiNiqgvsA',
  authDomain: 'seating-d40fa.firebaseapp.com',
  databaseURL: 'https://seating-d40fa.firebaseio.com',
  storageBucket: 'seating-d40fa.appspot.com',
  messagingSenderId: '1093784744438'
}

firebase.initializeApp(config)

import AddPerson from './components/AddPerson'
import AddDesk from './components/AddDesk'
import AssignPerson from './components/AssignPerson'
import Floorplan from './components/Floorplan'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      people: [],
      desks: []
    }
  }

  componentDidMount () {
    this.initializeFirebase('people')
    this.initializeFirebase('desks')
  }

  initializeFirebase (type) {
    const firebaseRef = firebase.database().ref(type)

    firebaseRef.on('value', (snapshot) => {
      /* god bless: http://stackoverflow.com/a/37620180/6615903 */
      const toArray = map(snapshot.val(), (value, key) => {
        value.id = key
        return value
      })

      this.setState({
        [type]: toArray
      })
    })
  }

  addPerson (person) {
    const firebaseRef = firebase.database().ref('people')

    firebaseRef.push({
      name: person
    })
  }

  moveDesk (id, x, y) {
    const firebaseRef = firebase.database().ref(`desks/${id}`);
    firebaseRef.update({
      positionX: x,
      positionY: y
    });
  }

  addDesk (desk) {
    const { facing, positionY, positionX } = desk
    const firebaseRef = firebase.database().ref('desks')

    firebaseRef.push({
      person: '',
      facing,
      positionX,
      positionY
    })
  }

  assignPerson (assignState) {
    const { desk, person } = assignState
    const firebaseRef = firebase.database().ref('desks/' + desk)

    firebaseRef.update({
      person
    })
  }

  render () {
    return (
      <div className='App'>
        <AddPerson addPerson={this.addPerson} />
        <AddDesk addDesk={this.addDesk} />
        <AssignPerson
          people={this.state.people}
          desks={this.state.desks}
          assignPerson={this.assignPerson}
        />
        <Floorplan
          onMoveDesk={ this.moveDesk }
          desks={this.state.desks}
          people={this.state.people}
        />
      </div>
    )
  }
}

export default App
