import React, { Component } from "react"
import './style.css';

class FormularioCadastro extends Component {
  constructor(props) {
    super(props)

    this._text = ''
    this._titulo = ''
    this._category = 'Sem Categoria'
  }

  _handleChangeTitle(e) {
    const targetValue = e.target.value
    this._titulo = targetValue
  }

  _handleChangeText(e) {
    const targetValue = e.target.value
    this._text = targetValue
  }

  _handleSelectCategory(e) {
    const targetValue = e.target.value
    this._category = targetValue
  }

  _createCard(e) {
    e.preventDefault()
    e.stopPropagation()

    this.props.createCard(this._titulo, this._text, this._category)
  }

  render() {
    return (
      <form
        className="form-cadastro"
        onSubmit={this._createCard.bind(this)}
      >
        <select
          onChange={this._handleSelectCategory.bind(this)}
          className="form-cadastro_input"
        >
          <option>Sem Categoria</option>
          {
            this.props.categories.map((category, index) => (
              <option key={`${category + index}`}> {category} </option>
            ))
          }
        </select>

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