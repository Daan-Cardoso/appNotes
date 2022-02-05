import React, { Component } from 'react';
import './style.css'

class ListaDeCategorias extends Component {
  newCategory(e) {
    const targetValue = e.target.value
    if(e.keycode === 13 || e.which === 13) {
      e.target.value = ''
      return this.props.newCategory(targetValue)
    }
  }

  render() { 
    return (
      <section className='lista-categorias'>
        <ul className='lista-categorias_lista'>
          {
            this.props.categories.map((category, index) => (
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
          onKeyUp={this.newCategory.bind(this)}
          className='lista-categorias_input'
          placeholder='Adicionar Categoria'
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
 