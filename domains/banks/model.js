import { Sequelize, DataTypes } from "@imndzy/axino/core/sequelize.js";

let Bank = Sequelize.define(
  'banks',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false
  }
);

import mix from "@imndzy/axino/components/model-mixin.js";
mix(Bank);

export default Bank;
