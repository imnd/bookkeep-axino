import { Sequelize, DataTypes } from "@imndzy/axino/core/sequelize.js";

let Model = Sequelize.define(
  'clients',
  {
    region_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fax: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact_fio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact_post: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    account: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bank: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    INN: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    BIK: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    KPP: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    next_call_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    sort: {
      type: DataTypes.SMALLINT,
      allowNull: true,
    },
    active: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
  }, {
    timestamps: false
  }
);

import mix from "@imndzy/axino/components/model-mixin.js";
mix(Model);

export default Model;
