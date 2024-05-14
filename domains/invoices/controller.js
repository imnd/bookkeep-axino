import ControllerWithRows from "../../components/controller-with-rows.js";
import Model from "./model.js";
import RowModel from "./row-model.js";
import Dto from "./dto.js";

export default class Controller extends ControllerWithRows {
  constructor () {
    super(Model, RowModel, new Dto);
  }
}
