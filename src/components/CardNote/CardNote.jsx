import React, { Component } from 'react'
import { ReactComponent as DeleteSVG } from '../../assets/img/delete.svg'
import './style.css';

class CardNota extends Component {
  remove() {
    const index = this.props.index
    this.props.removeCard(index)
  }
  render() {
    return (
      <section className='card-nota'>
        <header className='card-nota_cabecalho'>
          <h3 className='card-nota_titulo'>{this.props.card.title}</h3>
          <DeleteSVG onClick={this.remove.bind(this)} />
          <h4 className='card-nota-categoria'>{this.props.card.category}</h4>
        </header>
          <p className='card-nota_texto'>{this.props.card.text}</p>
      </section>
    )
  }
}

export default CardNota