const express = require('express');
const router = express.Router();
const {
    controllerGetAll,
    controllerGetId,
    controllerAdd,
    controllerEdit,
    controllerDelete
} = require('./member.controller');
const authorize = require('../auth/authorize');
const {IsAdminKasir, IsAdmin, IsOwner} = require('../auth/role');

//router
router.get('/', authorize, IsAdmin, controllerGetAll); // admin only
router.get('/:id_member', authorize, IsAdmin, controllerGetId); // admin only
router.post('/', authorize, IsAdminKasir, controllerAdd); // kasir only
router.put('/', authorize, IsAdminKasir, controllerEdit); // admin and kasir only
router.delete('/', authorize, IsAdmin, controllerDelete); // admin only

//export module
module.exports = router;
