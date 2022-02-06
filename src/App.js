import ListaDeNotas from './components/ListaDeNotas/'
import ListaDeCategorias from './components/ListaDeCategorias/';
import FormularioCadastro from './components/FormularioCadastro/'
import React, { Component } from 'react/cjs/react.development'
import './assets/index.css';
import './assets/App.css';
import Categorias from './dados/Categorias.js';
import ArrNotas from './dados/ArrNotas.js';

class App extends Component {
  constructor() {
    super()

    this.categories = new Categorias()
    this.notes = new ArrNotas()
  }

  render() {
    return (
      <section className='conteudo'>
        <FormularioCadastro
          createCard={this.notes.createCard.bind(this.notes)}
          categories={this.categories}
        />

        <main className='conteudo-principal'>
          <ListaDeCategorias
            newCategory={this.categories.newCategory.bind(this.categories)}
            categories={this.categories}
          />

          <ListaDeNotas
            removeCard={this.notes.removeCard.bind(this.notes)}
            cardNotes={this.notes}
          />
        </main>
      </section>
    );
  }
}

export default App;
