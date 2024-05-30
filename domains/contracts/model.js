import Model from "@imndzy/axino/core/db/model.js";
import RowModel from "./row-model.js";

export default class Contracts extends Model {
  rows = {
    type: "hasMany",
    model: RowModel,
    key: RowModel.parentKey,
  };

  fields = ['client_id', 'contract_num', 'date', 'sum', 'paid', 'term_start', 'term_end', 'type'];
}
