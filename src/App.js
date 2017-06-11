import React, { Component } from 'react'
import './App.css'
import firebase from 'firebase'
import { map } from 'lodash'
import desks from './components/Floorplan/desks'

const config = {
  apiKey: 'AIzaSyB-cH8iWdvLHlWSR6GrgOBhYejiNiqgvsA',
  authDomain: 'seating-d40fa.firebaseapp.com',
  databaseURL: 'https://seating-d40fa.firebaseio.com',
  storageBucket: 'seating-d40fa.appspot.com',
  messagingSenderId: '1093784744438'
}

firebase.initializeApp(config)

import AddPerson from './components/AddPerson'
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
    // this.initializeFirebase('desks')
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
    const { name, file, contentType } = person
    const uploadInput = document.getElementById('headshot')

    const storageRef = firebase.storage().ref()
    const uploadTask = storageRef.child('images/' + file.name).put(file, contentType)
    const firebaseRef = firebase.database().ref('people')


    let downloadURL

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      console.log('Upload is ' + progress + '% done')
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED:
          console.log('Upload is paused')
          break
        case firebase.storage.TaskState.RUNNING:
          console.log('Upload is running')
          break
      }
    }, (error) => {
      switch (error.code) {
        case 'storage/unauthorized':
          break
        case 'storage/canceled':
          break
        case 'storage/unknown':
          break
      }
    }, () => {
      downloadURL = uploadTask.snapshot.downloadURL
    })

    firebaseRef.push({
      name,
      headshot: downloadURL
    })
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
    const firebaseRef = firebase.database().ref('people/' + person)

    firebaseRef.update({
      desk
    })
  }

  render () {
    return (
      <div className='App'>
        <AddPerson addPerson={this.addPerson} />
        <AssignPerson
          people={this.state.people}
          desks={desks}
          assignPerson={this.assignPerson}
        />
        <Floorplan
          desks={desks}
          people={this.state.people}
        />
      </div>
    )
  }
}

export default App
