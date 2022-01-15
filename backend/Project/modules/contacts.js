const express = require('express');
const router = express.Router();

const {createNewContact} = require('../controllers/contacts/createContact')
const {searchContacts} = require('../controllers/contacts/searchContact')
const {getContacts} = require('../controllers/contacts/getContact')
const {getContactById} = require('../controllers/contacts/getContactById')
const {delContact} = require('../controllers/contacts/deleteContact')
const {putContact} = require('../controllers/contacts/updateContact')


router.get("/", getContacts)
router.get("/contactid", getContactById)
router.delete("/deleteid", delContact)
router.put("/updateid", putContact)
router.get("/search", searchContacts)
router.post("/contact", createNewContact)


module.exports = router