import Dto from "@imndzy/axino/components/dto.js";

export default class BillsDto extends Dto {
  id;
  contract_num;
  client_id;
  sum;
  remainder;
  date;
  contents;
}
