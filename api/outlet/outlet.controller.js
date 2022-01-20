const models = require("../../models/index");
const outlet = models.outlet;
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
        outlet.findAll()
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
        const param = { id_outlet: req.params.id_outlet }
        outlet.findOne({ where: param })
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
        upload.single('image')(req, res, () => {
            const data = {
                tempat: req.body.tempat,
                image: req.file.image
            }
            outlet.create(data)
                .then(result => {
                    res.json({
                        message: "Data berhasil ditambahkan",
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
    // controller EDIT
    controllerEdit: (req, res) => {
        upload.single('image')(req, res, () => {
            const param = { id_outlet: req.body.id_outlet }
            const data = {
                tempat: req.body.tempat,
                image: req.file.image
            }
            outlet.update(data, { where: param })
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
        const param = { id_outlet: req.body.id_outlet }
        outlet.destroy({ where: param })
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

