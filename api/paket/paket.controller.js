const models = require("../../models/index");
const paket = models.paket;
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const config = require('../auth/secret.json');

const multer = require("multer")//multer digunakan untuk membaca data request dari form-data
const path = require("path")//path untuk menage alamat direktori file
const fs = require("fs")// fs atau fole stream digunakan untuk manage file

//---------------------------------------------------------------------------------------------
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./image")
    },
    filename: (req, file, cb) => {
        cb(null, "image-" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

module.exports = {
    // controller GET All
    controllerGetAll: (req, res) => {
        paket.findAll()
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
    // controller GET by ID
    controllerGetId: (req, res) => {
        const param = { id_paket: req.params.id_paket }
        paket.findOne({ where: param })
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
    // controller ADD
    controllerAdd: (req, res) => {
        upload.single('img')(req, res, () => {
            const data = {
                jenis: req.body.jenis,
                harga: req.body.harga,
                image: req.file.image
            }
            paket.create(data)
                .then(result => {
                    res.json({
                        message: "Data berhasil ditambahkan",
                        success: 1,
                        data: result, data
                    })
                })
        })
    },
    // controller EDIT
    controllerEdit: (req, res) => {
        upload.single('img')(req, res, () => {
            const param = { id_paket: req.body.id_paket }
            const data = {
                id: req.body.id,
                jenis: req.body.jenis,
                harga: req.body.harga,
                image: req.file.image
            }
            paket.update(data, { where: param })
                .then(result => {
                    res.json({
                        success: 1,
                        data: result, data
                    })
                })
                .catch(error => {
                    res.json({
                        message: error.message
                    })
                })
        })
    },
    // controller DELETE
    controllerDelete: (req, res) => {
        const param = { id_paket: req.body.id_paket }
        paket.destroy({ where: param })
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
}

