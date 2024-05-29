import Model from "./model.js";
import CrudController from "@imndzy/axino/components/crud-controller.js";
import Dto from "../article-categories/dto.js";

export default class Controller extends CrudController {
  constructor () {
    super(Model, Dto);
  }
}
