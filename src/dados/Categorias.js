export default class Categorias {
  constructor() {
    this.categorias = []
    this._inscritos = []
  }

  newCategory(newCategory) {
    this.categorias.push(newCategory)
    this.notify()
  }

  subscribe(func) {
    this._inscritos.push(func)
  }

  unsubscribe(func) {
    this._inscritos = this._inscritos.filter(f => f !== func)
  }

  notify() {
    this._inscritos.forEach(func => {
      func(this.categorias)
    })
  }
}