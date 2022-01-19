const express = require("express");
const router = express.Router();
const { controllerGetAll, controllerGetId } = require("./detail_transaksi.controller");
const authorize = require("../auth/role");
const { IsAdminKasir, IsAdmin, IsOwner } = require("../auth/role");

//router
// router.get('/', authorize, IsAdmin, controllerGetAll);
// router.get(':/id_detail_transaksi', authorize, IsAdmin, controllerGetId);
