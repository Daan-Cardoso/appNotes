import React from "react"
import { Component } from "react/cjs/react.production.min";

class FormularioCadastro extends Component {
  render() {
    return (
      <form>
        <input type='text' placeholder="Título" />
        <textarea placeholder='Escreva sua nota...' />
        <button>Criar Nota</button>
      </form>
    )
  }
}

export default FormularioCadastro;