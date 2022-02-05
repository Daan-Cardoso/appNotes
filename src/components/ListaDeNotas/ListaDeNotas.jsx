import React, { Component } from 'react'
import CardNote from '../CardNote'
import './style.css'

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className='lista-notas'>
        {this.props.cardNotes.map((card, index) => (
            <li className='lista-notas_item' key={index}>
              <CardNote removeCard={this.props.removeCard} index={index} card={card} />
            </li>
          ))}
      </ul>
    )
  }
}

export default ListaDeNotas