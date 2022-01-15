/**
 * creacion de los endpoint para la entidad user
 */
const express = require('express');
const router = express.Router();

const {createNewCompany} = require('../controllers/company/createCompany')
const {getCompanies} = require('../controllers/company/getCompanies')
const {delCompany} = require('../controllers/company/deleteCompany')
const {putCompany} = require('../controllers/company/updateCompany')



router.get("/getcompany", getCompanies)
router.post("/company", createNewCompany)
router.delete("/company", delCompany)
router.put("/company", putCompany)




module.exports = router