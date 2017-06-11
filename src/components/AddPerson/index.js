import React from 'react'

class AddPerson extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      file: null
    }
  }

  textOnChange (evt) {
    this.setState({
      name: evt.target.value
    })
  }

  fileOnChange (evt) {
    const file = evt.target.files[0]
    this.setState({
      file
    })
  }

  onSubmit () {
    const person = {
      name: this.state.name,
      file: this.state.file
    }

    this.props.addPerson(person)
    this.setState({ person })
  }

  render () {
    return (
      <div>
        <h5>Add a Person</h5>
        <label htmlFor='name'>First name: </label>
        <input
          type='text'
          id='name'
          placeholder='First name'
          value={this.state.name}
          onChange={(evt) => this.textOnChange(evt)}
        />
        <label htmlFor='headshot'>Headshot:</label>
        <input
          type='file'
          id='headshot'
          onChange={(evt) => this.fileOnChange(evt)}
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
