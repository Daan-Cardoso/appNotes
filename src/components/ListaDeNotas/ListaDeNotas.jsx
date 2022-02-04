import React, { Component } from 'react'
import CardNota from '../CardNota/'
import './style.css'

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className='lista-notas'>
        {['trabalho', 'trabalho', 'estudo'].map((categoria, index) => (
            <li className='lista-notas_item' key={index}>
              <CardNota title={categoria} />
            </li>
          ))}
      </ul>
    )
  }
}

export default ListaDeNotas