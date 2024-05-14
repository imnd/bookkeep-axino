import { Sequelize, DataTypes } from "@imndzy/axino/core/sequelize.js";

let Model = Sequelize.define(
  'contracts_rows',
  {
    contract_id: {
      type: DataTypes.MEDIUMINT,
      allowNull: false,
    },
    article_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  }, {
    timestamps: false
  }
);

Model.parentKey = 'contract_id';

import mix from "@imndzy/axino/components/model-mixin.js";
mix(Model);

export default Model;
