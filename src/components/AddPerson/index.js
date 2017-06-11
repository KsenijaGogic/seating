/* global FileReader */
import React from 'react'

class AddPerson extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      file_uri: null,
      filename: null,
      filetype: null
    }
  }

  textOnChange (evt) {
    this.setState({
      name: evt.target.value
    })
  }

  fileOnChange (evt) {
    const reader = new FileReader()
    const file = evt.target.files[0]

    console.log(file)

    reader.onload = (upload) => {
      this.setState({
        file_uri: upload.target.result,
        filename: file.name,
        filetype: file.type
      })
    }

    console.log(reader.readAsDataURL(file))

    reader.readAsDataURL(file)
  }

  onSubmit () {
    const person = {
      name: this.state.name,
      file: this.state.file_uri,
      filename: this.state.filename,
      contentType: this.state.filetype
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
