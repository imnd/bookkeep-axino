export default class Dto {
  id
  client_id
  contract_num
  number
  sum
  paid
  date
  rows = []

  setData (model) {
    this.id = model.id;
    this.client_id = model.client_id;
    this.contract_num = model.contract_num;
    this.number = model.number;
    this.sum = model.sum;
    this.paid = model.paid;
    this.date = model.date;
  }

  setRows (rows) {
    this.rows = rows;
  }
}
