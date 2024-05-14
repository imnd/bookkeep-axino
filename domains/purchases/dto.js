export default class Dto {
  id
  number
  sum
  date
  rows = []

  setData (model) {
    this.id = model.id;
    this.number = model.number;
    this.sum = model.sum;
    this.date = model.date;
  }

  setRows (rows) {
    this.rows = rows;
  }
}
