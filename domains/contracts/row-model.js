import Model from "@imndzy/axino/core/db/model.js";

export default class ContractsRows extends Model {
  static parentKey = 'contract_id';

  fields = ['contract_id', 'article_id', 'quantity', 'price'];
}
