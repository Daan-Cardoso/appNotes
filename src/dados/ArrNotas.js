export default class ArrNotas {
  constructor() {
    this.notes = []
    this._inscritos = []
  }
  
  createCard(title, text, category) {
    const newNote =  new Nota(title, text, category)
    this.notes.push(newNote)
    this.notify()
  }

  removeCard(index) {
    this.notes.splice(index,1)
    this.notify()
  }

  subscribe(func) {
    this._inscritos.push(func)
  }

  notify() {
    this._inscritos.forEach(func => {
      func(this.notes)
    })
  }
}

class Nota {
  constructor(title, text, category) {
    this.title = title
    this.text = text
    this.category = category
  }
}