import React, { Component } from 'react';
import './style.css'

class ListaDeCategorias extends Component {
  constructor() {
    super()

    this._newCategories = this._updateCategories.bind(this)

    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    this.props.categories.subscribe(this._newCategories)
  }

  componentWillUnmount() {
    this.props.categories.unsubscribe(this._newCategories)
  }

  _updateCategories(categories) {
    this.setState({...this.state, categories})
  }

  handleInputEvent(e) {
    const targetValue = e.target.value
    if(e.keycode === 13 || e.which === 13) {
      e.target.value = ''
      this.props.newCategory(targetValue)
    }
  }

  render() { 
    return (
      <section className='lista-categorias'>
        <ul className='lista-categorias_lista'>
          {
            this.state.categories.map((category, index) => (
              <li
                key={`${category + index}`}
                className='lista-categorias_item'
              >
                {category}
              </li>
            ))
          }
        </ul>

        <input type='text'
          onKeyUp={this.handleInputEvent.bind(this)}
          className='lista-categorias_input'
          placeholder='Adicionar Categoria'
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
 