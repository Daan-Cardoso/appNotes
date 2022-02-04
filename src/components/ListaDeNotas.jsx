import React, { Component } from 'react'
import CardNota from './CardNota.jsx'
export default class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        <li>
          <CardNota />
        </li>
      </ul>
    )
  }
}