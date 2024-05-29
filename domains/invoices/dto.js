import DtoWithRows from "../../components/dto-with-rows.js";
import RowDto from "./row-dto.js";

export default class Dto extends DtoWithRows {
  id
  client_id;
  contract_num;
  number;
  sum;
  paid;
  date;
  rowDto = RowDto;
}
