import ListaDeNotas from './components/ListaDeNotas/'
import FormularioCadastro from './components/FormularioCadastro/'
import React, { Component } from 'react/cjs/react.development'
import './assets/index.css';
import './assets/App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes: []
    }
  }
  _createCard(title, text) {
    const newNote = { title, text }
    const updateNotes = [...this.state.notes, newNote]
    const newState = {
      notes: updateNotes
    }
    this.setState(newState)
  }

  _removeCard(index) {
    const notes = this.state.notes
    notes.splice(index,1)
    
    this.setState({notes})
  }

  render() {
    return (
      <section className='conteudo'>
        <FormularioCadastro createCard={this._createCard.bind(this)} />
        <ListaDeNotas removeCard={this._removeCard.bind(this)} cardNotes={this.state.notes} />
      </section>
    );
  }
}

export default App;
