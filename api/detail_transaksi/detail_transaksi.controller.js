const models = require("../../models/index");
const detail_transaksi = models.detail_transaksi;
const { request, response } = require("express");

module.exports = {
    //controller GET All
    controllerGetAll: async (req, res) => {
        detail_transaksi.findAll({
            include: [{ all: true, nested: true }],
        })
            .then(result => {
                res.json({
                    success: 1,
                    data: result
                })
            })
            .catch(error => {
                res.json({
                    message: error.message
                })
            })
    },
    //controller Get by ID
    controllerGetId: (req, res) => {
        const param = { id_detail_transaksi: req.params.id_detail_transaksi }
        detail_transaksi.findOne({ where: param, include: [{ all: true, nested: true }] })
            .then(result => {
                res.json({
                    success: 1,
                    data: result
                })
            })
            .catch(error => {
                res.json({
                    message: error.message
                })
            })
    }
}