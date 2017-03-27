import React from 'react'

class AssignPerson extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      person: '',
      desk: ''
    }
  }

  onChange (evt, key) {
    this.setState({
      [key]: evt.target.value
    })
  }

  onSubmit () {
    this.props.assignPerson(this.state)
    this.setState({
      person: '',
      desk: ''
    })
  }

  render () {
    return (
      <div>
        <label htmlFor='position-x'>Assign a Person to a Desk</label>
        <select
          value={this.state.person}
          onChange={(evt) => this.onChange(evt, 'person')}
        >
          <option disabled>Select a Person</option>
          {
            this.props.people.map((person, index) => (
              <option key={index} value={person.id}>{person.name}</option>
            ))
          }
        </select>
        <select
          value={this.state.desk}
          onChange={(evt) => this.onChange(evt, 'desk')}
        >
          <option disabled>Select a Desk</option>
          {
            this.props.desks.map((desk, index) => (
              <option key={index} value={desk.id}>{desk.id}</option>
            ))
          }
        </select>
        <button
          type='button'
          onClick={() => this.onSubmit()}
        >
          Assign Person to Desk
        </button>
      </div>
    )
  }
}

export default AssignPerson
