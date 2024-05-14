import { Sequelize, DataTypes } from "@imndzy/axino/core/sequelize.js";

let Model = Sequelize.define(
  'bills',
  {
    client_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    contract_num: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sum: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    remainder: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    contents: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false
  }
);

import mix from "@imndzy/axino/components/model-mixin.js";
mix(Model);

export default Model;
