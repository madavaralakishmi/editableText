import './App.css'
import {Component} from 'react'

class App extends Component {
  state = {isChanged: false, isText: ''}

  onTextMessage = event => {
    this.setState({isText: event.target.value})
  }

  onButton = () => {
    this.setState(prevState => ({isChanged: !prevState.isChanged}))
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
                onClick={this.onButton}
              >
                Edit
              </button>
            </div>
          ) : (
            <div>
              <input type="text" value={isText} onChange={this.onTextMessage} />
              <button
                className="button"
                type="button"
                onClick={this.onButton}
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
