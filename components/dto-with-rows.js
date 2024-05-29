import BaseDto from "@imndzy/axino/components/dto.js";

export default class Dto extends BaseDto {
  rows = []

  setRows (rows) {
    const rowDtos = [];
    for (const row of rows) {
      rowDtos.push(
        (new this.rowDto).setData(row)
      )
    }

    this.rows = rowDtos;

    return this;
  }
}
