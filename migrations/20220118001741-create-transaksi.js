'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('transaksi', {
      id_transaksi: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_member: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "member",
          key: "id_member"
        }
      },
      id_paket: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "paket",
          key: "id_paket"
        }
      },
      tgl: {
        type: Sequelize.DATE
      },
      batas_waktu: {
        type: Sequelize.DATE
      },
      tgl_bayar: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.ENUM("baru", "proses", "selesai", "diambil")
      },
      dibayar: {
        type: Sequelize.ENUM("dibayar", "belum_dibayar")
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "user",
          key: "id_user"
        }
      },
      id_outlet: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "outlet",
          key: "id_outlet"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('transaksi');
  }
};