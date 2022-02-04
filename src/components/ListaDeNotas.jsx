import React, { Component } from 'react'
import Nota from './Nota.jsx'
export default class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        <li>
          <Nota />
        </li>
      </ul>
    )
  }
}