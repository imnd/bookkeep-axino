import DtoWithRows from "../../components/dto-with-rows.js";
import RowDto from "./row-dto.js";

export default class Dto extends DtoWithRows {
  id;
  client_id;
  contract_num;
  sum;
  paid;
  date;
  term_start;
  term_end;
  type;
  rowDto = RowDto;
}
