import React, { Component } from 'react'
import CardNote from '../CardNote'
import './style.css'

class ListaDeNotas extends Component {
  constructor() {
    super()

    this._newCards = this._updateCardNotes.bind(this)

    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    this.props.cardNotes.subscribe(this._newCards)
  }

  componentWillUnmount() {
    this.props.cardNotes.unsubscribe(this._newCards)
  }

  _updateCardNotes(notes) {
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