import { Sequelize, DataTypes } from "@imndzy/axino/core/sequelize.js";

let Model = Sequelize.define(
  'articles',
  {
    subcat_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    active: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    unit: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ["кг", "шт"],
    },
  }, {
    timestamps: false
  }
);

import mix from "@imndzy/axino/components/model-mixin.js";
mix(Model);

export default Model;
