import { Sequelize, DataTypes } from "@imndzy/axino/core/sequelize.js";

let Model = Sequelize.define(
  'purchases',
  {
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sum: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    timestamps: false
  }
);

import mix from "@imndzy/axino/components/model-mixin.js";
mix(Model);

export default Model;
