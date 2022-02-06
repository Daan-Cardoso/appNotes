export default class Categorias {
  constructor() {
    this.categorias = []
    this._inscritos = []
  }

  newCategory(newCategory) {
    this.categorias.push(newCategory)
    this.notify()
    console.log(this.categorias)
  }

  subscribe(func) {
    this._inscritos.push(func)
  }

  notify() {
    this._inscritos.forEach(func => {
      func(this.categorias)
    })
  }
}