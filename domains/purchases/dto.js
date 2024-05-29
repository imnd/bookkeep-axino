import DtoWithRows from "../../components/dto-with-rows.js";
import RowDto from "./row-dto.js";

export default class Dto extends DtoWithRows {
  id;
  number;
  sum;
  date;
  rowDto = RowDto;
}
