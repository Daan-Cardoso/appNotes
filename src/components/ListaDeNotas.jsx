import React, { Component } from 'react'
import CardNota from './CardNota.jsx'

class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {['trabalho', 'trabalho', 'estudo'].map((categoria, index) => (
            <li key={index}>
              <CardNota title={categoria} />
            </li>
          ))}
      </ul>
    )
  }
}

export default ListaDeNotas