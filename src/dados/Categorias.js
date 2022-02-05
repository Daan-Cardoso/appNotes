export default class Categorias {
  constructor() {
    this.categorias = []
  }

  newCategory(newCategory) {
    this.categorias.push(newCategory)
    console.log(this.categorias)
  }
}