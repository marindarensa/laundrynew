'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //menghubungkan transaksi -> outlet
      this.belongsTo(models.outlet, {
        foreignKey: "id_outlet",
        as: "outlet"
      })
      //menghubungkan transaksi -> user
      this.belongsTo(models.user, {
        foreignKey: "id_user",
        as: "user"
      })
      //menghubungkan transaksi -> member
      this.belongsTo(models.member, {
        foreignKey: "id_member",
        as: "member"
      })
      //menghubungkan transaksi -> paket
      this.belongsTo(models.paket, {
        foreignKey: "id_paket",
        as: "paket"
      })
      //menghubungkan transaksi -> detail_transaksi
      this.hasMany(models.detail_transaksi, {
        foreignKey: "id_detail_transaksi",
        as: "detail_transaksi"
      })
    }
  };
  transaksi.init({
    id_transaksi: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_paket: DataTypes.INTEGER,
    id_member: DataTypes.INTEGER,
    tgl: DataTypes.DATE,
    batas_waktu: DataTypes.DATE,
    tgl_bayar: DataTypes.DATE,
    status: DataTypes.ENUM('baru', 'proses', 'selesai', 'diambil'),
    dibayar: DataTypes.ENUM('dibayar', 'belum_dibayar'),
    id_user: DataTypes.INTEGER,
    id_outlet: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'transaksi',
    tableName: 'transaksi'
  });
  return transaksi;
};