import React from 'react'

class AddDesk extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      positionX: '',
      positionY: '',
      facing: ''
    }
  }

  onChange (evt, key) {
    this.setState({
      [key]: evt.target.value
    })
  }

  onSubmit () {
    this.props.addDesk(this.state)
    this.setState({
      positionX: '',
      positionY: '',
      facing: ''
    })
  }

  render () {
    return (
      <div>
        <label htmlFor='position-x'>Add a desk: </label>
        <input
          type='text'
          name='position-x'
          placeholder='Position X'
          value={this.state.positionX}
          onChange={(evt) => this.onChange(evt, 'positionX')}
        />
        <input
          type='text'
          name='position-y'
          placeholder='Position Y'
          value={this.state.positionY}
          onChange={(evt) => this.onChange(evt, 'positionY')}
        />
        <input
          type='text'
          name='facing'
          placeholder='Facing'
          value={this.state.facing}
          onChange={(evt) => this.onChange(evt, 'facing')}
        />
        <button
          type='button'
          onClick={() => this.onSubmit()}
        >
          Add Desk
        </button>
      </div>
    )
  }
}

export default AddDesk
