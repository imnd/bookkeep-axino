import { Sequelize, DataTypes } from "@imndzy/axino/core/sequelize.js";

let RowModel = Sequelize.define(
  'invoices_rows',
  {
    invoice_id: {
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

import mix from "@imndzy/axino/components/model-mixin.js";
mix(RowModel);

export default RowModel;
