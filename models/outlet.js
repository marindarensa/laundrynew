'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class outlet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.transaksi, {
        foreignKey: "id_transaksi",
        as: "transaksi"
      })
    }
  };
  outlet.init({
    id_outlet: {
      type: DataTypes.INTEGER,
      image:DataTypes.STRING,
      primaryKey: true,
      autoIncrement: true
    },
    tempat: DataTypes.STRING
  }, {
      sequelize,
      modelName: 'outlet',
      tableName: 'outlet'
    });
};