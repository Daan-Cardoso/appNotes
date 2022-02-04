import ListaDeNotas from './components/ListaDeNotas/'
import FormularioCadastro from './components/FormularioCadastro/'
import React, { Component } from 'react/cjs/react.development'
import './assets/index.css';
import './assets/App.css';

class App extends Component {
  render() {
    return (
      <section className='conteudo'>
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
