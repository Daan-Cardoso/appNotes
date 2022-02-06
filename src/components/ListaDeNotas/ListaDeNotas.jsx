import React, { Component } from 'react'
import CardNote from '../CardNote'
import './style.css'

class ListaDeNotas extends Component {
  constructor() {
    super()

    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    this.props.cardNotes.subscribe(this._newCardNotes.bind(this))
  }

  _newCardNotes(notes) {
    this.setState({...this.state, notes})
  }

  render() {
    return (
      <ul className='lista-notas'>
        {this.state.notes.map((card, index) => (
            <li className='lista-notas_item' key={index}>
              <CardNote removeCard={this.props.removeCard} index={index} card={card} />
            </li>
          ))}
      </ul>
    )
  }
}

export default ListaDeNotas