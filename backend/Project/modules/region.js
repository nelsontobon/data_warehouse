/**
 * creacion de los endpoint para la entidad user
 */
const express = require('express');
const router = express.Router();

const {getRegions} = require('../controllers/region/getRegions')
const {createNewRegion} = require('../controllers/region/createRegion')
const {createNewCountry} = require('../controllers/region/createCountry')
const {createNewCity} = require('../controllers/region/createCity')
const {delRegion} = require('../controllers/region/deleteRegion')
const {delCountry} = require('../controllers/region/deleteCountry')
const {delCity} = require('../controllers/region/deleteCity')



router.get("/getRegions", getRegions)
router.post("/Region", createNewRegion)
router.post("/Country", createNewCountry)
router.post("/City", createNewCity)
router.delete("/Region", delRegion)
router.delete("/Country", delCountry)
router.delete("/City", delCity)



module.exports = router