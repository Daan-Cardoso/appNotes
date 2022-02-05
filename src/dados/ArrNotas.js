export default class ArrNotas {
  constructor() {
    this.notas = []
  }
  
  createCard(title, text, category) {
    const newNote =  new Nota(title, text, category)
    this.notas.push(newNote)
    console.log(this.notas)
  }

  removeCard(index) {
    this.notas.splice(index,1)
  }
}

class Nota {
  constructor(title, text, category) {
    this.title = title
    this.text = text
    this.category = category
  }
}