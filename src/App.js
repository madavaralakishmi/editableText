import './App.css'
import {Component} from 'react'

class App extends Component {
  state = {isChanged: false, isText: ''}

  onSaveButton = () => {
    this.setState(prevState => ({isChanged: !prevState.isChanged}))
  }

  onTextMessage = event => {
    this.setState({isText: event.target.value})
  }

  onEditButton = () => {
    this.setState(prevState => ({isChanged: !prevState.isChanged}))
    this.onTextMessage()
  }

  render() {
    const {isChanged, isText} = this.state

    return (
      <div className="bg-container">
        <div className="bg-w">
          <h1>Editable Text Input</h1>
          {isChanged ? (
            <div className="arrange-flex-item">
              <p>{isText}</p>
              <button
                type="button"
                className="button1"
                onClick={this.onEditButton}
              >
                Edit
              </button>
            </div>
          ) : (
            <div>
              <input type="text" onChange={this.onTextMessage} />
              <button
                className="button"
                type="button"
                onClick={this.onSaveButton}
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
