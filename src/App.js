import ListaDeNotas from './components/ListaDeNotas/'
import ListaDeCategorias from './components/ListaDeCategorias/';
import FormularioCadastro from './components/FormularioCadastro/'
import React, { Component } from 'react/cjs/react.development'
import './assets/index.css';
import './assets/App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      _notes: [],
      _categories: []
    }
  }
  _createCard(title, text, category) {
    const newNote = { title, text, category }
    const updateNotes = [...this.state._notes, newNote]
    const newState = {...this.state, _notes: updateNotes }

    console.log(newNote)
  
    this.setState(newState)
  }

  _newCategory(category) {
    const updateCategories = [...this.state._categories, category]
    const newState = {...this.state, _categories: updateCategories}

    this.setState(newState)
  }

  _removeCard(index) {
    const notes = this.state._notes
    notes.splice(index,1)
    
    this.setState({notes})
  }

  render() {
    return (
      <section className='conteudo'>
        <FormularioCadastro
          createCard={this._createCard.bind(this)}
          categories={this.state._categories}
        />

        <main className='conteudo-principal'>
          <ListaDeCategorias
            newCategory={this._newCategory.bind(this)}
            categories={this.state._categories}
          />

          <ListaDeNotas
            removeCard={this._removeCard.bind(this)}
            cardNotes={this.state._notes}
          />
        </main>
      </section>
    );
  }
}

export default App;
