import React, { Component } from 'react';
import './App.css';
import Table from './Table.js'
import Form from './Form.js'

class App extends Component {

  state = {
        characters : []
    }

  removeCharacter = (index) => {
      const {characters} = this.state

      this.setState({
        characters: characters.filter((character, i) => {
          return i !== index
        })
      })
  }

  handleSubmit = (character) => {
    this.setState({
      characters: [...this.state.characters, character]
    })
  }

  render() {
    return (
      <div className='container'>
        <h1>A Simple React.js Form</h1>
        <Table 
            characterData={this.state.characters} 
            removeCharacter={this.removeCharacter}
        />
        <h3>Add New </h3>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
