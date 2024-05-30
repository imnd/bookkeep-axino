import BaseDto from "@imndzy/axino/components/dto.js";

export default class Dto extends BaseDto {
  rows = []

  setData(model) {
    super.setData(model);

    for (const row of model.getRelations().rows) {
      this.rows.push(
        (new this.rowDto).setData(row)
      )
    }

    return this;
  }
}
