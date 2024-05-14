export default class Dto {
  id
  client_id
  contract_num
  sum
  paid
  date
  term_start
  term_end
  type;
  rows = []

  setData (model) {
    this.id = model.id;
    this.client_id = model.client_id;
    this.contract_num = model.contract_num;
    this.sum = model.sum;
    this.paid = model.paid;
    this.date = model.date;
    this.term_start = model.term_start;
    this.term_end = model.term_end;
    this.type = model.type;
  }

  setRows (rows) {
    this.rows = rows;
  }
}
