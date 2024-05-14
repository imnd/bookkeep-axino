import { Sequelize, DataTypes } from "@imndzy/axino/core/sequelize.js";

const Model = Sequelize.define(
  'article_subcats',
  {
    cat_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    name: {
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
