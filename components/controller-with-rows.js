export default class ControllerWithRows {
  model;
  rowModel;
  dto;

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
    const DTOs = [];
    for (let model of models) {
      const rows = await this.#findRows(model.id);

      DTOs.push(
        (new this.dto)
          .setData(model)
          .setRows(rows)
      );
    }

    return DTOs;
  }

  /**
   * Get item by ID
   */
  async show(id) {
    const model = await this.model.findOrFail(id);
    const rows = await this.#findRows(id);

    return (new this.dto)
      .setData(model)
      .setRows(rows);
  }

  /**
   * Create item
   */
  async create(data) {
    const model = await this.model.create(data);
    const rows = await this.#createRows(data);

    return (new this.dto)
      .setData(model)
      .setRows(rows);
  }

  /**
   * Update item by ID
   */
  async update(id, data) {
    await this.model.updateOrFail(id, data);
    const model = await this.model.findByPk(id);

    await this.#deleteRows(id);

    const rows = await this.#createRows(data);

    return (new this.dto)
      .setData(model)
      .setRows(rows);
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
        [(new this.rowModel).parentKey]: id,
    });
  }

  async #createRows(data) {
    const rows = [];
    for (let row of data.rows) {
      row[(new this.rowModel).parentKey] = id;
      rows.push(await this.rowModel.create(row))
    }

    return rows;
  }

  async #deleteRows(id) {
    await this.rowModel.delete({
      where: {
        [(new this.rowModel).parentKey]: id,
      },
    });
  }
}
