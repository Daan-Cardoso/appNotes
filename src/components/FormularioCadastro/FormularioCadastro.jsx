import React, { Component } from "react"
import './style.css';

class FormularioCadastro extends Component {
  constructor(props) {
    super(props)

    this._text = ''
    this._titulo = ''
  }

  _handleChangeTitle(e) {
    const targetValue = e.target.value
    this._titulo = targetValue
  }

  _handleChangeText(e) {
    const targetValue = e.target.value
    this._text = targetValue
  }

  _createCard(e) {
    e.preventDefault()
    e.stopPropagation()

    this.props.createCard(this._titulo, this._text)
  }

  render() {
    return (
      <form
        className="form-cadastro"
        onSubmit={this._createCard.bind(this)}
      >

        <input
          className="form-cadastro_input"
          type='text'
          placeholder="Título"
          onChange={this._handleChangeTitle.bind(this)}
        />

        <textarea
          rows={15}
          className="form-cadastro_input"
          placeholder='Escreva sua nota...'
          onChange={this._handleChangeText.bind(this)}
        />

        <button className="form-cadastro_submit">Criar Nota</button>
      </form>
    )
  }
}

export default FormularioCadastro;