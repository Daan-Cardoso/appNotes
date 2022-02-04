import React, { Component } from "react"
import './style.css';

class FormularioCadastro extends Component {
  render() {
    return (
      <form className="form-cadastro">
        <input className="form-cadastro_input" type='text' placeholder="Título" />
        <textarea className="form-cadastro_input" placeholder='Escreva sua nota...' />
        <button className="form-cadastro_submit">Criar Nota</button>
      </form>
    )
  }
}

export default FormularioCadastro;