import React from 'react'

class AddDesk extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      id: '',
      top: '',
      left: '',
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
      id: '',
      top: '',
      left: '',
      facing: ''
    })
  }

  render () {
    return (
      <div>
        <label htmlFor='position-x'>Add a desk: </label>
        <input
          type='text'
          name='id'
          placeholder='id'
          value={this.state.id}
          onChange={(evt) => this.onChange(evt, 'id')}
        />
        <input
          type='text'
          name='top'
          placeholder='Top'
          value={this.state.top}
          onChange={(evt) => this.onChange(evt, 'top')}
        />
        <input
          type='text'
          name='left'
          placeholder='Left'
          value={this.state.left}
          onChange={(evt) => this.onChange(evt, 'left')}
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
