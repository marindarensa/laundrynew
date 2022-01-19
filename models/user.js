'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //menghubungkan user -> transaksi
      this.hasMany(models.transaksi, {
        foreignKey: "id_transaksi",
        as: "transaksi"
      })

    }
  };
  user.init({
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nama: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.ENUM('admin','kasir','owner'),
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
    tableName: 'user'
  });
  return user;
};