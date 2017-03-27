import React from 'react'

class AddPerson extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      person: ''
    }
  }

  onChange (evt) {
    this.setState({
      person: evt.target.value
    })
  }

  onSubmit () {
    this.props.addPerson(this.state.person)
    this.setState({ person: '' })
  }

  render () {
    return (
      <div>
        <label htmlFor='Name'>Person's full name: </label>
        <input
          type='text'
          placeholder={`Person's full name`}
          value={this.state.person}
          onChange={(evt) => this.onChange(evt)}
        />
        <button
          type='button'
          onClick={() => this.onSubmit()}
        >
          Add Person
        </button>
      </div>
    )
  }
}

export default AddPerson
