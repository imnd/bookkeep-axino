export default class ControllerWithRows {
  model
  rowModel
  dto
  dtos = []

  constructor (model, rowModel, dto) {
    this.model = model;
    this.rowModel = rowModel;
    this.dto = dto;
  }

  /**
   * Get all items
   */
  async index() {
    const models = await this.model.findAll();
    for (let model of models) {
      const dto = Object.assign(Object.create(Object.getPrototypeOf(this.dto)), this.dto)
      dto.setData(model);
      dto.setRows(await this.#findRows(model.id));
      this.dtos.push(dto);
    }

    return this.dtos;
  }

  /**
   * Create item
   */
  async create(data) {
    const model = await this.model.create(data);
    const rows = this.#createRows(data);

    this.dto.setData(model);
    this.dto.setRows(rows);

    return this.dto;
  }

  /**
   * Get item by ID
   */
  async show(id) {
    const model = await this.model.showOrFail(id);
    const rows = await this.#findRows(id);

    this.dto.setData(model);
    this.dto.setRows(rows);

    return this.dto;
  }

  /**
   * Update item by ID
   */
  async update(id, data) {
    await this.model.updateOrFail(id, data);
    const model = await this.model.findByPk(id);

    await this.#deleteRows(id);

    const rows = this.#createRows(data);

    this.dto.setData(model);
    this.dto.setRows(rows);

    return this.dto;
  }

  /**
   * Delete item
   */
  async destroy(id) {
    await this.model.destroyOrFail(id);
    await this.#deleteRows(id);
  }

  async #findRows(id) {
    return await this.rowModel.findAll({
      where: {
        [this.rowModel.parentKey]: id,
      },
    });
  }

  async #createRows(data) {
    const rows = [];
    for (let row of data.rows) {
      row[this.rowModel.parentKey] = id;
      rows.push(await this.rowModel.create(row))
    }

    return rows;
  }

  async #deleteRows(id) {
    await this.rowModel.delete({
      where: {
        [this.rowModel.parentKey]: id,
      },
    });
  }
}
